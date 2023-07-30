import { customElement } from '@microsoft/fast-element';
import { cardDefinition } from '@adaptive-web/adaptive-web-components/card';
import { textFieldDefinition } from '@adaptive-web/adaptive-web-components/text-field';
import { buttonDefinition } from '@adaptive-web/adaptive-web-components/button';
import { BiometricCard as T } from './biometric-card.js';
import { biometricCardTemplate } from './biometric-card.template.js';
import { biometricCardStyles } from './biometric-card.styles.js';

/**
 * @tag biometric-card
 * @summary The `<biometric-card>` element can be used to send biometric requests for a given user's mobile phone number to iValt's API.
 * This component **only** handles the UX for capturing the user's mobile number and does not handle communication with an application's backend.
 * 
 * @fires biometric-request - A custom event that contains the form's data.
 * 
 * @prop callback - A custom callback that gets called when the card's form is submitted.
 * The callback is passed the form's data.
 * 
 * @slot header - Custom content slot **before** the card's internal form.
 * @slot mobile-number-label - The label for the card's mobile number field.
 * @slot - The default slot for the card. This slot can be used to insert additional html between the mobile number field and the submit button.
 * Additional form controls **cannot** be passed this way as form association does not work across document boundaries.
 * @slot submit-button-content - The submit button's content.
 * @slot footer - Custom content slot **after** the card's internal form.
 * 
 * @part card - The card element. The container for the form and the header and footer slots.
 * @part form - The form element.
 * @part mobile-number - The text field for capturing the user's mobile phone number.
 * @part mobile-number__control - The mobile number field's internal control element.
 * @part submit-button - The button used for submitting the form.
 * @part submit-button__control - The submit button's internal control element.
 */
@customElement({
  name: 'biometric-card',
  template: biometricCardTemplate({
    card: cardDefinition,
    textField: textFieldDefinition,
    button: buttonDefinition,
    mobileNumberLabel: 'mobile phone',
    submitButtonContent: 'send request'
  }),
  styles: biometricCardStyles
})
// This is setup this way because CEM looks for the @customElement decorator and the decorator must be used on a class declaration.
// @ts-ignore
class BiometricCard extends T {}