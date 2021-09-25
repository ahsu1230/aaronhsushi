import "./footer.sass";
import logo from "./../assets/logo_white1.png";
import iconIG from "./../assets/instagram_white.svg";
import iconLI from "./../assets/linkedin_white.svg";
export default function Footer() {
    return (
        <div id="footer">
            <img className="logo" src={logo} />
            <p>
                Design, Development and Photography
                <br />
                by Aaron Hsu
            </p>

            <h4>Contact</h4>
            <p>aaronhsushi2020@gmail.com</p>
            <div className="icons">
                <a href="https://www.instagram.com/mooseyhsushi/">
                    <img className="ig" src={iconIG} />
                </a>
                <a href="https://www.linkedin.com/in/aaron-hsu-sushi/">
                    <img className="li" src={iconLI} />
                </a>
            </div>
        </div>
    );
}
