import { IAccessible, IIconProvider, uuid } from "./common-model";

/**
 * Enumeration of lifecycle statuses.
 */
export enum LifecycleStatus {
  Initializing = "Initializing",
  InitializationError = "InitializationError",
  Stopped = "Stopped",
  StoppedWithErrors = "StoppedWithErrors",
  Starting = "Starting",
  Started = "Started",
  StartedWithErrors = "StartedWithErrors",
  Pausing = "Pausing",
  Paused = "Paused",
  Stopping = "Stopping",
  Terminating = "Terminating",
  Terminated = "Terminated",
  LifecycleError = "LifecycleError"
}

/**
 * Contains state for a lifecycle component.
 */
export interface ILifecycleComponentState {
  componentId: uuid;
  componentName: string;
  componentState: ILifecycleComponentState;
}

/**
 * Used to create or update an area type.
 */
export interface IInstanceTopologySummary extends IAccessible, IIconProvider {
  identifier: string;
  global: boolean;
  hostnames: string[];
}

/**
 * Provides details about a microservice.
 */
export interface IMicroserviceDetails extends IAccessible, IIconProvider {
  identifier: string;
  hostname: string;
  global: boolean;
}

/**
 * Contains state for a tenant engine.
 */
export interface ITenantEngineState {
  microservice: IMicroserviceDetails;
  tenantId: uuid;
  status: LifecycleStatus;
  errorStack: string[];
  childComponentStates: ILifecycleComponentState[];
}
