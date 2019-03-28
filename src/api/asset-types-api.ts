import { AxiosInstance, AxiosPromise } from "axios";
import {
  IAssetTypeCreateRequest,
  IAssetType,
  IAssetTypeSearchCriteria,
  IAssetTypeResponseFormat,
  IAssetTypeSearchResults
} from "../model/asset-types-model";
import { createPagingQuery } from "../model/common-model";
import {
  restAuthGet,
  restAuthPost,
  restAuthPut,
  restAuthDelete,
  randomSeedQuery
} from "../rest";

/**
 * Create a new asset type.
 * @param axios
 * @param request
 */
export function createAssetType(
  axios: AxiosInstance,
  request: IAssetTypeCreateRequest
): AxiosPromise<IAssetType> {
  return restAuthPost<IAssetType>(axios, "assettypes", request);
}

/**
 * Get an asset type by unique token.
 * @param axios
 * @param token
 * @param format
 */
export function getAssetType(
  axios: AxiosInstance,
  token: string,
  format: IAssetTypeResponseFormat
): AxiosPromise<IAssetType> {
  let query = randomSeedQuery();
  if (format) {
    // No options available.
  }
  return restAuthGet<IAssetType>(axios, `assettypes/${token}${query}`);
}

/**
 * Update an existing asset type.
 * @param axios
 * @param token
 * @param request
 */
export function updateAssetType(
  axios: AxiosInstance,
  token: string,
  request: IAssetTypeCreateRequest
): AxiosPromise<IAssetType> {
  return restAuthPut<IAssetType>(axios, `assettypes/${token}`, request);
}

/**
 * List asset types that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function listAssetTypes(
  axios: AxiosInstance,
  criteria?: IAssetTypeSearchCriteria,
  format?: IAssetTypeResponseFormat
): AxiosPromise<IAssetTypeSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    // No response format options.
  }
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IAssetTypeSearchResults>(axios, `assettypes${query}`);
}

/**
 * Delete an existing asset type.
 * @param axios
 * @param token
 */
export function deleteAssetType(
  axios: AxiosInstance,
  token: string
): AxiosPromise<IAssetType> {
  return restAuthDelete<IAssetType>(axios, `assettypes/${token}`);
}
