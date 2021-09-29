import { find, findIndex } from "lodash";

export const GalleryImages = [
    {
        id: "square_sashimi_medley",
        imageSrc: "https://aaronhsushi.b-cdn.net/square_sashimi_medley.jpeg",
        caption:
            "Sashimi Medley including Tuna, Salmon, Red Seabream and Spanish Mackerel",
    },
    {
        id: "square_kohada_nigiri",
        imageSrc: "https://aaronhsushi.b-cdn.net/square_kohada_nigiri.jpeg",
        caption: "Kohada (Japanese Gizzard Shad) topped with grated ginger",
    },
    {
        id: "square_gunkan_uni",
        imageSrc: "https://aaronhsushi.b-cdn.net/square_gunkan_uni.jpeg",
        caption: "Kohada (Japanese Gizzard Shad) topped with grated ginger",
    },
    {
        id: "square_salmon_nigiri_seared_kosho",
        imageSrc:
            "https://aaronhsushi.b-cdn.net/square_salmon_nigiri_seared_kosho.jpeg",
        caption: "Kohada (Japanese Gizzard Shad) topped with grated ginger",
    },
    {
        id: "square_shima_aji_plate",
        imageSrc: "https://aaronhsushi.b-cdn.net/square_shima_aji_plate.jpeg",
        caption: "Shima-Aji (Trevally Jack) sashimi presentation plate",
    },
    {
        id: "square_madai_nigiri_pickup",
        imageSrc:
            "https://aaronhsushi.b-cdn.net/square_madai_nigiri_pickup.jpeg",
        caption: "Kobujime Madai (kelp-cured Red Seabream)",
    },
    {
        id: "square_sawara_nigiri_smoked_head",
        imageSrc:
            "https://aaronhsushi.b-cdn.net/square_sawara_nigiri_smoked_head.jpeg",
        caption: "Kobujime Madai (kelp-cured Red Seabream)",
    },
    {
        id: "square_tuna_nigiri",
        imageSrc: "https://aaronhsushi.b-cdn.net/square_tuna_nigiri.jpeg",
        caption: "Kobujime Madai (kelp-cured Red Seabream)",
    },
    {
        id: "square_moosey",
        imageSrc: "https://aaronhsushi.b-cdn.net/square_moosey.jpeg",
        caption:
            "Complementary after-dinner cuddle sessions with Moose available :)",
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
