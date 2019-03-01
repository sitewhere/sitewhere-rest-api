import { AxiosInstance, AxiosPromise } from "axios";
import {
  IDeviceTypeCreateRequest,
  IDeviceType,
  IDeviceTypeSearchCriteria,
  IDeviceTypeResponseFormat
} from "../model/device-types-model";
import { createPagingQuery } from "../model/common-model";
import {
  restAuthGet,
  restAuthPost,
  restAuthPut,
  restAuthDelete,
  randomSeedQuery
} from "../rest";

/**
 * Create a new device type.
 * @param axios
 * @param request
 */
export function createDeviceType(
  axios: AxiosInstance,
  request: IDeviceTypeCreateRequest
): AxiosPromise<IDeviceType> {
  return restAuthPost<IDeviceType>(axios, "devicetypes", request);
}

/**
 * Get a device type by unique token.
 * @param axios
 * @param deviceTypeToken
 */
export function getDeviceType(
  axios: AxiosInstance,
  deviceTypeToken: string
): AxiosPromise<IDeviceType> {
  return restAuthGet<IDeviceType>(axios, `devicetypes/${deviceTypeToken}`);
}

/**
 * Update an existing device type.
 * @param axios
 * @param deviceTypeToken
 * @param request
 */
export function updateDeviceType(
  axios: AxiosInstance,
  deviceTypeToken: string,
  request: IDeviceTypeCreateRequest
): AxiosPromise<IDeviceType> {
  return restAuthPut<IDeviceType>(
    axios,
    `devicetypes/${deviceTypeToken}`,
    request
  );
}

/**
 * List device types that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function listDeviceTypes(
  axios: AxiosInstance,
  criteria?: IDeviceTypeSearchCriteria,
  format?: IDeviceTypeResponseFormat
): AxiosPromise<IDeviceType[]> {
  let query = randomSeedQuery();
  if (format) {
    // No filters currently defined.
  }
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceType[]>(axios, `devicetypes${query}`);
}

/**
 * Delete an existing device type.
 * @param axios
 * @param deviceTypeToken
 */
export function deleteDeviceType(
  axios: AxiosInstance,
  deviceTypeToken: string
): AxiosPromise<IDeviceType> {
  return restAuthDelete<IDeviceType>(axios, `devicetypes/${deviceTypeToken}`);
}
