import "./footer.sass";
import {
    MyEmail,
    MyInstagramLink,
    MyLinkedInLink,
} from "../common/constants.js";
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

            <div id="footer-contact">
                <h4>Contact</h4>
                <p>{MyEmail}</p>
                <div className="icons">
                    <a href={MyInstagramLink}>
                        <img className="ig" src={iconIG} />
                    </a>
                    <a href={MyLinkedInLink}>
                        <img className="li" src={iconLI} />
                    </a>
                </div>
            </div>
        </div>
    );
}
