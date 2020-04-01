import { AxiosInstance, AxiosPromise } from "axios";
import { IScriptTemplate, IScriptMetadata, IScriptCreateRequest, IScriptVersion, IScriptCloneRequest } from "../model/scripting-model";
/**
 * List script categories for a functional area.
 * @param axios
 * @param identifier
 */
export declare function listScriptCategories(axios: AxiosInstance, identifier: string): AxiosPromise<IScriptTemplate[]>;
/**
 * List script templates for a functional area and in the given category.
 * @param axios
 * @param identifier
 * @param category
 */
export declare function listScriptTemplates(axios: AxiosInstance, identifier: string, category: string): AxiosPromise<IScriptTemplate[]>;
/**
 * List metadata for microservice tenant scripts.
 * @param axios
 * @param identifier
 * @param tenantToken
 */
export declare function listTenantScripts(axios: AxiosInstance, identifier: string, tenantToken: string): AxiosPromise<IScriptMetadata[]>;
/**
 * Get metadata for a given microservice tenant script.
 * @param axios
 * @param identifier
 * @param tenantToken
 * @param scriptId
 */
export declare function getTenantScript(axios: AxiosInstance, identifier: string, tenantToken: string, scriptId: string): AxiosPromise<IScriptMetadata>;
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
