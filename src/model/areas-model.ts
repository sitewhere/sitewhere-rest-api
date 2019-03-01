import {
  uuid,
  IBrandedEntityCreateRequest,
  IBrandedEntity,
  IAccessible,
  IBoundsProvider,
  ISearchCriteria,
  ISearchResults,
  IResponseFormat
} from "./common-model";

/**
 * Used to create or update an area.
 */
export interface IAreaCreateRequest
  extends IBrandedEntityCreateRequest,
    IAccessible,
    IBoundsProvider {
  areaTypeToken: string;
  parentAreaToken: string;
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
  parentAreaId?: uuid;
  areaTypeId?: uuid;
}

/**
 * Search results for areas.
 */
export interface IAreaSearchResults extends ISearchResults<IArea> {}

/**
 * Area information.
 */
export interface IArea extends IBrandedEntity, IAccessible, IBoundsProvider {
  areaTypeId: uuid;
  parentAreaId: uuid;
}
