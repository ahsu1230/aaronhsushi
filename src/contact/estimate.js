import { includes } from "lodash";
import Additions from "./omakaseAdditionConstants.js";

const BASE_COST = 80;
const TEA_COST = 6;
const BASE_SAKE_COST = 5;

const ADDITIONAL_COSTS = {
    [Additions.UNI_US_EAST]: 40,
    [Additions.UNI_US_WEST]: 90,
    [Additions.UNI_JP]: 195,
    [Additions.SAKE_MIZUBASHO_GINJO]: 33 + BASE_SAKE_COST,
    [Additions.SAKE_NIWA_NO_UGUISU_60]: 31 + BASE_SAKE_COST,
    [Additions.SAKE_DEWAZAKURA_DEWASANSAN]: 41 + BASE_SAKE_COST,
    [Additions.SAKE_IZUMIBASHI_RAKUFUMAI]: 58 + BASE_SAKE_COST,
};

export const calculateEstimatePerGuest = (numGuests, omakaseAdditions) => {
    // Omakase per person usually includes:
    // 1 Amuse (3 dishes, $10)
    // 1 Sashimi (Katsuo + Madai + Shima)
    // 5 Nigiri (Madai, Shima, Salmon + 2 Seasonal)
    // 3 Nigiri (Hotate, BotanEbi, Ikura)
    // 1 Soup ($5)
    // 1 TamagoYaki ($5)

    // Base cost per person
    let subtotal = BASE_COST;

    // Additionals
    omakaseAdditions.forEach((addition) => {
        if (addition.indexOf("uni") >= 0) {
            subtotal += ADDITIONAL_COSTS[addition] / (numGuests + 1);
        } else {
            subtotal += ADDITIONAL_COSTS[addition] / numGuests;
        }
    });

    return Math.round(subtotal * 100) / 100;
};
