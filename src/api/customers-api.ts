import { AxiosInstance, AxiosPromise } from "axios";
import {
  ICustomerCreateRequest,
  ICustomer,
  ICustomerSearchCriteria,
  ICustomerResponseFormat,
  ICustomerSearchResults
} from "../model/customers-model";
import {
  IDeviceAssignmentResponseFormat,
  IDeviceAssignmentSearchResults
} from "../model/device-assignments-model";
import {
  createPagingQuery,
  ISearchCriteria,
  IDateRangeSearchCriteria
} from "../model/common-model";
import {
  restAuthGet,
  restAuthPost,
  restAuthPut,
  restAuthDelete,
  randomSeedQuery,
  addFilter,
  addStringFilter
} from "../rest";
import {
  IDeviceMeasurementSearchResults,
  IDeviceLocationSearchResults,
  IDeviceAlertSearchResults
} from "../model/device-events-model";

/**
 * Create a new customer.
 * @param axios
 * @param request
 */
export function createCustomer(
  axios: AxiosInstance,
  request: ICustomerCreateRequest
): AxiosPromise<ICustomer> {
  return restAuthPost<ICustomer>(axios, "customers", request);
}

/**
 * Get a customer by unique token.
 * @param axios
 * @param token
 */
export function getCustomer(
  axios: AxiosInstance,
  token: string,
  format: ICustomerResponseFormat
): AxiosPromise<ICustomer> {
  let query = randomSeedQuery();
  if (format) {
    query += addFilter(format.includeCustomerType, "includeCustomerType");
    query += addFilter(format.includeParentCustomer, "includeParentCustomer");
  }
  return restAuthGet<ICustomer>(axios, `customers/${token}${query}`);
}

/**
 * Update an existing customer.
 * @param axios
 * @param token
 * @param request
 */
export function updateCustomer(
  axios: AxiosInstance,
  token: string,
  request: ICustomerCreateRequest
): AxiosPromise<ICustomer> {
  return restAuthPut<ICustomer>(axios, `customers/${token}`, request);
}

/**
 * List customers that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function listCustomers(
  axios: AxiosInstance,
  criteria?: ICustomerSearchCriteria,
  format?: ICustomerResponseFormat
): AxiosPromise<ICustomerSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    query += addFilter(format.includeCustomerType, "includeCustomerType");
  }
  if (criteria) {
    query += addFilter(criteria.rootOnly, "rootOnly");
    query += addStringFilter(
      criteria.parentCustomerToken,
      "parentCustomerToken"
    );
    query += addStringFilter(criteria.customerTypeToken, "customerTypeToken");
    query += createPagingQuery(criteria);
  }
  return restAuthGet<ICustomerSearchResults>(axios, `customers${query}`);
}

/**
 * Delete an existing customer.
 * @param axios
 * @param token
 */
export function deleteCustomer(
  axios: AxiosInstance,
  token: string
): AxiosPromise<ICustomer> {
  return restAuthDelete<ICustomer>(axios, `customers/${token}`);
}

/**
 * List assignments associated with a customer.
 * @param axios
 * @param token
 * @param criteria
 * @param format
 */
export function listAssignmentsForCustomer(
  axios: AxiosInstance,
  token: string,
  criteria?: ISearchCriteria,
  format?: IDeviceAssignmentResponseFormat
): AxiosPromise<IDeviceAssignmentSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    query += addFilter(format.includeDevice, "includeDevice");
    query += addFilter(format.includeCustomer, "includeCustomer");
    query += addFilter(format.includeArea, "includeArea");
    query += addFilter(format.includeAsset, "includeAsset");
  }
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceAssignmentSearchResults>(
    axios,
    `customers/${token}/assignments${query}`
  );
}

/**
 * List measurement events associated with customer.
 * @param axios
 * @param token
 * @param criteria
 */
export function listMeasurementsForCustomer(
  axios: AxiosInstance,
  token: string,
  criteria?: IDateRangeSearchCriteria
): AxiosPromise<IDeviceMeasurementSearchResults> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceMeasurementSearchResults>(
    axios,
    `customers/${token}/measurements${query}`
  );
}

/**
 * List location events associated with customer.
 * @param axios
 * @param token
 * @param criteria
 */
export function listLocationsForCustomer(
  axios: AxiosInstance,
  token: string,
  criteria?: IDateRangeSearchCriteria
): AxiosPromise<IDeviceLocationSearchResults> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceLocationSearchResults>(
    axios,
    `customers/${token}/locations${query}`
  );
}

/**
 * List alert events associated with customer.
 * @param axios
 * @param token
 * @param criteria
 */
export function listAlertsForCustomer(
  axios: AxiosInstance,
  token: string,
  criteria?: IDateRangeSearchCriteria
): AxiosPromise<IDeviceAlertSearchResults> {
  let query = randomSeedQuery();
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IDeviceAlertSearchResults>(
    axios,
    `customers/${token}/alerts${query}`
  );
}
