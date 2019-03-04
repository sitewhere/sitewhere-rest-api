import { AxiosInstance, AxiosPromise } from "axios";
import {
  IDeviceCommandCreateRequest,
  IDeviceCommand,
  IDeviceCommandSearchCriteria,
  IDeviceCommandResponseFormat,
  IDeviceCommandSearchResults
} from "../model/device-commands-model";
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
 * Create a new device command.
 * @param axios
 * @param request
 */
export function createDeviceCommand(
  axios: AxiosInstance,
  request: IDeviceCommandCreateRequest
): AxiosPromise<IDeviceCommand> {
  return restAuthPost<IDeviceCommand>(axios, "commands", request);
}

/**
 * Get a device command by unique token.
 * @param axios
 * @param commandToken
 */
export function getDeviceCommand(
  axios: AxiosInstance,
  commandToken: string
): AxiosPromise<IDeviceCommand> {
  return restAuthGet<IDeviceCommand>(axios, `commands/${commandToken}`);
}

/**
 * Update an existing device command.
 * @param axios
 * @param commandToken
 * @param request
 */
export function updateDeviceCommand(
  axios: AxiosInstance,
  commandToken: string,
  request: IDeviceCommandCreateRequest
): AxiosPromise<IDeviceCommand> {
  return restAuthPut<IDeviceCommand>(
    axios,
    `commands/${commandToken}`,
    request
  );
}

/**
 * List device commands that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function listDeviceCommands(
  axios: AxiosInstance,
  criteria?: IDeviceCommandSearchCriteria,
  format?: IDeviceCommandResponseFormat
): AxiosPromise<IDeviceCommandSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    // No filters currently defined.
  }
  if (criteria) {
    query += addStringFilter(criteria.deviceTypeToken, "deviceTypeToken");
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceCommandSearchResults>(axios, `commands${query}`);
}

/**
 * List device commands that match the given criteria
 * and arrange them by namespace.
 * @param axios
 * @param criteria
 * @param format
 */
export function listDeviceCommandsForNamespace(
  axios: AxiosInstance,
  criteria?: IDeviceCommandSearchCriteria,
  format?: IDeviceCommandResponseFormat
): AxiosPromise<IDeviceCommandSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    // No filters currently defined.
  }
  if (criteria) {
    query += addStringFilter(criteria.deviceTypeToken, "deviceTypeToken");
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceCommandSearchResults>(
    axios,
    `commands/namespaces${query}`
  );
}

/**
 * Delete an existing device command.
 * @param axios
 * @param commandToken
 */
export function deleteDeviceCommand(
  axios: AxiosInstance,
  commandToken: string
): AxiosPromise<IDeviceCommand> {
  return restAuthDelete<IDeviceCommand>(axios, `commands/${commandToken}`);
}
