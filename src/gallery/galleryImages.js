import { find, findIndex } from "lodash";

const CDN_BASE = "https://aaronhsushi.b-cdn.net/";

export const GalleryImages = [
    {
        id: "square_sashimi_medley",
        caption:
            "Sashimi Medley including Tuna, Salmon, Red Seabream and Spanish Mackerel",
    },
    {
        id: "square_kohada_nigiri",
        caption: "Kohada (Japanese Gizzard Shad) topped with grated ginger",
    },
    {
        id: "square_gunkan_uni",
        caption: "East coast Uni from Maine",
    },
    {
        id: "square_salmon_nigiri_seared_kosho",
        caption: "Seared Salmon with yuzu-kosho",
    },
    {
        id: "square_shima_aji_plate",
        caption: "Shima-Aji (Trevally Jack) sashimi presentation plate",
    },
    {
        id: "square_madai_nigiri_pickup",
        caption: "Kobujime Madai (kelp-cured Red Seabream)",
    },
    {
        id: "square_sawara_nigiri_smoked_head",
        caption:
            "Cherry-smoked Sawara (Spanish Mackerel) with spicy grated daikon",
    },
    {
        id: "square_tuna_nigiri",
        caption: "Maguro Tuna",
    },
    {
        id: "square_moosey",
        caption:
            "Complementary after-dinner cuddle sessions with Moose available :)",
    },
];

export const GetImageById = (imageId) => {
    return find(GalleryImages, { id: imageId });
};

export const GetImageIndexById = (imageId) => {
    return findIndex(GalleryImages, { id: imageId });
};

export const GetFullImageSrc = (imageId) => {
    return CDN_BASE + imageId + ".jpeg";
};

export const GetThumbnailSrc = (imageId) => {
    return CDN_BASE + imageId + "_thumb.jpeg";
};
