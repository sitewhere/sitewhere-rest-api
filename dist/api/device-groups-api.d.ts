import { AxiosInstance, AxiosPromise } from "axios";
import { IDeviceGroupCreateRequest, IDeviceGroup, IDeviceGroupSearchCriteria, IDeviceGroupResponseFormat, IDeviceGroupElementCreateRequest, IDeviceGroupElement, IDeviceGroupElementResponseFormat, IDeviceGroupSearchResults, IDeviceGroupElementSearchResults } from "../model/device-groups-model";
/**
 * Create a new device group.
 * @param axios
 * @param request
 */
export declare function createDeviceGroup(axios: AxiosInstance, request: IDeviceGroupCreateRequest): AxiosPromise<IDeviceGroup>;
/**
 * Get a device group by unique token.
 * @param axios
 * @param token
 * @param format
 */
export declare function getDeviceGroup(axios: AxiosInstance, token: string, format: IDeviceGroupResponseFormat): AxiosPromise<IDeviceGroup>;
/**
 * Update an existing device group.
 * @param axios
 * @param token
 * @param request
 */
export declare function updateDeviceGroup(axios: AxiosInstance, token: string, request: IDeviceGroupCreateRequest): AxiosPromise<IDeviceGroup>;
/**
 * List device groups that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listDeviceGroups(axios: AxiosInstance, criteria?: IDeviceGroupSearchCriteria, format?: IDeviceGroupResponseFormat): AxiosPromise<IDeviceGroupSearchResults>;
/**
 * Delete an existing device group.
 * @param axios
 * @param token
 */
export declare function deleteDeviceGroup(axios: AxiosInstance, token: string): AxiosPromise<IDeviceGroup>;
/**
 * Create a device group element.
 * @param axios
 * @param request
 */
export declare function createDeviceGroupElement(axios: AxiosInstance, token: string, request: IDeviceGroupElementCreateRequest): AxiosPromise<IDeviceGroupElement>;
/**
 * List device group elements that match the given criteria.
 * @param axios
 * @param token
 * @param criteria
 * @param format
 */
export declare function listDeviceGroupElements(axios: AxiosInstance, token: string, criteria?: IDeviceGroupSearchCriteria, format?: IDeviceGroupElementResponseFormat): AxiosPromise<IDeviceGroupElementSearchResults>;
/**
 * Delete an existing device group element.
 * @param axios
 * @param token
 * @param elementId
 */
export declare function deleteDeviceGroupElement(axios: AxiosInstance, token: string, elementId: string): AxiosPromise<IDeviceGroupElement>;
