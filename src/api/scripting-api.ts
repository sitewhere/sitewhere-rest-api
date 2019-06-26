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
 * List script templates for a microservice by identifier.
 * @param axios
 * @param identifier
 */
export function listScriptTemplates(
  axios: AxiosInstance,
  identifier: string
): AxiosPromise<IScriptTemplate[]> {
  return restAuthGet<IScriptTemplate[]>(
    axios,
    `instance/microservice/${identifier}/scripting/templates`
  );
}

/**
 * Get content for a script template.
 * @param axios
 * @param identifier
 * @param templateId
 */
export function getScriptTemplateContent(
  axios: AxiosInstance,
  identifier: string,
  templateId: string
): AxiosPromise<string> {
  return restAuthGet<string>(
    axios,
    `instance/microservice/${identifier}/scripting/templates/${templateId}`
  );
}

/**
 * List metadata for scripts associated with a global microservice.
 * @param axios
 * @param identifier
 */
export function listGlobalScriptMetadata(
  axios: AxiosInstance,
  identifier: string
): AxiosPromise<IScriptMetadata[]> {
  return restAuthGet<IScriptMetadata[]>(
    axios,
    `instance/microservice/${identifier}/scripting/scripts`
  );
}

/**
 * Get metadata for a global script.
 * @param axios
 * @param identifier
 * @param scriptId
 */
export function getGlobalScriptMetadata(
  axios: AxiosInstance,
  identifier: string,
  scriptId: string
): AxiosPromise<IScriptMetadata> {
  return restAuthGet<IScriptMetadata>(
    axios,
    `instance/microservice/${identifier}/scripting/scripts/${scriptId}`
  );
}

/**
 * Create a global script.
 * @param axios
 * @param identifier
 * @param request
 */
export function createGlobalScript(
  axios: AxiosInstance,
  identifier: string,
  request: IScriptCreateRequest
): AxiosPromise<IScriptMetadata> {
  return restAuthPost<IScriptMetadata>(
    axios,
    `instance/microservice/${identifier}/scripting/scripts`,
    request
  );
}

/**
 * Get content for a global script.
 * @param axios
 * @param identifier
 * @param scriptId
 * @param versionId
 */
export function getGlobalScriptContent(
  axios: AxiosInstance,
  identifier: string,
  scriptId: string,
  versionId: string
): AxiosPromise<string> {
  return restAuthGet<string>(
    axios,
    `instance/microservice/${identifier}/scripting/scripts/${scriptId}/versions/${versionId}/content`
  );
}

/**
 * Update an existing global script.
 * @param axios
 * @param identifier
 * @param scriptId
 * @param versionId
 * @param request
 */
export function updateGlobalScript(
  axios: AxiosInstance,
  identifier: string,
  scriptId: string,
  versionId: string,
  request: IScriptCreateRequest
): AxiosPromise<IScriptMetadata> {
  return restAuthPost<IScriptMetadata>(
    axios,
    `instance/microservice/${identifier}/scripting/scripts/${scriptId}/versions/${versionId}`,
    request
  );
}

/**
 * Clone an existing global script.
 * @param axios
 * @param identifier
 * @param scriptId
 * @param versionId
 * @param request
 */
export function cloneGlobalScript(
  axios: AxiosInstance,
  identifier: string,
  scriptId: string,
  versionId: string,
  request: IScriptCloneRequest
): AxiosPromise<IScriptVersion> {
  return restAuthPost<IScriptVersion>(
    axios,
    `instance/microservice/${identifier}/scripting/scripts/${scriptId}/versions/${versionId}/clone`,
    request
  );
}

/**
 * Activate a global script.
 * @param axios
 * @param identifier
 * @param scriptId
 * @param versionId
 */
export function activateGlobalScript(
  axios: AxiosInstance,
  identifier: string,
  scriptId: string,
  versionId: string
): AxiosPromise<IScriptMetadata> {
  return restAuthPost<IScriptMetadata>(
    axios,
    `instance/microservice/${identifier}/scripting/scripts/${scriptId}/versions/${versionId}/activate`,
    null
  );
}

/**
 * Delete a global script and its version history.
 * @param axios
 * @param identifier
 * @param scriptId
 */
export function deleteGlobalScript(
  axios: AxiosInstance,
  identifier: string,
  scriptId: string
): AxiosPromise<IScriptMetadata> {
  return restAuthDelete<IScriptMetadata>(
    axios,
    `instance/microservice/${identifier}/scripting/scripts/${scriptId}`
  );
}

/**
 * List metadata for microservice tenant scripts.
 * @param axios
 * @param identifier
 * @param tenantToken
 */
export function listTenantScriptMetadata(
  axios: AxiosInstance,
  identifier: string,
  tenantToken: string
): AxiosPromise<IScriptMetadata[]> {
  return restAuthGet<IScriptMetadata[]>(
    axios,
    `instance/microservice/${identifier}/tenants/${tenantToken}/scripting/scripts`
  );
}

/**
 * Get metadata for a given microservice tenant script.
 * @param axios
 * @param identifier
 * @param tenantToken
 * @param scriptId
 */
export function getTenantScriptMetadata(
  axios: AxiosInstance,
  identifier: string,
  tenantToken: string,
  scriptId: string
): AxiosPromise<IScriptMetadata> {
  return restAuthGet<IScriptMetadata>(
    axios,
    `instance/microservice/${identifier}/tenants/${tenantToken}/scripting/scripts/${scriptId}`
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
    `instance/microservice/${identifier}/tenants/${tenantToken}/scripting/scripts`,
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
    `instance/microservice/${identifier}/tenants/${tenantToken}/scripting/scripts/${scriptId}/versions/${versionId}/content`
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
    `instance/microservice/${identifier}/tenants/${tenantToken}/scripting/scripts/${scriptId}/versions/${versionId}`,
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
    `instance/microservice/${identifier}/tenants/${tenantToken}/scripting/scripts/${scriptId}/versions/${versionId}/clone`,
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
    `instance/microservice/${identifier}/tenants/${tenantToken}/scripting/scripts/${scriptId}/versions/${versionId}/activate`,
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
    `instance/microservice/${identifier}/tenants/${tenantToken}/scripting/scripts/${scriptId}`
  );
}
