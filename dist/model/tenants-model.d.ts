import { ISearchCriteria, ISearchResults, IResponseFormat, IColorProvider, IIconProvider, IImageProvider, IMetadataProvider } from "./common-model";
/**
 * Used to create or update a tenant.
 */
export interface ITenantCreateRequest extends IColorProvider, IIconProvider, IImageProvider, IMetadataProvider {
    token: string;
    name: string;
    authenticationToken: string;
    authorizedUserIds: string[];
    configurationTemplateId: string;
    datasetTemplateId: string;
}
/**
 * Tenant information.
 */
export interface ITenant extends IColorProvider, IIconProvider, IImageProvider, IMetadataProvider {
    token: string;
    name: string;
    authenticationToken: string;
    authorizedUserIds: string[];
    configurationTemplateId: string;
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
 * Tenant configuration template information.
 */
export interface ITenantConfigurationTemplate {
    id: string;
    name: string;
    description: string;
}
/**
 * Tenant dataset template information.
 */
export interface ITenantDatasetTemplate {
    id: string;
    name: string;
    description: string;
}
