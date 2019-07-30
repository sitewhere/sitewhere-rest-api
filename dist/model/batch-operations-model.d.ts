import { IPersistentEntityCreateRequest, IPersistentEntity, IAccessible, ISearchCriteria, ISearchResults, IResponseFormat, uuid, IMetadataProvider } from "./common-model";
/**
 * Enumeration of batch operation status values.
 */
export declare enum BatchOperationStatus {
    Unprocessed = "Unprocessed",
    Initializing = "Initializing",
    InitializedSuccessfully = "InitializedSuccessfully",
    InitializedWithErrors = "InitializedWithErrors",
    FinishedSuccessfully = "FinishedSuccessfully",
    FinishedWithErrors = "FinishedWithErrors"
}
/**
 * Used to create or update a batch operation.
 */
export interface IBatchOperationCreateRequest extends IPersistentEntityCreateRequest, IAccessible {
    operationType: string;
    parameters: {};
    deviceTokens: string[];
}
/**
 * Batch operation information.
 */
export interface IBatchOperation extends IPersistentEntity, IAccessible {
    operationType: string;
    parameters: {};
    processingStatus: BatchOperationStatus;
    processingStartedDate: Date;
    processingEndedDate: Date;
}
/**
 * Response format for batch operation records.
 */
export interface IBatchOperationResponseFormat extends IResponseFormat {
}
/**
 * Search criteria for batch operations.
 */
export interface IBatchOperationSearchCriteria extends ISearchCriteria {
}
/**
 * Search results for batch operations.
 */
export interface IBatchOperationSearchResults extends ISearchResults<IBatchOperation> {
}
/**
 * Enumeration of element processing status values.
 */
export declare enum ElementProcessingStatus {
    Unprocessed = "Unprocessed",
    Initializing = "Initializing",
    Processing = "Processing",
    Failed = "Failed",
    Succeeded = "Succeeded"
}
/**
 * Response format for batch operation element records.
 */
export interface IBatchOperationElementResponseFormat extends IResponseFormat {
    includeDevice?: boolean;
}
/**
 * Element that tracks processing for a batch operation.
 */
export interface IBatchElement extends IMetadataProvider {
    id: uuid;
    batchOperationId: uuid;
    deviceId: uuid;
    processingStatus: ElementProcessingStatus;
    processedDate: Date;
}
/**
 * Search results that contain batch elements.
 */
export interface IBatchElementSearchResults extends ISearchResults<IBatchElement> {
}
/**
 * Used to create a batch command invocation.
 */
export interface IBatchCommandInvocationRequest {
    token?: string;
    deviceTypeToken?: string;
    commandToken: string;
    parameterValues: {};
    deviceTokens: string[];
}
/**
 * Used to create batch command invocations for the given device criteria.
 */
export interface IInvocationByDeviceCriteriaRequest {
    token?: string;
    deviceTypeToken?: string;
    commandToken: string;
    parameterValues: {};
}
/**
 * Used to create batch command invocations for the given device assignment criteria.
 */
export interface IInvocationByAssignmentCriteriaRequest {
    token?: string;
    deviceTypeToken?: string;
    commandToken: string;
    parameterValues: {};
    customerTokens: string[];
    areaTokens: string[];
    assetTokens: string[];
}
