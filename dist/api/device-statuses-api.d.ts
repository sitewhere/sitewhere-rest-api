import { AxiosInstance, AxiosPromise } from "axios";
import { IDeviceStatusCreateRequest, IDeviceStatus, IDeviceStatusSearchCriteria, IDeviceStatusResponseFormat, IDeviceStatusSearchResults } from "../model/device-statuses-model";
/**
 * Create a new device status.
 * @param axios
 * @param request
 */
export declare function createDeviceStatus(axios: AxiosInstance, request: IDeviceStatusCreateRequest): AxiosPromise<IDeviceStatus>;
/**
 * Get a device status by unique token.
 * @param axios
 * @param token
 */
export declare function getDeviceStatus(axios: AxiosInstance, token: string): AxiosPromise<IDeviceStatus>;
/**
 * Update an existing device status.
 * @param axios
 * @param token
 * @param request
 */
export declare function updateDeviceStatus(axios: AxiosInstance, token: string, request: IDeviceStatusCreateRequest): AxiosPromise<IDeviceStatus>;
/**
 * List device statuses that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listDeviceStatuses(axios: AxiosInstance, criteria?: IDeviceStatusSearchCriteria, format?: IDeviceStatusResponseFormat): AxiosPromise<IDeviceStatusSearchResults>;
/**
 * Delete an existing device status.
 * @param axios
 * @param token
 */
export declare function deleteDeviceStatus(axios: AxiosInstance, token: string): AxiosPromise<IDeviceStatus>;
