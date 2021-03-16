import { AxiosInstance, AxiosPromise } from "axios";
import {
  IDeviceCreateRequest,
  IDevice,
  IDeviceSearchCriteria,
  IDeviceResponseFormat,
  IDeviceSearchResults,
  IDeviceSummarySearchResults
} from "../model/devices-model";
import {
  IDeviceAssignmentResponseFormat,
  IDeviceAssignmentSearchResults
} from "../model/device-assignments-model";
import { createPagingQuery, ISearchCriteria } from "../model/common-model";
import {
  restAuthGet,
  restAuthPost,
  restAuthPut,
  restAuthDelete,
  randomSeedQuery,
  addFilter,
  addStringFilter
} from "../rest";

/**
 * Create a new device.
 * @param axios
 * @param request
 */
export function createDevice(
  axios: AxiosInstance,
  request: IDeviceCreateRequest
): AxiosPromise<IDevice> {
  return restAuthPost<IDevice>(axios, "devices", request);
}

/**
 * Get a device by unique token.
 * @param axios
 * @param deviceToken
 */
export function getDevice(
  axios: AxiosInstance,
  token: string,
  format: IDeviceResponseFormat
): AxiosPromise<IDevice> {
  let query = randomSeedQuery();
  if (format) {
    query += addFilter(format.includeDeviceType, "includeDeviceType");
    query += addFilter(format.includeAssignment, "includeAssignment");
  }
  return restAuthGet<IDevice>(axios, `devices/${token}${query}`);
}

/**
 * Update an existing device.
 * @param axios
 * @param deviceToken
 * @param request
 */
export function updateDevice(
  axios: AxiosInstance,
  deviceToken: string,
  request: IDeviceCreateRequest
): AxiosPromise<IDevice> {
  return restAuthPut<IDevice>(axios, `devices/${deviceToken}`, request);
}

/**
 * List devices that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function listDevices(
  axios: AxiosInstance,
  criteria?: IDeviceSearchCriteria,
  format?: IDeviceResponseFormat
): AxiosPromise<IDeviceSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    query += addFilter(format.includeDeviceType, "includeDeviceType");
    query += addFilter(format.includeAssignment, "includeAssignment");
  }
  if (criteria) {
    query += addFilter(criteria.excludeAssigned, "excludeAssigned");
    query += addStringFilter(criteria.deviceTypeToken, "deviceType");
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceSearchResults>(axios, `devices${query}`);
}

/**
 * List summary data for devices that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function listDeviceSummaries(
  axios: AxiosInstance,
  criteria?: IDeviceSearchCriteria
): AxiosPromise<IDeviceSummarySearchResults> {
  let query = randomSeedQuery();
  if (criteria) {
    query += addFilter(criteria.excludeAssigned, "excludeAssigned");
    query += addStringFilter(criteria.deviceTypeToken, "deviceType");
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceSummarySearchResults>(axios, `devices/summaries${query}`);
}

/**
 * Delete an existing device.
 * @param axios
 * @param deviceToken
 */
export function deleteDevice(
  axios: AxiosInstance,
  deviceToken: string
): AxiosPromise<IDevice> {
  return restAuthDelete<IDevice>(axios, `devices/${deviceToken}`);
}

/**
 * List devices that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function listDeviceAssignmentHistory(
  axios: AxiosInstance,
  deviceToken: string,
  criteria?: ISearchCriteria,
  format?: IDeviceAssignmentResponseFormat
): AxiosPromise<IDeviceAssignmentSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    query += addFilter(format.includeDevice, "includeDevice");
    query += addFilter(format.includeCustomer, "includeCustomer");
    query += addFilter(format.includeArea, "includeArea");
    query += addFilter(format.includeAsset, "includeAsset");
  }
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceAssignmentSearchResults>(
    axios,
    `devices/${deviceToken}/assignments${query}`
  );
}
