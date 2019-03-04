import { AxiosInstance, AxiosPromise } from "axios";
import { IScheduleCreateRequest, ISchedule, IScheduleSearchCriteria, IScheduleResponseFormat, IScheduleSearchResults } from "../model/schedules-model";
/**
 * Create a new schedule.
 * @param axios
 * @param request
 */
export declare function createSchedule(axios: AxiosInstance, request: IScheduleCreateRequest): AxiosPromise<ISchedule>;
/**
 * Get a schedule by unique token.
 * @param axios
 * @param token
 */
export declare function getSchedule(axios: AxiosInstance, token: string): AxiosPromise<ISchedule>;
/**
 * Update an existing schedule.
 * @param axios
 * @param token
 * @param request
 */
export declare function updateSchedule(axios: AxiosInstance, token: string, request: IScheduleCreateRequest): AxiosPromise<ISchedule>;
/**
 * List schedules that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listSchedules(axios: AxiosInstance, criteria?: IScheduleSearchCriteria, format?: IScheduleResponseFormat): AxiosPromise<IScheduleSearchResults>;
/**
 * Delete an existing schedule.
 * @param axios
 * @param token
 */
export declare function deleteSchedule(axios: AxiosInstance, token: string): AxiosPromise<ISchedule>;
