import { AxiosInstance, AxiosPromise } from "axios";
import { IDeviceStatusCreateRequest, IDeviceStatus, IDeviceStatusSearchCriteria, IDeviceStatusResponseFormat } from "../model/device-statuses-model";
/**
 * Create a new device status.
 * @param axios
 * @param request
 */
export declare function createDeviceStatus(axios: AxiosInstance, request: IDeviceStatusCreateRequest): AxiosPromise<IDeviceStatus>;
/**
 * Get a device status by unique token.
 * @param axios
 * @param statusToken
 */
export declare function getDeviceStatus(axios: AxiosInstance, statusToken: string): AxiosPromise<IDeviceStatus>;
/**
 * Update an existing device status.
 * @param axios
 * @param statusToken
 * @param request
 */
export declare function updateDeviceStatus(axios: AxiosInstance, statusToken: string, request: IDeviceStatusCreateRequest): AxiosPromise<IDeviceStatus>;
/**
 * List device statuses that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listDeviceStatuses(axios: AxiosInstance, criteria?: IDeviceStatusSearchCriteria, format?: IDeviceStatusResponseFormat): AxiosPromise<IDeviceStatus[]>;
/**
 * Delete an existing device status.
 * @param axios
 * @param statusToken
 */
export declare function deleteDeviceStatus(axios: AxiosInstance, statusToken: string): AxiosPromise<IDeviceStatus>;
