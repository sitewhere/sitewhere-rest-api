import { AxiosInstance, AxiosPromise } from "axios";
import {
  IScheduleCreateRequest,
  ISchedule,
  IScheduleSearchCriteria,
  IScheduleResponseFormat,
  IScheduleSearchResults
} from "../model/schedules-model";
import { createPagingQuery } from "../model/common-model";
import {
  restAuthGet,
  restAuthPost,
  restAuthPut,
  restAuthDelete,
  randomSeedQuery
} from "../rest";

/**
 * Create a new schedule.
 * @param axios
 * @param request
 */
export function createSchedule(
  axios: AxiosInstance,
  request: IScheduleCreateRequest
): AxiosPromise<ISchedule> {
  return restAuthPost<ISchedule>(axios, "schedules", request);
}

/**
 * Get a schedule by unique token.
 * @param axios
 * @param token
 */
export function getSchedule(
  axios: AxiosInstance,
  token: string
): AxiosPromise<ISchedule> {
  return restAuthGet<ISchedule>(axios, `schedules/${token}`);
}

/**
 * Update an existing schedule.
 * @param axios
 * @param token
 * @param request
 */
export function updateSchedule(
  axios: AxiosInstance,
  token: string,
  request: IScheduleCreateRequest
): AxiosPromise<ISchedule> {
  return restAuthPut<ISchedule>(axios, `schedules/${token}`, request);
}

/**
 * List schedules that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function listSchedules(
  axios: AxiosInstance,
  criteria?: IScheduleSearchCriteria,
  format?: IScheduleResponseFormat
): AxiosPromise<IScheduleSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    // No response format options.
  }
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IScheduleSearchResults>(axios, `schedules${query}`);
}

/**
 * Delete an existing schedule.
 * @param axios
 * @param token
 */
export function deleteSchedule(
  axios: AxiosInstance,
  token: string
): AxiosPromise<ISchedule> {
  return restAuthDelete<ISchedule>(axios, `schedules/${token}`);
}
