import Additions from "./omakaseAdditionConstants.js";

const BASE_COST = 105;
const BASE_TEA_COST = 5;
const BASE_SAKE_COST = 10;

export const ADDITIONAL_COSTS = {
    [Additions.UNI_US_EAST]: 40,
    [Additions.UNI_US_WEST]: 80,
    [Additions.UNI_JP]: 200,
    [Additions.SAKE_MIZUBASHO_GINJO]: 33 + BASE_SAKE_COST,
    [Additions.SAKE_KUBOTA_SENJU]: 34 + BASE_SAKE_COST,
    [Additions.SAKE_NIWA_NO_UGUISU_60]: 31 + BASE_SAKE_COST,
    [Additions.SAKE_GINBAN_BANSHU_50]: 40 + BASE_SAKE_COST,
    [Additions.SAKE_PREMIUM_SWEET]: 45 + BASE_SAKE_COST,
    [Additions.SAKE_PREMIUM_DRY]: 55 + BASE_SAKE_COST,
    [Additions.TEA_VB_OOLONG]: BASE_TEA_COST + 1,
    [Additions.TEA_VB_BLACK]: BASE_TEA_COST + 1,
    [Additions.TEA_VB_GREEN]: BASE_TEA_COST + 1,
    [Additions.TEA_GENMAICHA]: BASE_TEA_COST,
    [Additions.TEA_HOJICHA]: BASE_TEA_COST,
};

export const calculateEstimatePerGuest = (numGuests, omakaseAdditions) => {
    const subtotal =
        calculateFinalEstimate(numGuests, omakaseAdditions) / numGuests;
    return Math.round(subtotal * 100) / 100;
};

export const calculateFinalEstimate = (numGuests, omakaseAdditions) => {
    // Base cost
    let subtotal = BASE_COST * numGuests;

    // Additionals
    omakaseAdditions.forEach((addition) => {
        if (addition.indexOf("tea") == 0) {
            // Tea is bought per guest
            subtotal += ADDITIONAL_COSTS[addition] * numGuests;
        } else {
            // Uni tray or sake bottle is bought for whole party
            subtotal += ADDITIONAL_COSTS[addition];
        }
    });

    return Math.round(subtotal * 100) / 100;
};
