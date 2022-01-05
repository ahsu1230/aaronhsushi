import "./profile.sass";

export default function Profile() {
    return (
        <div id="profile">
            <div className="outer-circle">
                <div className="mask-circle"></div>
            </div>

            <h2>Aaron Hsu</h2>
            <p>
                Prior to my career in sushi, I was a Software Engineer working
                in Silicon Valley. After a few years in various software
                industries, I moved to New York City in 2018 to work at{" "}
                <a href="http://kosakanyc.com/">Kosaka</a> under Chef Yoshihiko
                Kousaka.
                <br />
                <br />
                Today, I perform full Edomae-inspired sushi omakase dinners from
                my apartment complex in Washington D.C. Because I source the
                same high-quality Japanese fish as many high-end restaurants in
                the area, my goal is to provide guests an unforgettable and
                affordable experience, especially people new to the art of
                omakase. Through my craft, I hope to share my story and just as
                I was inspired to pursue my passion, I hope to inspire others to
                discover and follow their own.
            </p>
        </div>
    );
}
