import { AxiosInstance, AxiosPromise } from "axios";
import {
  IAreaCreateRequest,
  IArea,
  IAreaSearchCriteria,
  IAreaResponseFormat
} from "../model/areas-model";
import {
  IDeviceAssignmentResponseFormat,
  IDeviceAssignment
} from "../model/device-assignments-model";
import {
  createPagingQuery,
  ISearchCriteria,
  IDateRangeSearchCriteria
} from "../model/common-model";
import {
  restAuthGet,
  restAuthPost,
  restAuthPut,
  restAuthDelete,
  randomSeedQuery,
  addFilter,
  addStringFilter
} from "../rest";
import {
  IDeviceMeasurement,
  IDeviceLocation,
  IDeviceAlert
} from "@/model/device-events-model";

/**
 * Create a new area.
 * @param axios
 * @param request
 */
export function createArea(
  axios: AxiosInstance,
  request: IAreaCreateRequest
): AxiosPromise<IArea> {
  return restAuthPost<IArea>(axios, "areas", request);
}

/**
 * Get an area by unique token.
 * @param axios
 * @param token
 */
export function getArea(
  axios: AxiosInstance,
  token: string
): AxiosPromise<IArea> {
  return restAuthGet<IArea>(axios, `areas/${token}`);
}

/**
 * Update an existing area.
 * @param axios
 * @param token
 * @param request
 */
export function updateArea(
  axios: AxiosInstance,
  token: string,
  request: IAreaCreateRequest
): AxiosPromise<IArea> {
  return restAuthPut<IArea>(axios, `areas/${token}`, request);
}

/**
 * List areas that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function listAreas(
  axios: AxiosInstance,
  criteria?: IAreaSearchCriteria,
  format?: IAreaResponseFormat
): AxiosPromise<IArea[]> {
  let query = randomSeedQuery();
  if (format) {
    query += addFilter(format.includeAreaType, "includeAreaType");
    query += addFilter(format.includeAssignments, "includeAssignments");
    query += addFilter(format.includeZones, "includeZones");
  }
  if (criteria) {
    query += addFilter(criteria.rootOnly, "rootOnly");
    query += addStringFilter(criteria.parentAreaId, "parentAreaId");
    query += addStringFilter(criteria.areaTypeId, "areaTypeId");
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IArea[]>(axios, `areas${query}`);
}

/**
 * Delete an existing area.
 * @param axios
 * @param token
 */
export function deleteArea(
  axios: AxiosInstance,
  token: string
): AxiosPromise<IArea> {
  return restAuthDelete<IArea>(axios, `areas/${token}`);
}

/**
 * List assignments associated with an area.
 * @param axios
 * @param token
 * @param criteria
 * @param format
 */
export function listAssignmentsForArea(
  axios: AxiosInstance,
  token: string,
  criteria?: ISearchCriteria,
  format?: IDeviceAssignmentResponseFormat
): AxiosPromise<IDeviceAssignment[]> {
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
  return restAuthGet<IDeviceAssignment[]>(
    axios,
    `areas/${token}/assignments${query}`
  );
}

/**
 * List measurement events associated with area.
 * @param axios
 * @param token
 * @param criteria
 */
export function listMeasurementsForArea(
  axios: AxiosInstance,
  token: string,
  criteria?: IDateRangeSearchCriteria
): AxiosPromise<IDeviceMeasurement[]> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceMeasurement[]>(
    axios,
    `areas/${token}/measurements${query}`
  );
}

/**
 * List location events associated with area.
 * @param axios
 * @param token
 * @param criteria
 */
export function listLocationsForArea(
  axios: AxiosInstance,
  token: string,
  criteria?: IDateRangeSearchCriteria
): AxiosPromise<IDeviceLocation[]> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceLocation[]>(
    axios,
    `areas/${token}/locations${query}`
  );
}

/**
 * List alert events associated with area.
 * @param axios
 * @param token
 * @param criteria
 */
export function listAlertsForArea(
  axios: AxiosInstance,
  token: string,
  criteria?: IDateRangeSearchCriteria
): AxiosPromise<IDeviceAlert[]> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceAlert[]>(axios, `areas/${token}/alerts${query}`);
}
