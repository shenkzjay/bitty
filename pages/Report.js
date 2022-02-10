import { useState, useEffect } from 'react';

// axios
import axios from 'axios'

// Navbar 
import Navbar from '../components/Navbar'

// countryFinder
import countryFinder from 'country-finder'

// react hot toast
import { Toaster, toast } from 'react-hot-toast'

// Router
import {useRouter} from 'next/router';




// init Report component
const Report = () => {

    // init router
    const router = useRouter()

    // init btnLoading
    const [btnLoading, setBtnLoading] = useState(false)

    // init countryList
    const [countryList, setCountryList] = useState([])

    // init title
    const [title, setTitle] = useState("")

    // init description
    const [description, setDescription] = useState("")

    // init countryName
    const [country, setCountry] = useState("")

    // init latitude
    const [latitude, setLatitude] = useState("")

    // init longitude
    const [longitude, setLongitude] = useState("")

    // init fullName
    const [fullName, setFullName] = useState("")



    // init useEffect
    useEffect(() => {

        // get country by continent
        const _countryList = countryFinder.byContinent("Africa");

        // update countryList
        setCountryList(_countryList)

    }, [])



    // init handleSetCountry
    const handleSetCountry = (countryData) => {
        console.log(countryData)

        // update countryName
        setCountry(JSON.parse(countryData).name)

        // update latitude
        setLatitude(JSON.parse(countryData).lat)

        // update longitude
        setLongitude(JSON.parse(countryData).long)
    }




    // init handleSubmit 
    const handleSubmit = async () => {
        try {

            // update btnLoading
            setBtnLoading(true)

            // get reportData
            const reportData = {
                fullName: fullName,
                title: title,
                description: description,
                country: country,
                longitude: Number(longitude),
                latitude: Number(latitude)
            }


            // validate
            if (!reportData.title) {
                // update btnLoading
                setBtnLoading(false)
                return toast.error("Please enter a title")
            }

            if (!reportData.description) {
                // update btnLoading
                setBtnLoading(false)
                return toast.error("Please enter a description")
            }

            if (!reportData.country) {
                // update btnLoading
                setBtnLoading(false)
                return toast.error("Please select a country")
            }

            if (!reportData.fullName) {
                // update btnLoading
                setBtnLoading(false)
                return toast.error("Please enter your full name")
            }


            // make axios request to create reporting
            const response = await axios.post(`${process.env.API_ROOT}/create/reporting`, reportData)


            // check if not success
            if (!response.data.success) {
                return toast.error("Failed to process report")
            }

            // show success
            toast.success("Report created successfully")

            // reload 
            return router.reload()

        } catch (error) {
            // update btnLoading
            setBtnLoading(false)
            console.log(error)
            return toast.error("Failed to process report")

        }
    }


    return (
        <>

            <Navbar />
            <Toaster />
            <main>
                <section className="min-vh-100 d-flex align-items-center bg-soft">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-8">
                                <div className="signin-inner mt-3 mt-lg-0 bg-white shadow border rounded border-light w-100">
                                    <div className="row gx-0 align-items-center justify-content-between">

                                        <div className="col-12 col-lg-12 px-3 py-5 px-sm-5 px-md-6">
                                            <div className="text-center text-md-center mb-4 mt-md-0">
                                                <h1 className="mb-0 h3">Report Event</h1>
                                            </div>
                                            <form className="mt-4">

                                                {/* Title */}
                                                <div className="form-group mb-4">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" onChange={(event) => setTitle(event.target.value)} value={title} placeholder="Title" />
                                                    </div>
                                                </div>



                                                {/* Description */}
                                                <div className="form-group mb-4">
                                                    <div className="input-group">

                                                        <textarea type="text" className="form-control" onChange={(event) => setDescription(event.target.value)} value={description} placeholder="Description" />
                                                    </div>
                                                </div>


                                                <div className="form-group mb-4">
                                                    <div className="input-group">
                                                        <select className="form-select" onChange={(event) => handleSetCountry(event.target.value)} aria-label="Default select example">
                                                            <option value="">Select Country</option>
                                                            {countryList.length > 0 && countryList.map((country, index) => {
                                                                return <option key={index} value={`${JSON.stringify(country)}`}>{country.name}</option>
                                                            })}

                                                        </select>
                                                    </div>
                                                </div>


                                                {/* Author */}
                                                <div className="form-group mb-4">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" onChange={(event) => setFullName(event.target.value)} placeholder="Your full name" />
                                                    </div>
                                                </div>

                                                {btnLoading ?   <button type="button" style={{ backgroundColor: '#f39637', borderColor: "#f39637" }} className="btn btn-block btn-primary" disabled>Submitting...</button> : 
                                                  <button type="button" style={{ backgroundColor: '#f39637', borderColor: "#f39637" }} className="btn btn-block btn-primary" onClick={() => handleSubmit()}>Submit</button>
                                                }
                                              
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
};




// export Report component
export default Report;
