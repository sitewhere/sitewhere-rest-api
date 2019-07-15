import { AxiosInstance, AxiosPromise } from "axios";
import { IDeviceTypeCreateRequest, IDeviceType, IDeviceTypeSearchCriteria, IDeviceTypeResponseFormat, IDeviceTypeSearchResults } from "../model/device-types-model";
import { IDeviceCommand, IDeviceCommandCreateRequest, IDeviceCommandResponseFormat } from "../model/device-commands-model";
import { IDeviceStatus, IDeviceStatusCreateRequest, IDeviceStatusResponseFormat } from "../model/device-statuses-model";
/**
 * Create a new device type.
 * @param axios
 * @param request
 */
export declare function createDeviceType(axios: AxiosInstance, request: IDeviceTypeCreateRequest): AxiosPromise<IDeviceType>;
/**
 * Get a device type by unique token.
 * @param axios
 * @param token
 */
export declare function getDeviceType(axios: AxiosInstance, token: string, format: IDeviceTypeResponseFormat): AxiosPromise<IDeviceType>;
/**
 * Update an existing device type.
 * @param axios
 * @param deviceTypeToken
 * @param request
 */
export declare function updateDeviceType(axios: AxiosInstance, deviceTypeToken: string, request: IDeviceTypeCreateRequest): AxiosPromise<IDeviceType>;
/**
 * List device types that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listDeviceTypes(axios: AxiosInstance, criteria?: IDeviceTypeSearchCriteria, format?: IDeviceTypeResponseFormat): AxiosPromise<IDeviceTypeSearchResults>;
/**
 * Delete an existing device type.
 * @param axios
 * @param deviceTypeToken
 */
export declare function deleteDeviceType(axios: AxiosInstance, deviceTypeToken: string): AxiosPromise<IDeviceType>;
/**
 * Create a new device command.
 * @param axios
 * @param deviceTypeToken
 * @param request
 */
export declare function createDeviceCommand(axios: AxiosInstance, deviceTypeToken: string, request: IDeviceCommandCreateRequest): AxiosPromise<IDeviceCommand>;
/**
 * Get a device command by unique token.
 * @param axios
 * @param deviceTypeToken
 * @param commandToken
 * @param format
 */
export declare function getDeviceCommand(axios: AxiosInstance, deviceTypeToken: string, commandToken: string, format: IDeviceCommandResponseFormat): AxiosPromise<IDeviceCommand>;
/**
 * Update an existing device command.
 * @param axios
 * @param deviceTypeToken
 * @param commandToken
 * @param request
 */
export declare function updateDeviceCommand(axios: AxiosInstance, deviceTypeToken: string, commandToken: string, request: IDeviceCommandCreateRequest): AxiosPromise<IDeviceCommand>;
/**
 * Delete an existing device command.
 * @param axios
 * @param deviceTypeToken
 * @param commandToken
 */
export declare function deleteDeviceCommand(axios: AxiosInstance, deviceTypeToken: string, commandToken: string): AxiosPromise<IDeviceCommand>;
/**
 * Create a new device status.
 * @param axios
 * @param deviceTypeToken
 * @param request
 */
export declare function createDeviceStatus(axios: AxiosInstance, deviceTypeToken: string, request: IDeviceStatusCreateRequest): AxiosPromise<IDeviceStatus>;
/**
 * Get a device status by unique token.
 * @param axios
 * @param deviceTypeToken
 * @param statusToken
 * @param format
 */
export declare function getDeviceStatus(axios: AxiosInstance, deviceTypeToken: string, statusToken: IDeviceStatusResponseFormat, format: IDeviceStatusResponseFormat): AxiosPromise<IDeviceStatus>;
/**
 * Update an existing device status.
 * @param axios
 * @param deviceTypeToken
 * @param statusToken
 * @param request
 */
export declare function updateDeviceStatus(axios: AxiosInstance, deviceTypeToken: string, statusToken: IDeviceStatusResponseFormat, request: IDeviceStatusCreateRequest): AxiosPromise<IDeviceStatus>;
/**
 * Delete an existing device status.
 * @param axios
 * @param deviceTypeToken
 * @param statusToken
 */
export declare function deleteDeviceStatus(axios: AxiosInstance, deviceTypeToken: string, statusToken: IDeviceStatusResponseFormat): AxiosPromise<IDeviceStatus>;
