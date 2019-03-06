import { AxiosInstance, AxiosPromise } from "axios";
import { IScriptTemplate, IScriptMetadata, IScriptCreateRequest, IScriptVersion, IScriptCloneRequest } from "../model/scripting-model";
/**
 * List script templates for a microservice by identifier.
 * @param axios
 * @param identifier
 */
export declare function listScriptTemplates(axios: AxiosInstance, identifier: string): AxiosPromise<IScriptTemplate[]>;
/**
 * Get content for a script template.
 * @param axios
 * @param identifier
 * @param templateId
 */
export declare function getScriptTemplateContent(axios: AxiosInstance, identifier: string, templateId: string): AxiosPromise<IScriptTemplate>;
/**
 * List metadata for scripts associated with a global microservice.
 * @param axios
 * @param identifier
 */
export declare function listGlobalScriptMetadata(axios: AxiosInstance, identifier: string): AxiosPromise<IScriptMetadata[]>;
/**
 * Get metadata for a global script.
 * @param axios
 * @param identifier
 * @param scriptId
 */
export declare function getGlobalScriptMetadata(axios: AxiosInstance, identifier: string, scriptId: string): AxiosPromise<IScriptMetadata>;
/**
 * Create a global script.
 * @param axios
 * @param identifier
 * @param request
 */
export declare function createGlobalScript(axios: AxiosInstance, identifier: string, request: IScriptCreateRequest): AxiosPromise<IScriptMetadata>;
/**
 * Get content for a global script.
 * @param axios
 * @param identifier
 * @param scriptId
 * @param versionId
 */
export declare function getGlobalScriptContent(axios: AxiosInstance, identifier: string, scriptId: string, versionId: string): AxiosPromise<string>;
/**
 * Update an existing global script.
 * @param axios
 * @param identifier
 * @param scriptId
 * @param versionId
 * @param request
 */
export declare function updateGlobalScript(axios: AxiosInstance, identifier: string, scriptId: string, versionId: string, request: IScriptCreateRequest): AxiosPromise<IScriptMetadata>;
/**
 * Clone an existing global script.
 * @param axios
 * @param identifier
 * @param scriptId
 * @param versionId
 * @param request
 */
export declare function cloneGlobalScript(axios: AxiosInstance, identifier: string, scriptId: string, versionId: string, request: IScriptCloneRequest): AxiosPromise<IScriptVersion>;
/**
 * Activate a global script.
 * @param axios
 * @param identifier
 * @param scriptId
 * @param versionId
 */
export declare function activateGlobalScript(axios: AxiosInstance, identifier: string, scriptId: string, versionId: string): AxiosPromise<IScriptMetadata>;
/**
 * Delete a global script and its version history.
 * @param axios
 * @param identifier
 * @param scriptId
 */
export declare function deleteGlobalScript(axios: AxiosInstance, identifier: string, scriptId: string): AxiosPromise<IScriptMetadata>;
/**
 * List metadata for microservice tenant scripts.
 * @param axios
 * @param identifier
 * @param tenantToken
 */
export declare function listTenantScriptMetadata(axios: AxiosInstance, identifier: string, tenantToken: string): AxiosPromise<IScriptMetadata[]>;
/**
 * Get metadata for a given microservice tenant script.
 * @param axios
 * @param identifier
 * @param tenantToken
 * @param scriptId
 */
export declare function getTenantScriptMetadata(axios: AxiosInstance, identifier: string, tenantToken: string, scriptId: string): AxiosPromise<IScriptMetadata>;
/**
 * Create a new script for a microservice tenant.
 * @param axios
 * @param identifier
 * @param tenantToken
 * @param request
 */
export declare function createTenantScript(axios: AxiosInstance, identifier: string, tenantToken: string, request: IScriptCreateRequest): AxiosPromise<IScriptMetadata>;
/**
 * Get content associated with a microservice tenant script.
 * @param axios
 * @param identifier
 * @param tenantToken
 * @param scriptId
 * @param versionId
 */
export declare function getTenantScriptContent(axios: AxiosInstance, identifier: string, tenantToken: string, scriptId: string, versionId: string): AxiosPromise<string>;
/**
 * Update an existing microservice tenant script.
 * @param axios
 * @param identifier
 * @param tenantToken
 * @param scriptId
 * @param versionId
 * @param request
 */
export declare function updateTenantScript(axios: AxiosInstance, identifier: string, tenantToken: string, scriptId: string, versionId: string, request: IScriptCreateRequest): AxiosPromise<IScriptMetadata>;
/**
 * Clone an existing microservice tenant script.
 * @param axios
 * @param identifier
 * @param tenantToken
 * @param scriptId
 * @param versionId
 * @param request
 */
export declare function cloneTenantScript(axios: AxiosInstance, identifier: string, tenantToken: string, scriptId: string, versionId: string, request: IScriptCloneRequest): AxiosPromise<IScriptVersion>;
/**
 * Activate a given version of a microservice tenant script.
 * @param axios
 * @param identifier
 * @param tenantToken
 * @param scriptId
 * @param versionId
 */
export declare function activateTenantScript(axios: AxiosInstance, identifier: string, tenantToken: string, scriptId: string, versionId: string): AxiosPromise<IScriptMetadata>;
/**
 * Delete a microservice tenant script and its version history.
 * @param axios
 * @param identifier
 * @param tenantToken
 * @param scriptId
 */
export declare function deleteTenantScript(axios: AxiosInstance, identifier: string, tenantToken: string, scriptId: string): AxiosPromise<IScriptMetadata>;
