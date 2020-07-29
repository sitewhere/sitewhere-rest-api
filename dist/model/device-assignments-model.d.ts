import { uuid, IPersistentEntityCreateRequest, IPersistentEntity, ISearchCriteria, ISearchResults, IResponseFormat } from "./common-model";
/**
 * Enumeration of device assignment statuses.
 */
export declare enum DeviceAssignmentStatus {
    Active = "Active",
    Missing = "Missing",
    Released = "Released"
}
/**
 * Used to create or update a device assignment.
 */
export interface IDeviceAssignmentCreateRequest extends IPersistentEntityCreateRequest {
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
 * Device assignment summary information.
 */
export interface IDeviceAssignmentSummary extends IPersistentEntity {
    deviceId: uuid;
    deviceToken: string;
    deviceTypeId: uuid;
    deviceTypeName: string;
    deviceTypeImageUrl: string;
    customerId: uuid;
    customerName: string;
    customerImageUrl: string;
    areaId: uuid;
    areaName: string;
    areaImageUrl: string;
    assetId: uuid;
    assetName: string;
    assetImageUrl: string;
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
 * Simplified search criteria for device assignments.
 */
export interface IDeviceAssignmentSimpleCriteria extends ISearchCriteria {
    deviceToken?: string;
    customerToken?: string;
    areaToken?: string;
    assetToken?: string;
}
/**
 * Search criteria for device assignments.
 */
export interface IDeviceAssignmentSearchCriteria extends ISearchCriteria {
    statuses?: DeviceAssignmentStatus[];
    deviceTokens?: string[];
    deviceTypeTokens?: string[];
    customerTokens?: string[];
    areaTokens?: string[];
    assetTokens?: string[];
}
/**
 * Search results for device assignments.
 */
export interface IDeviceAssignmentSearchResults extends ISearchResults<IDeviceAssignment> {
}
/**
 * Search results for device assignment summaries.
 */
export interface IDeviceAssignmentSummarySearchResults extends ISearchResults<IDeviceAssignmentSummary> {
}
/**
 * Provides list of tokens for bulk assignment request.
 */
export interface IDeviceAssignmentBulkRequest {
    deviceAssignmentTokens: string[];
}
