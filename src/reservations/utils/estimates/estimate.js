import Additions from "../additions/omakaseAdditions.js";
import Constants from "../../reserveConstants.js";

const BASE_COST = 105;
const BASE_CATERING_COST = 175;
const ADD_COST_LARGE_PARTY = 4;
const ADD_COST_LARGE_PARTY_CATERING = 10;
const BASE_TEA_COST = 5;
const BASE_SAKE_COST = 10;

export const ADDITIONAL_COSTS = {
    // [Additions.UNI_US_EAST]: 40,
    // [Additions.UNI_US_WEST]: 80,
    [Additions.UNI_JP]: 200,
    [Additions.SAKE_GENERAL]: 50,
    [Additions.TEA_GENERAL]: 5,
    // [Additions.SAKE_MIZUBASHO_GINJO]: 33 + BASE_SAKE_COST,
    // [Additions.SAKE_KUBOTA_SENJU]: 34 + BASE_SAKE_COST,
    // [Additions.SAKE_NIWA_NO_UGUISU_60]: 31 + BASE_SAKE_COST,
    // [Additions.SAKE_GINBAN_BANSHU_50]: 40 + BASE_SAKE_COST,
    // [Additions.SAKE_PREMIUM_SWEET]: 45 + BASE_SAKE_COST,
    // [Additions.SAKE_PREMIUM_DRY]: 55 + BASE_SAKE_COST,
    // [Additions.TEA_VB_OOLONG]: BASE_TEA_COST,
    // [Additions.TEA_VB_BLACK]: BASE_TEA_COST,
    // [Additions.TEA_VB_GREEN]: BASE_TEA_COST,
    // [Additions.TEA_GENMAICHA]: BASE_TEA_COST,
    // [Additions.TEA_HOJICHA]: BASE_TEA_COST,
};

export const calculateEstimatePerGuest = (
    view,
    numGuests,
    omakaseAdditions
) => {
    const subtotal =
        calculateFinalEstimate(view, numGuests, omakaseAdditions) / numGuests;
    return Math.round(subtotal * 100) / 100;
};

export const calculateFinalEstimate = (view, numGuests, omakaseAdditions) => {
    // Base cost
    const baseCost =
        view == Constants.VIEW_DINE_IN ? BASE_COST : BASE_CATERING_COST;
    let subtotal = 0;
    if (numGuests >= 5) {
        subtotal =
            (baseCost +
                (view == Constants.VIEW_DINE_IN
                    ? ADD_COST_LARGE_PARTY
                    : ADD_COST_LARGE_PARTY_CATERING)) *
            numGuests;
    } else {
        subtotal = baseCost * numGuests;
    }

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
