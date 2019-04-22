import { AxiosInstance, AxiosPromise } from "axios";
import {
  IDeviceAssignmentCreateRequest,
  IDeviceAssignment,
  IDeviceAssignmentSearchCriteria,
  IDeviceAssignmentResponseFormat,
  IDeviceAssignmentBulkRequest,
  IDeviceAssignmentSearchResults
} from "../model/device-assignments-model";
import {
  createPagingQuery,
  IDateRangeSearchCriteria,
  createDateRangeQuery
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
  IDeviceMeasurementCreateRequest,
  IDeviceMeasurement,
  IDeviceLocationCreateRequest,
  IDeviceLocation,
  IDeviceAlertCreateRequest,
  IDeviceAlert,
  IDeviceCommandInvocationCreateRequest,
  IDeviceCommandInvocation,
  IDeviceCommandResponseCreateRequest,
  IDeviceCommandResponse,
  IDeviceStateChangeCreateRequest,
  IDeviceStateChange,
  IChartSeries,
  IDeviceMeasurementSearchResults,
  IDeviceLocationSearchResults,
  IDeviceAlertSearchResults,
  IDeviceCommandInvocationSearchResults,
  IDeviceCommandResponseSearchResults,
  IDeviceStateChangeSearchResults
} from "../model/device-events-model";

/**
 * Create a new device assignment.
 * @param axios
 * @param request
 */
export function createDeviceAssignment(
  axios: AxiosInstance,
  request: IDeviceAssignmentCreateRequest
): AxiosPromise<IDeviceAssignment> {
  return restAuthPost<IDeviceAssignment>(axios, "assignments", request);
}

/**
 * Get a device assignment by unique token.
 * @param axios
 * @param token
 */
export function getDeviceAssignment(
  axios: AxiosInstance,
  token: string
): AxiosPromise<IDeviceAssignment> {
  return restAuthGet<IDeviceAssignment>(axios, `assignments/${token}`);
}

/**
 * Update an existing device assignment.
 * @param axios
 * @param deviceTypeToken
 * @param request
 */
export function updateDeviceAssignment(
  axios: AxiosInstance,
  token: string,
  request: IDeviceAssignmentCreateRequest
): AxiosPromise<IDeviceAssignment> {
  return restAuthPut<IDeviceAssignment>(axios, `assignments/${token}`, request);
}

/**
 * List device assignments that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function listDeviceAssignments(
  axios: AxiosInstance,
  criteria?: IDeviceAssignmentSearchCriteria,
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
    query += addStringFilter(criteria.areaToken, "areaToken");
    query += addStringFilter(criteria.assetToken, "assetToken");
    query += addStringFilter(criteria.customerToken, "customerToken");
    query += addStringFilter(criteria.deviceToken, "deviceToken");
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceAssignmentSearchResults>(
    axios,
    `assignments${query}`
  );
}

/**
 * Delete an existing device assignment.
 * @param axios
 * @param token
 */
export function deleteDeviceAssignment(
  axios: AxiosInstance,
  token: string
): AxiosPromise<IDeviceAssignment> {
  return restAuthDelete<IDeviceAssignment>(axios, `assignments/${token}`);
}

/**
 * Release an active device assignment.
 * @param axios
 * @param token
 */
export function releaseDeviceAssignment(
  axios: AxiosInstance,
  token: string
): AxiosPromise<IDeviceAssignment> {
  return restAuthPost<IDeviceAssignment>(
    axios,
    `assignments/${token}/end`,
    null
  );
}

/**
 * Mark a device assignment as missing.
 * @param axios
 * @param token
 */
export function missingDeviceAssignment(
  axios: AxiosInstance,
  token: string
): AxiosPromise<IDeviceAssignment> {
  return restAuthPost<IDeviceAssignment>(
    axios,
    `assignments/${token}/missing`,
    null
  );
}

/**
 * Create measurement for a device assignment.
 * @param axios
 * @param token
 * @param request
 */
export function createMeasurementForAssignment(
  axios: AxiosInstance,
  token: string,
  request: IDeviceMeasurementCreateRequest
): AxiosPromise<IDeviceMeasurement> {
  return restAuthPost<IDeviceMeasurement>(
    axios,
    `assignments/${token}/measurements`,
    request
  );
}

/**
 * List measurements for assignment based on criteria.
 * @param axios
 * @param token
 * @param criteria
 */
export function listMeasurementsForAssignment(
  axios: AxiosInstance,
  token: string,
  criteria: IDateRangeSearchCriteria
): AxiosPromise<IDeviceMeasurementSearchResults> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createDateRangeQuery(criteria);
  }
  return restAuthGet<IDeviceMeasurementSearchResults>(
    axios,
    `assignments/${token}/measurements${query}`
  );
}

/**
 * List measurements for assignment in chart series format.
 * @param axios
 * @param token
 * @param criteria
 */
export function listMeasurementsForAssignmentAsChartSeries(
  axios: AxiosInstance,
  token: string,
  criteria: IDateRangeSearchCriteria
): AxiosPromise<IChartSeries<number>> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createDateRangeQuery(criteria);
  }
  return restAuthGet<IChartSeries<number>>(
    axios,
    `assignments/${token}/measurements/series${query}`
  );
}

/**
 * List measurements for multiple assignments based on criteria.
 * @param axios
 * @param bulk
 * @param criteria
 */
export function listBulkMeasurementsForAssignment(
  axios: AxiosInstance,
  bulk: IDeviceAssignmentBulkRequest,
  criteria: IDateRangeSearchCriteria
): AxiosPromise<IDeviceMeasurementSearchResults> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createDateRangeQuery(criteria);
  }
  return restAuthPost<IDeviceMeasurementSearchResults>(
    axios,
    `/assignments/bulk/measurements${query}`,
    bulk
  );
}

/**
 * List measurements for multiple assignments in chart series format.
 * @param axios
 * @param bulk
 * @param criteria
 */
export function listBulkMeasurementsForAssignmentAsChartSeries(
  axios: AxiosInstance,
  bulk: IDeviceAssignmentBulkRequest,
  criteria: IDateRangeSearchCriteria
): AxiosPromise<IChartSeries<number>> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createDateRangeQuery(criteria);
  }
  return restAuthPost<IChartSeries<number>>(
    axios,
    `/assignments/bulk/measurements/series${query}`,
    bulk
  );
}

/**
 * Create location for a device assignment.
 * @param axios
 * @param token
 * @param request
 */
export function createLocationForAssignment(
  axios: AxiosInstance,
  token: string,
  request: IDeviceLocationCreateRequest
): AxiosPromise<IDeviceLocation> {
  return restAuthPost<IDeviceLocation>(
    axios,
    `assignments/${token}/locations`,
    request
  );
}

/**
 * List locations for assignment based on criteria.
 * @param axios
 * @param token
 * @param criteria
 */
export function listLocationsForAssignment(
  axios: AxiosInstance,
  token: string,
  criteria: IDateRangeSearchCriteria
): AxiosPromise<IDeviceLocationSearchResults> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createDateRangeQuery(criteria);
  }
  return restAuthGet<IDeviceLocationSearchResults>(
    axios,
    `assignments/${token}/locations${query}`
  );
}

/**
 * List locations for multiple assignments based on criteria.
 * @param axios
 * @param bulk
 * @param criteria
 */
export function listBulkLocationsForAssignment(
  axios: AxiosInstance,
  bulk: IDeviceAssignmentBulkRequest,
  criteria: IDateRangeSearchCriteria
): AxiosPromise<IDeviceLocationSearchResults> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createDateRangeQuery(criteria);
  }
  return restAuthPost<IDeviceLocationSearchResults>(
    axios,
    `/assignments/bulk/locations${query}`,
    bulk
  );
}

/**
 * Create alert for a device assignment.
 * @param axios
 * @param token
 * @param request
 */
export function createAlertForAssignment(
  axios: AxiosInstance,
  token: string,
  request: IDeviceAlertCreateRequest
): AxiosPromise<IDeviceAlert> {
  return restAuthPost<IDeviceAlert>(
    axios,
    `assignments/${token}/alerts`,
    request
  );
}

/**
 * List alerts for assignment based on criteria.
 * @param axios
 * @param token
 * @param criteria
 */
export function listAlertsForAssignment(
  axios: AxiosInstance,
  token: string,
  criteria: IDateRangeSearchCriteria
): AxiosPromise<IDeviceAlertSearchResults> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createDateRangeQuery(criteria);
  }
  return restAuthGet<IDeviceAlertSearchResults>(
    axios,
    `assignments/${token}/alerts${query}`
  );
}

/**
 * List alerts for multiple assignments based on criteria.
 * @param axios
 * @param bulk
 * @param criteria
 */
export function listBulkAlertsForAssignment(
  axios: AxiosInstance,
  bulk: IDeviceAssignmentBulkRequest,
  criteria: IDateRangeSearchCriteria
): AxiosPromise<IDeviceAlertSearchResults> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createDateRangeQuery(criteria);
  }
  return restAuthPost<IDeviceAlertSearchResults>(
    axios,
    `/assignments/bulk/alerts${query}`,
    bulk
  );
}

/**
 * Create command invocation for a device assignment.
 * @param axios
 * @param token
 * @param request
 */
export function createCommandInvocationForAssignment(
  axios: AxiosInstance,
  token: string,
  request: IDeviceCommandInvocationCreateRequest
): AxiosPromise<IDeviceCommandInvocation> {
  return restAuthPost<IDeviceCommandInvocation>(
    axios,
    `assignments/${token}/invocations`,
    request
  );
}

/**
 * Schedule the creation of a command invocation for a future time.
 * @param axios
 * @param assignmentToken
 * @param scheduleToken
 * @param request
 */
export function scheduleCommandInvocationForAssignment(
  axios: AxiosInstance,
  assignmentToken: string,
  scheduleToken: string,
  request: IDeviceCommandInvocationCreateRequest
): AxiosPromise<IDeviceCommandInvocation> {
  return restAuthPost<IDeviceCommandInvocation>(
    axios,
    `assignments/${assignmentToken}/invocations/schedules/${scheduleToken}`,
    request
  );
}

/**
 * List command invocations for assignment based on criteria.
 * @param axios
 * @param token
 * @param criteria
 */
export function listCommandInvocationsForAssignment(
  axios: AxiosInstance,
  token: string,
  criteria: IDateRangeSearchCriteria
): AxiosPromise<IDeviceCommandInvocationSearchResults> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createDateRangeQuery(criteria);
  }
  return restAuthGet<IDeviceCommandInvocationSearchResults>(
    axios,
    `assignments/${token}/invocations${query}`
  );
}

/**
 * List command invocations for multiple assignments based on criteria.
 * @param axios
 * @param bulk
 * @param criteria
 */
export function listBulkCommandInvocationsForAssignment(
  axios: AxiosInstance,
  bulk: IDeviceAssignmentBulkRequest,
  criteria: IDateRangeSearchCriteria
): AxiosPromise<IDeviceCommandInvocationSearchResults> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createDateRangeQuery(criteria);
  }
  return restAuthPost<IDeviceCommandInvocationSearchResults>(
    axios,
    `/assignments/bulk/invocations${query}`,
    bulk
  );
}

/**
 * Create command response for a device assignment.
 * @param axios
 * @param token
 * @param request
 */
export function createCommandResponseForAssignment(
  axios: AxiosInstance,
  token: string,
  request: IDeviceCommandResponseCreateRequest
): AxiosPromise<IDeviceCommandResponse> {
  return restAuthPost<IDeviceCommandResponse>(
    axios,
    `assignments/${token}/responses`,
    request
  );
}

/**
 * List command responses for assignment based on criteria.
 * @param axios
 * @param token
 * @param criteria
 */
export function listCommandResponsesForAssignment(
  axios: AxiosInstance,
  token: string,
  criteria: IDateRangeSearchCriteria
): AxiosPromise<IDeviceCommandResponseSearchResults> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createDateRangeQuery(criteria);
  }
  return restAuthGet<IDeviceCommandResponseSearchResults>(
    axios,
    `assignments/${token}/responses${query}`
  );
}

/**
 * List command responses for multiple assignments based on criteria.
 * @param axios
 * @param bulk
 * @param criteria
 */
export function listBulkCommandResponsesForAssignment(
  axios: AxiosInstance,
  bulk: IDeviceAssignmentBulkRequest,
  criteria: IDateRangeSearchCriteria
): AxiosPromise<IDeviceCommandResponseSearchResults> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createDateRangeQuery(criteria);
  }
  return restAuthPost<IDeviceCommandResponseSearchResults>(
    axios,
    `/assignments/bulk/responses${query}`,
    bulk
  );
}

/**
 * Create state change for a device assignment.
 * @param axios
 * @param token
 * @param request
 */
export function createStateChangeForAssignment(
  axios: AxiosInstance,
  token: string,
  request: IDeviceStateChangeCreateRequest
): AxiosPromise<IDeviceStateChange> {
  return restAuthPost<IDeviceStateChange>(
    axios,
    `assignments/${token}/statechanges`,
    request
  );
}

/**
 * List state changes for assignment based on criteria.
 * @param axios
 * @param token
 * @param criteria
 */
export function listStateChangesForAssignment(
  axios: AxiosInstance,
  token: string,
  criteria: IDateRangeSearchCriteria
): AxiosPromise<IDeviceStateChangeSearchResults> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createDateRangeQuery(criteria);
  }
  return restAuthGet<IDeviceStateChangeSearchResults>(
    axios,
    `assignments/${token}/statechanges${query}`
  );
}

/**
 * List state changes for multiple assignments based on criteria.
 * @param axios
 * @param bulk
 * @param criteria
 */
export function listBulkStateChangesForAssignment(
  axios: AxiosInstance,
  bulk: IDeviceAssignmentBulkRequest,
  criteria: IDateRangeSearchCriteria
): AxiosPromise<IDeviceStateChangeSearchResults> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createDateRangeQuery(criteria);
  }
  return restAuthPost<IDeviceStateChangeSearchResults>(
    axios,
    `/assignments/bulk/statechanges${query}`,
    bulk
  );
}
