import { uuid, IPersistentEntityCreateRequest, IPersistentEntity, ISearchCriteria, ISearchResults, IResponseFormat } from "./common-model";
/**
 * Maps device to a slot in a composite device.
 */
export interface IDeviceElementMapping {
    deviceElementSchemaPath: string;
    deviceToken: string;
}
/**
 * Used to create or update a device.
 */
export interface IDeviceCreateRequest extends IPersistentEntityCreateRequest {
    deviceTypeToken: string;
    parentDeviceToken?: string;
    comments?: string;
    status?: string;
    deviceElementMappings?: IDeviceElementMapping[];
}
/**
 * Device information.
 */
export interface IDevice extends IPersistentEntity {
    deviceTypeId: uuid;
    deviceAssignmentId?: uuid;
    parentDeviceId?: uuid;
    comments?: string;
    status?: string;
    deviceElementMappings?: IDeviceElementMapping[];
}
/**
 * Response format for devices.
 */
export interface IDeviceResponseFormat extends IResponseFormat {
    includeDeviceType?: boolean;
    includeAssignment?: boolean;
}
/**
 * Search criteria for devices.
 */
export interface IDeviceSearchCriteria extends ISearchCriteria {
    excludeAssigned?: boolean;
    deviceTypeToken?: string;
}
/**
 * Search results for devices.
 */
export interface IDeviceSearchResults extends ISearchResults<IDevice> {
}
