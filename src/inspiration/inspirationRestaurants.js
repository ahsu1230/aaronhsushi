export default function InspirationRestaurants(props) {
    return (
        <div className="inspiration-restaurants">
            <h2>Aaron's Omakase Recommendations</h2>
            <div className="cards">
                <RestaurantCard
                    title={"Kosaka"}
                    area={"West Village, New York City"}
                    imgSrc={"/restaurants/kosaka_inside.jpg"}
                    url={"http://www.kosakanyc.com/"}
                    description={
                        "My first apprenticeship at a sushi omakase restaurant. When I visited here, I felt Chef Yoshihiko Kousaka redefined the fundamentals of sushi to me. Whether it was the base notes of the roasted seaweed or the slight crisp on a seared trout skin, Chef blew me away with his concepts and unparalleled execution. I'd like to thank the entire Kosaka staff for guiding me during my apprenticeship and putting up with my difficulties, but I truly learned so much!"
                    }
                />
                <RestaurantCard
                    title={"Okuda"}
                    area={"Chelsea, New York City"}
                    imgSrc={"/restaurants/okuda.jpg"}
                    url={"https://www.okuda.nyc/"}
                    description={
                        "This restaurant doesn't perform sushi omakase but Japanese kaiseki, a traditional multi-course Japanese meal that follows the seasonal Japanese fish and vegetables and has a stronger focus on plating composition. I highly recommend coming here to get a taste of how Japanese fish can be used for more than just sushi nigiri."
                    }
                />
                <RestaurantCard
                    title={"Kusakabe"}
                    area={"San Francisco, CA"}
                    imgSrc={"/restaurants/kusakabe.jpg"}
                    url={"https://kusakabe-sf.com/"}
                    description={
                        "Chef Ken hosted me and of course, while the sushi was amazing, I learned even more from just watching him compose his nigiri. His preparation is extremely clean, organized and efficient. Come here for the soy-sauce cured chutoro and Chef Ken's favorite, the shima aji."
                    }
                />
                <RestaurantCard
                    title={"Hinata"}
                    area={"San Francisco, CA"}
                    imgSrc={"/restaurants/hinata.jpg"}
                    url={"https://www.hinatasf.com/"}
                    description={
                        "I always enjoy talking with the friendly, relaxed chefs here and deeply appreciate their philosophy in providing customers a high quality omakase for an affordable $70. Chef Gavin was a great host and introduced me the idea of smoking and searing fish on cedar wood and showed me the differences in taste of regional uni."
                    }
                />
                <RestaurantCard
                    title={"Sushi Nakazawa"}
                    area={"Washington D.C."}
                    imgSrc={"/restaurants/nakazawa.jpg"}
                    url={"https://www.sushinakazawa.com/washington-dc"}
                    description={
                        "The first omakase I brought my parents to. Chef Masaaki Uchino is an awesome chef who's friendly and is very willing to share his expansive knowledge about sushi. Be sure to also check out their OG location in New York City!"
                    }
                />
                <RestaurantCard
                    title={"Yuraku"}
                    area={"Germantown, MD"}
                    imgSrc={"/restaurants/yuraku.jpg"}
                    url={"https://yurakusushi.com/germantown1/"}
                    description={
                        "My hometown BAE. Growing up, their specialty rolls were always super fun to experiment and enjoy. And even today, their rolls still hold a place in my heart. A special shout-out to Chef Sunny for graciously hosting our family for more than 15 years!"
                    }
                />
            </div>
        </div>
    );
}

function RestaurantCard(props) {
    return (
        <div className="card">
            <h3>{props.title}</h3>
            <h4>{props.area}</h4>
            <p>{props.description}</p>
            <div className="img-section restaurant">
                <a href={props.url} target="_blank">
                    <div className="img-container">
                        <div className="overlay">
                            <h5>Visit Restaurant Website</h5>
                        </div>
                        <img src={props.imgSrc} />
                    </div>
                </a>
            </div>
        </div>
    );
}
