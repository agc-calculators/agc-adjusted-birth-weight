
// AgcAdjustedBirthWeight: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './agc-adjusted-birth-weight.core.js';
import {
  AgcAdjustedBirthWeight,
  AgcAdjustedBirthWeightProgress,
  AgcAdjustedBirthWeightResults,
  AgcAdjustedBirthWeightResultsPlaceholder
} from './agc-adjusted-birth-weight.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    AgcAdjustedBirthWeight,
    AgcAdjustedBirthWeightProgress,
    AgcAdjustedBirthWeightResults,
    AgcAdjustedBirthWeightResultsPlaceholder
  ], opts);
}
