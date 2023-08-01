# @trans-stat/node-mfa
A simple node.js wrapper for the [iValt](https://ivalt.com/) biometric authentication API

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
npm install @trans-stat/node-mfa
```

### yarn
```shell
yarn add @trans-stat/node-mfa
```

## Usage
### iValt API Wrapper
1. Make sure you have downloaded the iValt app on your mobile phone and followed the onboarding process there.
2. Add a `.env` file with your iValt API key
```yml
IVALT_API_KEY=YOUR_API_KEY_HERE
```
3. Import the `IValtClient` class and instantiate it with your api key.
```ts
import { IValtClient } from '@trans-stat/node-mfa/ivalt';
import process from 'node:process';

const ivaltClient = new IValtClient(process.env.IVALT_API_KEY);
```
4. Use the `IValtClient` to make calls to the iValt API. This can be easily integrated in your preferred node.js framework.
5. To send an authentication request, call the `biometricAuthRequest` method and pass the phone number of the user being authenticated.
```ts
ivaltClient.biometricAuthRequest('+1234567890');
```
6. To check the status of the request, call the `biometricAuthResult` method and pass the same phone number that was passed to the previous requst.
```ts
ivaltClient.biometricAuthResult('+1234567890');
```

> NOTE: In order to reduce network traffic between the client and server it is recommended that you
implement the calls to both these methods in the same endpoint that gets exposed to the client.
This way your client only needs to send a post request to a single endpoint and expect the result of the `biometricAuthResult` request after the user has authenticated on their device.