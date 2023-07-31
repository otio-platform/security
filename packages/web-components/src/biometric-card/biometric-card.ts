import { FASTElement, attr, observable, nullableNumberConverter } from '@microsoft/fast-element';
import { formValues } from '@open-wc/form-helpers';
import { densityItemContainer } from '@adaptive-web/adaptive-ui/reference';
import type { BiometricCardCallback, BiometricCardFormData } from './biometric-card.options.js';

export class BiometricCard extends FASTElement {
  /**
   * The placeholder content that gets passed to the internal mobile number text field.
   */
  @attr
  public placeholder: string = '';

  /**
   * The pattern attribute gets passed to the internal mobile number text field.
   * @remarks
   * This attribute matches the platform standard {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern | pattern} attribute on input elements.
   */
  @attr
  public pattern!: string;

  /**
   * The minlength attribute gets passed to the internal mobile number text field.
   * @remarks
   * This attribute matches the platform standard {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/minlength | minlength} attribute on input elements.
   */
  @attr({ converter: nullableNumberConverter })
  public minlength!: number;

  /**
   * The maxlength attribute gets passed to the internal mobile number text field.
   * @remarks
   * This attribute matches the platform standard {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/maxlength | maxlength} attribute on input elements.
   */
  @attr({ converter: nullableNumberConverter })
  public maxlength!: number;

  @observable
  public callback!: BiometricCardCallback;

  /**
   * @internal
   */
  @observable
  public form!: HTMLFormElement;

  /**
   * @internal
   */
  public handleSubmit(): void {
    const data = formValues(this.form) as BiometricCardFormData;

    this.callback?.(data);
    this.$emit(
      'biometric-request',
      data,
      {
        bubbles: false,
        composed: true,
        cancelable: true 
      }
     );
  }

  public connectedCallback(): void {
    densityItemContainer.horizontalPaddingUnits.setValueFor(this, 3);
    densityItemContainer.verticalPaddingUnits.setValueFor(this, 3);
    densityItemContainer.verticalGapUnits.setValueFor(this, 2);

    super.connectedCallback();
  }
}