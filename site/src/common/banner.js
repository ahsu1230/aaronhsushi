import "./banner.sass";
export default function Banner(props) {
    const title = props.title;
    const description = props.description;
    const height = props.height;
    const bannerImgSrc = props.bannerImgSrc;
    const buttonText = props.buttonText;
    const buttonOnClick = props.buttonOnClick;
    return (
        <div
            className="banner"
            style={{
                height: `${height}`,
            }}>
            <div className="overlay"></div>
            <div
                className="banner-img"
                style={{
                    backgroundImage: `url("${bannerImgSrc}")`,
                }}></div>
            <div className="text">
                {title && <h1>{title}</h1>}
                {description && <p>{description}</p>}
                {buttonText && (
                    <button onClick={buttonOnClick}>{buttonText}</button>
                )}
            </div>
        </div>
    );
}
