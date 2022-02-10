import { useState, useEffect } from 'react';

// globalStore
import { useGlobalStore } from '../../store/useGlobalStore';

// router
import { useRouter } from 'next/router';

// Layout
import Layout from '../../components/Layout'





// init ReportDetail component
const ReportDetail = () => {

    // init router
    const router = useRouter()

    // init globalStore
    const globalStore = useGlobalStore()

    // get countryName
    const countryName = router.query.country


    // init useEffect
    useEffect(() => {

        // get reportDetail
        const reportDetail = JSON.parse(globalStore.get().report)

        // update reports state
        setReports(reportDetail.reports)

        console.log(reportDetail)

    }, [])


    // init reports state
    const [reports, setReports] = useState([])

    return (
        <>
            <Layout>
                <main>
                    <section className="section section-header text-dark pb-md-5 pt-5">
                        <div className="container pt-4 pb-5">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-10 text-center ">
                                    <h1 className="display-5 font-weight-bolder mb-4">
                                        Reports from {countryName}
                                    </h1>
                                </div>
                            </div>
                        </div>


                        {/* Report List */}
                        <div className="container pt-4 pb-5">
                            <div className="row justify-content-center">
                                {reports.length > 0 && reports.map((report, index) => {
                                    return <div key={index} className="col-12 col-md-10 mt-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{report.title}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{report.fullName}</h6>
                                                <p className="card-text">{report.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                })}

                            </div>
                        </div>
                    </section>
                </main>

            </Layout>


        </>
    )
};




// export ReportDetail component
export default ReportDetail;
