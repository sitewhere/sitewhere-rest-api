import { AxiosInstance, AxiosPromise } from "axios";
import {
  IDeviceGroupCreateRequest,
  IDeviceGroup,
  IDeviceGroupSearchCriteria,
  IDeviceGroupResponseFormat,
  IDeviceGroupElementCreateRequest,
  IDeviceGroupElement,
  IDeviceGroupElementResponseFormat,
  IDeviceGroupSearchResults,
  IDeviceGroupElementSearchResults
} from "../model/device-groups-model";
import { createPagingQuery } from "../model/common-model";
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
 * Create a new device group.
 * @param axios
 * @param request
 */
export function createDeviceGroup(
  axios: AxiosInstance,
  request: IDeviceGroupCreateRequest
): AxiosPromise<IDeviceGroup> {
  return restAuthPost<IDeviceGroup>(axios, "devicegroups", request);
}

/**
 * Get a device group by unique token.
 * @param axios
 * @param token
 */
export function getDeviceGroup(
  axios: AxiosInstance,
  token: string
): AxiosPromise<IDeviceGroup> {
  return restAuthGet<IDeviceGroup>(axios, `devicegroups/${token}`);
}

/**
 * Update an existing device group.
 * @param axios
 * @param token
 * @param request
 */
export function updateDeviceGroup(
  axios: AxiosInstance,
  token: string,
  request: IDeviceGroupCreateRequest
): AxiosPromise<IDeviceGroup> {
  return restAuthPut<IDeviceGroup>(axios, `devicegroups/${token}`, request);
}

/**
 * List device groups that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function listDeviceGroups(
  axios: AxiosInstance,
  criteria?: IDeviceGroupSearchCriteria,
  format?: IDeviceGroupResponseFormat
): AxiosPromise<IDeviceGroupSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    // No format options supported.
  }
  if (criteria) {
    query += addStringFilter(criteria.role, "role");
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceGroupSearchResults>(axios, `devicegroups${query}`);
}

/**
 * Delete an existing device group.
 * @param axios
 * @param token
 */
export function deleteDeviceGroup(
  axios: AxiosInstance,
  token: string
): AxiosPromise<IDeviceGroup> {
  return restAuthDelete<IDeviceGroup>(axios, `devicegroups/${token}`);
}

/**
 * Create a device group element.
 * @param axios
 * @param request
 */
export function createDeviceGroupElement(
  axios: AxiosInstance,
  token: string,
  request: IDeviceGroupElementCreateRequest
): AxiosPromise<IDeviceGroupElement> {
  return restAuthPost<IDeviceGroupElement>(
    axios,
    `devicegroups/${token}/elements`,
    request
  );
}

/**
 * List device group elements that match the given criteria.
 * @param axios
 * @param token
 * @param criteria
 * @param format
 */
export function listDeviceGroupElements(
  axios: AxiosInstance,
  token: string,
  criteria?: IDeviceGroupSearchCriteria,
  format?: IDeviceGroupElementResponseFormat
): AxiosPromise<IDeviceGroupElementSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    query += addFilter(format.includeDetails, "includeDetails");
  }
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceGroupElementSearchResults>(
    axios,
    `devicegroups/${token}/elements${query}`
  );
}

/**
 * Delete an existing device group element.
 * @param axios
 * @param token
 * @param elementId
 */
export function deleteDeviceGroupElement(
  axios: AxiosInstance,
  token: string,
  elementId: string
): AxiosPromise<IDeviceGroupElement> {
  return restAuthDelete<IDeviceGroupElement>(
    axios,
    `devicegroups/${token}/elements/${elementId}`
  );
}
