import { AxiosInstance, AxiosPromise } from "axios";
import { IConfigurationModel, IElementContent } from "../model/configuration-model";
import { IInstanceTopologySummary, ITenantEngineState } from "../model/instance-model";
/**
 * Get instance topology including both global and multitenant microservices.
 * @param axios
 */
export declare function getTopology(axios: AxiosInstance): AxiosPromise<IInstanceTopologySummary[]>;
/**
 * Get elements in the instance topology that are global in scope.
 * @param axios
 */
export declare function getGlobalTopology(axios: AxiosInstance): AxiosPromise<IInstanceTopologySummary[]>;
/**
 * Get elements in the instance topology that are multitenant in scope.
 * @param axios
 */
export declare function getTenantTopology(axios: AxiosInstance): AxiosPromise<IInstanceTopologySummary[]>;
/**
 * Get summary of runtime state for a tenant.
 * @param axios
 * @param identifier
 * @param tenantToken
 */
export declare function getTenantRuntimeState(axios: AxiosInstance, identifier: string, tenantToken: string): AxiosPromise<ITenantEngineState[]>;
/**
 * Get configuration model for a given microservice identifier.
 * @param axios
 * @param identifier
 */
export declare function getConfigurationModel(axios: AxiosInstance, identifier: string): AxiosPromise<IConfigurationModel>;
/**
 * Get configuration for global microservice based on identifier.
 * @param axios
 * @param identifier
 */
export declare function getGlobalConfiguration(axios: AxiosInstance, identifier: string): AxiosPromise<IElementContent>;
/**
 * Update configuration for global microservice based on identifier.
 * @param axios
 * @param identifier
 * @param config
 */
export declare function updateGlobalConfiguration(axios: AxiosInstance, identifier: string, config: IElementContent): AxiosPromise<void>;
/**
 * Get configuration for tenant microservice based on identifier.
 * @param axios
 * @param identifier
 */
export declare function getTenantConfiguration(axios: AxiosInstance, identifier: string, tenantToken: string): AxiosPromise<IElementContent>;
/**
 * Update configuration for tenant microservice based on identifier.
 * @param axios
 * @param identifier
 * @param config
 */
export declare function updateTenantConfiguration(axios: AxiosInstance, identifier: string, tenantToken: string, config: IElementContent): AxiosPromise<void>;
