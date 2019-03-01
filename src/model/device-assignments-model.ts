import {
  uuid,
  IPersistentEntityCreateRequest,
  IPersistentEntity,
  ISearchCriteria,
  ISearchResults,
  IResponseFormat
} from "./common-model";

/**
 * Enumeration of device assignment statuses.
 */
export enum DeviceAssignmentStatus {
  Active = "Active",
  Missing = "Missing",
  Released = "Released"
}

/**
 * Used to create or update a device assignment.
 */
export interface IDeviceAssignmentCreateRequest
  extends IPersistentEntityCreateRequest {
  deviceToken: string;
  customerToken?: string;
  areaToken?: string;
  assetToken?: string;
  status?: DeviceAssignmentStatus;
}

/**
 * Device assignment information.
 */
export interface IDeviceAssignment extends IPersistentEntity {
  deviceId: uuid;
  deviceTypeId: uuid;
  customerId?: uuid;
  areaId?: uuid;
  assetId?: uuid;
  status?: DeviceAssignmentStatus;
  activeDate?: Date;
  releasedDate?: Date;
}

/**
 * Response format for device assignments.
 */
export interface IDeviceAssignmentResponseFormat extends IResponseFormat {
  includeDevice?: boolean;
  includeCustomer?: boolean;
  includeArea?: boolean;
  includeAsset?: boolean;
}

/**
 * Search criteria for device assignments.
 */
export interface IDeviceAssignmentSearchCriteria extends ISearchCriteria {
  deviceToken?: string;
  customerToken?: string;
  areaToken?: string;
  assetToken?: string;
}

/**
 * Search results for device assignments.
 */
export interface IDeviceAssignmentSearchResults
  extends ISearchResults<IDeviceAssignment> {}

/**
 * Provides list of tokens for bulk assignment request.
 */
export interface IDeviceAssignmentBulkRequest {
  deviceAssignmentTokens: string[];
}
