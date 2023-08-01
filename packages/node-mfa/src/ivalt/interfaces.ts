export namespace IVALT {
  export const Routes = {
    request: 'biometric-auth-request',
    result: 'biometric-auth-result'
  } as const;

  export type Routes = typeof Routes[keyof typeof Routes];

  export type Data<T> = {
    status: boolean;
    message: string;
    details: null | T;
  };

  export type Error = {
    type: string;
    title: string;
    status: number;
    detail: string;
    instance: string;
  };

  /**
   * @internal
   */
  export type Debug = {
    timestamp: Date | string;
    activityId: string;
  };

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
  };

  export type Response<T> = {
    data: Data<T>;
    error: Error;
    debug: Debug;
  };

  export interface Client {
    biometricAuthRequest(mobile: string): Promise<Response<null>>;
    biometricAuthResult(mobile: string): Promise<Response<ResultDetails>>;
  }
}