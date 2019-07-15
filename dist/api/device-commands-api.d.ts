import { AxiosInstance, AxiosPromise } from "axios";
import { IDeviceCommandSearchCriteria, IDeviceCommandResponseFormat, IDeviceCommandSearchResults, IDeviceCommandNamespaceSearchResults } from "../model/device-commands-model";
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
export declare function listDeviceCommandsForNamespace(axios: AxiosInstance, criteria?: IDeviceCommandSearchCriteria, format?: IDeviceCommandResponseFormat): AxiosPromise<IDeviceCommandNamespaceSearchResults>;
