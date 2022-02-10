import style from "../styles/Digitalmedia.module.css"
import Layout from "../components/Layout";

function Dao(){
    return(
        <div>
            <Layout>
                <div className={style.wrap}>
                    <h1 className="display-3 font-weight-bolder mb-4">DAOs</h1>


                    <div className={style.parag}>
                        <p className="lead">
                            We are one of the earliest online publications in the blockchain and crypto space in Africa.
                             As our audience and engagement grew over time, it became apparent that Africa is excited
                             about decentralized technology and the potential that it promises for the continent.
                            We seek to report on the state of Blockchain in Kenya and Africa, the Blockchain startup scene on
                            the continent, events in the space, interviews with founders, and industry news that will transform
                            the African economy via the Blockchain. We do this in the following ways: </p>
                        <div>
                            <ul className="lead pb-6 pb-md-6 list-group list-group-flush">
                                <li className="lead list-group-item"><h4>AscendantDAO</h4> a growing community of African-based traders conducting community-sourced crypto market intelligence for timely execution.  </li>
                                <li className="lead list-group-item"><h4> African Blockchain Developers DAO </h4> an initiative to consolidate and synthesize capacity building on blockchain amongst African developers.  </li>
                            </ul>
                        </div>

                         <h1 className="display-3 font-weight-bolder mb-4">Community</h1>
                         <h4>We offer Cryptocurrency Education</h4>
                         <p className="lead">For many people in this landscape, their first interaction with blockchain/cryptocurrency begins with BitKE and its community. We offer regular free trainings on relevant topics.
                             Audiences have free access to our past and future webinars and online events. </p>
                            <div>
                                <ul className="list-group list-group-flush">
                                    <li className="lead list-group-item">Starting out? We know that it is often very difficult to navigate and start your own investments effectively. Following many requests, we have highlighted  for you where to begin</li>
                                    <li className="lead list-group-item">What is a cryptocurrency? </li>
                                    <li className="lead list-group-item">Join the community for further interaction with other crypto enthusiasts    </li>
                                </ul>
                            </div>

        </div>
        </div>
        </Layout>
        </div>
    )
}

export default Dao;