import {
  uuid,
  IPersistentEntityCreateRequest,
  IPersistentEntity,
  IAccessible,
  ISearchCriteria,
  ISearchResults,
  IResponseFormat
} from "./common-model";

/**
 * Enumeration of user account status values.
 */
export enum AccountStatus {
  AccountStatus = "A",
  Expired = "E",
  Locked = "L"
}

/**
 * Used to create or update a user.
 */
export interface IUserCreateRequest extends IPersistentEntityCreateRequest {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  status: AccountStatus;
  authorities: string[];
}

/**
 * User information.
 */
export interface IUser extends IPersistentEntity {
  username: string;
  hashedPassword: string;
  firstName: string;
  lastName: string;
  lastLogin: Date;
  status: AccountStatus;
  authorities: string[];
}

/**
 * Response format for user records.
 */
export interface IUserResponseFormat extends IResponseFormat {}

/**
 * Search criteria for users.
 */
export interface IUserSearchCriteria extends ISearchCriteria {}

/**
 * Search results for users.
 */
export interface IUserSearchResults extends ISearchResults<IUser> {}

/**
 * Granted authority information.
 */
export interface IGrantedAuthority {
  authority: string;
  description: string;
  parent: string;
  group: boolean;
}

/**
 * Used for displaying granted authority tree.
 */
export interface IGrantedAuthorityHierarchyNode {
  id: string;
  text: string;
  group: string;
  items: IGrantedAuthorityHierarchyNode[];
}
