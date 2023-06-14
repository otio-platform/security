export namespace MFA {
  export const Routes = {
    request: 'biometric-auth-request',
    result: 'biometric-auth-result'
  } as const;
  
  export type Routes = typeof Routes[keyof typeof Routes];
  
  export type Data<T> = {
    status: boolean;
    message: string;
    details: null | T;
  }
  
  export type Error = {
    type: string;
    title: string;
    status: number;
    detail: string;
    instance: string;
  }
  
  /**
   * @internal
   */
  type Debug = {
    timestamp: Date | string;
    activityId: string;
  }
  
  export type ResultDetails = {
    id: number;
    name: string;
    email: string;
    country_code: string;
    mobile: string;
    latitude: number;
    longitude: number;
    imei: string;
    address: string;
  }
  
  export type Response<T> = {
    data: Data<T>;
    error: Error;
    debug: Debug;
  }
  
  export interface Client {
    biometricAuthRequest(mobile: string): Promise<Response<null>>;
    biometricAuthResult(mobile: string): Promise<Response<ResultDetails>>;
  }
}


export class MFAClient implements MFA.Client {
  /**
   * @private
   */
  #API_KEY: string;

  /**
   * @private
   */
  #API_HEADERS!: Record<string, string>;
  
  /**
   * @private
   */
  static BASE_URL: string = 'https://api.ivalt.com';

  constructor(apiKey: string) {
    this.#API_KEY = apiKey;
    this.#API_HEADERS = {
      'X-API-Key': this.#API_KEY,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  /**
   * @public
   */
  public async biometricAuthRequest(mobile: string): Promise<MFA.Response<null>> {
    const response = await fetch(`${MFAClient.BASE_URL}/${MFA.Routes.request}`, {
      headers: this.#API_HEADERS,
      body: new URLSearchParams({ mobile })
    });
    
    return response.json() as Promise<MFA.Response<null>>;
  }

  /**
   * @public
   */
  public async biometricAuthResult(mobile: string): Promise<MFA.Response<MFA.ResultDetails>> {
    const response = await fetch(`${MFAClient.BASE_URL}/${MFA.Routes.result}`, {
      headers: this.#API_HEADERS,
      body: new URLSearchParams({ mobile })
    });

    return response.json() as Promise<MFA.Response<MFA.ResultDetails>>;
  }
}