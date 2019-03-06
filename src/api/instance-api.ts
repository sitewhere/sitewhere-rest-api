import { AxiosInstance, AxiosPromise } from "axios";
import {
  IConfigurationModel,
  IElementContent
} from "../model/configuration-model";
import {
  IInstanceTopologySummary,
  ITenantEngineState
} from "../model/instance-model";
import { restAuthGet, restAuthPost } from "../rest";

/**
 * Get instance topology including both global and multitenant microservices.
 * @param axios
 */
export function getTopology(
  axios: AxiosInstance
): AxiosPromise<IInstanceTopologySummary[]> {
  return restAuthGet<IInstanceTopologySummary[]>(axios, `instance/topology`);
}

/**
 * Get elements in the instance topology that are global in scope.
 * @param axios
 */
export function getGlobalTopology(
  axios: AxiosInstance
): AxiosPromise<IInstanceTopologySummary[]> {
  return restAuthGet<IInstanceTopologySummary[]>(
    axios,
    `instance/topology/global`
  );
}

/**
 * Get elements in the instance topology that are multitenant in scope.
 * @param axios
 */
export function getTenantTopology(
  axios: AxiosInstance
): AxiosPromise<IInstanceTopologySummary[]> {
  return restAuthGet<IInstanceTopologySummary[]>(
    axios,
    `instance/topology/tenant`
  );
}

/**
 * Get summary of runtime state for a tenant.
 * @param axios
 * @param identifier
 * @param tenantToken
 */
export function getTenantRuntimeState(
  axios: AxiosInstance,
  identifier: string,
  tenantToken: string
): AxiosPromise<ITenantEngineState[]> {
  return restAuthGet<ITenantEngineState[]>(
    axios,
    `instance/microservice/${identifier}/tenants/${tenantToken}/state`
  );
}

/**
 * Get configuration model for a given microservice identifier.
 * @param axios
 * @param identifier
 */
export function getConfigurationModel(
  axios: AxiosInstance,
  identifier: string
): AxiosPromise<IConfigurationModel> {
  return restAuthGet<IConfigurationModel>(
    axios,
    `instance/microservice/${identifier}/configuration/model`
  );
}

/**
 * Get configuration for global microservice based on identifier.
 * @param axios
 * @param identifier
 */
export function getGlobalConfiguration(
  axios: AxiosInstance,
  identifier: string
): AxiosPromise<IElementContent> {
  return restAuthGet<IElementContent>(
    axios,
    `instance/microservice/${identifier}/configuration`
  );
}

/**
 * Update configuration for global microservice based on identifier.
 * @param axios
 * @param identifier
 * @param config
 */
export function updateGlobalConfiguration(
  axios: AxiosInstance,
  identifier: string,
  config: IElementContent
): AxiosPromise<void> {
  return restAuthPost(
    axios,
    `instance/microservice/${identifier}/configuration`,
    config
  );
}

/**
 * Get configuration for tenant microservice based on identifier.
 * @param axios
 * @param identifier
 */
export function getTenantConfiguration(
  axios: AxiosInstance,
  identifier: string,
  tenantToken: string
): AxiosPromise<IElementContent> {
  return restAuthGet<IElementContent>(
    axios,
    `instance/microservice/${identifier}/tenants/${tenantToken}/configuration`
  );
}

/**
 * Update configuration for tenant microservice based on identifier.
 * @param axios
 * @param identifier
 * @param config
 */
export function updateTenantConfiguration(
  axios: AxiosInstance,
  identifier: string,
  tenantToken: string,
  config: IElementContent
): AxiosPromise<void> {
  return restAuthPost(
    axios,
    `instance/microservice/${identifier}/tenants/${tenantToken}/configuration`,
    config
  );
}
