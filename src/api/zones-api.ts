import { AxiosInstance, AxiosPromise } from "axios";
import {
  IZoneCreateRequest,
  IZone,
  IZoneSearchCriteria,
  IZoneResponseFormat,
  IZoneSearchResults
} from "../model/zones-model";
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
 * Create a new zone.
 * @param axios
 * @param request
 */
export function createZone(
  axios: AxiosInstance,
  request: IZoneCreateRequest
): AxiosPromise<IZone> {
  return restAuthPost<IZone>(axios, "zones", request);
}

/**
 * Get a zone by unique token.
 * @param axios
 * @param zoneToken
 */
export function getZone(
  axios: AxiosInstance,
  zoneToken: string
): AxiosPromise<IZone> {
  return restAuthGet<IZone>(axios, `zones/${zoneToken}`);
}

/**
 * Update an existing zone.
 * @param axios
 * @param zoneToken
 * @param request
 */
export function updateZone(
  axios: AxiosInstance,
  zoneToken: string,
  request: IZoneCreateRequest
): AxiosPromise<IZone> {
  return restAuthPut<IZone>(axios, `zones/${zoneToken}`, request);
}

/**
 * List zones that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function listZones(
  axios: AxiosInstance,
  criteria?: IZoneSearchCriteria,
  format?: IZoneResponseFormat
): AxiosPromise<IZoneSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    // No filters currently defined.
  }
  if (criteria) {
    query += addStringFilter(criteria.areaToken, "areaToken");
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IZoneSearchResults>(axios, `zones${query}`);
}

/**
 * Delete an existing zone.
 * @param axios
 * @param zoneToken
 */
export function deleteZone(
  axios: AxiosInstance,
  zoneToken: string
): AxiosPromise<IZone> {
  return restAuthDelete<IZone>(axios, `zones/${zoneToken}`);
}
