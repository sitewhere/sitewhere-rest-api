import { uuid, IPersistentEntityCreateRequest, IPersistentEntity, IBoundsProvider, ISearchCriteria, ISearchResults, IResponseFormat } from "./common-model";
/**
 * Used to create or update a zone.
 */
export interface IZoneCreateRequest extends IPersistentEntityCreateRequest, IBoundsProvider {
    areaToken: string;
    name: string;
    borderColor: string;
    fillColor: string;
    opacity: number;
}
/**
 * Response format for zone records.
 */
export interface IZoneResponseFormat extends IResponseFormat {
}
/**
 * Search criteria for zones.
 */
export interface IZoneSearchCriteria extends ISearchCriteria {
    areaToken?: uuid;
}
/**
 * Search results for zones.
 */
export interface IZoneSearchResults extends ISearchResults<IZone> {
}
/**
 * Zone information.
 */
export interface IZone extends IPersistentEntity, IBoundsProvider {
    areaId: uuid;
    name: string;
    borderColor: string;
    fillColor: string;
    opacity: number;
}
