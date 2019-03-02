import { AxiosInstance, AxiosPromise } from "axios";
import { restAuthGet } from "../rest";

/**
 * Get a JWT. (Reqires basic authentication)
 * @param axios
 */
export function getJwt(axios: AxiosInstance): AxiosPromise {
  return restAuthGet(axios, `jwt`);
}
