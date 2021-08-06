import "./banner.sass";

export default function Banner(props) {
    const title = props.title;
    const description = props.description;
    const height = props.height;
    const bannerImgSrc = props.bannerImgSrc;
    const buttonText = props.buttonText;
    const buttonOnClick = props.buttonOnClick;
    const overlayAlpha = props.overlayAlpha || 0.7;
    const hasCaret = props.hasCaret;
    return (
        <div
            className="banner"
            style={{
                height: `${height}`,
            }}>
            <div 
                className="overlay" 
                style={{
                    opacity: `${overlayAlpha}`
                }}></div>
            <div
                className="banner-img"
                style={{
                    backgroundImage: `url("${bannerImgSrc}")`,
                }}></div>
            <div className="text">
                {title && <h2>{title}</h2>}
                {description && <p>{description}</p>}
                {buttonText && (
                    <button onClick={buttonOnClick}>{buttonText}</button>
                )}
            </div>
        </div>
    );
}
