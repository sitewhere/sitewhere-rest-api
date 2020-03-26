import { AxiosInstance, AxiosPromise } from "axios";
import { ITenantCreateRequest, ITenant, ITenantSearchCriteria, ITenantResponseFormat, ITenantConfigurationTemplate, ITenantDatasetTemplate, ITenantSearchResults } from "../model/tenants-model";
/**
 * Create a new tenant.
 * @param axios
 * @param request
 */
export declare function createTenant(axios: AxiosInstance, request: ITenantCreateRequest): AxiosPromise<ITenant>;
/**
 * Get a tenant by unique token.
 * @param axios
 * @param token
 * @param format
 */
export declare function getTenant(axios: AxiosInstance, token: string, format: ITenantResponseFormat): AxiosPromise<ITenant>;
/**
 * Update an existing tenant.
 * @param axios
 * @param token
 * @param request
 */
export declare function updateTenant(axios: AxiosInstance, token: string, request: ITenantCreateRequest): AxiosPromise<ITenant>;
/**
 * List tenants that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listTenants(axios: AxiosInstance, criteria?: ITenantSearchCriteria, format?: ITenantResponseFormat): AxiosPromise<ITenantSearchResults>;
/**
 * Delete an existing tenant.
 * @param axios
 * @param token
 */
export declare function deleteTenant(axios: AxiosInstance, token: string): AxiosPromise<ITenant>;
/**
 * List available tenant configuration templates.
 * @param axios
 */
export declare function listTenantConfigurationTemplates(axios: AxiosInstance): AxiosPromise<ITenantConfigurationTemplate[]>;
/**
 * List available tenant dataset templates.
 * @param axios
 */
export declare function listTenantDatasetTemplates(axios: AxiosInstance): AxiosPromise<ITenantDatasetTemplate[]>;
