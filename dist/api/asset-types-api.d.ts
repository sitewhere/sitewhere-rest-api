import { AxiosInstance, AxiosPromise } from "axios";
import { IAssetTypeCreateRequest, IAssetType, IAssetTypeSearchCriteria, IAssetTypeResponseFormat, IAssetTypeSearchResults } from "../model/asset-types-model";
/**
 * Create a new asset type.
 * @param axios
 * @param request
 */
export declare function createAssetType(axios: AxiosInstance, request: IAssetTypeCreateRequest): AxiosPromise<IAssetType>;
/**
 * Get an asset type by unique token.
 * @param axios
 * @param token
 * @param format
 */
export declare function getAssetType(axios: AxiosInstance, token: string, format: IAssetTypeResponseFormat): AxiosPromise<IAssetType>;
/**
 * Update an existing asset type.
 * @param axios
 * @param token
 * @param request
 */
export declare function updateAssetType(axios: AxiosInstance, token: string, request: IAssetTypeCreateRequest): AxiosPromise<IAssetType>;
/**
 * List asset types that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listAssetTypes(axios: AxiosInstance, criteria?: IAssetTypeSearchCriteria, format?: IAssetTypeResponseFormat): AxiosPromise<IAssetTypeSearchResults>;
/**
 * Delete an existing asset type.
 * @param axios
 * @param token
 */
export declare function deleteAssetType(axios: AxiosInstance, token: string): AxiosPromise<IAssetType>;
