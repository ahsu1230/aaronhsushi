const COST_UNI_US_EAST = 30;
const COST_UNI_US_WEST = 65;
const COST_UNI_JP = 145;
const COST_SALMON = 20;
const COST_SEASONAL = 50;
const COST_TUNA = 10; // 1 saku (big eye tuna)
const COST_BLUE_FIN_TUNA = 120; // cost for maguro, chutoro, otoro (~3 saku)
const MINIMUM_ESTIMATE = 50;

export const calculateEstimatePerGuest = (
    numGuests,
    wantsUniUSEast,
    wantsUniUSWest,
    wantsUniJP,
    wantsToro
) => {
    // Omakase per person usually includes:
    // 1 edomame + amuse / unagi ($12 total)
    // 1 sashimi plate (1 salmon + 2 seasonal OR 2 tuna + 1 seasonal)
    // 4 nigiri (2 salmon + 2 seasonal OR 3 tuna + 1 seasonal)
    // 1 ikura ($5pp), 1 botan-ebi ($3pp), 1 scallop ($2pp) = total $10
    // 1 miso soup

    // These are costs per person
    const costAmuse = 5;
    const costFrozen = 10;
    const costMiso = 5;
    const presplitDivisor = numGuests <= 2 ? 2 : 1;
    let numSeasonal = wantsToro ? 1 : 2; // If toro, one seasonal. Otherwise 2 for normal omakase
    numSeasonal += numGuests <= 2 ? 0 : 1; // If more guests, add another seasonal.

    let subtotal = costAmuse + costFrozen + costMiso;
    subtotal += wantsUniUSEast ? COST_UNI_US_EAST / (numGuests + 1) : 0;
    subtotal += wantsUniUSWest ? COST_UNI_US_WEST / (numGuests + 1) : 0;
    subtotal += wantsUniJP ? COST_UNI_JP / (numGuests + 1) : 0;
    if (wantsToro) {
        subtotal += COST_BLUE_FIN_TUNA / (numGuests + 1);
        subtotal +=
            (COST_SEASONAL * numSeasonal) / presplitDivisor / (numGuests + 1);
    } else {
        subtotal += COST_SALMON / 2 / (numGuests + 1);
        subtotal +=
            (COST_SEASONAL * numSeasonal) / presplitDivisor / (numGuests + 1);
        subtotal += COST_TUNA / (numGuests + 1);
    }
    subtotal = Math.round(subtotal * 100) / 100; // round
    // return Math.max(subtotal, MINIMUM_ESTIMATE); // minimum
    return subtotal;
};
