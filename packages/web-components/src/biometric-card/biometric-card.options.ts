import type { SyntheticViewTemplate } from '@microsoft/fast-element';
import type { StaticallyComposableHTML, TemplateElementDependency } from '@microsoft/fast-foundation'

/**
 * @public
 */
export type BiometricCardTemplateOptions = {
  card: TemplateElementDependency;
  textField: TemplateElementDependency;
  button: TemplateElementDependency;
  mobileNumberLabel?: string | StaticallyComposableHTML | SyntheticViewTemplate;
  submitButtonContent?: string | StaticallyComposableHTML | SyntheticViewTemplate;
}

/**
 * @internal
 */
export type BiometricCardFormData = {
  mobile: string;
};

/**
 * @public
 */
export type BiometricCardCallback = <T = any>(data: BiometricCardFormData) => T;