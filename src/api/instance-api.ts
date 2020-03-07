import { AxiosInstance, AxiosPromise } from "axios";
import {
  IMicroserviceSummary,
  ITenantEngineConfiguration,
  IInstanceConfiguration
} from "../model/instance-model";
import { restAuthGet, restAuthPut } from "../rest";

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
