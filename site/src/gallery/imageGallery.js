import "./imageGallery.sass";

const GALLERY_IMAGES = [
    {
        imageSrc: "/samples/gallery1.png",
        title: "Seasonal Sashimi",
        description: "",
    },
    {
        imageSrc: "/samples/gallery2.png",
        title: "Seared Anago (Sea Eel)",
        description: "",
    },
    {
        imageSrc: "/samples/gallery3.png",
        title: "Hokkaido Uni",
        description: "",
    },
    {
        imageSrc: "/samples/gallery4.png",
        title: "Shima Aji",
        description: "",
    },
    {
        imageSrc: "/samples/gallery5.png",
        title: "Seared Salmon",
        description: "",
    },
    {
        imageSrc: "/samples/gallery6.png",
        title: "Maguro Medley",
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
