import {
  uuid,
  IBrandedEntityCreateRequest,
  IBrandedTreeEntity,
  IAccessible,
  IBoundsProvider,
  ISearchCriteria,
  ISearchResults,
  IResponseFormat,
  ITreeEntityCreateRequest
} from "./common-model";

/**
 * Used to create or update an area.
 */
export interface IAreaCreateRequest
  extends IBrandedEntityCreateRequest,
    IAccessible,
    IBoundsProvider,
    ITreeEntityCreateRequest {
  areaTypeToken: string;
}

/**
 * Response format for area records.
 */
export interface IAreaResponseFormat extends IResponseFormat {
  includeAreaType?: boolean;
  includeAssignments?: boolean;
  includeZones?: boolean;
}

/**
 * Search criteria for areas.
 */
export interface IAreaSearchCriteria extends ISearchCriteria {
  rootOnly?: boolean;
  parentAreaToken?: uuid;
  areaTypeToken?: uuid;
}

/**
 * Search results for areas.
 */
export interface IAreaSearchResults extends ISearchResults<IArea> {}

/**
 * Area information.
 */
export interface IArea
  extends IBrandedTreeEntity,
    IAccessible,
    IBoundsProvider {
  areaTypeId: uuid;
}
