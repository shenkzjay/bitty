import Layout from "../components/Layout";
import style from "../styles/Project.module.css"


function Projects(){
    return(
        <div>
            <Layout>
        <div className={style.wrap}>
             <h1 className="display-3 font-weight-bolder mb-4">Projects</h1>
                        <p className={style.subtext}>
                        The main long-term developer-related projects of BitKE include the <b>Catapult Webinar Series,
                        Pata Wallet, LOIBON, Crypto Tour</b> and the <b>Incubation training.</b>
                        The short-term projects vary between periodic events such as the
                        <b>‘Battle of the Chains’, Training for Developers, and Building Developer Communities.</b>
                         </p>
                         <br />


                         {/* Catapult series */}

                         <h4 className={style.subtext}><b className="display-6 fw-semibold">Longterm</b></h4>
                         <p className={style.subtext}><b>Catapult (Webinar) Series</b></p>
                         <p className={style.subtext}>We have conducted over sixty (60) catapults/webinars, most of which focus on developers. Some of our most popular Catapult Webinar Sessions are as follows:</p>

                        <div className={style.media}>
                            <div className="card">
                                <div className="ratio ratio-4x3">
                                    <iframe src="https://www.youtube.com/embed/EyMXLiTNXpo" title="YouTube video" allowfullscreen></iframe>
                                </div>

                                <div className="card-body">
                                    <p className="card-text fw-bold">Introducing Bitsoko - the First Blockchain-based Company in Kenya </p>
                                </div>

                            </div>


                            <div className="card">

                                <div className="ratio ratio-4x3">
                                    <iframe src="https://www.youtube.com/embed/dN7Kev0KCgk" title="YouTube video" allowfullscreen></iframe>
                                </div>
                                <div className="card-body">
                                    <p className="card-text fw-bold">Leveraging the Lightning Network with Bitnob - an African-focused Lightning Network Wallet  </p>

                                </div>

                            </div>

                            <div className="card">
                                <div className="ratio ratio-4x3">
                                    <iframe src="https://www.youtube.com/embed/w5kNHYAovmk" title="YouTube video" allowfullscreen></iframe>
                                </div>
                                <div className="card-body">
                                    <p className="card-text fw-bold">The First African LocalBitcoins Webinar (June 2021) </p>

                                </div>

                            </div>

                            <div className="card">
                                <div className="ratio ratio-4x3">
                                    <iframe src="https://www.youtube.com/embed/Lb23z-7iNrQ" title="YouTube video" allowfullscreen></iframe>
                                </div>
                                <div className="card-body">
                                    <p className="card-text fw-bold">The First African Standard Protocol Webinar (May 2021) </p>
                                </div>

                            </div>



                            <div className="card">
                                <div className="ratio ratio-4x3">
                                    <iframe src="https://www.youtube.com/embed/ISJ1zywItLU" title="YouTube video" allowfullscreen></iframe>
                                </div>
                                <div className="card-body">
                                    <p className="card-text fw-bold">Building a Career in Blockchain Development </p>

                                </div>

                            </div>

                      



                        <div className="card">
                                <div className="ratio ratio-4x3">
                                    <iframe src="https://www.youtube.com/embed/YcNExdixufg" title="YouTube video" allowfullscreen></iframe>
                                </div>
                                <div className="card-body">
                                    <p className="card-text fw-bold">P2P Street Crypto Vending in Kenya - A chat with the First Crypto Street Vendor in Kenya</p>

                                </div>

                            </div>

                        </div>




                        {/* loiboin and the rest */}
                <div className="pt-4 pb-8">
                <div className={style.prowrap}>
               <div className={style.prosize}>
               <div className="cardsize mb-0">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="loibon.jpg" width="100%" height="100%" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">LOIBON</h5>
                                        <p className="card-text">an investing platform with heightened risk management solutions, targeting grassroots (mostly the underprivileged), and a number of forks. (Launching soon)</p>
                                        <a href="https://loibon.com" target="blank"><button className=" btn card-text btn-outline-warning" type="button"><small>View more</small></button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
               </div>


                 <div className={style.prosize}>
               <div className="cardsize mb-0">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="3d ball.jpg" width="100%" height="100%" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">PATA WALLET</h5>
                                        <p className="card-text">a first-time ever unique tipping solution for meme creators in Kenya and rest of Africa. <b>(Coming soon)</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
               </div>
              
               <div className={style.prosize}>
               <div className="cardsize mb-0">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="3d ball.jpg" width="100%" height="100%" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">CRYPTO TOUR</h5>
                                        <p className="card-text">First ever grassroots ‘Annual Crypto Tour’ So far, we’ve done pilots in two major towns named <b>Mombasa</b> and <b>Nakuru.</b> We have also begun inducting several developers from the towns we have visited so far on the pilot tour</p>
                                        <a href="https://bitcoinke.io/2021/11/the-kenya-crypto-tour-2021/" target="blank"><button className=" btn card-text btn-outline-warning" type="button"><small>View more</small></button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
               </div>
               

               <div className={style.prosize}>
               <div className="cardsize mb-0">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="3d ball.jpg" width="100%" height="100%" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">INCUBATION TRAINING</h5>
                                        <p className="card-text">We have embarked on a 5-year project focusing on capacity building of blockchain developers
                                        including organizing hackathons and hand-holding their innovations to ensure sustainability and longevity of their
                                        efforts and endeavours.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                     
               </div>
            </div>
            </div>



            {/* Shorterm project */}
            <div className={style.subtext}>
            <h4 className={style.subtext}><b className="display-6 fw-semibold pt-5">Short-term/Periodic</b></h4>
                         </div>
            <div className={style.media}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Battle of Chains</h5>

                                <p className="card-subtitle mb-2 text-muted">We initiated the first ever <b>‘BATTLE OF THE CHAINS’</b> series in 2020 .
                                We convened African Developers to discuss and debate blockchain development on Ethereum, Solana and Binance Smart Chain.
                                It brought together developers from several countries including Kenya, Nigeria, Angola and Uganda.</p>
                                <ul className="list-group list-group-flush">
                               <a href="https://bitcoinke.io/2021/05/battle-of-the-chains/"  target="blank"> <li className="list-group-item link-warning">The Battle of Chains</li></a>
                               <a href="https://bitcoinke.io/2021/07/watch-the-battle-of-the-chains-discussion/" target="blank"> <li className="list-group-item link-warning">The Battle of Chains Discussions</li></a>
                                </ul>

                            </div>
                            </div>



                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Training for Developers </h5>

                                <p className="card-subtitle mb-2 text-muted">We’ve conducted a number of training sessions for developers with one of
                                the most popular developers in Kenya – Eugene Mutai. The demand for these classes continues to be high. Some of
                                these training sessions also fall under the catapult webinar series. Some include</p>
                                <ul className="list-group list-group-flush">
                                <a href="https://bitcoinke.io/2021/05/a-practical-introduction-into-defi/  "  target="blank"> <li className="list-group-item link-warning">Introduction to DEFI</li></a>
                               <a href="https://bitcoinke.io/2018/06/eugene-mutai-simplifies-the-blockchain-nextgentech-event/" target="blank"> <li className="list-group-item link-warning">Eugene Mutai simplifies the blockchain nextGenTech</li></a>
                               <a href="https://bitcoinke.io/2021/01/unpacking-defi/ " target="blank"> <li className="list-group-item link-warning">Unpacking DEFI</li></a>
                                </ul>
                            </div>
                        </div>



                         <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Building Developers </h5>

                                <p className="card-subtitle mb-2 text-muted">We have worked with <b>ConsenSys</b> in helping building developer communities in East Africa
                                and in organizing meetups. Some of the activities that laid the foundation for opening up Ethereum to East
                                Africa include:</p>
                                <ul className="list-group list-group-flush">
                                <a href="https://bitcoinke.io/2018/12/video-a-preview-of-eth-east-africa-meetup-by-consensys/"  target="blank"> <li className="list-group-item link-warning">Preview of Ethereum</li></a>
                               <a href="https://bitcoinke.io/2019/02/african-blockchain-alliance-partners-with-consensys-academy-for-an-african-blockchain-developer-program/" target="blank"> <li className="list-group-item link-warning">African blockchain developer program</li></a>
                               <a href="https://bitcoinke.io/2018/11/consensys-presents-eth-africa-east-africa-meetup-series/ " target="blank"> <li className="list-group-item link-warning">Ethereum East Africa</li></a>
                                </ul>
                            </div>
                        </div>



                          <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Building Developers </h5>

                                <p className="card-subtitle mb-2 text-muted">We credit ourselves as having taken part in the successful incubation of EOS developer teams that represented Africa at a global hackathon in South Africa. Out of the 3 teams in Africa, BitKE assisted in mentoring and training 2 of them.
                                </p>
                                <ul className="list-group list-group-flush">
                                <a href="https://bitcoinke.io/2018/10/eos-hackthon-grand-finale-coming-to-africa/"  target="blank"> <li className="list-group-item link-warning">Hackathon grand-finale coming to Africa</li></a>
                               <a href="https://bitcoinke.io/2018/10/prepping-up-for-the-africa-virtual-hackathon-with-eos-nairobi/" target="blank"> <li className="list-group-item link-warning">Hackathon with EOS Nairobi</li></a>
                               <a href="https://bitcoinke.io/2018/12/african-teams-featured-at-the-eos-hackathon-in-cape-town/ " target="blank"> <li className="list-group-item link-warning">African teams at EOS Hackathon Cape Town</li></a>
                                </ul>
                            </div>
                        </div>



                         <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">We helped facilitate the following activities </h5>
                                <ul className="list-group list-group-flush">
                                <a href="https://bitcoinke.io/2021/11/celo-crypto-meetup-kenya/"  target="blank"> <li className="list-group-item link-warning">A Crypto meetup by Celo, titled: <b>‘Exploring the Different DeFi Applications and Use Cases’ </b></li></a>
                               <a href="https://bitcoinke.io/2021/10/first-2021-ethereum-meetup-in-kenya/ " target="blank"> <li className="list-group-item link-warning">The Ethereum meetup at KCA University in Nairobi </li></a>
                               <a href="https://bitcoinke.io/2021/10/introduction-to-web-3-filecoin-kenya-event/ " target="blank"> <li className="list-group-item link-warning">FileCoin</li></a>
                               <a href="https://bitcoinke.io/2020/01/the-blockchain-for-lawyers-masterclass-nairobi-edition/"  target="blank"> <li className="list-group-item link-warning">Lawyers for blockchain</li></a>
                               <a href="https://www.youtube.com/watch?v=ISJ1zywItLU " target="blank"> <li className="list-group-item link-warning">Building a Career in Blockchain Development (on Ethereum) with Peter Nderitu (Kenya)</li></a>
                                </ul>
                            </div>
                        </div>


                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Coverage on crypto analyses on the continent such as  </h5>
                                <ul className="list-group list-group-flush">
                               <a href="https://bitcoinke.io/2021/03/defi-adoption-in-africa/ " target="blank"> <li className="list-group-item link-warning">Emerging Markets Like Africa Made Up Only 10% of the DeFi Traffic in February 2021, Latest Report Shows</li></a>
                               <a href="https://bitcoinke.io/2021/04/metamask-milestone/ " target="blank"> <li className="list-group-item link-warning">MetaMask Grows Over 500% Surpassing Over 5 Million Monthly Active Users in the Past 6 Months – Nigerians Among Leading Users</li></a>
                                </ul>
                            </div>
                        </div>
                </div>

        </div>
        </Layout>
        </div>
       
      
    )
}


export default Projects;