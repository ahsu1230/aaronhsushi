import "./reservations.sass";
import React from "react";
import { includes } from "lodash";
import Additions from "./utils/estimates/omakaseAdditionConstants.js";
import { ADDITIONAL_COSTS } from "./utils/estimates/estimate.js";

export default class ReserveFormAdditions extends React.Component {
    render() {
        const omakaseAdditions = this.props.omakaseAdditions;
        return (
            <section>
                <h4 className="additions">Omakase Additions</h4>
                <FormCheckbox
                    title={
                        "Uni - Maine " +
                        getPriceStringPerTray(
                            ADDITIONAL_COSTS[Additions.UNI_US_EAST]
                        )
                    }
                    fieldName={Additions.UNI_US_EAST}
                    value={isChecked(omakaseAdditions, Additions.UNI_US_EAST)}
                    onChange={this.props.onChangeAddition}
                />
                <FormCheckbox
                    title={
                        "Uni - Santa Barbara " +
                        getPriceStringPerTray(
                            ADDITIONAL_COSTS[Additions.UNI_US_WEST]
                        )
                    }
                    fieldName={Additions.UNI_US_WEST}
                    value={isChecked(omakaseAdditions, Additions.UNI_US_WEST)}
                    onChange={this.props.onChangeAddition}
                />
                <FormCheckbox
                    title={
                        "Uni - Hokkaido " +
                        getPriceStringPerTray(
                            ADDITIONAL_COSTS[Additions.UNI_JP]
                        )
                    }
                    fieldName={Additions.UNI_JP}
                    value={isChecked(omakaseAdditions, Additions.UNI_JP)}
                    onChange={this.props.onChangeAddition}
                />

                <h4 className="additions">Sake</h4>
                <FormCheckbox
                    title={
                        "Kubota Senju Ginjo " +
                        getPriceString(
                            ADDITIONAL_COSTS[Additions.SAKE_KUBOTA_SENJU]
                        )
                    }
                    description={
                        "A great beginner's Junmai Ginjo with a medium body and velvety texture."
                    }
                    fieldName={Additions.SAKE_KUBOTA_SENJU}
                    value={isChecked(
                        omakaseAdditions,
                        Additions.SAKE_KUBOTA_SENJU
                    )}
                    onChange={this.props.onChangeAddition}
                />
                <FormCheckbox
                    title={
                        "Niwa no Uguisu 60 Junmai Ginjo " +
                        getPriceString(
                            ADDITIONAL_COSTS[Additions.SAKE_NIWA_NO_UGUISU_60]
                        )
                    }
                    description={
                        "Fresh and aromatic with a crisp, vibrant melon flavor. Delicious beginner sake for those who enjoy sweet tones."
                    }
                    fieldName={Additions.SAKE_NIWA_NO_UGUISU_60}
                    value={isChecked(
                        omakaseAdditions,
                        Additions.SAKE_NIWA_NO_UGUISU_60
                    )}
                    onChange={this.props.onChangeAddition}
                />
                <FormCheckbox
                    title={
                        "Ginban Bansho Daiginjo " +
                        getPriceString(
                            ADDITIONAL_COSTS[Additions.SAKE_GINBAN_BANSHU_50]
                        )
                    }
                    description={
                        "A smooth and dry sake with grape tones and soft acidity. Easy to drink for any occasion and has many wine-like qualities."
                    }
                    fieldName={Additions.SAKE_GINBAN_BANSHU_50}
                    value={isChecked(
                        omakaseAdditions,
                        Additions.SAKE_GINBAN_BANSHU_50
                    )}
                    onChange={this.props.onChangeAddition}
                />
                <FormCheckbox
                    title={
                        "Chef's Choice Premium Sweet Sake " +
                        getPriceString(
                            ADDITIONAL_COSTS[Additions.SAKE_PREMIUM_SWEET],
                            "approx. "
                        )
                    }
                    description={
                        "A premium sake with a slightly sweet taste. " +
                        "Choices may be one of " +
                        "Fukuju Blue, Niwa no Uguisu 50 Daiginjo, Dewazakura Dewasansan or more!"
                    }
                    fieldName={Additions.SAKE_PREMIUM_SWEET}
                    value={isChecked(
                        omakaseAdditions,
                        Additions.SAKE_PREMIUM_SWEET
                    )}
                    onChange={this.props.onChangeAddition}
                />
                <FormCheckbox
                    title={
                        "Chef's Choice Premium Dry Sake " +
                        getPriceString(
                            ADDITIONAL_COSTS[Additions.SAKE_PREMIUM_DRY],
                            "approx. "
                        )
                    }
                    description={
                        "A premium sake with a slightly dry taste. " +
                        "Choices may be one of " +
                        "Izumibashi Rakufumai, Shichida Junmai, Yuho Yama-Oroshi, or more!"
                    }
                    fieldName={Additions.SAKE_PREMIUM_DRY}
                    value={isChecked(
                        omakaseAdditions,
                        Additions.SAKE_PREMIUM_DRY
                    )}
                    onChange={this.props.onChangeAddition}
                />
                <p>
                    For more Sake options, you may visit{" "}
                    <a href="https://dcsake.com/" target="_blank">
                        DC Sake
                    </a>{" "}
                    and include which sake you would like in the "Additional
                    Accomodation" section below.
                </p>
                <h4 className="additions">Tea</h4>
                <FormCheckbox
                    title={
                        "Valley Brook Oolong " +
                        getPriceStringPerPerson(
                            ADDITIONAL_COSTS[Additions.TEA_VB_OOLONG]
                        )
                    }
                    description={
                        "Huang Guan Yin (Yellow Goddess) has a floral, medium-body roast and a balanced taste."
                    }
                    fieldName={Additions.TEA_VB_OOLONG}
                    value={isChecked(omakaseAdditions, Additions.TEA_VB_OOLONG)}
                    onChange={this.props.onChangeAddition}
                />
                <FormCheckbox
                    title={
                        "Valley Brook Black " +
                        getPriceStringPerPerson(
                            ADDITIONAL_COSTS[Additions.TEA_VB_BLACK]
                        )
                    }
                    description={
                        "Scent of Longan has a sweet, honey-like aroma and a stunning amber color."
                    }
                    fieldName={Additions.TEA_VB_BLACK}
                    value={isChecked(omakaseAdditions, Additions.TEA_VB_BLACK)}
                    onChange={this.props.onChangeAddition}
                />
                <FormCheckbox
                    title={
                        "Valley Brook Green " +
                        getPriceStringPerPerson(
                            ADDITIONAL_COSTS[Additions.TEA_VB_GREEN]
                        )
                    }
                    description={
                        "Dragon Well has an iconic tender green color with a prominent bean aroma."
                    }
                    fieldName={Additions.TEA_VB_GREEN}
                    value={isChecked(omakaseAdditions, Additions.TEA_VB_GREEN)}
                    onChange={this.props.onChangeAddition}
                />
                <p>
                    For more Tea options, you may visit{" "}
                    <a href="https://www.valleybrooktea.com/" target="_blank">
                        Valley Brook Tea
                    </a>{" "}
                    and include which tea you would like in the "Additional
                    Accomodation" section below.
                </p>
            </section>
        );
    }
}

function isChecked(omakaseAdditions, fieldName) {
    return includes(omakaseAdditions, fieldName);
}

function getPriceString(price, prefix, suffix) {
    const pre = prefix || "";
    const post = suffix || "";
    return "(" + pre + "+$" + price + post + ")";
}

function getPriceStringPerTray(price) {
    return "(+$" + price + "/tray)";
}

function getPriceStringPerPerson(price) {
    return "(+$" + price + "/person)";
}

function FormCheckbox(props) {
    const classNames = ["form-input checkbox", props.classLabel].join(" ");
    return (
        <div className={classNames}>
            <input
                type="checkbox"
                value={Boolean(props.value) || false}
                checked={Boolean(props.value) || false}
                onChange={(e) => props.onChange(props.fieldName)}
            />
            <div className="label">
                <h4>{props.title}</h4>
                {props.description && <h5>{props.description}</h5>}
            </div>
        </div>
    );
}
