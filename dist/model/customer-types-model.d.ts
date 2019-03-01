import { uuid, IBrandedEntityCreateRequest, IBrandedEntity, IAccessible, ISearchCriteria, ISearchResults, IResponseFormat } from "./common-model";
/**
 * Used to create or update a customer type.
 */
export interface ICustomerTypeCreateRequest extends IBrandedEntityCreateRequest, IAccessible {
    containedCustomerTypeTokens: string[];
}
/**
 * Customer type information.
 */
export interface ICustomerType extends IBrandedEntity, IAccessible {
    containedCustomerTypeIds: uuid[];
}
/**
 * Response format for customer type records.
 */
export interface ICustomerTypeResponseFormat extends IResponseFormat {
    includeContainedCustomerTypes?: boolean;
}
/**
 * Search criteria for customer types.
 */
export interface ICustomerTypeSearchCriteria extends ISearchCriteria {
}
/**
 * Search results for customer types.
 */
export interface ICustomerTypeSearchResults extends ISearchResults<ICustomerType> {
}
