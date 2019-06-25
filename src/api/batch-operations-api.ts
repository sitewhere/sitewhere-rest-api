import { AxiosInstance, AxiosPromise } from "axios";
import {
  IBatchOperation,
  IBatchOperationSearchCriteria,
  IBatchOperationResponseFormat,
  IBatchOperationElementResponseFormat,
  IBatchCommandInvocationRequest,
  IBatchCommandForCriteriaRequest,
  IBatchOperationSearchResults,
  IBatchElementSearchResults
} from "../model/batch-operations-model";
import { createPagingQuery, ISearchCriteria } from "../model/common-model";
import { restAuthGet, restAuthPost, randomSeedQuery, addFilter } from "../rest";

/**
 * Get an batch operation by unique token.
 * @param axios
 * @param token
 */
export function getBatchOperation(
  axios: AxiosInstance,
  token: string
): AxiosPromise<IBatchOperation> {
  return restAuthGet<IBatchOperation>(axios, `batch/${token}`);
}

/**
 * List batch operations that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export function listBatchOperations(
  axios: AxiosInstance,
  criteria?: IBatchOperationSearchCriteria,
  format?: IBatchOperationResponseFormat
): AxiosPromise<IBatchOperationSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    // No response format options available.
  }
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IBatchOperationSearchResults>(axios, `batch${query}`);
}

/**
 * List elements for a batch operation that match the given criteria.
 */
export function listBatchOperationElements(
  axios: AxiosInstance,
  token: string,
  criteria?: ISearchCriteria,
  format?: IBatchOperationElementResponseFormat
): AxiosPromise<IBatchElementSearchResults> {
  let query = randomSeedQuery();
  if (format) {
    query += addFilter(format.includeDevice, "includeDevice");
  }
  if (criteria) {
    query += createPagingQuery(criteria);
  }
  return restAuthGet<IBatchElementSearchResults>(
    axios,
    `batch/${token}/elements${query}`
  );
}

/**
 * Create a batch command invocation.
 * @param axios
 * @param request
 */
export function createBatchCommandInvocation(
  axios: AxiosInstance,
  request: IBatchCommandInvocationRequest
): AxiosPromise<IBatchOperation> {
  return restAuthPost<IBatchOperation>(axios, "batch/command", request);
}

/**
 * Create batch command invocation based on devices that match criteria.
 * @param axios
 * @param request
 */
export function createBatchCommandForCriteria(
  axios: AxiosInstance,
  request: IBatchCommandForCriteriaRequest
): AxiosPromise<IBatchOperation> {
  return restAuthPost<IBatchOperation>(
    axios,
    "batch/command/criteria",
    request
  );
}
