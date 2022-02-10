import style from "../styles/MarketEntry.module.css"

function MarketEntry() {
    return (
        <div className={style.wrap}>
        <div className={style.market}>
                <div className={style.markettext}>
                    <h1>Market Entry</h1>
                    <p>We provide our client with top-notch insights
                        into the market intelligence and relevant use
                        cases across the ecosystem. We have been
                        part of enabling market to some of the top
                        tier clients in the industry.
                    </p>
                </div>
                <div className={style.marketimg}>
                    <img src="/3d ball.jpg" width="100%" height="200px" alt="decking"></img>
                </div>
        </div>
        </div>
    )
}

export default MarketEntry