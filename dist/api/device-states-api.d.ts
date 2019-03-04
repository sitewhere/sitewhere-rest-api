import { AxiosInstance, AxiosPromise } from "axios";
import { IDeviceStateResponseFormat, IDeviceStateSearchCriteria, IDeviceStateSearchResults } from "../model/device-states-model";
/**
 * Search for device states that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function searchDeviceStates(axios: AxiosInstance, criteria?: IDeviceStateSearchCriteria, format?: IDeviceStateResponseFormat): AxiosPromise<IDeviceStateSearchResults>;
