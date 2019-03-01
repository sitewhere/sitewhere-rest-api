import { AxiosInstance, AxiosPromise } from "axios";
import {
  IAssetCreateRequest,
  IAsset,
  IAssetSearchCriteria,
  IAssetResponseFormat
} from "../model/assets-model";
import { createPagingQuery } from "../model/common-model";
import {
  restAuthGet,
  restAuthPost,
  restAuthPut,
  restAuthDelete,
  randomSeedQuery,
  addFilter
} from "../rest";

/**
 * Create a new asset.
 * @param axios
 * @param request
 */
export function createAsset(
  axios: AxiosInstance,
  request: IAssetCreateRequest
): AxiosPromise<IAsset> {
  return restAuthPost<IAsset>(axios, "assets", request);
}

/**
 * Get an asset by unique token.
 * @param axios
 * @param token
 */
export function getAsset(
  axios: AxiosInstance,
  token: string
): AxiosPromise<IAsset> {
  return restAuthGet<IAsset>(axios, `assets/${token}`);
}

/**
 * Update an existing asset.
 * @param axios
 * @param token
 * @param request
 */
export function updateAsset(
  axios: AxiosInstance,
  token: string,
  request: IAssetCreateRequest
): AxiosPromise<IAsset> {
  return restAuthPut<IAsset>(axios, `assets/${token}`, request);
}

/**
 * List assets that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function listAssets(
  axios: AxiosInstance,
  criteria?: IAssetSearchCriteria,
  format?: IAssetResponseFormat
): AxiosPromise<IAsset[]> {
  let query = randomSeedQuery();
  if (format) {
    query += addFilter(format.includeAssetType, "includeAssetType");
  }
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IAsset[]>(axios, `assets${query}`);
}

/**
 * Delete an existing asset.
 * @param axios
 * @param token
 */
export function deleteAsset(
  axios: AxiosInstance,
  token: string
): AxiosPromise<IAsset> {
  return restAuthDelete<IAsset>(axios, `assets/${token}`);
}
