import axios, { AxiosInstance, AxiosPromise } from "axios";

/**
 * Perform a REST get call.
 *
 * @param axios
 * @param path
 */
export function restAuthGet<T>(
  axios: AxiosInstance,
  path: string
): AxiosPromise<T> {
  return axios.get(path);
}

/**
 * Perform a REST post call.
 *
 * @param axios
 * @param path
 * @param payload
 */
export function restAuthPost<T>(
  axios: AxiosInstance,
  path: string,
  payload: any
): AxiosPromise<T> {
  return axios.post(path, payload);
}

/**
 * Perform a REST post call with progress monitoring.
 *
 * @param axios
 * @param path
 * @param payload
 * @param callback
 */
export function restAuthPostWithProgress<T>(
  axios: AxiosInstance,
  path: string,
  payload: string,
  callback: any
): AxiosPromise<T> {
  let config = {
    onDownloadProgress: callback
  };
  return axios.post(path, payload, config);
}

/**
 * Perform a REST put call.
 *
 * @param axios
 * @param path
 * @param payload
 */
export function restAuthPut<T>(
  axios: AxiosInstance,
  path: string,
  payload: any
): AxiosPromise<T> {
  return axios.put(path, payload);
}

/**
 * Perform a REST delete call.
 *
 * @param axios
 * @param path
 */
export function restAuthDelete<T>(
  axios: AxiosInstance,
  path: string
): AxiosPromise<T> {
  return axios.delete(path);
}

/**
 * Add a filter onto an existing query.
 * @param query
 * @param criteria
 * @param parameter
 */
export function addFilter(
  criteria: boolean | undefined,
  parameter: string
): string {
  if (criteria) {
    return `&${parameter}=true`;
  }
  return "";
}

/**
 * Add a filter onto an existing query.
 * @param query
 * @param criteria
 * @param parameter
 */
export function addStringFilter(
  value: string | undefined,
  parameter: string
): string {
  if (value) {
    return `&${parameter}=${value}`;
  }
  return "";
}

/**
 * Add date filter to an existing query.
 * @param value
 * @param parameter
 */
export function addDateFilter(
  value: Date | undefined,
  parameter: string
): string {
  if (value) {
    return `&${parameter}=${value}`;
  }
  return "";
}

/**
 * Generate a query with a random seed value to prevent caching.
 */
export function randomSeedQuery() {
  let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
    c
  ) {
    let r = crypto.getRandomValues(new Uint8Array(1))[0] % 16 | 0;
    let v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
  return "?rnd=" + uuid;
}
