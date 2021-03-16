import { AxiosInstance, AxiosPromise } from "axios";
import {
  IMicroserviceSummary,
  ITenantEngineConfiguration,
  IInstanceConfiguration,
  IEventPipelineLogResponseFormat,
  IEventPipelineLogSearchCriteria,
  IEventPipelineLogSearchResults
} from "../model/instance-model";
import {
  restAuthGet,
  restAuthPut,
  restAuthPost,
  restAuthDelete,
  randomSeedQuery
} from "../rest";
import {
  createPagingQuery
} from "../model/common-model";

/**
 * Get the currently effective instance configuration.
 * @param axios
 */
export function getInstanceConfiguration(
  axios: AxiosInstance
): AxiosPromise<IInstanceConfiguration> {
  return restAuthGet<IInstanceConfiguration>(axios, "instance/configuration");
}

/**
 * Update global instance configuration.
 * @param axios
 * @param request
 */
export function updateInstanceConfiguration(
  axios: AxiosInstance,
  request: IInstanceConfiguration
): AxiosPromise<IInstanceConfiguration> {
  return restAuthPut<IInstanceConfiguration>(
    axios,
    `instance/configuration`,
    request
  );
}

/**
 * Get a list of all microservices registered for instance.
 * @param axios
 */
export function getInstanceMicroservices(
  axios: AxiosInstance
): AxiosPromise<IMicroserviceSummary[]> {
  return restAuthGet<IMicroserviceSummary[]>(axios, "instance/microservices");
}

/**
 * Get configuration information for a tenant engine.
 * @param axios
 * @param functionalArea
 * @param tenant
 */
export function getTenantEngineConfiguration(
  axios: AxiosInstance,
  functionalArea: string,
  tenant: string
): AxiosPromise<ITenantEngineConfiguration> {
  return restAuthGet<ITenantEngineConfiguration>(
    axios,
    `instance/microservices/${functionalArea}/tenants/${tenant}/configuration`
  );
}

/**
 * Update configuration information for a tenant engine.
 * @param axios
 * @param functionalArea
 * @param tenant
 * @param configuration
 */
export function updateTenantEngineConfiguration(
  axios: AxiosInstance,
  functionalArea: string,
  tenant: string,
  configuration: any
): AxiosPromise<ITenantEngineConfiguration> {
  return restAuthPost<ITenantEngineConfiguration>(
    axios,
    `instance/microservices/${functionalArea}/tenants/${tenant}/configuration`,
    configuration
  );
}

/**
 * List event pipeline log entries that match the given criteria.
 * @param axios 
 * @param tenantToken 
 * @param criteria 
 * @param format 
 * @returns 
 */
export function listInstancePipelineLogEntries(
  axios: AxiosInstance,
  tenantToken: string,
  criteria?: IEventPipelineLogSearchCriteria,
  format?: IEventPipelineLogResponseFormat
): AxiosPromise<IEventPipelineLogSearchResults> {
  let query = randomSeedQuery();
  if (format) {
  }
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IEventPipelineLogSearchResults>(
    axios,
    `instance/eventpipeline/tenants/${tenantToken}/recent${query}`
  );
}

/**
 * Delete event pipeline log entries for the given tenant.
 * @param axios 
 * @param tenantToken 
 * @returns 
 */
export function deleteInstancePipelineLogEntries(
  axios: AxiosInstance,
  tenantToken: string,
): AxiosPromise<void> {
  return restAuthDelete<void>(axios, `instance/eventpipeline/tenants/${tenantToken}/recent`);
}
