import { AxiosInstance, AxiosPromise } from "axios";
import { IUserCreateRequest, IUser, IUserSearchCriteria, IUserResponseFormat, IGrantedAuthority, IGrantedAuthorityHierarchyNode } from "../model/users-model";
/**
 * Create a new user.
 * @param axios
 * @param request
 */
export declare function createUser(axios: AxiosInstance, request: IUserCreateRequest): AxiosPromise<IUser>;
/**
 * Get a user by username.
 * @param axios
 * @param username
 */
export declare function getUser(axios: AxiosInstance, username: string): AxiosPromise<IUser>;
/**
 * Update an existing user.
 * @param axios
 * @param username
 * @param request
 */
export declare function updateUser(axios: AxiosInstance, username: string, request: IUserCreateRequest): AxiosPromise<IUser>;
/**
 * List users that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listUsers(axios: AxiosInstance, criteria?: IUserSearchCriteria, format?: IUserResponseFormat): AxiosPromise<IUser[]>;
/**
 * Delete an existing user.
 * @param axios
 * @param username
 */
export declare function deleteUser(axios: AxiosInstance, username: string): AxiosPromise<IUser>;
/**
 * Get granted authorities associated with user.
 * @param axios
 * @param username
 */
export declare function getAuthoritiesForUsername(axios: AxiosInstance, username: string): AxiosPromise<IGrantedAuthority>;
/**
 * Get records representing granted authority hierarchy.
 * @param axios
 */
export declare function getAuthoritiesHierarchy(axios: AxiosInstance): AxiosPromise<IGrantedAuthorityHierarchyNode[]>;
