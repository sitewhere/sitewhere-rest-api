import { AxiosInstance, AxiosPromise } from "axios";
import { restAuthGet, restAuthPost, restAuthDelete } from "../rest";
import {
  IScriptTemplate,
  IScriptMetadata,
  IScriptCreateRequest,
  IScriptVersion,
  IScriptCloneRequest
} from "../model/scripting-model";

/**
 * List script categories for a functional area.
 * @param axios
 * @param identifier
 */
export function listScriptCategories(
  axios: AxiosInstance,
  identifier: string
): AxiosPromise<IScriptTemplate[]> {
  return restAuthGet<IScriptTemplate[]>(
    axios,
    `instance/microservices/${identifier}/scripting/categories`
  );
}

/**
 * List script templates for a functional area and in the given category.
 * @param axios
 * @param identifier
 * @param category
 */
export function listScriptTemplates(
  axios: AxiosInstance,
  identifier: string,
  category: string
): AxiosPromise<IScriptTemplate[]> {
  return restAuthGet<IScriptTemplate[]>(
    axios,
    `instance/microservices/${identifier}/scripting/categories/${category}/templates`
  );
}

/**
 * List metadata for microservice tenant scripts.
 * @param axios
 * @param identifier
 * @param tenantToken
 */
export function listTenantScripts(
  axios: AxiosInstance,
  identifier: string,
  tenantToken: string
): AxiosPromise<IScriptMetadata[]> {
  return restAuthGet<IScriptMetadata[]>(
    axios,
    `instance/microservices/${identifier}/tenants/${tenantToken}/scripting/scripts`
  );
}

/**
 * Get metadata for a given microservice tenant script.
 * @param axios
 * @param identifier
 * @param tenantToken
 * @param scriptId
 */
export function getTenantScript(
  axios: AxiosInstance,
  identifier: string,
  tenantToken: string,
  scriptId: string
): AxiosPromise<IScriptMetadata> {
  return restAuthGet<IScriptMetadata>(
    axios,
    `instance/microservices/${identifier}/tenants/${tenantToken}/scripting/scripts/${scriptId}`
  );
}

/**
 * Create a new script for a microservice tenant.
 * @param axios
 * @param identifier
 * @param tenantToken
 * @param request
 */
export function createTenantScript(
  axios: AxiosInstance,
  identifier: string,
  tenantToken: string,
  request: IScriptCreateRequest
): AxiosPromise<IScriptMetadata> {
  return restAuthPost<IScriptMetadata>(
    axios,
    `instance/microservices/${identifier}/tenants/${tenantToken}/scripting/scripts`,
    request
  );
}

/**
 * Get content associated with a microservice tenant script.
 * @param axios
 * @param identifier
 * @param tenantToken
 * @param scriptId
 * @param versionId
 */
export function getTenantScriptContent(
  axios: AxiosInstance,
  identifier: string,
  tenantToken: string,
  scriptId: string,
  versionId: string
): AxiosPromise<string> {
  return restAuthGet<string>(
    axios,
    `instance/microservices/${identifier}/tenants/${tenantToken}/scripting/scripts/${scriptId}/versions/${versionId}/content`
  );
}

/**
 * Update an existing microservice tenant script.
 * @param axios
 * @param identifier
 * @param tenantToken
 * @param scriptId
 * @param versionId
 * @param request
 */
export function updateTenantScript(
  axios: AxiosInstance,
  identifier: string,
  tenantToken: string,
  scriptId: string,
  versionId: string,
  request: IScriptCreateRequest
): AxiosPromise<IScriptMetadata> {
  return restAuthPost<IScriptMetadata>(
    axios,
    `instance/microservices/${identifier}/tenants/${tenantToken}/scripting/scripts/${scriptId}/versions/${versionId}`,
    request
  );
}

/**
 * Clone an existing microservice tenant script.
 * @param axios
 * @param identifier
 * @param tenantToken
 * @param scriptId
 * @param versionId
 * @param request
 */
export function cloneTenantScript(
  axios: AxiosInstance,
  identifier: string,
  tenantToken: string,
  scriptId: string,
  versionId: string,
  request: IScriptCloneRequest
): AxiosPromise<IScriptVersion> {
  return restAuthPost<IScriptVersion>(
    axios,
    `instance/microservices/${identifier}/tenants/${tenantToken}/scripting/scripts/${scriptId}/versions/${versionId}/clone`,
    request
  );
}

/**
 * Activate a given version of a microservice tenant script.
 * @param axios
 * @param identifier
 * @param tenantToken
 * @param scriptId
 * @param versionId
 */
export function activateTenantScript(
  axios: AxiosInstance,
  identifier: string,
  tenantToken: string,
  scriptId: string,
  versionId: string
): AxiosPromise<IScriptMetadata> {
  return restAuthPost<IScriptMetadata>(
    axios,
    `instance/microservices/${identifier}/tenants/${tenantToken}/scripting/scripts/${scriptId}/versions/${versionId}/activate`,
    null
  );
}

/**
 * Delete a microservice tenant script and its version history.
 * @param axios
 * @param identifier
 * @param tenantToken
 * @param scriptId
 */
export function deleteTenantScript(
  axios: AxiosInstance,
  identifier: string,
  tenantToken: string,
  scriptId: string
): AxiosPromise<IScriptMetadata> {
  return restAuthDelete<IScriptMetadata>(
    axios,
    `instance/microservices/${identifier}/tenants/${tenantToken}/scripting/scripts/${scriptId}`
  );
}
