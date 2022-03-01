import "./contact.sass";
import React from "react";
import { includes } from "lodash";
import Additions from "./omakaseAdditionConstants.js";
import { ADDITIONAL_COSTS } from "./estimate.js";

export default class ContactFormAdditions extends React.Component {
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
                        "Sake - Mizubasho Ginjo " +
                        getPriceString(
                            ADDITIONAL_COSTS[Additions.SAKE_MIZUBASHO_GINJO]
                        )
                    }
                    description={
                        "Medium body and fruity notes. Pairs well with seafood."
                    }
                    fieldName={Additions.SAKE_MIZUBASHO_GINJO}
                    value={isChecked(
                        omakaseAdditions,
                        Additions.SAKE_MIZUBASHO_GINJO
                    )}
                    onChange={this.props.onChangeAddition}
                />
                <FormCheckbox
                    title={
                        "Sake - Niwa No Uguisu 60 Junmai Ginjo " +
                        getPriceString(
                            ADDITIONAL_COSTS[Additions.SAKE_NIWA_NO_UGUISU_60]
                        )
                    }
                    description={
                        "A fresh and aromatic Junmai Ginjo with a crisp, vibrant melon flavor."
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
                        'Sake - Dewazakura "Dewasansan" Junmai Ginjo ' +
                        getPriceString(
                            ADDITIONAL_COSTS[
                                Additions.SAKE_DEWAZAKURA_DEWASANSAN
                            ]
                        )
                    }
                    description={
                        "Balanced, floral, with a light, smooth fruity essence."
                    }
                    fieldName={Additions.SAKE_DEWAZAKURA_DEWASANSAN}
                    value={isChecked(
                        omakaseAdditions,
                        Additions.SAKE_DEWAZAKURA_DEWASANSAN
                    )}
                    onChange={this.props.onChangeAddition}
                />
                <FormCheckbox
                    title={
                        "Sake - Izumibashi Akitonbo Rakufumai " +
                        getPriceString(
                            ADDITIONAL_COSTS[
                                Additions.SAKE_IZUMIBASHI_RAKUFUMAI
                            ]
                        )
                    }
                    description={
                        "Light, airy, semi-dry. Easy to drink for any occasion."
                    }
                    fieldName={Additions.SAKE_IZUMIBASHI_RAKUFUMAI}
                    value={isChecked(
                        omakaseAdditions,
                        Additions.SAKE_IZUMIBASHI_RAKUFUMAI
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
                        "Tea - Valley Brook Oolong " +
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
                        "Tea - Valley Brook Black " +
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

function getPriceString(price) {
    return "(+$" + price + ")";
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
