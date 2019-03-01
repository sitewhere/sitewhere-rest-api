import { uuid, IPersistentEntityCreateRequest, IPersistentEntity, IBoundsProvider, IColorProvider, ISearchCriteria, ISearchResults, IResponseFormat } from "./common-model";
/**
 * Used to create or update a zone.
 */
export interface IZoneCreateRequest extends IPersistentEntityCreateRequest, IColorProvider, IBoundsProvider {
    areaToken: string;
    name: string;
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
export interface IZone extends IPersistentEntity, IColorProvider, IBoundsProvider {
    areaId: uuid;
    name: string;
}
