import {
  uuid,
  IPersistentEntityCreateRequest,
  IAccessible,
  IBrandedEntity,
  ISearchCriteria,
  ISearchResults,
  IResponseFormat
} from "./common-model";

/**
 * Used to create or update an area type.
 */
export interface IAreaTypeCreateRequest
  extends IPersistentEntityCreateRequest,
  IAccessible {
  containedAreaTypeTokens: string[];
}

/**
 * Area type information.
 */
export interface IAreaType extends IBrandedEntity, IAccessible {
  containedAreaTypeIds: uuid[];
}

/**
 * Response format for area type records.
 */
export interface IAreaTypeResponseFormat extends IResponseFormat {
  includeContainedAreaTypes?: boolean;
}

/**
 * Search criteria for area types.
 */
export interface IAreaTypeSearchCriteria extends ISearchCriteria { }

/**
 * Search results for area types.
 */
export interface IAreaTypeSearchResults extends ISearchResults<IAreaType> { }
