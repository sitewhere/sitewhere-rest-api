import { AxiosInstance, AxiosPromise } from "axios";
import { IAssetCreateRequest, IAsset, IAssetSearchCriteria, IAssetResponseFormat, IAssetSearchResults } from "../model/assets-model";
/**
 * Create a new asset.
 * @param axios
 * @param request
 */
export declare function createAsset(axios: AxiosInstance, request: IAssetCreateRequest): AxiosPromise<IAsset>;
/**
 * Get an asset by unique token.
 * @param axios
 * @param token
 * @param format
 */
export declare function getAsset(axios: AxiosInstance, token: string, format: IAssetResponseFormat): AxiosPromise<IAsset>;
/**
 * Update an existing asset.
 * @param axios
 * @param token
 * @param request
 */
export declare function updateAsset(axios: AxiosInstance, token: string, request: IAssetCreateRequest): AxiosPromise<IAsset>;
/**
 * List assets that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listAssets(axios: AxiosInstance, criteria?: IAssetSearchCriteria, format?: IAssetResponseFormat): AxiosPromise<IAssetSearchResults>;
/**
 * Delete an existing asset.
 * @param axios
 * @param token
 */
export declare function deleteAsset(axios: AxiosInstance, token: string): AxiosPromise<IAsset>;
