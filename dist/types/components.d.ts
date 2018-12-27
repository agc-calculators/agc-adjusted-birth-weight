/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';




export namespace Components {

  interface AgcAdjustedBirthWeightProgress {
    'socket': string;
  }
  interface AgcAdjustedBirthWeightProgressAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcAdjustedBirthWeightResultsPlaceholder {}
  interface AgcAdjustedBirthWeightResultsPlaceholderAttributes extends StencilHTMLAttributes {}

  interface AgcAdjustedBirthWeightResults {
    'socket': string;
  }
  interface AgcAdjustedBirthWeightResultsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcAdjustedBirthWeight {
    'mode': 'full' | 'step';
    'socket': string;
    'tract': string;
    'units': any;
  }
  interface AgcAdjustedBirthWeightAttributes extends StencilHTMLAttributes {
    'mode'?: 'full' | 'step';
    'onAgcCalculated'?: (event: CustomEvent) => void;
    'onAgcStepChanged'?: (event: CustomEvent) => void;
    'socket'?: string;
    'tract'?: string;
    'units'?: any;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AgcAdjustedBirthWeightProgress': Components.AgcAdjustedBirthWeightProgress;
    'AgcAdjustedBirthWeightResultsPlaceholder': Components.AgcAdjustedBirthWeightResultsPlaceholder;
    'AgcAdjustedBirthWeightResults': Components.AgcAdjustedBirthWeightResults;
    'AgcAdjustedBirthWeight': Components.AgcAdjustedBirthWeight;
  }

  interface StencilIntrinsicElements {
    'agc-adjusted-birth-weight-progress': Components.AgcAdjustedBirthWeightProgressAttributes;
    'agc-adjusted-birth-weight-results-placeholder': Components.AgcAdjustedBirthWeightResultsPlaceholderAttributes;
    'agc-adjusted-birth-weight-results': Components.AgcAdjustedBirthWeightResultsAttributes;
    'agc-adjusted-birth-weight': Components.AgcAdjustedBirthWeightAttributes;
  }


  interface HTMLAgcAdjustedBirthWeightProgressElement extends Components.AgcAdjustedBirthWeightProgress, HTMLStencilElement {}
  var HTMLAgcAdjustedBirthWeightProgressElement: {
    prototype: HTMLAgcAdjustedBirthWeightProgressElement;
    new (): HTMLAgcAdjustedBirthWeightProgressElement;
  };

  interface HTMLAgcAdjustedBirthWeightResultsPlaceholderElement extends Components.AgcAdjustedBirthWeightResultsPlaceholder, HTMLStencilElement {}
  var HTMLAgcAdjustedBirthWeightResultsPlaceholderElement: {
    prototype: HTMLAgcAdjustedBirthWeightResultsPlaceholderElement;
    new (): HTMLAgcAdjustedBirthWeightResultsPlaceholderElement;
  };

  interface HTMLAgcAdjustedBirthWeightResultsElement extends Components.AgcAdjustedBirthWeightResults, HTMLStencilElement {}
  var HTMLAgcAdjustedBirthWeightResultsElement: {
    prototype: HTMLAgcAdjustedBirthWeightResultsElement;
    new (): HTMLAgcAdjustedBirthWeightResultsElement;
  };

  interface HTMLAgcAdjustedBirthWeightElement extends Components.AgcAdjustedBirthWeight, HTMLStencilElement {}
  var HTMLAgcAdjustedBirthWeightElement: {
    prototype: HTMLAgcAdjustedBirthWeightElement;
    new (): HTMLAgcAdjustedBirthWeightElement;
  };

  interface HTMLElementTagNameMap {
    'agc-adjusted-birth-weight-progress': HTMLAgcAdjustedBirthWeightProgressElement
    'agc-adjusted-birth-weight-results-placeholder': HTMLAgcAdjustedBirthWeightResultsPlaceholderElement
    'agc-adjusted-birth-weight-results': HTMLAgcAdjustedBirthWeightResultsElement
    'agc-adjusted-birth-weight': HTMLAgcAdjustedBirthWeightElement
  }

  interface ElementTagNameMap {
    'agc-adjusted-birth-weight-progress': HTMLAgcAdjustedBirthWeightProgressElement;
    'agc-adjusted-birth-weight-results-placeholder': HTMLAgcAdjustedBirthWeightResultsPlaceholderElement;
    'agc-adjusted-birth-weight-results': HTMLAgcAdjustedBirthWeightResultsElement;
    'agc-adjusted-birth-weight': HTMLAgcAdjustedBirthWeightElement;
  }


}