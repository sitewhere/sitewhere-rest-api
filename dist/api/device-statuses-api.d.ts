import { AxiosInstance, AxiosPromise } from "axios";
import { IDeviceStatusSearchCriteria, IDeviceStatusResponseFormat, IDeviceStatusSearchResults } from "../model/device-statuses-model";
/**
 * List device statuses that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listDeviceStatuses(axios: AxiosInstance, criteria?: IDeviceStatusSearchCriteria, format?: IDeviceStatusResponseFormat): AxiosPromise<IDeviceStatusSearchResults>;
