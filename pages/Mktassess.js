import style from "../styles/mktassess.module.css"
import Layout from "../components/Layout";



function Mktassess() {
    return (
        <div>
            <Layout>
                <div className={style.wrap}>
                    <h1 className="display-6 font-weight-bolder mb-4">PR and Marketing</h1>
                   <div className={style.subtext} id="clients"> <h1 className="text-start"> Clients </h1></div>
                    <p className="lead">
                   
                    We pride ourselves in our flexibility and can certainly tailor a package specific to your needs.Services offered to our clients boil down into one of these 3 general categories

                      </p>
                    <div className={style.eduContent}>
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Market Entry/Assessments </h5>

                                <p className="card-subtitle mb-2 text-muted">We provide our clients with top-notch insights into the market intelligence
                                 and relevant use cases across the ecosystem. We have been part of enabling market entry to some
                                 of the top tier clients in the industry.</p>

                            </div>
                        </div>



                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Brand Positioning </h5>
                                <p className="card-subtitle mb-2 text-muted">We center the needs of your brand visibility in sync with
                                your positioning strategy with the goal of successful business permanence in the various ecosystems.   </p>
                                <p className="card-text">Example: We’ve influenced the visibility of a number of initiatives including African homegrown initiatives. Some of them include:</p>
                                <a href="https://bitcoinke.io/2021/11/the-inspiring-story-of-wakanda-inu/" className="card-link link-warning card-text">Wakanda Inu </a>
                                <a href="https://bitcoinke.io/2021/10/bitmama-closes-pre-seed-funding-round/" className="card-link link-warning card-text">Bitmama</a><br />
                                <a href="https://bitcoinke.io/2020/09/trust-graphic-novel-trailer/" className="card-link link-warning card-text">A comic about blockchain</a>
                            </div>


                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Digital Marketing</h5>
                                <p className="card-subtitle mb-2 text-muted">Simply stated, we get results. Whether you are looking for more website traffic, more leads, more sales, more social followers, higher engagement rates, higher email open rates … whatever your needs – we get it done. Guaranteed.</p>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Blog Coverage</h5>

                                <p className="card-subtitle mb-2 text-muted">Our widely read <a href="" className="link-warning">blog</a> offers you a platform to showcase your products and services, either via band ads, features, including video walkthroughs.</p>

                            </div>

                        </div>



                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Training/Education for Consumer Awareness and Market </h5>

                                <p className="card-subtitle mb-2 text-muted">Our unique strategies and approaches on consumer awareness and education continue to play a very instrumental role in unlocking Africa’s blockchain potential.</p>
                                <p className="card-text">We provide:</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item card-text">A platform for budding developers, traders and investors to nurture their skills and talents</li>
                                    <li className="list-group-item card-text">Opportunities for potential partners to collaborate with BitKE in equipping this platform with the necessary support required</li>
                                    <li className="list-group-item card-text">Tailor-made solutions to various target audiences and/or as part of your market entry planning. Some of them include product launches and activations.</li>
                                </ul>

                            </div>
                        </div>


                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Consumer engagement </h5>
                                <p className="card-subtitle mb-2 text-muted">At BitKe, we prioritize public engagement across the board.
                                We leverage on this by offering our clients:</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item card-text">Featured Posts;</li>
                                    <li className="list-group-item card-text">Email Newsletters Sponsored </li>
                                    <li className="list-group-item card-text">Community management;  </li>
                                    <li className="list-group-item card-text">Web Banners </li>
                                    <li className="list-group-item card-text">Social Media Promotions and Mentions </li>
                                    <li className="list-group-item card-text">Video Promos </li>
                                    <li className="list-group-item card-text">Events Organizing &amp; Management </li>
                                    <li className="list-group-item card-text">Talent and influencer engagement,  </li>
                                    <li className="list-group-item card-text">Multicultural outreach and </li>
                                    <li className="list-group-item card-text">Content creation and distribution across all platforms and channels to earn attention for your brand/product. </li>
                                   
                                </ul>
                            </div>

                        </div>

                    </div>
                        <div className={style.subtext} >
                        <h1 className="card-title text-start" id="audience">For Audiences</h1>
                      <h4 className="text-start">We offer Cryptocurrency Education</h4>
                      </div>
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

            </Layout>
        </div>
    )
}

export default Mktassess;