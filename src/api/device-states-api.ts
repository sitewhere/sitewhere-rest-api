import { AxiosInstance, AxiosPromise } from "axios";
import {
  IDeviceState,
  IDeviceStateResponseFormat,
  IDeviceStateSearchCriteria
} from "../model/device-states-model";
import { restAuthPost, randomSeedQuery, addFilter } from "../rest";

/**
 * Search for device states that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function searchDeviceStates(
  axios: AxiosInstance,
  criteria?: IDeviceStateSearchCriteria,
  format?: IDeviceStateResponseFormat
): AxiosPromise<IDeviceState[]> {
  let query = randomSeedQuery();
  if (format) {
    query += addFilter(format.includeArea, "includeArea");
    query += addFilter(format.includeAsset, "includeAsset");
    query += addFilter(format.includeCustomer, "includeCustomer");
    query += addFilter(format.includeDevice, "includeDevice");
    query += addFilter(
      format.includeDeviceAssignment,
      "includeDeviceAssignment"
    );
    query += addFilter(format.includeDeviceType, "includeDeviceType");
    query += addFilter(format.includeEventDetails, "includeEventDetails");
  }
  return restAuthPost<IDeviceState[]>(
    axios,
    `devicestates/search${query}`,
    criteria
  );
}
