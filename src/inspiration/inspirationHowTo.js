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
                    title={"Just One Cookbook "}
                    description={
                        "Nami-san is a blogger with an extraordinarily extensive knowledge about Japanese cooking. Check out her website to learn more about authentic Japanese recipes!"
                    }
                    url={"https://www.youtube.com/embed/-gsEDlfYxeU"}
                />
                <YoutubeCard
                    title={"Akira-san's Home Sushi Channel"}
                    description={
                        "A fun channel dedicated to sushi made by a Japanese couple who have worked professionally in an established Tokyo sushi restaurant."
                    }
                    url={"https://www.youtube.com/embed/Myt-BZFyMm8"}
                />
                <YoutubeCard
                    title={"Ginza Watari"}
                    description={
                        "A sushi chef from Tokyo shares his many ideas and techniques in his video series. All of his videos are in Japanese, but some have English translations!"
                    }
                    url={"https://www.youtube.com/embed/Iqdw93m_gpM"}
                />
                <YoutubeCard
                    title={"Samurai Sushi Spirits"}
                    description={
                        "A Michelin sushi chef demonstrates his techniques with very informed tutorials in his own sushi restaurant in Fukuoka, Japan."
                    }
                    url={"https://www.youtube.com/embed/eAagGdAVQHw"}
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
                src={url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    );
}
