import { IBrandedEntityCreateRequest, IBrandedEntity, ISearchCriteria, ISearchResults, IResponseFormat, IAccessible } from "./common-model";
/**
 * Used to create or update a tenant.
 */
export interface ITenantCreateRequest extends IBrandedEntityCreateRequest {
    name: string;
    authenticationToken: string;
    authorizedUserIds: string[];
    tenantTemplateId: string;
    datasetTemplateId: string;
}
/**
 * Tenant information.
 */
export interface ITenant extends IBrandedEntity {
    name: string;
    authenticationToken: string;
    authorizedUserIds: string[];
    tenantTemplateId: string;
    datasetTemplateId: string;
}
/**
 * Response format for tenant records.
 */
export interface ITenantResponseFormat extends IResponseFormat {
}
/**
 * Search criteria for tenants.
 */
export interface ITenantSearchCriteria extends ISearchCriteria {
}
/**
 * Search results for tenants.
 */
export interface ITenantSearchResults extends ISearchResults<ITenant> {
}
/**
 * Tenant template information.
 */
export interface ITenantTemplate extends IAccessible {
    name: string;
}
/**
 * Initializers used in dataset templates.
 */
export interface IDatasetIntitializers {
    deviceManagement: string[];
    assetManagement: string[];
    scheduleManagement: string[];
}
/**
 * Dataset template information.
 */
export interface IDatasetTemplate {
    id: string;
    name: string;
    initializers: IDatasetIntitializers;
}
