import { AxiosInstance, AxiosPromise } from "axios";
import {
  IUserCreateRequest,
  IUser,
  IUserSearchCriteria,
  IUserResponseFormat,
  IGrantedAuthority,
  IUserSearchResults,
  IRoleSearchCriteria,
  IRoleResponseFormat,
  IRoleSearchResults
} from "../model/users-model";
import { createPagingQuery } from "../model/common-model";
import {
  restAuthGet,
  restAuthPost,
  restAuthPut,
  restAuthDelete,
  randomSeedQuery
} from "../rest";

/**
 * Create a new user.
 * @param axios
 * @param request
 */
export function createUser(
  axios: AxiosInstance,
  request: IUserCreateRequest
): AxiosPromise<IUser> {
  return restAuthPost<IUser>(axios, "users", request);
}

/**
 * Get a user by username.
 * @param axios
 * @param username
 * @param format
 */
export function getUser(
  axios: AxiosInstance,
  username: string,
  format: IUserResponseFormat
): AxiosPromise<IUser> {
  let query = randomSeedQuery();
  if (format) {
    // No format options available.
  }
  return restAuthGet<IUser>(axios, `users/${username}${query}`);
}

/**
 * Update an existing user.
 * @param axios
 * @param username
 * @param request
 */
export function updateUser(
  axios: AxiosInstance,
  username: string,
  request: IUserCreateRequest
): AxiosPromise<IUser> {
  return restAuthPut<IUser>(axios, `users/${username}`, request);
}

/**
 * List users that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function listUsers(
  axios: AxiosInstance,
  criteria?: IUserSearchCriteria,
  format?: IUserResponseFormat
): AxiosPromise<IUserSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    // No response format options available.
  }
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IUserSearchResults>(axios, `users${query}`);
}

/**
 * Delete an existing user.
 * @param axios
 * @param username
 */
export function deleteUser(
  axios: AxiosInstance,
  username: string
): AxiosPromise<IUser> {
  return restAuthDelete<IUser>(axios, `users/${username}`);
}

/**
 * List roles that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function listRoles(
  axios: AxiosInstance,
  criteria?: IRoleSearchCriteria,
  format?: IRoleResponseFormat
): AxiosPromise<IRoleSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    // No response format options available.
  }
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IRoleSearchResults>(axios, `roles${query}`);
}

/**
 * Get granted authorities associated with user.
 * @param axios
 * @param username
 */
export function getAuthoritiesForUsername(
  axios: AxiosInstance,
  username: string
): AxiosPromise<IGrantedAuthority> {
  return restAuthGet<IGrantedAuthority>(axios, `users/${username}/authorities`);
}
