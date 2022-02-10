//react
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


//Home function
function Home() {

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



    return (
        <div>

            <Layout>
                {/* overall wrapper */}
                <main>
                    <section className="section section-header text-dark pb-md-5 pt-5">
                        <div className="container pt-4 pb-5">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-10 text-center ">
                                    <h1 className="display-3 font-weight-bolder mb-4">
                                    “Africa is the Final Frontier” Blockchain in Africa 
                                    </h1>
                                    <p className="lead mb-4 mb-lg-5 lh-3">The blockchain wave is sweeping across the world and Africa is riding it. The future looks bright and brightest on the mother continent. Blockchain technology presents us all with massive opportunities across all areas of life. The world’s economic and tech giants have acknowledged that Africa is the final frontier. Coupled with a growing mobile money adoption, and a growing smartphone and internet penetration across the board, we are ready to seize the benefits of blockchain technology.</p>

                                </div>
                            </div>
                            {isLoading ? <>
                                <div className="container py-5">
                                    <div className="d-flex justify-content-center">
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>

                                    </div>
                                    <p className="text-center mt-3">Loading...</p>
                                </div>
                            </> : <>
                                <div className="row mt-4">
                                    <div className="col-12 col-md-5 justify-content-md-center pe-1 ps-1 ps-md-1">
                                        <div>

                                            <div className={style.leftcard_bottom} style={{ paddingTop: 10 }}>
                                                <label className="text-dark">Crypto Stats</label>
                                                <br />
                                                {categories && categories.data && [...categories.data].map((category, index) => {
                                                    return <div key={index} className={style.leftcard_cards} style={{ cursor: "pointer" }} onClick={() => sortMetaData(category._id)}>
                                                        <div >{category.title}</div>
                                                        <div className={style.spotter}>

                                                            <div><img src="/arrow.svg" alt="decking"></img></div>
                                                        </div>
                                                    </div>
                                                })}

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-7 ps-1 ps-md-0 pe-1 mt-3 mt-md-0">

                                        <MapDisplay metaDataList={filteredMetaData} />

                                    </div>
                                </div>
                            </>
                            }
                        </div>
                    </section>

                   




                    {/* Reporting section */}
                    <section className="section section-header pb-md-4 pt-6">
                        <div className="container pt-2 pb-4">
                            <div className="row justify-content-center">
                                {/* <div className="col-12 col-md-12 text-center ">
                                    <h1 className="display-6 font-weight-bolder mb-2">
                                        Real-time event reporting
                                    </h1>
                                    <p className="lead mb-2 mb-lg-2 lh-3">
                                        Report events in real time
                                    </p>

                                </div> */}

                                {/* <div className="row-4">
                                <div className="col-12 col-md-5 justify-content-md-center pe-1 ps-1 ps-md-1">
                                
                                <div  className={style.leftcard_bottom} style={{ paddingTop: 10 }}>
                                
                                </div>
                                </div>
                                <div className="col-12 col-md-7 ps-1 ps-md-0 pe-1 mt-3 mt-md-0">

                                    <ReportingMapDisplay metaDataList={filteredMetaData} />

                                </div>

                            </div> */}


                             {/* <div className="row mt-4">
                                    <div className="col-12 col-md-5 justify-content-md-center pe-1 ps-1 ps-md-1">
                                        <div>

                                            <div className={style.leftcard_bottom} style={{ paddingTop: 50 }}>
                                                <label className="text-dark display-6 mb-2">Report Events</label>
                                                <br />
                                                {/* {categories && categories.data && [...categories.data].map((category, index) => {
                                                    return <div key={index} className={style.leftcard_cards} style={{ cursor: "pointer" }} onClick={() => sortMetaData(category._id)}>
                                                        <div >{category.title}</div>
                                                        <div className={style.spotter}>

                                                            <div><img src="/arrow.svg" alt="decking"></img></div>
                                                        </div>
                                                    </div>
                                                })} 
                                                <div className="container">
                                                <p className="lead">
                                                    Report crypto events and happpening around Africa in real time.
                                                </p>
                                                <a href="/Report"><button type="button" className="btn btn-lg btn-warning">Report Events</button></a>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-7 ps-1 ps-md-0 pe-1 mt-3 mt-md-0">

                                        <ReportingMapDisplay metaDataList={filteredMetaData} />

                                    </div>
                                </div> */}





                                {/* What we can do for you */}

                                <section className="section section-header pb-md-0 pt-2">
                                <div className="container pt-2 pb-5">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-12 text-center ">
                                    <h1 className="display-6 font-weight-bolder mb-2 text-center">What we can do for you</h1>
                                    <p className="lead">We have a wide array of services to offer both our audiences and clients.
                                    </p>
                                    <br />

                                    <div className={style.media}>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">For Clients</h5>

                                                <p className="card-subtitle mb-2 text-muted lead">We pride ourselves in our flexibility and can certainly
                                                tailor a package specific to your needs. <a href="/Mktassess/#clients" className="link-warning">Read more….</a></p>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">For Audiences</h5>
                                                <p className="card-subtitle mb-2 text-muted lead">We offer Cryptocurrency Education. <br /> <a href="/Mktassess/#audience" className="link-warning">Read more…</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    
                                </section>



                             {/* our team*/}
                    <section className="section section-header text-dark pb-md-4 pt-5">
                    <div className="container pb-4 pb-5">
                    <div className="row justify-content-center">
                                <div className="col-12 col-md-10 text-center ">
                                    <h1 className="display-6 font-weight-bolder mb-2">
                                    Our team
                                    </h1>
                                    <p className="lead mb-2 mb-lg-2 lh-2">The BitKE team comprises versatile individuals from several fields and experiences. We have a solid technical foundation of blockchain fundamentals, blockchain development, and crypto trading. Our team also comprises videographer, writers, business development and marketing skillsets.</p>

                                </div>
                                </div>
                                </div>
                    </section>


                

                    <section className="section section-header pb-md-4 pt-5">
                    <div className="container pb-4 pb-5">
                    <div className="row justify-content-center">
                                <div className="col-12 col-md-10 text-center ">
                                    <h1 className="display-6 font-weight-bolder mb-2">
                                    Who We Work With
                                    </h1>
                                    <p className="lead mb-2 mb-lg-2 lh-3">
                                    We work with a span of organizations and individuals to deliver value including, but not limited, to:</p>
                                    <ul className="list-group-flush text-start lead">
                                    <li className="list-group-item lead">Crypto exchanges and platforms </li>
                                    <li className="list-group-item lead">Media organizations </li>
                                    <li className="list-group-item lead">Blockchain startups </li>
                                    <li className="list-group-item lead">Private institutions  </li>
                                    <li className="list-group-item lead">Blockchain &amp; crypto influencers  </li>
                                    <li className="list-group-item lead">Blockchain &amp; crypto stakeholders  </li>
                                    <li className="list-group-item lead">Fintechs </li>
                                    <li className="list-group-item lead">Crypto enthusiasts and newbies  </li>
                                    </ul>

                                </div>
                                </div>
                                </div>
                    </section>

                            </div>
                            
                        </div>
                    </section>
                </main>
            </Layout>
        </div>
    )

}

export default Home;