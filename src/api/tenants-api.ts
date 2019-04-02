import { AxiosInstance, AxiosPromise } from "axios";
import {
  ITenantCreateRequest,
  ITenant,
  ITenantSearchCriteria,
  ITenantResponseFormat,
  ITenantTemplate,
  IDatasetTemplate,
  ITenantSearchResults
} from "../model/tenants-model";
import { createPagingQuery } from "../model/common-model";
import {
  restAuthGet,
  restAuthPost,
  restAuthPut,
  restAuthDelete,
  randomSeedQuery
} from "../rest";

/**
 * Create a new tenant.
 * @param axios
 * @param request
 */
export function createTenant(
  axios: AxiosInstance,
  request: ITenantCreateRequest
): AxiosPromise<ITenant> {
  return restAuthPost<ITenant>(axios, "tenants", request);
}

/**
 * Get a tenant by unique token.
 * @param axios
 * @param token
 * @param format
 */
export function getTenant(
  axios: AxiosInstance,
  token: string,
  format: ITenantResponseFormat
): AxiosPromise<ITenant> {
  let query = randomSeedQuery();
  if (format) {
    // No format options available.
  }
  return restAuthGet<ITenant>(axios, `tenants/${token}${query}`);
}

/**
 * Update an existing tenant.
 * @param axios
 * @param token
 * @param request
 */
export function updateTenant(
  axios: AxiosInstance,
  token: string,
  request: ITenantCreateRequest
): AxiosPromise<ITenant> {
  return restAuthPut<ITenant>(axios, `tenants/${token}`, request);
}

/**
 * List tenants that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function listTenants(
  axios: AxiosInstance,
  criteria?: ITenantSearchCriteria,
  format?: ITenantResponseFormat
): AxiosPromise<ITenantSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    // No response format options available.
  }
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<ITenantSearchResults>(axios, `tenants${query}`);
}

/**
 * Delete an existing tenant.
 * @param axios
 * @param token
 */
export function deleteTenant(
  axios: AxiosInstance,
  token: string
): AxiosPromise<ITenant> {
  return restAuthDelete<ITenant>(axios, `tenants/${token}`);
}

/**
 * List available tenant templates.
 * @param axios
 */
export function listTenantTemplates(
  axios: AxiosInstance
): AxiosPromise<ITenantTemplate[]> {
  return restAuthGet<ITenantTemplate[]>(axios, `tenants/templates`);
}

/**
 * List available dataset templates.
 * @param axios
 */
export function listDatasetTemplates(
  axios: AxiosInstance
): AxiosPromise<IDatasetTemplate[]> {
  return restAuthGet<IDatasetTemplate[]>(axios, `tenants/datasets`);
}
