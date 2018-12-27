
import { Component, State, Event, EventEmitter, Prop } from '@stencil/core';
import { validate } from '../../utils';
//import { validate } from '../../utils';
// import { addDays, formatDate, inputDate, daysBetween } from '../../utils'

@Component({
    tag: 'agc-adjusted-birth-weight'
})
export class AgcAdjustedBirthWeight {

    @Prop() socket: string = ""
    @Prop() tract: string = ""
    @Prop() units: any = { weight: 'lbs' }
    @Prop() mode: 'full' | 'step' = 'step'
    @State() currentStep = 0
    @State() cache = {}
    @State() submitted = false
    @State() results = {}
    @Event({
        eventName: 'agcCalculated'
      }) agcCalculated: EventEmitter;
    @Event({
        eventName: 'agcStepChanged'
    }) agcStepChanged: EventEmitter;

    form: HTMLFormElement

    render() {
        return (
            <div>
                <form onSubmit={(e) => e.preventDefault()} ref={c => this.form = c as HTMLFormElement} data-wizard="agc-adjusted-birth-weight" 
                    data-wizard-mode={this.mode}
                    class="agc-wizard">
                    <slot></slot>
                    <section data-wizard-section="1">
                        <div class="agc-wizard__field">
                            <label data-i18n="birth-weight">Birth Weight</label>
                            <input name="birthWeight" type="number" required min="1" />
                            <p class="agc-wizard__validation-message" data-i18n="validation.birth-weight.required" data-validates="birthWeight">Please enter a valid weight of 1 or more.</p>
                            <p data-i18n={`hints.birth-weight-${this.units.weight}`}>⮤ Enter the birth weight in {this.units.weight}.</p>
                        </div>
                        <div class="agc-wizard__actions">
                            { this.mode === 'step' && <button class="agc-wizard__actions-next" data-i18n="actions.next" onClick={this.nextPrev.bind(this, 1)}>Next 🠖</button>}
                        </div>
                    </section>
                    <section data-wizard-section="2">
                        <div class="agc-wizard__field">
                            <label data-i18n="fields.age-of-dam">Age of Dam</label>
                            <select name="ageOfDam">
                                <option value="2" data-i18n="options.age-of-dam.2">2 years old</option>
                                <option value="3" data-i18n="options.age-of-dam.3">3 years old</option>
                                <option value="4" data-i18n="options.age-of-dam.4">4 years old</option>
                                <option value="5" data-i18n="options.age-of-dam.5">5 - 10 years old</option>
                                <option value="11" data-i18n="options.age-of-dam.11">Over 10 years old</option>
                            </select>
                            <p data-i18n="hints.age-of-dam">⮤ Select the age of the dam.</p>
                        </div>
                        <div class="agc-wizard__actions">
                            {this.mode === 'step' && <button class="agc-wizard__actions-back" data-i18n="actions.back" onClick={this.nextPrev.bind(this, -1)}>🠔 Back</button>}
                            <button class="agc-wizard__actions-next" data-i18n="actions.finish" onClick={this.nextPrev.bind(this, this.mode === 'step' ? 1 : 2)}>Calculate 🠖</button>
                        </div>
                    </section>
                    <section data-wizard-results>                        
                        <slot name="results"></slot>                     
                    </section>
                </form>
            </div>
        );
    }

    showTab(n) {
        // This function will display the specified section of the form... 
        if (this.mode === 'step') {       
            this.cache['sections'][n].style.display = "block";
        }

        if (this.socket) {
            this.agcStepChanged.emit({socket: this.socket, tract: this.tract, step: this.currentStep})
        }
    }

    reset() {
        this.currentStep = 0
        this.submitted = false
        this.showTab(0)
    }

    validateForm () {
        let valid = true;

        if (this.currentStep === 0 || this.mode === 'full') {
            if (!validate(this.form, 'birthWeight')) {
                valid = false
            }
        }
        

        return valid;
    }

    nextPrev(n, e) {
        e && e.preventDefault()
        if (this.mode === 'full') {
            if (!this.validateForm()) return false
        } else if (n == 1 && !this.validateForm()) return false

        // Hide the current tab:
        if (this.mode === 'step') {
            this.cache['sections'][this.currentStep].style.display = "none"
        }
        // Increase or decrease the current tab by 1:
        this.currentStep = this.currentStep + n
        // if you have reached the end of the form...
        if (this.currentStep >= this.cache['sections'].length) {
            // ... the form gets submitted:
            this.submitted = true
            this.showResults.call(this);
            return false;
        }
        // Otherwise, display the correct tab:
        this.showTab.call(this, this.currentStep);
    }

    showResults() {

        const adjustments = { "2": 8, "3": 5, "4": 2, "5": 0, "11": 3 }

        let birthWeight =  parseFloat((this.form.querySelector('[name="birthWeight"') as HTMLInputElement).value);
        let ageOfDam = (this.form.querySelector('[name="ageOfDam') as HTMLSelectElement).value;
        let adjustment = parseFloat(adjustments[ageOfDam]);
        let adjustedBirthWeight = parseInt((birthWeight + adjustment).toFixed(0))

        let results = {
            socket: this.socket,
            tract: this.tract,
            birthWeight,
            ageOfDam,
            adjustment,
            adjustedBirthWeight,
            units: this.units
        }

        if (this.socket) {
            this.agcCalculated.emit({socket: this.socket, tract: this.tract, results: {...results}})
        }

        this.results = {...results}
        
        this.cache['results'].forEach(result => {
            result.style.display = 'block'
        })
    }

    handleAction(e:CustomEvent) {
        if (e.detail['action'] === 'reset') {
            this.reset();
        }
    }

    componentDidLoad() {
        var sections = Array.from(this.form.querySelectorAll('[data-wizard-section]')).map(c => c as any).map(c => c as HTMLElement)
        var results = Array.from(this.form.querySelectorAll('[data-wizard-results]')).map(c => c as any).map(c => c as HTMLElement)
        this.cache = {...this.cache, sections: sections, results: results}

        window.document.addEventListener('agcAction', this.handleAction.bind(this));

        (this.form.querySelector('[name="ageOfDam"]') as HTMLSelectElement).options[3].defaultSelected = true;

        this.showTab(0)
    }

    componentDidUnload() {
        window.document.removeEventListener('agcAction', this.handleAction);
    }
}