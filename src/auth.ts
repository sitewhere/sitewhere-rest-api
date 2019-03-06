import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

/**
 * Create Axios request that uses basic authentication.
 * This version takes username and password to be encoded.
 * @param baseUrl
 * @param username
 * @param password
 */
export function createBasicAuthRequestForCredentials(
  baseUrl: string,
  username: string,
  password: string
): AxiosInstance {
  let encoded = btoa(username + ":" + password);
  return createBasicAuthRequest(baseUrl, encoded);
}

/**
 * Create Axios request that uses basic authentication.
 * @param baseUrl
 * @param encoded
 */
export function createBasicAuthRequest(
  baseUrl: string,
  encoded: string
): AxiosInstance {
  let config: AxiosRequestConfig = {};
  config.baseURL = baseUrl;
  config.headers = {};
  config.headers["Authorization"] = "Basic " + encoded;
  return axios.create(config);
}

/**
 * Create call that uses JWT for authentication.
 * @param baseUrl
 * @param jwt
 * @param tenantId
 * @param tenantAuth
 */
export function createJwtRequest(
  baseUrl: string,
  jwt: string,
  tenantId: string,
  tenantAuth: string
): AxiosInstance {
  let config: AxiosRequestConfig = {};
  config.baseURL = baseUrl;
  config.headers = {};
  if (jwt) {
    config.headers["Authorization"] = "Bearer " + jwt;
  }
  if (tenantId) {
    config.headers["X-SiteWhere-Tenant-Id"] = tenantId;
  }
  if (tenantAuth) {
    config.headers["X-SiteWhere-Tenant-Auth"] = tenantAuth;
  }
  return axios.create(config);
}
