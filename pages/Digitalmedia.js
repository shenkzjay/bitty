import style from "../styles/Digitalmedia.module.css"
import Layout from "../components/Layout";



function Digitalmedia() {
    return (
        <div>
            <Layout>
                <div className={style.wrap}>
                    <h1 className="display-3 font-weight-bolder mb-4">Media</h1>
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
                                <li className="lead list-group-item">New</li>
                                <li className="lead list-group-item">Events</li>
                                <li className="lead list-group-item">Interviews</li>
                                <li className="lead list-group-item">Projects</li>
                                <li className="lead list-group-item">Meetups</li>
                                <li className="lead list-group-item">Writeups</li>
                            </ul>
                        </div>

                        <div >
                            <h1 className="display-6 font-weight-bolder pb-4">Google</h1>
                            <p className="lead"> We have been accredited by Google as one of the outlets
                                 that publish original, timely and reliable news for our audiences as seen below:
                             </p>
                            <div className={style.googleimg}>
                                <img src="/google.png" alt="..." width="300px" height=" 200px" object-fit="fill" />
                                <img src="/google1.png" alt="..." width="300px" height=" 200px" object-fit="fill" />
                                <img src="/google2.png" alt="..." width="300px" height=" 200px" object-fit="fill" />
                            </div>
                        </div>



                        {/* interviews */}

                        <h1 className="display-6 font-weight-bolder mb-4">Interviews</h1>
                        <p className="lead">
                            Below is an outlook of some of the varied interviews we have been conducting
                         </p>
                        <div className={style.media}>
                            <div className="card">
                                <div className="ratio ratio-4x3">
                                    <iframe src="https://www.youtube.com/embed/lP7HTEz6nHU" title="YouTube video" allowfullscreen></iframe>
                                </div>

                                <div className="card-body">
                                    <p className="card-text fw-bold">Interview with CEO, Xend Finance (The Leading and Most Successful DeFi Project in Africa)</p>
                                </div>

                            </div>


                            <div className="card">

                                <div className="ratio ratio-4x3">
                                    <iframe src="https://www.youtube.com/embed/5GSk7BTbc8c" title="YouTube video" allowfullscreen></iframe>
                                </div>
                                <div className="card-body">
                                    <p className="card-text fw-bold">Interview with Pelle, CEO, Notabene (Created the first Bitcoin Wallet in Kenya) </p>

                                </div>

                            </div>

                            <div className="card">
                                <div className="ratio ratio-4x3">
                                    <iframe src="https://www.youtube.com/embed/gUiEx5qO_1k" title="YouTube video" allowfullscreen></iframe>
                                </div>
                                <div className="card-body">
                                    <p className="card-text fw-bold">Interview with Carmelle, CEO, EMTECH (The company behind the Central Bank of Ghana Blockchain Sandbox)</p>

                                </div>

                            </div>

                            <div className="card">
                                <div className="ratio ratio-4x3">
                                    <iframe src="https://www.youtube.com/embed/yueZ-FDABn8" title="YouTube video" allowfullscreen></iframe>
                                </div>
                                <div className="card-body">
                                    <p className="card-text fw-bold">Interview with Jon, CEO, OVEX (The largest OTC desk and exchange in Africa and one of the largest exchanges in South Africa)</p>
                                </div>

                            </div>



                            <div className="card">
                                <div className="ratio ratio-4x3">
                                    <iframe src="https://www.youtube.com/embed/gLsgW3nlf5A" title="YouTube video" allowfullscreen></iframe>
                                </div>
                                <div className="card-body">
                                    <p className="card-text fw-bold">Interview with Ahref, CEO, Momint (The most successful NFT marketplace in South Africa</p>

                                </div>

                            </div>

                        </div>



                        {/* Educational content */}
                        <h1 className="display-6 font-weight-bolder mb-4">Educational Content</h1>
                        <p className="lead">
                            Our educational related content ranks highest in terms of popularity and readership.
                            The content is mostly customized to the African audience as seen below:
                      </p>
                        <div className={style.eduContent}>
                            <div className="card">
                                <div className="ratio ratio-16x9">
                                    <img src="ether.jpg" className="card-img-top" alt="..." />
                                </div>

                                <div className="card-body">
                                    <p className="card-text fw-bold">‘Ether Wallets’ is one of the most popular. Here is a List of 16 Wallets to Store Your Ethereum (ETH) </p>

                                </div>
                                <div className="card-footer">
                                    <a href="https://bitcoinke.io/2020/07/ether-wallets/" target="blank" className="btn btn-outline-warning">Click to View</a>
                                </div>
                            </div>


                            <div className="card">
                                <div className="ratio ratio-16x9">
                                    <img src="nft.jpg" className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-text fw-bold">How to Connect Your MetaMask to OpenSea to Buy and Mint NFTs  </p>

                                </div>
                                <div className="card-footer">
                                    <a href="https://bitcoinke.io/2021/10/how-to-connect-metamask-to-opensea/ " className="btn btn-outline-warning" target="blank">Click to View</a>
                                </div>


                            </div>

                            <div className="card">
                                <div className="ratio ratio-16x9">
                                    <img src="defi.jpg" className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-text fw-bold">Defining DeFi: Breaking Down DeFi and Yield Farming with the CEO of SaBi - African Crypto Exchange</p>

                                </div>
                                <div className="card-footer">
                                    <a href="https://bitcoinke.io/2020/09/defi-defined/" className="btn btn-outline-warning" target="blank">Click to View</a>
                                </div>

                            </div>

                            <div className="card">
                                <div className="ratio ratio-4x3">
                                    <iframe src="https://www.youtube.com/embed/K8dHYbfxgiY" title="YouTube video" allowfullscreen></iframe>
                                </div>
                                <div className="card-body">
                                    <p className="card-text fw-bold">How to Install and Set up a MetaMask Wallet (Part 1)</p>
                                </div>

                            </div>



                            <div className="card">
                                <div className="ratio ratio-4x3">
                                    <iframe src="https://www.youtube.com/embed/Sr0oPz6qQXI" title="YouTube video" allowfullscreen></iframe>
                                </div>
                                <div className="card-body">
                                    <p className="card-text fw-bold">How to Install and Set up a MetaMask Wallet (Part 2): </p>

                                </div>

                            </div>


                            <div className="card">
                                <div className="ratio ratio-4x3">
                                    <iframe src="https://www.youtube.com/embed/EnbZ4Csg8kg" title="YouTube video" allowfullscreen></iframe>
                                </div>
                                <div className="card-body">
                                    <p className="card-text fw-bold">FURUCOMBO 101 - Trading Decentralized Finance (DeFi) Tokens Using Transaction Legos</p>

                                </div>

                            </div>

                        </div>


                        {/* Research */}
                        <h1 className="display-6 font-weight-bolder mb-4">Research</h1>
                        <p className="lead">
                            In addition, we conduct research on various topics and publish them on our blog. Examples include:
                        </p>

                        {/* Awareness */}
                        <div>
                            <h2>Awareness </h2>
                        </div>
                        <div className={style.eduContent}>
                            <div className="card">
                                <div className="ratio ratio-16x9">
                                    <img src="sankore.jpg" className="card-img-top" alt="..." />
                                </div>

                                <div className="card-body">
                                    <p className="card-text fw-bold">Introducing Sankore 2.0</p>

                                </div>
                                <div className="card-footer">
                                    <a href="https://bitcoinke.io/2021/08/introducing-sankore-2-0/" target="blank" className="btn btn-outline-warning">Click to View</a>
                                </div>
                            </div>



                            <div className="card">
                                <div className="ratio ratio-16x9">
                                    <img src="scam.jpg" className="card-img-top" alt="..." />
                                </div>

                                <div className="card-body">
                                    <p className="card-text fw-bold">BitcoinKE helped expose one of the largest scams in Kenya </p>

                                </div>
                                <div className="card-footer">
                                    <a href="https://bitcoinke.io/2019/12/nurucoin-closes-shop/" target="blank" className="btn btn-outline-warning">Click to View</a>
                                </div>
                            </div>


                        </div>


                        {/* Mobile Money */}

                        <div><h2>Mobile Money </h2></div>
                        <div className={style.eduContent}>
                            <div className="card">
                                <div className="ratio ratio-16x9">
                                    <img src="mobilemoney.jpg" className="card-img-top" alt="..." />
                                </div>

                                <div className="card-body">
                                    <p className="card-text fw-bold">Mobile Money transactions in Kenya</p>

                                </div>
                                <div className="card-footer">
                                    <a href="https://bitcoinke.io/2021/07/mobile-money-transactions-in-kenya-yoy/" target="blank" className="btn btn-outline-warning">Click to View</a>
                                </div>
                            </div>



                            <div className="card">
                                <div className="ratio ratio-16x9">
                                    <img src="mpesa.png" className="card-img-top" alt="..." />
                                </div>

                                <div className="card-body">
                                    <p className="card-text fw-bold">Mpesa hits 50 million active montly subscribers </p>

                                </div>
                                <div className="card-footer">
                                    <a href="https://bitcoinke.io/2021/09/mpesa-hits-50-million-monthly-active-subscribers/ " target="blank" className="btn btn-outline-warning">Click to View</a>
                                </div>
                            </div>


                        </div>

                        {/* Regulations */}


                        <div><h2>Regulations </h2></div>
                        <div className={style.eduContent}>
                            <div className="card">
                                <div className="ratio ratio-16x9">
                                    <img src="smart contract.jpg" className="card-img-top" alt="..." />
                                </div>

                                <div className="card-body">
                                    <p className="card-text fw-bold">Smart contracts in law in Tanzania</p>

                                </div>
                                <div className="card-footer">
                                    <a href="https://bitcoinke.io/2020/12/smart-contracts-in-law-in-tanzania/ " target="blank" className="btn btn-outline-warning">Click to View</a>
                                </div>
                            </div>



                            <div className="card">
                                <div className="ratio ratio-16x9">
                                    <img src="audiences.png" className="card-img-top" alt="..." />
                                </div>

                                <div className="card-body">
                                    <p className="card-text fw-bold">BitcoinKE was very instrumental in helping to clarify the classification of cryptocurrencies in Kenya </p>

                                </div>
                                <div className="card-footer">
                                    <a href="https://bitcoinke.io/2020/02/court-dismisses-case-against-cma-kenya-by-kenicoin/ " target="blank" className="btn btn-outline-warning">Click to View</a>
                                </div>
                            </div>


                        </div>





                    </div>

                </div>
            </Layout>
        </div>
    )
}

export default Digitalmedia;