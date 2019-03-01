import { AxiosInstance, AxiosPromise } from "axios";
import { ICustomerTypeCreateRequest, ICustomerType, ICustomerTypeSearchCriteria, ICustomerTypeResponseFormat } from "../model/customer-types-model";
/**
 * Create a new customer type.
 * @param axios
 * @param request
 */
export declare function createCustomerType(axios: AxiosInstance, request: ICustomerTypeCreateRequest): AxiosPromise<ICustomerType>;
/**
 * Get a customer type by unique token.
 * @param axios
 * @param token
 */
export declare function getCustomerType(axios: AxiosInstance, token: string): AxiosPromise<ICustomerType>;
/**
 * Update an existing customer type.
 * @param axios
 * @param token
 * @param request
 */
export declare function updateCustomerType(axios: AxiosInstance, token: string, request: ICustomerTypeCreateRequest): AxiosPromise<ICustomerType>;
/**
 * List customer types that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listCustomerTypes(axios: AxiosInstance, criteria?: ICustomerTypeSearchCriteria, format?: ICustomerTypeResponseFormat): AxiosPromise<ICustomerType[]>;
/**
 * Delete an existing customer type.
 * @param axios
 * @param token
 */
export declare function deleteCustomerType(axios: AxiosInstance, token: string): AxiosPromise<ICustomerType>;
