import { find, findIndex } from "lodash";

const CDN_BASE = "https://aaronhsushi.b-cdn.net/";

export const GalleryImages = [
    {
        id: "square_sashimi_medley",
        caption:
            "Sashimi Medley including Tuna, Salmon, Red Seabream and Spanish Mackerel",
    },
    {
        id: "square_kamasu_nigiri",
        caption: "Kamasu (Japanese Barracuda)",
    },
    {
        id: "square_uni_jp_gunkan",
        caption: "Hokkaido Uni",
    },
    {
        id: "square_salmon_nigiri_yuzu",
        caption: "Seared Salmon with yuzu-kosho",
    },
    {
        id: "square_ikura",
        caption: "Marinated Ikura (Salmon Roe)",
    },
    {
        id: "square_madai_nigiri_pickup",
        caption: "Kobujime Madai (kelp-cured Red Seabream)",
    },
    {
        id: "square_sakizuke_kabocha",
        caption:
            "Sakizuke - Fall appetizer specialties with Kabocha Japanese pumpkin",
    },
    {
        id: "square_shima_aji_plate",
        caption: "Shima-Aji (Trevally Jack) sashimi presentation plate",
    },
    {
        id: "square_kohada_nigiri",
        caption: "Kohada (Japanese Gizzard Shad) topped with grated ginger",
    },
    {
        id: "square_kinmedai_nigiri_yuzu",
        caption:
            "Kinmedai (Golden Eye Snapper) with Yuzu Kosho and grated Yuzu zest",
    },
    {
        id: "square_hotate_nigiri_uni",
        caption:
            "Hokkaido Hotate (scallops) topped with uni and black truffle salt",
    },
    {
        id: "square_chawanmushi",
        caption:
            "Chawanmushi (steamed egg custard) with shiitake mushrooms and ikura (salmon roe)",
    },
    {
        id: "square_fish_bonzaru",
        caption: "Fresh fish all imported from Japan",
    },
    {
        id: "square_sake",
        caption: "Complementary sake all provided by DC Sake",
    },
    {
        id: "square_me_action1",
        caption: "Enjoy a casual, but elevated sushi omakase experience",
    },
];

export const CommunityImages = [
    {
        id: "community1",
    },
    {
        id: "community2",
    },
    {
        id: "community4",
    },
    {
        id: "community7",
    },
    {
        id: "community9",
    },
    {
        id: "community8",
    },
    {
        id: "community10",
    },
    {
        id: "community16",
    },
    {
        id: "community11",
    },
    {
        id: "community13",
    },
    {
        id: "community12",
    },
    {
        id: "community14",
    },
    {
        id: "community15",
    },
    {
        id: "community5",
    },
    {
        id: "community6",
    },
];

export const GetImageById = (images, imageId) => {
    return find(images, { id: imageId });
};

export const GetImageIndexById = (images, imageId) => {
    return findIndex(images, { id: imageId });
};

export const GetFullImageSrc = (imageId, prefix) => {
    return CDN_BASE + (prefix || "") + imageId + ".jpeg";
};

export const GetThumbnailSrc = (imageId, prefix) => {
    const thumbWidth = getThumbnailWidth();
    const width = thumbWidth ? thumbWidth + "" : "";
    return CDN_BASE + (prefix || "") + imageId + "_thumb" + width + ".jpeg";
};

export const getThumbnailWidth = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 600) {
        return 360;
    } else {
        return 0; // use regular thumbnail
    }
};
