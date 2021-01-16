import { AxiosInstance, AxiosPromise } from "axios";
import { ICustomerCreateRequest, ICustomer, ICustomerSearchCriteria, ICustomerResponseFormat, ICustomerSearchResults } from "../model/customers-model";
import { IDeviceAssignmentResponseFormat, IDeviceAssignmentSearchResults, IDeviceAssignmentSummarySearchResults } from "../model/device-assignments-model";
import { ISearchCriteria, IDateRangeSearchCriteria, ITreeNode } from "../model/common-model";
import { IDeviceMeasurementSearchResults, IDeviceLocationSearchResults, IDeviceAlertSearchResults, IDeviceMeasurementResponseFormat, IDeviceLocationResponseFormat, IDeviceAlertResponseFormat } from "../model/device-events-model";
/**
 * Create a new customer.
 * @param axios
 * @param request
 */
export declare function createCustomer(axios: AxiosInstance, request: ICustomerCreateRequest): AxiosPromise<ICustomer>;
/**
 * Get a customer by unique token.
 * @param axios
 * @param token
 */
export declare function getCustomer(axios: AxiosInstance, token: string, format: ICustomerResponseFormat): AxiosPromise<ICustomer>;
/**
 * Update an existing customer.
 * @param axios
 * @param token
 * @param request
 */
export declare function updateCustomer(axios: AxiosInstance, token: string, request: ICustomerCreateRequest): AxiosPromise<ICustomer>;
/**
 * List customers that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listCustomers(axios: AxiosInstance, criteria?: ICustomerSearchCriteria, format?: ICustomerResponseFormat): AxiosPromise<ICustomerSearchResults>;
/**
 * Get all customers as a tree structure.
 * @param axios
 */
export declare function getCustomersTree(axios: AxiosInstance): AxiosPromise<ITreeNode[]>;
/**
 * Delete an existing customer.
 * @param axios
 * @param token
 */
export declare function deleteCustomer(axios: AxiosInstance, token: string): AxiosPromise<ICustomer>;
/**
 * List assignments associated with a customer.
 * @param axios
 * @param token
 * @param criteria
 * @param format
 */
export declare function listAssignmentsForCustomer(axios: AxiosInstance, token: string, criteria?: ISearchCriteria, format?: IDeviceAssignmentResponseFormat): AxiosPromise<IDeviceAssignmentSearchResults>;
/**
 * List device assignments for customer in summary form.
 * @param axios
 * @param token
 * @param criteria
 * @param format
 */
export declare function listAssignmentSummariesForCustomer(axios: AxiosInstance, token: string, criteria?: ISearchCriteria, format?: IDeviceAssignmentResponseFormat): AxiosPromise<IDeviceAssignmentSummarySearchResults>;
/**
 * List measurement events associated with customer.
 * @param axios
 * @param token
 * @param criteria
 * @param format
 */
export declare function listMeasurementsForCustomer(axios: AxiosInstance, token: string, criteria?: IDateRangeSearchCriteria, format?: IDeviceMeasurementResponseFormat): AxiosPromise<IDeviceMeasurementSearchResults>;
/**
 * List location events associated with customer.
 * @param axios
 * @param token
 * @param criteria
 * @param format
 */
export declare function listLocationsForCustomer(axios: AxiosInstance, token: string, criteria?: IDateRangeSearchCriteria, format?: IDeviceLocationResponseFormat): AxiosPromise<IDeviceLocationSearchResults>;
/**
 * List alert events associated with customer.
 * @param axios
 * @param token
 * @param criteria
 * @param format
 */
export declare function listAlertsForCustomer(axios: AxiosInstance, token: string, criteria?: IDateRangeSearchCriteria, format?: IDeviceAlertResponseFormat): AxiosPromise<IDeviceAlertSearchResults>;
