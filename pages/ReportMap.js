
import { useState, useMemo, useEffect } from 'react'
// style
import style from "../styles/Home.module.css"
// layout
import Layout from "../components/Layout"

// dynamic
import dynamic from "next/dynamic"

// useCategories
import useCategories from '../hook/useCategory';

// useMetaData
import useMetaData from '../hook/useMetaData';


//ReportMap function
function ReportMap() {

    // invoke useCategories
    const { categories, isLoading, isError } = useCategories()

    // invoke useMetaData
    const { metaDatas, isMetaLoading, isMetaError } = useMetaData()

    console.log("Categories", categories)
    console.log("Metadata", metaDatas)


    // dynamically load map component
    const MapDisplay = useMemo(() => dynamic(() => import("../components/MapDisplay"), {
        loading: () => <p>Loading...</p>,
        ssr: false,
    }), []);


    // dynamically reportMapDisplay
    const ReportingMapDisplay = useMemo(() => dynamic(() => import("../components/ReportingMapDisplay"), {
        loading: () => <p>Loading...</p>,
        ssr: false
    }), [])



    // init useEffect
    useEffect(() => {
        // check if error
        if (isError) {
            console.log("An error has occurred")
        }
    }, [])



    // init filteredMetaData state
    const [filteredMetaData, setFilteredMetaData] = useState([])


    // init sortMetaData
    const sortMetaData = (categoryId) => {

        // check if metaDatas
        if (metaDatas && metaDatas.data) {

            // copy metaDatas
            const _metaDatas = [...metaDatas.data]


            // filter metadata by categoryId
            const categoryMetaData = _metaDatas.filter((data) => data.categoryId === categoryId)


            // reduce categoryMetada into groups 
            const _filteredMetaData = Object.values(categoryMetaData.reduce((prev, { country, latitude, longitude, categoryName, ...props }) => {

                // check if country is not a key in previous object
                if (!prev[country]) {

                    // init newObject
                    const newObject = { country, latitude, longitude, categoryName, _meta: [props], _metaTotal: [props].length }

                    // use country as key in previous object and pass in newObject
                    prev[country] = newObject

                } else {

                    // if country is a key in previous object, if yes, then push all data (props) into _meta array
                    prev[country]._meta.push(props)

                    // then update _metaTotal by getting the length of previous _meta
                    prev[country]._metaTotal = prev[country]._meta.length

                }

                // return prev object, to iterate again
                return prev
            }, {}))

            console.log(_filteredMetaData)

            // update filteredMeta state
            setFilteredMetaData(_filteredMetaData)

        }

    }


    return(
        <Layout>
<section className="section section-header pb-md-4 pt-6">
  <div className="container pt-2 pb-4">
      <div className="row justify-content-center">
           <div className="col-12 col-md-12 text-center ">
              <h1 className="display-6 font-weight-bolder mb-2">
                  Real-time event reporting
              </h1>
              <p className="lead mb-2 mb-lg-2 lh-3">
                  Report events in real time
              </p>

          </div>

           {/* <div className="row-4">
          <div className="col-12 col-md-5 justify-content-md-center pe-1 ps-1 ps-md-1">
          
          <div  className={style.leftcard_bottom} style={{ paddingTop: 10 }}>
          
          </div>
          </div>
          <div className="col-12 col-md-7 ps-1 ps-md-0 pe-1 mt-3 mt-md-0">

               <ReportingMapDisplay metaDataList={filteredMetaData} /> 

          </div>

      </div> */}


     <div className="row mt-4">
              <div className="col-12 col-md-5 justify-content-md-center pe-1 ps-1 ps-md-1">
                  <div>

                      <div className={style.leftcard_bottom} style={{ paddingTop: 50 }}>
                          <label className="text-dark display-6 mb-2">Submit Company</label>
                          <br />
                          {/* {categories && categories.data && [...categories.data].map((category, index) => {
                              return <div key={index} className={style.leftcard_cards} style={{ cursor: "pointer" }} onClick={() => sortMetaData(category._id)}>
                                  <div >{category.title}</div>
                                  <div className={style.spotter}>

                                      <div><img src="/arrow.svg" alt="decking"></img></div>
                                  </div>
                              </div>
                          })}  */}
                          <div className="container">
                          <p className="lead">
                              Submit your crypto startups to be listed on our site directory.
                          </p>
                          <a href="/Report"><button type="button" className="btn btn-lg btn-warning">Submit Company</button></a>

                          </div>

                      </div>
                  </div>
              </div>

              <div className="col-12 col-md-7 ps-1 ps-md-0 pe-1 mt-3 mt-md-0">

                  <ReportingMapDisplay metaDataList={filteredMetaData} />

              </div>
          </div> 
          </div> 
          </div> 
          </section>
          </Layout>
    )

}

export default ReportMap;


  