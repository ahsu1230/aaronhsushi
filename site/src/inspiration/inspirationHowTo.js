export default function InspirationHowTo(props) {
    return (
        <div className="inspiration-how-to">
            <h2>
                Want to start making sushi
                <br />
                at home?
            </h2>
            <p>
                There are plenty of how-to-make sushi resources online! In fact,
                that's how I got started and it became my favorite hobby.
                <br /> Check out these Youtube channels to get started!
            </p>
            <div className="youtube-cards">
                <YoutubeCard
                    title={"Akira-san's Home Sushi Channel"}
                    url={"https://www.youtube.com/embed/Myt-BZFyMm8"}
                />
                <YoutubeCard
                    title={"Ginza Watari"}
                    url={"https://www.youtube.com/embed/Iqdw93m_gpM"}
                />
                <YoutubeCard
                    title={"Making sushi with Iron Chef Morimoto"}
                    url={"https://www.youtube.com/embed/EGeNKGosXA8"}
                />
                <YoutubeCard
                    title={"Hiroyuki Terada - Diaries of a Master Sushi Chef"}
                    url={"https://www.youtube.com/embed/IqTmQ93dmLs"}
                />
            </div>
        </div>
    );
}

function YoutubeCard(props) {
    const title = props.title;
    const description = props.description;
    const url = props.url;
    return (
        <div className="youtube-card">
            <h3>{title}</h3>
            {description && <p>{description}</p>}
            <iframe
                width="560"
                height="315"
                src={url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
    );
}
