import { AxiosInstance, AxiosPromise } from "axios";
import {
  IBatchOperation,
  IBatchOperationSearchCriteria,
  IBatchOperationResponseFormat,
  IBatchCommandInvocationRequest,
  IInvocationByDeviceCriteriaRequest,
  IInvocationByAssignmentCriteriaRequest,
  IBatchOperationSearchResults,
  IBatchElementSearchCriteria,
  IBatchElementResponseFormat,
  IBatchElementSearchResults
} from "../model/batch-operations-model";
import { createPagingQuery, ISearchCriteria } from "../model/common-model";
import { restAuthGet, restAuthPost, randomSeedQuery, addFilter } from "../rest";

/**
 * Get an batch operation by unique token.
 * @param axios
 * @param token
 * @param format
 */
export function getBatchOperation(
  axios: AxiosInstance,
  token: string,
  format: IBatchOperationResponseFormat
): AxiosPromise<IBatchOperation> {
  if (format) {
    // No response format options available.
  }
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
  criteria?: IBatchElementSearchCriteria,
  format?: IBatchElementResponseFormat
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
 * Create batch command invocations based on devices that match criteria.
 * @param axios
 * @param request
 */
export function createInvocationsByDeviceCriteria(
  axios: AxiosInstance,
  request: IInvocationByDeviceCriteriaRequest
): AxiosPromise<IBatchOperation> {
  return restAuthPost<IBatchOperation>(
    axios,
    "batch/command/criteria/device",
    request
  );
}

/**
 * Create batch command invocations based on device assignments that match criteria.
 * @param axios
 * @param request
 */
export function createInvocationsByAssignmentCriteria(
  axios: AxiosInstance,
  request: IInvocationByAssignmentCriteriaRequest
): AxiosPromise<IBatchOperation> {
  return restAuthPost<IBatchOperation>(
    axios,
    "batch/command/criteria/assignment",
    request
  );
}
