import { AxiosInstance, AxiosPromise } from "axios";
import {
  IDeviceStatusCreateRequest,
  IDeviceStatus,
  IDeviceStatusSearchCriteria,
  IDeviceStatusResponseFormat
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
 * @param statusToken
 */
export function getDeviceStatus(
  axios: AxiosInstance,
  statusToken: string
): AxiosPromise<IDeviceStatus> {
  return restAuthGet<IDeviceStatus>(axios, `statuses/${statusToken}`);
}

/**
 * Update an existing device status.
 * @param axios
 * @param statusToken
 * @param request
 */
export function updateDeviceStatus(
  axios: AxiosInstance,
  statusToken: string,
  request: IDeviceStatusCreateRequest
): AxiosPromise<IDeviceStatus> {
  return restAuthPut<IDeviceStatus>(axios, `statuses/${statusToken}`, request);
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
): AxiosPromise<IDeviceStatus[]> {
  let query = randomSeedQuery();
  if (format) {
    // No filters currently defined.
  }
  if (criteria) {
    query += addStringFilter(criteria.deviceTypeToken, "deviceTypeToken");
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceStatus[]>(axios, `statuses${query}`);
}

/**
 * Delete an existing device status.
 * @param axios
 * @param statusToken
 */
export function deleteDeviceStatus(
  axios: AxiosInstance,
  statusToken: string
): AxiosPromise<IDeviceStatus> {
  return restAuthDelete<IDeviceStatus>(axios, `statuses/${statusToken}`);
}
