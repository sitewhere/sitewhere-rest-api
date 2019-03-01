import {
  IPersistentEntityCreateRequest,
  IPersistentEntity,
  IAccessible,
  ISearchCriteria,
  ISearchResults,
  IResponseFormat,
  uuid,
  IMetadataProvider
} from "./common-model";

/**
 * Enumeration of batch operation status values.
 */
export enum BatchOperationStatus {
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
export interface IBatchOperationCreateRequest
  extends IPersistentEntityCreateRequest,
    IAccessible {
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
export interface IBatchOperationResponseFormat extends IResponseFormat {}

/**
 * Search criteria for batch operations.
 */
export interface IBatchOperationSearchCriteria extends ISearchCriteria {}

/**
 * Search results for batch operations.
 */
export interface IBatchOperationSearchResults
  extends ISearchResults<IBatchOperation> {}

/**
 * Enumeration of element processing status values.
 */
export enum ElementProcessingStatus {
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
 * Used to create a batch command invocation.
 */
export interface IBatchCommandInvocationRequest {
  token?: string;
  commandToken: string;
  parameterValues: {};
  deviceTokens: string[];
}

/**
 * Used to create a batch command request for the given criteria.
 */
export interface IBatchCommandForCriteriaRequest {
  token?: string;
  commandToken: string;
  parameterValues: {};
  deviceTokens: string[];
  deviceTypeToken?: string;
  groupToken?: string;
  groupsWithRole?: string;
  areaToken?: string;
  startDate: Date;
  endDate: Date;
}
