const COST_UNI_US = 65;
const COST_UNI_JP = 140;
const COST_SALMON = 40;
const COST_SEASONAL = 50;
const COST_TUNA = 80; // cost for maguro, chutoro, otoro (~2 saku)

export const calculateEstimatePerGuest = (
    numGuests,
    wantsUniUS,
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
    const presplitDivisor = numGuests <= 2 ? 2 : 1.5;

    let subtotal = costAmuse + costFrozen + costMiso;
    subtotal += wantsUniUS
        ? COST_UNI_US / presplitDivisor / (numGuests + 1)
        : 0;
    subtotal += wantsUniJP
        ? COST_UNI_JP / presplitDivisor / (numGuests + 1)
        : 0;
    if (wantsToro) {
        subtotal += COST_TUNA / (numGuests + 1);
        subtotal += (COST_SEASONAL * 1) / presplitDivisor / (numGuests + 1);
    } else {
        subtotal += COST_SALMON / 2 / (numGuests + 1);
        subtotal += (COST_SEASONAL * 2) / presplitDivisor / (numGuests + 1);
    }
    return Math.round(subtotal * 100) / 100;
};
