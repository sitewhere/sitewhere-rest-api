import {
  IBrandedEntityCreateRequest,
  IBrandedEntity,
  IAccessible,
  ISearchCriteria,
  ISearchResults,
  IResponseFormat,
  uuid
} from "./common-model";

/**
 * Used to create or update an asset.
 */
export interface IAssetCreateRequest
  extends IBrandedEntityCreateRequest,
    IAccessible {
  assetTypeToken: string;
  name: string;
}

/**
 * Asset information.
 */
export interface IAsset extends IBrandedEntity, IAccessible {
  assetTypeId: uuid;
  name: string;
}

/**
 * Response format for asset records.
 */
export interface IAssetResponseFormat extends IResponseFormat {
  includeAssetType?: boolean;
}

/**
 * Search criteria for assets.
 */
export interface IAssetSearchCriteria extends ISearchCriteria {}

/**
 * Search results for assets.
 */
export interface IAssetSearchResults extends ISearchResults<IAsset> {}
