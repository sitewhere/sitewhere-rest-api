import {
  IBrandedEntityCreateRequest,
  IBrandedEntity,
  IAccessible,
  ISearchCriteria,
  ISearchResults,
  IResponseFormat,
  uuid
} from "./common-model";

/**
 * Used to create or update de device group.
 */
export interface IDeviceGroupCreateRequest
  extends IBrandedEntityCreateRequest,
    IAccessible {
  roles: string[];
}

/**
 * Device group information.
 */
export interface IDeviceGroup extends IBrandedEntity, IAccessible {
  roles: string[];
}

/**
 * Response format for device group records.
 */
export interface IDeviceGroupResponseFormat extends IResponseFormat {}

/**
 * Search criteria for device groups.
 */
export interface IDeviceGroupSearchCriteria extends ISearchCriteria {
  role?: string;
}

/**
 * Search results for device groups.
 */
export interface IDeviceGroupSearchResults
  extends ISearchResults<IDeviceGroup> {}

/**
 * Device group element create request.
 */
export interface IDeviceGroupElementCreateRequest {
  deviceToken?: string;
  nestedGroupToken?: string;
  roles: string[];
}

/**
 * Device group element information.
 */
export interface IDeviceGroupElement {
  id: uuid;
  groupId: uuid;
  deviceId?: uuid;
  nestedGroupId?: uuid;
  roles: string[];
}

/**
 * Search criteria for device group elements.
 */
export interface IDeviceGroupElementSearchCriteria extends ISearchCriteria {
  deviceGroupToken?: string;
}

/**
 * Response format for device group element records.
 */
export interface IDeviceGroupElementResponseFormat extends IResponseFormat {
  includeDetails?: boolean;
}

/**
 * Search results for device group elements.
 */
export interface IDeviceGroupElementSearchResults
  extends ISearchResults<IDeviceGroupElement> {}
