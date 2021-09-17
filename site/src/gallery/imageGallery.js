import "./imageGallery.sass";

const GALLERY_IMAGES = [
    {
        imageSrc: "https://aaronhsushi.b-cdn.net/nigiri_kohada_ginger.jpeg",
        title: "Kohada (Japanese Gizzard Shad) topped with grated ginger",
        description: "",
    },
    {
        imageSrc: "https://aaronhsushi.b-cdn.net/square_shima_aji_plate.jpeg",
        title: "Shima-Aji (Trevally Jack) sashimi presentation plate",
        description: "",
    },
    {
        imageSrc: "https://aaronhsushi.b-cdn.net/nigiri_sawara_smoked_head.jpeg",
        title: "Cherry-smoked Sawara (Spanish Mackerel) with grated daikon and scallions",
        description: "",
    },
    {
        imageSrc: "https://aaronhsushi.b-cdn.net/sashimi_sawara_smoked.jpeg",
        title: "Sashimi plate of assorted smoked Sawara (Spanish Mackerel)",
        description: "",
    },
    {
        imageSrc: "https://aaronhsushi.b-cdn.net/nigiri_sawara_oroshi.jpeg",
        title: "Sawara (Spanish Mackerel) with grated daikon",
        description: "",
    },
    {
        imageSrc: "https://aaronhsushi.b-cdn.net/moosey.jpeg",
        title: "Complementary after-dinner cuddle sessions available",
        description: "",
    },
];

export default function ImageGallery() {
    const cards = GALLERY_IMAGES.map((image, index) => (
        <GalleryCard
            key={index}
            imgSrc={image.imageSrc}
            title={image.title}
            description={image.description}
        />
    ));
    return (
        <div id="image-gallery">
            <div className="gallery-container">{cards}</div>
        </div>
    );
}

const GalleryCard = (props) => {
    return (
        <div className="gallery-card">
            <img src={props.imgSrc} />
        </div>
    );
};
