import { useEffect, useState, } from "react"

// Leaflet
import { MapContainer, TileLayer, Marker, Tooltip, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css';

// useReporting
import useReporting from "../hook/useReporting";

// // commaNumber
import commaNumber from 'comma-number'

// router
import { useRouter } from "next/router";

// globalStore
import { useGlobalStore } from "../store/useGlobalStore";

// div icon 
import L from 'leaflet'


// init ReportMapDisplay
function ReportMapDisplay() {

    // init router
    const router = useRouter()

    // init globalStore
    const globalStore = useGlobalStore()

    // invoke useReporting
    const { reporting, isLoading, isError } = useReporting()

    // init reportingList state 
    const [reportingList, setReportingList] = useState([])


    // init useEffect 
    useEffect(() => {

        // check if isError
        if (isError) {
            console.log("Oops! an error has occurred")
        }

        // get reportingData
        const _reportingDataList = reporting && reporting.data ? [...reporting.data] : []


        // init filteredReportingList
        const filteredReportingList = Object.values(_reportingDataList.reduce((prev, { country, latitude, longitude, ...props }) => {

            // check if country is not in object
            if (!prev[country]) {

                // create new object
                const newObject = { country, latitude, longitude, reports: [props], reportTotal: [props].length }

                // use country as key in previous object and pass in newObject
                prev[country] = newObject
            } else {

                // push props to reports
                prev[country].reports.push(props)

                // increment total
                prev[country].reportTotal = prev[country].reports.length

            }

            // return prev object, to iterate again
            return prev
        }, {}))

        console.log(filteredReportingList)

        // upate reportingList
        setReportingList(filteredReportingList)


    }, [reporting])





    //init markerIcon
    const markerIcon = new L.divIcon({
        className: "title-text",
        iconAnchor: [12, 25],
        labelAnchor: [-6, 0],
        popupAnchor: [0, -10],
        iconSize: [25, 41],
        html: `<div><img src="https://img.icons8.com/fluency/48/000000/place-marker.png"/></div>`
    });



    // init viewPort state
    const [viewport, setViewport] = useState({
        latitude: 7.1881,
        longitude: 21.0936,
        zoom: 2.6,
        width: '100vw',
        height: '100vh',
        scrollWheelZoom: false
    })



    // init handleNext
    const handleNext = (selectedReportData) => {

        // get country
        const _country = selectedReportData.country

        // push to globalStore
        globalStore.set({ report: JSON.stringify(selectedReportData) })

        // push to report details page 
        router.push({pathname: `/reports/${_country}`})

    }



    return (
        <div>
            {isLoading ? <>
                <div className="container py-5">
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>

                    </div>
                    <p className="text-center mt-3">Loading...</p>
                </div>
            </>
                : <>
                    <MapContainer
                        center={[viewport.latitude, viewport.longitude]}
                        zoom={viewport.zoom}
                        scrollWheelZoom={viewport.scrollWheelZoom}

                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {[...reportingList].length > 0 && [...reportingList].map((data, index) => {
                            return <Marker key={index} position={[data.latitude, data.longitude]} icon={markerIcon}>
                                <Tooltip interactive={true} direction="top" offset={[10, -10]} opacity={1} permanent className="px-2">
                                    <h5 className="text-center fw-bold tooltip-text">{data.country}</h5>
                                    <h6 className="text-center fw-bold tooltip-text">{data.reportTotal && commaNumber(data.reportTotal)}</h6>
                                    <div className="text-center">
                                        <a className="text-center fw-bold tooltip-text" style={{ cursor: "pointer" }} onClick={() => handleNext(data)}>View</a>
                                    </div>
                                </Tooltip>
                            </Marker>
                        })}

                    </MapContainer>

                </>
            }

        </div>
    )
}




// export
export default ReportMapDisplay