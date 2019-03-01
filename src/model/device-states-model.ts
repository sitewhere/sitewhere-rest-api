import {
  uuid,
  IResponseFormat,
  ISearchCriteria,
  ISearchResults
} from "./common-model";

/**
 * Device state information.
 */
export interface IDeviceState {
  id: uuid;
  deviceId: uuid;
  deviceTypeId: uuid;
  deviceAssignmentId: uuid;
  customerId: uuid;
  areaId: uuid;
  assetId: uuid;
  lastInteractionDate: Date;
  presenceMissingDate: Date;
  lastLocationEventId: uuid;
  lastMeasurementEventIds: { [id: string]: uuid };
  lastAlertEventIds: { [id: string]: uuid };
}

/**
 * Response format for device group element records.
 */
export interface IDeviceStateResponseFormat extends IResponseFormat {
  includeDevice?: boolean;
  includeDeviceType?: boolean;
  includeDeviceAssignment?: boolean;
  includeCustomer?: boolean;
  includeArea?: boolean;
  includeAsset?: boolean;
  includeEventDetails?: boolean;
}

/**
 * Search criteria for device states.
 */
export interface IDeviceStateSearchCriteria extends ISearchCriteria {
  lastInteractionDateBefore?: Date;
  deviceTypeIds?: uuid[];
  customerIds?: uuid[];
  areaIds?: uuid[];
  assetIds?: uuid[];
}

/**
 * Search results for device states.
 */
export interface IDeviceStateSearchResults
  extends ISearchResults<IDeviceState> {}
