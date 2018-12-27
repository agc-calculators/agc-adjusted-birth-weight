/*! Built with http://stenciljs.com */
import { h } from '../agc-adjusted-birth-weight.core.js';

class AgcAdjustedBirthWeightResultsPlaceholder {
    render() {
        const placeholder = () => h("span", null,
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }));
        return (h("section", null,
            h("ul", { class: "agc-results-placeholder" },
                h("li", null,
                    h("h2", { "data-i18n": "results.adjusted-birth-weight" }, "Adjusted Birth Weight"),
                    placeholder()),
                h("li", null,
                    h("h2", { "data-i18n": "results.adjustement" }, "Adjustement"),
                    placeholder()))));
    }
    static get is() { return "agc-adjusted-birth-weight-results-placeholder"; }
}

export { AgcAdjustedBirthWeightResultsPlaceholder };
