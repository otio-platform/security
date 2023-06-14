# @trans-stat/mfa
A simple node.js wrapper for the [iValt](https://ivalt.com/) biometric authentication API

## installation
### npm
```shell
npm install @trans-stat/mfa
```

### yarn
```shell
yarn add @trans-stat/mfa
```

## Usage
1. Make sure you have downloaded the iValt app on your mobile phone and followed the onboarding process there.
2. Add a `.env` file with your iValt API key
```yml
IVALT_API_KEY=YOUR_API_KEY_HERE
```
3. Import the `MFAClient` class and instantiate it with your api key.
```ts
import { MFAClient } from '@trans-stat/mfa';
import process from 'node:process';

const mfaClient = new MFAClient(process.env.IVALT_API_KEY);
```
4. Use the `mfaClient` to make calls to the iValt API. This can be easily integrated in your preferred node.js framework.
5. To send a authentication request, call the `biometricAuthRequest` method and pass the phone number of the user being authenticated.
```ts
mfaClient.biometricAuthRequest('+1234567890');
```
6. To check the status of the request, call the `biometricAuthResult` method and pass the same phone number that was passed to the previous requst.
```ts
mfaClient.biometricAuthResult('+1234567890');
```