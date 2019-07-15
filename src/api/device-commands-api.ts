import { AxiosInstance, AxiosPromise } from "axios";
import {
  IDeviceCommandSearchCriteria,
  IDeviceCommandResponseFormat,
  IDeviceCommandSearchResults,
  IDeviceCommandNamespaceSearchResults
} from "../model/device-commands-model";
import { createPagingQuery } from "../model/common-model";
import { restAuthGet, randomSeedQuery, addStringFilter } from "../rest";

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
): AxiosPromise<IDeviceCommandNamespaceSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    // No filters currently defined.
  }
  if (criteria) {
    query += addStringFilter(criteria.deviceTypeToken, "deviceTypeToken");
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceCommandNamespaceSearchResults>(
    axios,
    `commands/namespaces${query}`
  );
}
