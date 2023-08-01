import { IVALT } from './interfaces.js';

export class IValtClient implements IVALT.Client {
  /**
   * @private
   */
  #BASE_URL: string = 'https://api.ivalt.com';

  /**
   * @private
   */
  #API_KEY: string;

  /**
   * @private
   */
  #API_HEADERS!: Record<string, string>;

  public constructor(apiKey: string) {
    this.#API_KEY = apiKey;
    this.#API_HEADERS = {
      'X-API-KEY': this.#API_KEY,
      'Content-Type': 'application/x-www-form-urlencoded'
    };
  }

  /**
   * @private
   */
  async #apiRequest(route: string, mobile: string): Promise<Response> {
    return fetch(`${this.#BASE_URL}/${route}`, {
      headers: this.#API_HEADERS,
      body: new URLSearchParams({ mobile })
    });
  }

  /**
   * @public
   */
  public async biometricAuthRequest(mobile: string): Promise<IVALT.Response<null>> {
    const response = await this.#apiRequest(IVALT.Routes.request, mobile);

    return response.json() as Promise<IVALT.Response<null>>;
  }

  /**
   * @public
   */
  public async biometricAuthResult(mobile: string): Promise<IVALT.Response<IVALT.ResultDetails>> {
    const response = await this.#apiRequest(IVALT.Routes.result, mobile);

    return response.json() as Promise<IVALT.Response<IVALT.ResultDetails>>;
  }
}