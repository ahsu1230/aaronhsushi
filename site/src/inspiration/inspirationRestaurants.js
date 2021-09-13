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
                        "Duis convallis mi id mi imperdiet, sit amet porta ligula pulvinar. Vestibulum tincidunt, sem eu pulvinar pharetra, turpis risus congue ligula, ut porta eros justo laoreet lorem. Quisque pellentesque mauris eu diam dignissim, non vestibulum nisi ornare. "
                    }
                />
                <RestaurantCard
                    title={"Okuda"}
                    area={"Chelsea, New York City"}
                    imgSrc={"/restaurants/okuda.jpg"}
                    url={"https://www.okuda.nyc/"}
                    description={
                        "Duis convallis mi id mi imperdiet, sit amet porta ligula pulvinar. Vestibulum tincidunt, sem eu pulvinar pharetra, turpis risus congue ligula, ut porta eros justo laoreet lorem. Quisque pellentesque mauris eu diam dignissim, non vestibulum nisi ornare. "
                    }
                />
                <RestaurantCard
                    title={"Kusakabe"}
                    area={"San Francisco, CA"}
                    imgSrc={"/restaurants/kusakabe.jpg"}
                    url={"https://kusakabe-sf.com/"}
                    description={
                        "Duis convallis mi id mi imperdiet, sit amet porta ligula pulvinar. Vestibulum tincidunt, sem eu pulvinar pharetra, turpis risus congue ligula, ut porta eros justo laoreet lorem. Quisque pellentesque mauris eu diam dignissim, non vestibulum nisi ornare. "
                    }
                />
                <RestaurantCard
                    title={"Hinata"}
                    area={"San Francisco, CA"}
                    imgSrc={"/restaurants/hinata.jpg"}
                    url={"https://www.hinatasf.com/"}
                    description={
                        "Duis convallis mi id mi imperdiet, sit amet porta ligula pulvinar. Vestibulum tincidunt, sem eu pulvinar pharetra, turpis risus congue ligula, ut porta eros justo laoreet lorem. Quisque pellentesque mauris eu diam dignissim, non vestibulum nisi ornare. "
                    }
                />
                <RestaurantCard
                    title={"Sushi Nakazawa"}
                    area={"Washington D.C."}
                    imgSrc={"/restaurants/nakazawa.jpg"}
                    url={"https://www.sushinakazawa.com/washington-dc"}
                    description={
                        "Duis convallis mi id mi imperdiet, sit amet porta ligula pulvinar. Vestibulum tincidunt, sem eu pulvinar pharetra, turpis risus congue ligula, ut porta eros justo laoreet lorem. Quisque pellentesque mauris eu diam dignissim, non vestibulum nisi ornare. "
                    }
                />
                <RestaurantCard
                    title={"Yuraku"}
                    area={"Germantown, MD"}
                    imgSrc={"/restaurants/yuraku.jpg"}
                    url={"https://yurakusushi.com/germantown1/"}
                    description={
                        "Duis convallis mi id mi imperdiet, sit amet porta ligula pulvinar. Vestibulum tincidunt, sem eu pulvinar pharetra, turpis risus congue ligula, ut porta eros justo laoreet lorem. Quisque pellentesque mauris eu diam dignissim, non vestibulum nisi ornare. "
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
