import { AxiosInstance } from "axios";
/**
 * Create Axios request that uses basic authentication.
 * This version takes username and password to be encoded.
 * @param baseUrl
 * @param username
 * @param password
 */
export declare function createBasicAuthRequestForCredentials(baseUrl: string, username: string, password: string): AxiosInstance;
/**
 * Create Axios request that uses basic authentication.
 * @param baseUrl
 * @param encoded
 */
export declare function createBasicAuthRequest(baseUrl: string, encoded: string): AxiosInstance;
/**
 * Create call that uses JWT for authentication.
 * @param baseUrl
 * @param jwt
 * @param tenantId
 * @param tenantAuth
 */
export declare function createJwtRequest(baseUrl: string, jwt: string, tenantId: string, tenantAuth: string): AxiosInstance;
