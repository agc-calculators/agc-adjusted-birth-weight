
import { Component } from '@stencil/core';


@Component({
    tag: 'agc-adjusted-birth-weight-results-placeholder'
})
export class AgcAdjustedBirthWeightResultsPlaceholder {

    render() {
        const placeholder = () => <span><i class="mark"></i> <i class="mark"></i> <i class="mark"></i> <i class="mark"></i></span>

        return (
            <section>
                <ul class="agc-results-placeholder">
                    <li>
                        <h2 data-i18n="results.adjusted-birth-weight">Adjusted Birth Weight</h2>
                        {placeholder()}
                    </li>
                    <li>
                        <h2 data-i18n="results.adjustement">Adjustement</h2>
                        {placeholder()}
                    </li>                                      
                </ul>
            </section>
        );
    }
}