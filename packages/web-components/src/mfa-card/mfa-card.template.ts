import {
  html,
  ref,
  type ElementViewTemplate
} from '@microsoft/fast-element';
import { tagFor } from '@microsoft/fast-foundation';
import type { MFACard } from './mfa-card.js';
import type { MFACardTemplateOptions } from './mfa-card.options.js';

export const mfaCardTemplate = <T extends MFACard>(options: MFACardTemplateOptions): ElementViewTemplate<T> => {
  const card = html.partial(tagFor(options.card));
  const textField = html.partial(tagFor(options.textField));
  const button = html.partial(tagFor(options.button));

  return html<T>`
    <${card} part="card">
      <slot name="header"></slot>
      <form
        ${ref('form')}
        @submit=${x => x.handleSubmit()}
        part="form"
      >
        <${textField}
          name="mobileNumber"
          part="mobile-number"
          exportparts="control:mobile-number__control"
          placeholder=${x => x.placeholder}
          minlength=${x => x.minlength}
          maxlength=${x => x.maxlength}
          pattern=${x => x.pattern}
        >
          <slot name="mobile-number-label">
            ${options.mobileNumberLabel ?? ''}
          </slot>
        </${textField}>
        <slot></slot>
        <${button}
          type="submit"
          part="submit-button"
          exportparts="control:submit-button__control"
        >
          <slot name="submit-button-content">
            ${options.submitButtonContent ?? ''}
          </slot>
        </${button}>
      </form>
      <slot name="footer"></slot>
    </${card}>
  `;
};