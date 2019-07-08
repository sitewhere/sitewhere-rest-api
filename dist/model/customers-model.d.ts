import { IBrandedEntityCreateRequest, IBrandedTreeEntity, IAccessible, ISearchCriteria, ISearchResults, IResponseFormat, uuid, ITreeEntityCreateRequest } from "./common-model";
/**
 * Used to create or update a customer.
 */
export interface ICustomerCreateRequest extends IBrandedEntityCreateRequest, IAccessible, ITreeEntityCreateRequest {
    customerTypeToken: string;
}
/**
 * Customer information.
 */
export interface ICustomer extends IBrandedTreeEntity, IAccessible {
    customerTypeId: uuid;
}
/**
 * Response format for customer records.
 */
export interface ICustomerResponseFormat extends IResponseFormat {
    includeCustomerType?: boolean;
    includeParentCustomer?: boolean;
}
/**
 * Search criteria for customers.
 */
export interface ICustomerSearchCriteria extends ISearchCriteria {
    rootOnly?: boolean;
    parentCustomerToken?: string;
    customerTypeToken?: string;
}
/**
 * Search results for customers.
 */
export interface ICustomerSearchResults extends ISearchResults<ICustomer> {
}
