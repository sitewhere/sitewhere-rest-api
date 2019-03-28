import { AxiosInstance, AxiosPromise } from "axios";
import {
  IAreaTypeCreateRequest,
  IAreaType,
  IAreaTypeSearchCriteria,
  IAreaTypeResponseFormat,
  IAreaTypeSearchResults
} from "../model/area-types-model";
import { createPagingQuery } from "../model/common-model";
import {
  restAuthGet,
  restAuthPost,
  restAuthPut,
  restAuthDelete,
  randomSeedQuery,
  addFilter
} from "../rest";

/**
 * Create a new area type.
 * @param axios
 * @param request
 */
export function createAreaType(
  axios: AxiosInstance,
  request: IAreaTypeCreateRequest
): AxiosPromise<IAreaType> {
  return restAuthPost<IAreaType>(axios, "areatypes", request);
}

/**
 * Get an area type by unique token.
 * @param axios
 * @param token
 * @param format
 */
export function getAreaType(
  axios: AxiosInstance,
  token: string,
  format: IAreaTypeResponseFormat
): AxiosPromise<IAreaType> {
  let query = randomSeedQuery();
  if (format) {
    query += addFilter(
      format.includeContainedAreaTypes,
      "includeContainedAreaTypes"
    );
  }
  return restAuthGet<IAreaType>(axios, `areatypes/${token}${query}`);
}

/**
 * Update an existing area type.
 * @param axios
 * @param token
 * @param request
 */
export function updateAreaType(
  axios: AxiosInstance,
  token: string,
  request: IAreaTypeCreateRequest
): AxiosPromise<IAreaType> {
  return restAuthPut<IAreaType>(axios, `areatypes/${token}`, request);
}

/**
 * List area types that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function listAreaTypes(
  axios: AxiosInstance,
  criteria?: IAreaTypeSearchCriteria,
  format?: IAreaTypeResponseFormat
): AxiosPromise<IAreaTypeSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    query += addFilter(
      format.includeContainedAreaTypes,
      "includeContainedAreaTypes"
    );
  }
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IAreaTypeSearchResults>(axios, `areatypes${query}`);
}

/**
 * Delete an existing area type.
 * @param axios
 * @param token
 */
export function deleteAreaType(
  axios: AxiosInstance,
  token: string
): AxiosPromise<IAreaType> {
  return restAuthDelete<IAreaType>(axios, `areatypes/${token}`);
}
