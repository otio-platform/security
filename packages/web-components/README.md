# @trans-stat/auth-components
Web Components built with FAST for easy user authentication UX.

> NOTE: This package is still early in development. Expect breaking API changes often until the package reaches a stable 1.0.0 release.

> NOTE: This library is meant to be used in conjuction with the backend packages published from [tas-security](https://github.com/trans-stat/tas-security).
While these frontend Web Components can be used without the backend packages, they will work best as a fullstack solution.

## installation
### npm
```shell
npm install @trans-stat/auth-components
```
### yarn
```shell
yarn add @trans-stat/auth-components
```

## Usage
### Configuring vscode intellisense for Web Components
Add a `.vscode/settings.json` file to the root of your repository and set the html and css custom data paths to point to the auth-component's custom data files.
```json
{
  "html.customData": [
    "node_modules/@trans-stat/auth-components/dist/html-custom-data.json"
  ],
  "css.customData": [
    "node_modules/@trans-stat/auth-components/dist/css-custom-data.json"
  ]
}
```

### `<biometric-card>`
> NOTE: This element is intended to be used with the `@trans-stat/biometrics` package in the backend.
These two packages create a fullstack wrapper for [iValt's](https://ivalt.com) biometrics API
1. Define the component with the platform
```ts
import '@trans-stat/auth-components/biometric-card';
```
2. Add the element to your markup.
```html
<biometric-card id="bio-card"></biometric-card>
```
3. hook into the element to send its data to your backend.
```ts
import type { BiometricCard } from '@trans-stat/auth-components';

const bioCard = document.getElementById('bio-card') as BiometricCard;

/**
* The element provides two different hooks depending on your needs.
* The first hook is a callback property that the element calls when the submit button is clicked.
* The second hook is a custom event called `biometric-request` that gets emitted when the submit button is clicked.
*
* Both methods get passed the element's form data.
* 
* How you handle the request to your backend and the resulting response is entirely up to you and your choice of frameworks.
*/

// Option 1. custom callback
bioCard.callback = async (formData) => {
  const response = await fetch(
    '/my-app-biometrics-endpoint',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }
  );
}

// Option 2. event handler
bioCard.addEventListener('biometric-request', async (event: CustomEvent<{ mobileNumber: string }>) => {
  const response = await fetch(
    '/my-app-biometrics-endpoint',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event.detail)
    }
  );
});
```