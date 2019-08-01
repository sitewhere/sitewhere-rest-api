import { AxiosInstance, AxiosPromise } from "axios";
import { IBatchOperation, IBatchOperationSearchCriteria, IBatchOperationResponseFormat, IBatchOperationElementResponseFormat, IBatchCommandInvocationRequest, IInvocationByDeviceCriteriaRequest, IInvocationByAssignmentCriteriaRequest, IBatchOperationSearchResults, IBatchElementSearchResults } from "../model/batch-operations-model";
import { ISearchCriteria } from "../model/common-model";
/**
 * Get an batch operation by unique token.
 * @param axios
 * @param token
 * @param format
 */
export declare function getBatchOperation(axios: AxiosInstance, token: string, format: IBatchOperationResponseFormat): AxiosPromise<IBatchOperation>;
/**
 * List batch operations that match the given criteria.
 * @param axios
 * @param criteria
 * @param format
 */
export declare function listBatchOperations(axios: AxiosInstance, criteria?: IBatchOperationSearchCriteria, format?: IBatchOperationResponseFormat): AxiosPromise<IBatchOperationSearchResults>;
/**
 * List elements for a batch operation that match the given criteria.
 */
export declare function listBatchOperationElements(axios: AxiosInstance, token: string, criteria?: ISearchCriteria, format?: IBatchOperationElementResponseFormat): AxiosPromise<IBatchElementSearchResults>;
/**
 * Create a batch command invocation.
 * @param axios
 * @param request
 */
export declare function createBatchCommandInvocation(axios: AxiosInstance, request: IBatchCommandInvocationRequest): AxiosPromise<IBatchOperation>;
/**
 * Create batch command invocations based on devices that match criteria.
 * @param axios
 * @param request
 */
export declare function createInvocationsByDeviceCriteria(axios: AxiosInstance, request: IInvocationByDeviceCriteriaRequest): AxiosPromise<IBatchOperation>;
/**
 * Create batch command invocations based on device assignments that match criteria.
 * @param axios
 * @param request
 */
export declare function createInvocationsByAssignmentCriteria(axios: AxiosInstance, request: IInvocationByAssignmentCriteriaRequest): AxiosPromise<IBatchOperation>;
