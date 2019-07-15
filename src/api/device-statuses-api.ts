import { AxiosInstance, AxiosPromise } from "axios";
import {
  IDeviceStatusSearchCriteria,
  IDeviceStatusResponseFormat,
  IDeviceStatusSearchResults
} from "../model/device-statuses-model";
import { createPagingQuery } from "../model/common-model";
import { restAuthGet, randomSeedQuery, addStringFilter } from "../rest";

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
