import {
  IBrandedEntityCreateRequest,
  IBrandedEntity,
  IAccessible,
  ISearchCriteria,
  ISearchResults,
  IResponseFormat
} from "./common-model";

/**
 * Enumeration of asset categories.
 */
export enum AssetCategory {
  Device = "Device",
  Person = "Person",
  Hardware = "Hardware"
}

/**
 * Used to create or update an asset type.
 */
export interface IAssetTypeCreateRequest
  extends IBrandedEntityCreateRequest,
    IAccessible {
  assetCategory: AssetCategory;
}

/**
 * Asset type information.
 */
export interface IAssetType extends IBrandedEntity, IAccessible {
  assetCategory: AssetCategory;
}

/**
 * Response format for asset type records.
 */
export interface IAssetTypeResponseFormat extends IResponseFormat {}

/**
 * Search criteria for asset types.
 */
export interface IAssetTypeSearchCriteria extends ISearchCriteria {}

/**
 * Search results for asset types.
 */
export interface IAssetTypeSearchResults extends ISearchResults<IAssetType> {}
