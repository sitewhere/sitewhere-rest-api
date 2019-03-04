import { AxiosInstance, AxiosPromise } from "axios";
import {
  ICustomerTypeCreateRequest,
  ICustomerType,
  ICustomerTypeSearchCriteria,
  ICustomerTypeResponseFormat,
  ICustomerTypeSearchResults
} from "../model/customer-types-model";
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
 * Create a new customer type.
 * @param axios
 * @param request
 */
export function createCustomerType(
  axios: AxiosInstance,
  request: ICustomerTypeCreateRequest
): AxiosPromise<ICustomerType> {
  return restAuthPost<ICustomerType>(axios, "customertypes", request);
}

/**
 * Get a customer type by unique token.
 * @param axios
 * @param token
 */
export function getCustomerType(
  axios: AxiosInstance,
  token: string
): AxiosPromise<ICustomerType> {
  return restAuthGet<ICustomerType>(axios, `customertypes/${token}`);
}

/**
 * Update an existing customer type.
 * @param axios
 * @param token
 * @param request
 */
export function updateCustomerType(
  axios: AxiosInstance,
  token: string,
  request: ICustomerTypeCreateRequest
): AxiosPromise<ICustomerType> {
  return restAuthPut<ICustomerType>(axios, `customertypes/${token}`, request);
}

/**
 * List customer types that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function listCustomerTypes(
  axios: AxiosInstance,
  criteria?: ICustomerTypeSearchCriteria,
  format?: ICustomerTypeResponseFormat
): AxiosPromise<ICustomerTypeSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    query += addFilter(
      format.includeContainedCustomerTypes,
      "includeContainedCustomerTypes"
    );
  }
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<ICustomerTypeSearchResults>(
    axios,
    `customertypes${query}`
  );
}

/**
 * Delete an existing customer type.
 * @param axios
 * @param token
 */
export function deleteCustomerType(
  axios: AxiosInstance,
  token: string
): AxiosPromise<ICustomerType> {
  return restAuthDelete<ICustomerType>(axios, `customertypes/${token}`);
}
