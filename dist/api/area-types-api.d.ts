import { AxiosInstance, AxiosPromise } from "axios";
import { IAreaTypeCreateRequest, IAreaType, IAreaTypeSearchCriteria, IAreaTypeResponseFormat, IAreaTypeSearchResults } from "../model/area-types-model";
/**
 * Create a new area type.
 * @param axios
 * @param request
 */
export declare function createAreaType(axios: AxiosInstance, request: IAreaTypeCreateRequest): AxiosPromise<IAreaType>;
/**
 * Get an area type by unique token.
 * @param axios
 * @param token
 * @param format
 */
export declare function getAreaType(axios: AxiosInstance, token: string, format: IAreaTypeResponseFormat): AxiosPromise<IAreaType>;
/**
 * Update an existing area type.
 * @param axios
 * @param token
 * @param request
 */
export declare function updateAreaType(axios: AxiosInstance, token: string, request: IAreaTypeCreateRequest): AxiosPromise<IAreaType>;
/**
 * List area types that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listAreaTypes(axios: AxiosInstance, criteria?: IAreaTypeSearchCriteria, format?: IAreaTypeResponseFormat): AxiosPromise<IAreaTypeSearchResults>;
/**
 * Delete an existing area type.
 * @param axios
 * @param token
 */
export declare function deleteAreaType(axios: AxiosInstance, token: string): AxiosPromise<IAreaType>;
