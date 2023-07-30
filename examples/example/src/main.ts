import './style.css';
import { biometricCardDefinition } from '@trans-stat/auth-components';
import { AdaptiveDesignSystem } from '@adaptive-web/adaptive-web-components';
import { AllComponents } from '@adaptive-web/adaptive-web-components/all-components';
import { DesignToken } from '@microsoft/fast-foundation';
import { RenderInstruction } from '@microsoft/fast-element/render';
import { ExecutionContext } from '@microsoft/fast-element';

DesignToken.registerDefaultStyleTarget();

AdaptiveDesignSystem.defineComponents(AllComponents);

biometricCardDefinition.define();

const authCardtemplate = RenderInstruction.createElementTemplate('biometric-card', {
  attributes: {
    placeholder: 'mobile number',
    ':callback': () => (data) => console.log(data),
    '@biometric-request': (x,c) => console.log(c.event.detail)
  }
}).create();

authCardtemplate.bind({}, ExecutionContext.default);
authCardtemplate.appendTo(document.body);