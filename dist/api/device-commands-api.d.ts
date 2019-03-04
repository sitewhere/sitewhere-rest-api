import { AxiosInstance, AxiosPromise } from "axios";
import { IDeviceCommandCreateRequest, IDeviceCommand, IDeviceCommandSearchCriteria, IDeviceCommandResponseFormat, IDeviceCommandSearchResults } from "../model/device-commands-model";
/**
 * Create a new device command.
 * @param axios
 * @param request
 */
export declare function createDeviceCommand(axios: AxiosInstance, request: IDeviceCommandCreateRequest): AxiosPromise<IDeviceCommand>;
/**
 * Get a device command by unique token.
 * @param axios
 * @param commandToken
 */
export declare function getDeviceCommand(axios: AxiosInstance, commandToken: string): AxiosPromise<IDeviceCommand>;
/**
 * Update an existing device command.
 * @param axios
 * @param commandToken
 * @param request
 */
export declare function updateDeviceCommand(axios: AxiosInstance, commandToken: string, request: IDeviceCommandCreateRequest): AxiosPromise<IDeviceCommand>;
/**
 * List device commands that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listDeviceCommands(axios: AxiosInstance, criteria?: IDeviceCommandSearchCriteria, format?: IDeviceCommandResponseFormat): AxiosPromise<IDeviceCommandSearchResults>;
/**
 * List device commands that match the given criteria
 * and arrange them by namespace.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listDeviceCommandsForNamespace(axios: AxiosInstance, criteria?: IDeviceCommandSearchCriteria, format?: IDeviceCommandResponseFormat): AxiosPromise<IDeviceCommandSearchResults>;
/**
 * Delete an existing device command.
 * @param axios
 * @param commandToken
 */
export declare function deleteDeviceCommand(axios: AxiosInstance, commandToken: string): AxiosPromise<IDeviceCommand>;
