import { AxiosInstance, AxiosPromise } from "axios";
import { IZoneCreateRequest, IZone, IZoneSearchCriteria, IZoneResponseFormat, IZoneSearchResults } from "../model/zones-model";
/**
 * Create a new zone.
 * @param axios
 * @param request
 */
export declare function createZone(axios: AxiosInstance, request: IZoneCreateRequest): AxiosPromise<IZone>;
/**
 * Get a zone by unique token.
 * @param axios
 * @param zoneToken
 */
export declare function getZone(axios: AxiosInstance, zoneToken: string): AxiosPromise<IZone>;
/**
 * Update an existing zone.
 * @param axios
 * @param zoneToken
 * @param request
 */
export declare function updateZone(axios: AxiosInstance, zoneToken: string, request: IZoneCreateRequest): AxiosPromise<IZone>;
/**
 * List zones that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listZones(axios: AxiosInstance, criteria?: IZoneSearchCriteria, format?: IZoneResponseFormat): AxiosPromise<IZoneSearchResults>;
/**
 * Delete an existing zone.
 * @param axios
 * @param zoneToken
 */
export declare function deleteZone(axios: AxiosInstance, zoneToken: string): AxiosPromise<IZone>;
