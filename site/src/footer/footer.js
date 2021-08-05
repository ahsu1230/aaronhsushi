import "./footer.sass";
import logo from "./../assets/logo_hsu2a.png";
import iconIG from "./../assets/instagram_white.svg";
import iconLI from "./../assets/linkedin_white.svg";
export default function Footer() {
    return (
        <div id="footer">
            <img className="logo" src={logo} />
            <p>Designed and Developed by Aaron Hsu</p>

            <h4>Contact</h4>
            <p>ahsu1230@gmail.com</p>
            <div className="icons">
                <img src={iconIG} />
                <img src={iconLI} />
            </div>
        </div>
    );
}
