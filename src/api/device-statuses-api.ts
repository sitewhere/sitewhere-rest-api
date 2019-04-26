import { AxiosInstance, AxiosPromise } from "axios";
import {
  IDeviceStatusCreateRequest,
  IDeviceStatus,
  IDeviceStatusSearchCriteria,
  IDeviceStatusResponseFormat,
  IDeviceStatusSearchResults
} from "../model/device-statuses-model";
import { createPagingQuery } from "../model/common-model";
import {
  restAuthGet,
  restAuthPost,
  restAuthPut,
  restAuthDelete,
  randomSeedQuery,
  addStringFilter
} from "../rest";

/**
 * Create a new device status.
 * @param axios
 * @param request
 */
export function createDeviceStatus(
  axios: AxiosInstance,
  request: IDeviceStatusCreateRequest
): AxiosPromise<IDeviceStatus> {
  return restAuthPost<IDeviceStatus>(axios, "statuses", request);
}

/**
 * Get a device status by unique token.
 * @param axios
 * @param token
 * @param format
 */
export function getDeviceStatus(
  axios: AxiosInstance,
  token: string,
  format: IDeviceStatusResponseFormat
): AxiosPromise<IDeviceStatus> {
  let query = randomSeedQuery();
  if (format) {
    // No format options available.
  }
  return restAuthGet<IDeviceStatus>(axios, `statuses/${token}${query}`);
}

/**
 * Update an existing device status.
 * @param axios
 * @param token
 * @param request
 */
export function updateDeviceStatus(
  axios: AxiosInstance,
  token: string,
  request: IDeviceStatusCreateRequest
): AxiosPromise<IDeviceStatus> {
  return restAuthPut<IDeviceStatus>(axios, `statuses/${token}`, request);
}

/**
 * List device statuses that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function listDeviceStatuses(
  axios: AxiosInstance,
  criteria?: IDeviceStatusSearchCriteria,
  format?: IDeviceStatusResponseFormat
): AxiosPromise<IDeviceStatusSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    // No filters currently defined.
  }
  if (criteria) {
    query += addStringFilter(criteria.deviceTypeToken, "deviceTypeToken");
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceStatusSearchResults>(axios, `statuses${query}`);
}

/**
 * Delete an existing device status.
 * @param axios
 * @param token
 */
export function deleteDeviceStatus(
  axios: AxiosInstance,
  token: string
): AxiosPromise<IDeviceStatus> {
  return restAuthDelete<IDeviceStatus>(axios, `statuses/${token}`);
}
