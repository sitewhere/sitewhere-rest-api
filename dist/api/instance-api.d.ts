import { AxiosInstance, AxiosPromise } from "axios";
import { IMicroserviceSummary, ITenantEngineConfiguration, IInstanceConfiguration, IEventPipelineLogResponseFormat, IEventPipelineLogSearchCriteria, IEventPipelineLogSearchResults } from "../model/instance-model";
/**
 * Get the currently effective instance configuration.
 * @param axios
 */
export declare function getInstanceConfiguration(axios: AxiosInstance): AxiosPromise<IInstanceConfiguration>;
/**
 * Update global instance configuration.
 * @param axios
 * @param request
 */
export declare function updateInstanceConfiguration(axios: AxiosInstance, request: IInstanceConfiguration): AxiosPromise<IInstanceConfiguration>;
/**
 * Get a list of all microservices registered for instance.
 * @param axios
 */
export declare function getInstanceMicroservices(axios: AxiosInstance): AxiosPromise<IMicroserviceSummary[]>;
/**
 * Get configuration information for a tenant engine.
 * @param axios
 * @param functionalArea
 * @param tenant
 */
export declare function getTenantEngineConfiguration(axios: AxiosInstance, functionalArea: string, tenant: string): AxiosPromise<ITenantEngineConfiguration>;
/**
 * Update configuration information for a tenant engine.
 * @param axios
 * @param functionalArea
 * @param tenant
 * @param configuration
 */
export declare function updateTenantEngineConfiguration(axios: AxiosInstance, functionalArea: string, tenant: string, configuration: any): AxiosPromise<ITenantEngineConfiguration>;
/**
 * List event pipeline log entries that match the given criteria.
 * @param axios
 * @param tenantToken
 * @param criteria
 * @param format
 * @returns
 */
export declare function listInstancePipelineLogEntries(axios: AxiosInstance, tenantToken: string, criteria?: IEventPipelineLogSearchCriteria, format?: IEventPipelineLogResponseFormat): AxiosPromise<IEventPipelineLogSearchResults>;
/**
 * Delete event pipeline log entries for the given tenant.
 * @param axios
 * @param tenantToken
 * @returns
 */
export declare function deleteInstancePipelineLogEntries(axios: AxiosInstance, tenantToken: string): AxiosPromise<void>;
