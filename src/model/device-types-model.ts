import {
  IBrandedEntityCreateRequest,
  IBrandedEntity,
  IAccessible,
  ISearchCriteria,
  ISearchResults,
  IResponseFormat
} from "./common-model";

/**
 * Enum of device container policy choices.
 */
export enum DeviceContainerPolicy {
  Standalone = "Standalone",
  Composite = "Composite"
}

/**
 * Base class for nested device elements.
 */
export interface IDeviceElement {
  name: string;
  path: string;
}

/**
 * Slot within a device unit.
 */
export interface IDeviceSlot extends IDeviceElement {}

/**
 * Used to group related device slots into a logical unit.
 */
export interface IDeviceUnit extends IDeviceElement {
  deviceSlots: IDeviceSlot[];
  deviceUnits: IDeviceUnit[];
}

/**
 * Hierarchical schema that defines structure of device that contains other devices.
 */
export interface IDeviceElementSchema extends IDeviceUnit {}

/**
 * Used to create or update a device type.
 */
export interface IDeviceTypeCreateRequest
  extends IBrandedEntityCreateRequest,
    IAccessible {
  containerPolicy: DeviceContainerPolicy;
  deviceElementSchema: any;
}

/**
 * Device type information.
 */
export interface IDeviceType extends IBrandedEntity, IAccessible {
  containerPolicy: DeviceContainerPolicy;
  deviceElementSchema: IDeviceElementSchema;
}

/**
 * Response format for device type records.
 */
export interface IDeviceTypeResponseFormat extends IResponseFormat {
  includeAsset?: boolean;
}

/**
 * Search criteria for device types.
 */
export interface IDeviceTypeSearchCriteria extends ISearchCriteria {}

/**
 * Search results for device types.
 */
export interface IDeviceTypeSearchResults extends ISearchResults<IDeviceType> {}
