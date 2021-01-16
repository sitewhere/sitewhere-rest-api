import { AxiosInstance, AxiosPromise } from "axios";
import { IDeviceCreateRequest, IDevice, IDeviceSearchCriteria, IDeviceResponseFormat, IDeviceSearchResults, IDeviceSummarySearchResults } from "../model/devices-model";
import { IDeviceAssignmentResponseFormat, IDeviceAssignmentSearchResults } from "../model/device-assignments-model";
import { ISearchCriteria } from "../model/common-model";
/**
 * Create a new device.
 * @param axios
 * @param request
 */
export declare function createDevice(axios: AxiosInstance, request: IDeviceCreateRequest): AxiosPromise<IDevice>;
/**
 * Get a device by unique token.
 * @param axios
 * @param deviceToken
 */
export declare function getDevice(axios: AxiosInstance, token: string, format: IDeviceResponseFormat): AxiosPromise<IDevice>;
/**
 * Update an existing device.
 * @param axios
 * @param deviceToken
 * @param request
 */
export declare function updateDevice(axios: AxiosInstance, deviceToken: string, request: IDeviceCreateRequest): AxiosPromise<IDevice>;
/**
 * List devices that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listDevices(axios: AxiosInstance, criteria?: IDeviceSearchCriteria, format?: IDeviceResponseFormat): AxiosPromise<IDeviceSearchResults>;
/**
 * List summary data for devices that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listDeviceSummaries(axios: AxiosInstance, criteria?: IDeviceSearchCriteria): AxiosPromise<IDeviceSummarySearchResults>;
/**
 * Delete an existing device.
 * @param axios
 * @param deviceToken
 */
export declare function deleteDevice(axios: AxiosInstance, deviceToken: string): AxiosPromise<IDevice>;
/**
 * List devices that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listDeviceAssignmentHistory(axios: AxiosInstance, deviceToken: string, criteria?: ISearchCriteria, format?: IDeviceAssignmentResponseFormat): AxiosPromise<IDeviceAssignmentSearchResults>;
