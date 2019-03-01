import { AxiosInstance, AxiosPromise } from "axios";
import { IDeviceTypeCreateRequest, IDeviceType, IDeviceTypeSearchCriteria, IDeviceTypeResponseFormat } from "../model/device-types-model";
/**
 * Create a new device type.
 * @param axios
 * @param request
 */
export declare function createDeviceType(axios: AxiosInstance, request: IDeviceTypeCreateRequest): AxiosPromise<IDeviceType>;
/**
 * Get a device type by unique token.
 * @param axios
 * @param deviceTypeToken
 */
export declare function getDeviceType(axios: AxiosInstance, deviceTypeToken: string): AxiosPromise<IDeviceType>;
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
export declare function listDeviceTypes(axios: AxiosInstance, criteria?: IDeviceTypeSearchCriteria, format?: IDeviceTypeResponseFormat): AxiosPromise<IDeviceType[]>;
/**
 * Delete an existing device type.
 * @param axios
 * @param deviceTypeToken
 */
export declare function deleteDeviceType(axios: AxiosInstance, deviceTypeToken: string): AxiosPromise<IDeviceType>;
