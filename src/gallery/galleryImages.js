import { find, findIndex } from "lodash";

export const GalleryImages = [
    {
        id: "nigiri_kohada_ginger",
        imageSrc: "https://aaronhsushi.b-cdn.net/nigiri_kohada_ginger.jpeg",
        caption: "Kohada (Japanese Gizzard Shad) topped with grated ginger",
    },
    {
        id: "square_shima_aji_plate",
        imageSrc: "https://aaronhsushi.b-cdn.net/square_shima_aji_plate.jpeg",
        caption: "Shima-Aji (Trevally Jack) sashimi presentation plate",
    },
    {
        id: "nigiri_sawara_smoked_head",
        imageSrc:
            "https://aaronhsushi.b-cdn.net/nigiri_sawara_smoked_head.jpeg",
        caption:
            "Cherry-smoked Sawara (Spanish Mackerel) with grated daikon and scallions",
    },
    {
        id: "sashimi_sawara_smoked",
        imageSrc: "https://aaronhsushi.b-cdn.net/sashimi_sawara_smoked.jpeg",
        caption: "Sashimi plate of assorted smoked Sawara (Spanish Mackerel)",
    },
    {
        id: "nigiri_sawara_oroshi",
        imageSrc: "https://aaronhsushi.b-cdn.net/nigiri_sawara_oroshi.jpeg",
        caption: "Sawara (Spanish Mackerel) with grated daikon",
    },
    {
        id: "moosey",
        imageSrc: "https://aaronhsushi.b-cdn.net/moosey.jpeg",
        caption: "Complementary after-dinner cuddle sessions available",
    },
];

export const FindIdFromSrc = (src) => {
    const pattern = "b-cdn.net/(.*).jpeg";
    return src.match(pattern)[1];
};

export const GetImageById = (imageId) => {
    return find(GalleryImages, { id: imageId });
};

export const GetImageIndexById = (imageId) => {
    return findIndex(GalleryImages, { id: imageId });
};
