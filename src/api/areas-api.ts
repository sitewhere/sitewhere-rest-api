import { AxiosInstance, AxiosPromise } from "axios";
import {
  IAreaCreateRequest,
  IArea,
  IAreaSearchCriteria,
  IAreaResponseFormat,
  IAreaSearchResults
} from "../model/areas-model";
import {
  IDeviceAssignmentResponseFormat,
  IDeviceAssignmentSearchResults,
  IDeviceAssignmentSummarySearchResults
} from "../model/device-assignments-model";
import {
  createPagingQuery,
  ISearchCriteria,
  IDateRangeSearchCriteria,
  ITreeNode
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
  IDeviceMeasurementSearchResults,
  IDeviceLocationSearchResults,
  IDeviceAlertSearchResults,
  IDeviceMeasurementResponseFormat,
  IDeviceLocationResponseFormat,
  IDeviceAlertResponseFormat
} from "../model/device-events-model";

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
 * @param format
 */
export function getArea(
  axios: AxiosInstance,
  token: string,
  format: IAreaResponseFormat
): AxiosPromise<IArea> {
  let query = randomSeedQuery();
  if (format) {
    query += addFilter(format.includeAreaType, "includeAreaType");
    query += addFilter(format.includeAssignments, "includeAssignments");
    query += addFilter(format.includeZones, "includeZones");
  }
  return restAuthGet<IArea>(axios, `areas/${token}${query}`);
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
): AxiosPromise<IAreaSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    query += addFilter(format.includeAreaType, "includeAreaType");
    query += addFilter(format.includeAssignments, "includeAssignments");
    query += addFilter(format.includeZones, "includeZones");
  }
  if (criteria) {
    query += addFilter(criteria.rootOnly, "rootOnly");
    query += addStringFilter(criteria.parentAreaToken, "parentAreaToken");
    query += addStringFilter(criteria.areaTypeToken, "areaTypeToken");
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IAreaSearchResults>(axios, `areas${query}`);
}

/**
 * Get all areas as a tree structure.
 * @param axios
 */
export function getAreasTree(axios: AxiosInstance): AxiosPromise<ITreeNode[]> {
  let query = randomSeedQuery();
  return restAuthGet<ITreeNode[]>(axios, `areas/tree${query}`);
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
    `areas/${token}/assignments${query}`
  );
}

/**
 * List assignments for area in summary format.
 * @param axios 
 * @param token 
 * @param criteria 
 * @param format 
 */
export function listAssignmentSummariesForArea(
  axios: AxiosInstance,
  token: string,
  criteria?: ISearchCriteria,
  format?: IDeviceAssignmentResponseFormat
): AxiosPromise<IDeviceAssignmentSummarySearchResults> {
  let query = randomSeedQuery();
  if (format) {
    query += addFilter(format.includeAsset, "includeAsset");
  }
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceAssignmentSummarySearchResults>(
    axios,
    `areas/${token}/assignments/summaries${query}`
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
  criteria?: IDateRangeSearchCriteria,
  format?: IDeviceMeasurementResponseFormat
): AxiosPromise<IDeviceMeasurementSearchResults> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  if (format) {
    // No format options available.
  }
  return restAuthGet<IDeviceMeasurementSearchResults>(
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
  criteria?: IDateRangeSearchCriteria,
  format?: IDeviceLocationResponseFormat
): AxiosPromise<IDeviceLocationSearchResults> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  if (format) {
    // No format options available.
  }
  return restAuthGet<IDeviceLocationSearchResults>(
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
  criteria?: IDateRangeSearchCriteria,
  format?: IDeviceAlertResponseFormat
): AxiosPromise<IDeviceAlertSearchResults> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  if (format) {
    // No format options available.
  }
  return restAuthGet<IDeviceAlertSearchResults>(
    axios,
    `areas/${token}/alerts${query}`
  );
}
