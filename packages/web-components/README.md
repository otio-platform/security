# @trans-stat/auth-components
Web Components built with FAST for easy user authentication UX.

> NOTE: This package is still early in development. Expect breaking API changes often until the package reaches a stable 1.0.0 release.

> NOTE: This library is meant to be used in conjuction with the backend package published from [tas-security](https://github.com/trans-stat/tas-security).
While these frontend Web Components can be used without the backend package, they will work best as a fullstack solution.

## installation
Before installing, you will need to configure npm to point the `@trans-stat` scope to the GitHub Packages registry.
### With the CLI
```shell
npm config set @trans-stat:registry https://npm.pkg.github.com
```

### With `.npmrc`
```yml
@trans-stat:registry=https://npm.pkg.github.com
```

After configuring the registry settings, install normally

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

### `<mfa-card>`
> NOTE: This element is intended to be used with the `@trans-stat/node-mfa` package in the backend.
These two packages create a fullstack wrapper for [iValt's](https://ivalt.com) multifact authentication API
1. Define the component with the platform
```ts
import '@trans-stat/auth-components/mfa-card';
```
2. Add the element to your markup.
```html
<mfa-card id="mfa-card"></mfa-card>
```
3. hook into the element to send its data to your backend.
```ts
import type { MFACard } from '@trans-stat/auth-components';

const mfaCard = document.getElementById('mfa-card') as MFACard;

/**
* The element provides two different hooks depending on your needs.
* The first hook is a callback property that the element calls when the submit button is clicked.
* The second hook is a custom `changed` event that gets emitted when the submit button is clicked.
*
* Both methods get passed the element's form data.
* 
* How you handle the request to your backend and the resulting response is entirely up to you and your choice of frameworks.
*/

// Option 1. custom callback
bioCard.callback = async (formData) => {
  const response = await fetch(
    '/my-app-mfa-endpoint',
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
bioCard.addEventListener('changed', async (event: CustomEvent<{ mobileNumber: string }>) => {
  const response = await fetch(
    '/my-app-mfa-endpoint',
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