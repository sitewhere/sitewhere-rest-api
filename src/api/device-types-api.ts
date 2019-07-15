import { AxiosInstance, AxiosPromise } from "axios";
import {
  IDeviceTypeCreateRequest,
  IDeviceType,
  IDeviceTypeSearchCriteria,
  IDeviceTypeResponseFormat,
  IDeviceTypeSearchResults
} from "../model/device-types-model";
import {
  IDeviceCommand,
  IDeviceCommandCreateRequest,
  IDeviceCommandResponseFormat
} from "../model/device-commands-model";
import {
  IDeviceStatus,
  IDeviceStatusCreateRequest,
  IDeviceStatusResponseFormat
} from "../model/device-statuses-model";
import { createPagingQuery } from "../model/common-model";
import {
  addFilter,
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
 * @param token
 */
export function getDeviceType(
  axios: AxiosInstance,
  token: string,
  format: IDeviceTypeResponseFormat
): AxiosPromise<IDeviceType> {
  let query = randomSeedQuery();
  if (format) {
    query += addFilter(format.includeAsset, "includeAsset");
  }
  return restAuthGet<IDeviceType>(axios, `devicetypes/${token}${query}`);
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
): AxiosPromise<IDeviceTypeSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    // No filters currently defined.
  }
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceTypeSearchResults>(axios, `devicetypes${query}`);
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

/**
 * Create a new device command.
 * @param axios
 * @param deviceTypeToken
 * @param request
 */
export function createDeviceCommand(
  axios: AxiosInstance,
  deviceTypeToken: string,
  request: IDeviceCommandCreateRequest
): AxiosPromise<IDeviceCommand> {
  return restAuthPost<IDeviceCommand>(
    axios,
    `devicetypes/${deviceTypeToken}/commands`,
    request
  );
}

/**
 * Get a device command by unique token.
 * @param axios
 * @param deviceTypeToken
 * @param commandToken
 * @param format
 */
export function getDeviceCommand(
  axios: AxiosInstance,
  deviceTypeToken: string,
  commandToken: string,
  format: IDeviceCommandResponseFormat
): AxiosPromise<IDeviceCommand> {
  let query = randomSeedQuery();
  if (format) {
    // No format options available.
  }
  return restAuthGet<IDeviceCommand>(
    axios,
    `devicetypes/${deviceTypeToken}/commands/${commandToken}${query}`
  );
}

/**
 * Update an existing device command.
 * @param axios
 * @param deviceTypeToken
 * @param commandToken
 * @param request
 */
export function updateDeviceCommand(
  axios: AxiosInstance,
  deviceTypeToken: string,
  commandToken: string,
  request: IDeviceCommandCreateRequest
): AxiosPromise<IDeviceCommand> {
  return restAuthPut<IDeviceCommand>(
    axios,
    `devicetypes/${deviceTypeToken}/commands/${commandToken}`,
    request
  );
}

/**
 * Delete an existing device command.
 * @param axios
 * @param deviceTypeToken
 * @param commandToken
 */
export function deleteDeviceCommand(
  axios: AxiosInstance,
  deviceTypeToken: string,
  commandToken: string
): AxiosPromise<IDeviceCommand> {
  return restAuthDelete<IDeviceCommand>(
    axios,
    `devicetypes/${deviceTypeToken}/commands/${commandToken}`
  );
}

/**
 * Create a new device status.
 * @param axios
 * @param deviceTypeToken
 * @param request
 */
export function createDeviceStatus(
  axios: AxiosInstance,
  deviceTypeToken: string,
  request: IDeviceStatusCreateRequest
): AxiosPromise<IDeviceStatus> {
  return restAuthPost<IDeviceStatus>(
    axios,
    `devicetypes/${deviceTypeToken}/statuses`,
    request
  );
}

/**
 * Get a device status by unique token.
 * @param axios
 * @param deviceTypeToken
 * @param statusToken
 * @param format
 */
export function getDeviceStatus(
  axios: AxiosInstance,
  deviceTypeToken: string,
  statusToken: IDeviceStatusResponseFormat,
  format: IDeviceStatusResponseFormat
): AxiosPromise<IDeviceStatus> {
  let query = randomSeedQuery();
  if (format) {
    // No format options available.
  }
  return restAuthGet<IDeviceStatus>(
    axios,
    `devicetypes/${deviceTypeToken}/statuses/${statusToken}${query}`
  );
}

/**
 * Update an existing device status.
 * @param axios
 * @param deviceTypeToken
 * @param statusToken
 * @param request
 */
export function updateDeviceStatus(
  axios: AxiosInstance,
  deviceTypeToken: string,
  statusToken: IDeviceStatusResponseFormat,
  request: IDeviceStatusCreateRequest
): AxiosPromise<IDeviceStatus> {
  return restAuthPut<IDeviceStatus>(
    axios,
    `devicetypes/${deviceTypeToken}/statuses/${statusToken}`,
    request
  );
}

/**
 * Delete an existing device status.
 * @param axios
 * @param deviceTypeToken
 * @param statusToken
 */
export function deleteDeviceStatus(
  axios: AxiosInstance,
  deviceTypeToken: string,
  statusToken: IDeviceStatusResponseFormat
): AxiosPromise<IDeviceStatus> {
  return restAuthDelete<IDeviceStatus>(
    axios,
    `devicetypes/${deviceTypeToken}/statuses/${statusToken}`
  );
}
