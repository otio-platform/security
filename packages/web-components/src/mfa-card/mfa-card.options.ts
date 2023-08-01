import type { SyntheticViewTemplate } from '@microsoft/fast-element';
import type { StaticallyComposableHTML, TemplateElementDependency } from '@microsoft/fast-foundation'

/**
 * @public
 */
export type MFACardTemplateOptions = {
  card: TemplateElementDependency;
  textField: TemplateElementDependency;
  button: TemplateElementDependency;
  mobileNumberLabel?: string | StaticallyComposableHTML | SyntheticViewTemplate;
  submitButtonContent?: string | StaticallyComposableHTML | SyntheticViewTemplate;
}

/**
 * @internal
 */
export type MFACardFormData = {
  mobile: string;
};

/**
 * @public
 */
export type MFACardCallback = <T = any>(data: MFACardFormData) => T;