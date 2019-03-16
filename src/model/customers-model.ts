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
 * Used to create or update a customer.
 */
export interface ICustomerCreateRequest
  extends IBrandedEntityCreateRequest,
    IAccessible {
  customerTypeToken: string;
  parentCustomerToken: string;
}

/**
 * Customer information.
 */
export interface ICustomer extends IBrandedEntity, IAccessible {
  customerTypeId: uuid;
  parentCustomerId: uuid;
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
export interface ICustomerSearchResults extends ISearchResults<ICustomer> {}
