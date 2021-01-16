import { IPersistentEntityCreateRequest, IPersistentEntity, ISearchCriteria, ISearchResults, IResponseFormat } from "./common-model";
/**
 * Granted authority in the system.
 */
export interface IGrantedAuthority {
    authority: string;
    description: string;
}
/**
 * Role with a list of associated granted authorities.
 */
export interface IRole {
    role: string;
    description: string;
    authorities: IGrantedAuthority[];
}
/**
 * Used to create or update a user.
 */
export interface IUserCreateRequest extends IPersistentEntityCreateRequest {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    enabled: boolean;
    roles: string[];
}
/**
 * User information.
 */
export interface IUser extends IPersistentEntity {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    enabled: boolean;
    roles: IRole[];
}
/**
 * Response format for user records.
 */
export interface IUserResponseFormat extends IResponseFormat {
}
/**
 * Search criteria for users.
 */
export interface IUserSearchCriteria extends ISearchCriteria {
}
/**
 * Search results for users.
 */
export interface IUserSearchResults extends ISearchResults<IUser> {
}
/**
 * Response format for role records.
 */
export interface IRoleResponseFormat extends IResponseFormat {
}
/**
 * Search criteria for roles.
 */
export interface IRoleSearchCriteria extends ISearchCriteria {
}
/**
 * Search results for roles.
 */
export interface IRoleSearchResults extends ISearchResults<IRole> {
}
