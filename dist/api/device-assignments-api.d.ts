import { AxiosInstance, AxiosPromise } from "axios";
import { IDeviceAssignmentCreateRequest, IDeviceAssignment, IDeviceAssignmentSearchCriteria, IDeviceAssignmentResponseFormat, IDeviceAssignmentBulkRequest, IDeviceAssignmentSearchResults } from "../model/device-assignments-model";
import { IDateRangeSearchCriteria } from "../model/common-model";
import { IDeviceMeasurementCreateRequest, IDeviceMeasurement, IDeviceLocationCreateRequest, IDeviceLocation, IDeviceAlertCreateRequest, IDeviceAlert, IDeviceCommandInvocationCreateRequest, IDeviceCommandInvocation, IDeviceCommandResponseCreateRequest, IDeviceCommandResponse, IDeviceStateChangeCreateRequest, IDeviceStateChange, IChartSeries, IDeviceMeasurementSearchResults, IDeviceLocationSearchResults, IDeviceAlertSearchResults, IDeviceCommandInvocationSearchResults, IDeviceCommandResponseSearchResults, IDeviceStateChangeSearchResults } from "@/model/device-events-model";
/**
 * Create a new device assignment.
 * @param axios
 * @param request
 */
export declare function createDeviceAssignment(axios: AxiosInstance, request: IDeviceAssignmentCreateRequest): AxiosPromise<IDeviceAssignment>;
/**
 * Get a device assignment by unique token.
 * @param axios
 * @param token
 */
export declare function getDeviceAssignment(axios: AxiosInstance, token: string): AxiosPromise<IDeviceAssignment>;
/**
 * Update an existing device assignment.
 * @param axios
 * @param deviceTypeToken
 * @param request
 */
export declare function updateDeviceAssignment(axios: AxiosInstance, token: string, request: IDeviceAssignmentCreateRequest): AxiosPromise<IDeviceAssignment>;
/**
 * List device assignments that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listDeviceAssignments(axios: AxiosInstance, criteria?: IDeviceAssignmentSearchCriteria, format?: IDeviceAssignmentResponseFormat): AxiosPromise<IDeviceAssignmentSearchResults>;
/**
 * Delete an existing device assignment.
 * @param axios
 * @param token
 */
export declare function deleteDeviceAssignment(axios: AxiosInstance, token: string): AxiosPromise<IDeviceAssignment>;
/**
 * Release an active device assignment.
 * @param axios
 * @param token
 */
export declare function releaseDeviceAssignment(axios: AxiosInstance, token: string): AxiosPromise<IDeviceAssignment>;
/**
 * Mark a device assignment as missing.
 * @param axios
 * @param token
 */
export declare function missingDeviceAssignment(axios: AxiosInstance, token: string): AxiosPromise<IDeviceAssignment>;
/**
 * Create measurement for a device assignment.
 * @param axios
 * @param token
 * @param request
 */
export declare function createMeasurementForAssignment(axios: AxiosInstance, token: string, request: IDeviceMeasurementCreateRequest): AxiosPromise<IDeviceMeasurement>;
/**
 * List measurements for assignment based on criteria.
 * @param axios
 * @param token
 * @param criteria
 */
export declare function listMeasurementsForAssignment(axios: AxiosInstance, token: string, criteria: IDateRangeSearchCriteria): AxiosPromise<IDeviceMeasurementSearchResults>;
/**
 * List measurements for assignment in chart series format.
 * @param axios
 * @param token
 * @param criteria
 */
export declare function listMeasurementsForAssignmentAsChartSeries(axios: AxiosInstance, token: string, criteria: IDateRangeSearchCriteria): AxiosPromise<IChartSeries<number>>;
/**
 * List measurements for multiple assignments based on criteria.
 * @param axios
 * @param bulk
 * @param criteria
 */
export declare function listBulkMeasurementsForAssignment(axios: AxiosInstance, bulk: IDeviceAssignmentBulkRequest, criteria: IDateRangeSearchCriteria): AxiosPromise<IDeviceMeasurementSearchResults>;
/**
 * List measurements for multiple assignments in chart series format.
 * @param axios
 * @param bulk
 * @param criteria
 */
export declare function listBulkMeasurementsForAssignmentAsChartSeries(axios: AxiosInstance, bulk: IDeviceAssignmentBulkRequest, criteria: IDateRangeSearchCriteria): AxiosPromise<IChartSeries<number>>;
/**
 * Create location for a device assignment.
 * @param axios
 * @param token
 * @param request
 */
export declare function createLocationForAssignment(axios: AxiosInstance, token: string, request: IDeviceLocationCreateRequest): AxiosPromise<IDeviceLocation>;
/**
 * List locations for assignment based on criteria.
 * @param axios
 * @param token
 * @param criteria
 */
export declare function listLocationsForAssignment(axios: AxiosInstance, token: string, criteria: IDateRangeSearchCriteria): AxiosPromise<IDeviceLocationSearchResults>;
/**
 * List locations for multiple assignments based on criteria.
 * @param axios
 * @param bulk
 * @param criteria
 */
export declare function listBulkLocationsForAssignment(axios: AxiosInstance, bulk: IDeviceAssignmentBulkRequest, criteria: IDateRangeSearchCriteria): AxiosPromise<IDeviceLocationSearchResults>;
/**
 * Create alert for a device assignment.
 * @param axios
 * @param token
 * @param request
 */
export declare function createAlertForAssignment(axios: AxiosInstance, token: string, request: IDeviceAlertCreateRequest): AxiosPromise<IDeviceAlert>;
/**
 * List alerts for assignment based on criteria.
 * @param axios
 * @param token
 * @param criteria
 */
export declare function listAlertsForAssignment(axios: AxiosInstance, token: string, criteria: IDateRangeSearchCriteria): AxiosPromise<IDeviceAlertSearchResults>;
/**
 * List alerts for multiple assignments based on criteria.
 * @param axios
 * @param bulk
 * @param criteria
 */
export declare function listBulkAlertsForAssignment(axios: AxiosInstance, bulk: IDeviceAssignmentBulkRequest, criteria: IDateRangeSearchCriteria): AxiosPromise<IDeviceAlertSearchResults>;
/**
 * Create command invocation for a device assignment.
 * @param axios
 * @param token
 * @param request
 */
export declare function createCommandInvocationForAssignment(axios: AxiosInstance, token: string, request: IDeviceCommandInvocationCreateRequest): AxiosPromise<IDeviceCommandInvocation>;
/**
 * Schedule the creation of a command invocation for a future time.
 * @param axios
 * @param assignmentToken
 * @param scheduleToken
 * @param request
 */
export declare function scheduleCommandInvocationForAssignment(axios: AxiosInstance, assignmentToken: string, scheduleToken: string, request: IDeviceCommandInvocationCreateRequest): AxiosPromise<IDeviceCommandInvocation>;
/**
 * List command invocations for assignment based on criteria.
 * @param axios
 * @param token
 * @param criteria
 */
export declare function listCommandInvocationsForAssignment(axios: AxiosInstance, token: string, criteria: IDateRangeSearchCriteria): AxiosPromise<IDeviceCommandInvocationSearchResults>;
/**
 * List command invocations for multiple assignments based on criteria.
 * @param axios
 * @param bulk
 * @param criteria
 */
export declare function listBulkCommandInvocationsForAssignment(axios: AxiosInstance, bulk: IDeviceAssignmentBulkRequest, criteria: IDateRangeSearchCriteria): AxiosPromise<IDeviceCommandInvocationSearchResults>;
/**
 * Create command response for a device assignment.
 * @param axios
 * @param token
 * @param request
 */
export declare function createCommandResponseForAssignment(axios: AxiosInstance, token: string, request: IDeviceCommandResponseCreateRequest): AxiosPromise<IDeviceCommandResponse>;
/**
 * List command responses for assignment based on criteria.
 * @param axios
 * @param token
 * @param criteria
 */
export declare function listCommandResponsesForAssignment(axios: AxiosInstance, token: string, criteria: IDateRangeSearchCriteria): AxiosPromise<IDeviceCommandResponseSearchResults>;
/**
 * List command responses for multiple assignments based on criteria.
 * @param axios
 * @param bulk
 * @param criteria
 */
export declare function listBulkCommandResponsesForAssignment(axios: AxiosInstance, bulk: IDeviceAssignmentBulkRequest, criteria: IDateRangeSearchCriteria): AxiosPromise<IDeviceCommandResponseSearchResults>;
/**
 * Create state change for a device assignment.
 * @param axios
 * @param token
 * @param request
 */
export declare function createStateChangeForAssignment(axios: AxiosInstance, token: string, request: IDeviceStateChangeCreateRequest): AxiosPromise<IDeviceStateChange>;
/**
 * List state changes for assignment based on criteria.
 * @param axios
 * @param token
 * @param criteria
 */
export declare function listStateChangesForAssignment(axios: AxiosInstance, token: string, criteria: IDateRangeSearchCriteria): AxiosPromise<IDeviceStateChangeSearchResults>;
/**
 * List state changes for multiple assignments based on criteria.
 * @param axios
 * @param bulk
 * @param criteria
 */
export declare function listBulkStateChangesForAssignment(axios: AxiosInstance, bulk: IDeviceAssignmentBulkRequest, criteria: IDateRangeSearchCriteria): AxiosPromise<IDeviceStateChangeSearchResults>;
