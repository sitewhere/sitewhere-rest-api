import {
  uuid,
  IPersistentEntityCreateRequest,
  IPersistentEntity,
  ISearchCriteria,
  ISearchResults,
  IResponseFormat,
  IColorProvider,
  IIconProvider
} from "./common-model";

/**
 * Used to create or update a device status.
 */
export interface IDeviceStatusCreateRequest
  extends IPersistentEntityCreateRequest,
    IColorProvider,
    IIconProvider {
  deviceTypeToken: string;
  name: string;
  code: string;
}

/**
 * Device status information.
 */
export interface IDeviceStatus
  extends IPersistentEntity,
    IColorProvider,
    IIconProvider {
  deviceTypeId: uuid;
  name: string;
  code: string;
}

/**
 * Response format for device statuses.
 */
export interface IDeviceStatusResponseFormat extends IResponseFormat {}

/**
 * Search criteria for device statuses.
 */
export interface IDeviceStatusSearchCriteria extends ISearchCriteria {
  deviceTypeToken: string;
}

/**
 * Search results for device statuses.
 */
export interface IDeviceStatusSearchResults
  extends ISearchResults<IDeviceStatus> {}
