export default function InspirationBuyFish(props) {
    return (
        <div className="inspiration-buy-fish">
            <h2>Where can I buy fresh fish?</h2>
            <p>
                For high-quality fresh fish, I recommend going to the selected
                stores below. For generic Japanese cooking and sushi equipment,
                they should be available at any local Japanese store near you!
            </p>
            <div className="cards">
                <Card
                    title={"Mitsuwa Marketplace"}
                    area={"San Jose, San Diego and New Jersey"}
                    type={"Stores only. More locations on website."}
                    url={"https://mitsuwa.com/"}
                    imgSrc={"/fresh_fish/mitsuwa.jpg"}
                />
                <Card
                    title={"Catalina Offshore"}
                    area={"San Diego, CA"}
                    type={"Online ordering available"}
                    url={"https://catalinaop.com/"}
                    imgSrc={"/fresh_fish/catalina.png"}
                />
                <Card
                    title={"Nijiya Market"}
                    area={"California"}
                    type={"Stores only"}
                    url={"https://www.nijiya.com/store-location"}
                    imgSrc={"/fresh_fish/nijiya_sf.jpg"}
                />
                <Card
                    title={"Tokyo Fish Market"}
                    area={"Berkeley, CA"}
                    type={"Store only"}
                    url={"https://www.tokyofish.net/"}
                    imgSrc={"/fresh_fish/tokyo_fish_market_berkeley.jpg"}
                />
                <Card
                    title={"Osakana Fish Market"}
                    area={"Brooklyn, NY"}
                    type={"Store and online ordering available"}
                    url={"https://www.osakanabk.com/"}
                    imgSrc={"/fresh_fish/osakana.jpeg"}
                />
                <Card
                    title={"True World Foods DC"}
                    area={"Annapolis, MD"}
                    type={"Online ordering and delivery available"}
                    url={"https://trueworldfoodsdc.com/"}
                    imgSrc={"/fresh_fish/trueworldfoods_dc_ad.jpg"}
                />
            </div>
            <div>
                <h1>What about fish from Whole Foods & Costco?</h1>
                <p>
                    While raw fish from Whole Foods & Costco can be used for
                    sushi, they are certainly a bit riskier. The linked sources
                    above are more guaranteed to provide sushi-grade fish as
                    they take much better care of their fresh seafood. For best
                    results at places like Costco, Whole Foods, H-mart, etc. I
                    highly recommend only getting fish from places with high
                    seafood traffic. Fish is less likely to be sitting around
                    for days and more likely to be freshly available.
                </p>
                <h1>What counts as sushi-grade fish anyway?</h1>
                <p>
                    "Sushi-grade" fish started as a marketing term used by Asian
                    distribution companies in New York to sell their premium
                    fish to non-Asian restaurants. All it really means is very,
                    very (think A++ grade) fresh fish, but there is currently no
                    metric in the U.S to measure this.
                    <br />
                    <br />
                    So how can I tell fish is sushi-grade? There are a few tips
                    you can use to tell if fish is safe to be consumed raw.
                    Generally, you want fish fillets to not have any trace of
                    blood on them and not be exposed to air for too long. When
                    you smell fish, there should be no "fishy" smell - it should
                    smell like the ocean! And when you touch a fish fillet (if
                    you're allowed to), the meat should be firm and not grainy.
                </p>
                <p>
                    For more information, I recommend checking out this article:
                    <br />
                    <a href="https://www.seriouseats.com/how-to-prepare-raw-fish-at-home-sushi-sashimi-food-safety">
                        Serious Eats: Guide to Eating Raw Fish at Home
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}

function Card(props) {
    return (
        <div className="card">
            <h3>{props.title}</h3>
            <p className="description">
                {props.area}
                <br />
                {props.type}
            </p>
            <div className="img-section buy-fish">
                <a href={props.url} target="_blank">
                    <div className="img-container">
                        <div className="overlay">
                            <h5>Visit Website</h5>
                        </div>
                        <img src={props.imgSrc} />
                    </div>
                </a>
            </div>
        </div>
    );
}
