import { AxiosInstance, AxiosPromise } from "axios";
import { IAreaCreateRequest, IArea, IAreaSearchCriteria, IAreaResponseFormat, IAreaSearchResults } from "../model/areas-model";
import { IDeviceAssignmentResponseFormat, IDeviceAssignmentSearchResults, IDeviceAssignmentSummarySearchResults } from "../model/device-assignments-model";
import { ISearchCriteria, IDateRangeSearchCriteria, ITreeNode } from "../model/common-model";
import { IDeviceMeasurementSearchResults, IDeviceLocationSearchResults, IDeviceAlertSearchResults, IDeviceMeasurementResponseFormat, IDeviceLocationResponseFormat, IDeviceAlertResponseFormat } from "../model/device-events-model";
/**
 * Create a new area.
 * @param axios
 * @param request
 */
export declare function createArea(axios: AxiosInstance, request: IAreaCreateRequest): AxiosPromise<IArea>;
/**
 * Get an area by unique token.
 * @param axios
 * @param token
 * @param format
 */
export declare function getArea(axios: AxiosInstance, token: string, format: IAreaResponseFormat): AxiosPromise<IArea>;
/**
 * Update an existing area.
 * @param axios
 * @param token
 * @param request
 */
export declare function updateArea(axios: AxiosInstance, token: string, request: IAreaCreateRequest): AxiosPromise<IArea>;
/**
 * List areas that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listAreas(axios: AxiosInstance, criteria?: IAreaSearchCriteria, format?: IAreaResponseFormat): AxiosPromise<IAreaSearchResults>;
/**
 * Get all areas as a tree structure.
 * @param axios
 */
export declare function getAreasTree(axios: AxiosInstance): AxiosPromise<ITreeNode[]>;
/**
 * Delete an existing area.
 * @param axios
 * @param token
 */
export declare function deleteArea(axios: AxiosInstance, token: string): AxiosPromise<IArea>;
/**
 * List assignments associated with an area.
 * @param axios
 * @param token
 * @param criteria
 * @param format
 */
export declare function listAssignmentsForArea(axios: AxiosInstance, token: string, criteria?: ISearchCriteria, format?: IDeviceAssignmentResponseFormat): AxiosPromise<IDeviceAssignmentSearchResults>;
/**
 * List assignments for area in summary format.
 * @param axios
 * @param token
 * @param criteria
 * @param format
 */
export declare function listAssignmentSummariesForArea(axios: AxiosInstance, token: string, criteria?: ISearchCriteria, format?: IDeviceAssignmentResponseFormat): AxiosPromise<IDeviceAssignmentSummarySearchResults>;
/**
 * List measurement events associated with area.
 * @param axios
 * @param token
 * @param criteria
 */
export declare function listMeasurementsForArea(axios: AxiosInstance, token: string, criteria?: IDateRangeSearchCriteria, format?: IDeviceMeasurementResponseFormat): AxiosPromise<IDeviceMeasurementSearchResults>;
/**
 * List location events associated with area.
 * @param axios
 * @param token
 * @param criteria
 */
export declare function listLocationsForArea(axios: AxiosInstance, token: string, criteria?: IDateRangeSearchCriteria, format?: IDeviceLocationResponseFormat): AxiosPromise<IDeviceLocationSearchResults>;
/**
 * List alert events associated with area.
 * @param axios
 * @param token
 * @param criteria
 */
export declare function listAlertsForArea(axios: AxiosInstance, token: string, criteria?: IDateRangeSearchCriteria, format?: IDeviceAlertResponseFormat): AxiosPromise<IDeviceAlertSearchResults>;
