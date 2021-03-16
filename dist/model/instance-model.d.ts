import { ITenant } from "./tenants-model";
import { ISearchCriteria, ISearchResults, IResponseFormat } from "./common-model";
/**
 * Enumeration of lifecycle statuses.
 */
export declare enum LifecycleStatus {
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
    componentId: string;
    componentName: string;
    componentState: ILifecycleComponentState;
}
/**
 * Redis configuration settings.
 */
export interface IRedisConfiguration {
    hostname: string;
    port: number;
    nodeCount: number;
    masterGroupName: string;
}
/**
 * Kafka configuration settings.
 */
export interface IKafkaConfiguration {
    hostname: string;
    port: number;
    defaultTopicPartitions: number;
    defaultTopicReplicationFactor: number;
}
/**
 * Grpc configuration settings.
 */
export interface IGrpcConfiguration {
    maxRetryCount: number;
    initialBackoffSeconds: number;
    maxBackoffSeconds: number;
    backoffMultiplier: number;
    resolveFQDN: boolean;
}
/**
 * Metrics server configuration settings.
 */
export interface IMetricsConfiguration {
    enabled: boolean;
    httpPort: number;
}
/**
 * Infrastructure configuration settings.
 */
export interface IInfrastructureConfiguration {
    namespace: string;
    redis: IRedisConfiguration;
    kafka: IKafkaConfiguration;
    metrics: IMetricsConfiguration;
    grpc: IGrpcConfiguration;
}
/**
 * Common datastore configuration.
 */
export interface IDatastoreConfiguration {
    type: string;
    configuration: any;
}
/**
 * Relational database configuration.
 */
export interface IRdbConfiguration extends IDatastoreConfiguration {
}
/**
 * Time series database configuration.
 */
export interface ITimeSeriesConfiguration extends IDatastoreConfiguration {
}
/** Map of IRdbConfigurations by string id */
export declare type IRdbConfigurationMap = {
    [index: string]: IRdbConfiguration;
};
/** Map of ITimeSeriesConfiguration by string id */
export declare type ITimeSeriesConfigurationMap = {
    [index: string]: ITimeSeriesConfiguration;
};
/**
 * Persistence configuration defaults.
 */
export interface IPersistenceConfigurations {
    rdbConfigurations: IRdbConfigurationMap;
    timeSeriesConfigurations: ITimeSeriesConfigurationMap;
}
/**
 * Debugging related to event pipeline.
 */
export interface IEventPipelineDebugging {
    debugLevel: string;
}
/**
 * Instance-scoped debugging configuration.
 */
export interface IInstanceDebuggingConfiguration {
    eventPipeLine: IEventPipelineDebugging;
}
/**
 * Global instance configuration.
 */
export interface IInstanceConfiguration {
    infrastructure: IInfrastructureConfiguration;
    persistenceConfigurations: IPersistenceConfigurations;
    debugging: IInstanceDebuggingConfiguration;
}
/** Event pipeline log entry */
export interface IEventPipelineLog {
    timestamp: number;
    source: string;
    deviceToken: string;
    level: string;
    microservice: string;
    message: string;
    detail: string;
}
/** Response format for event pipeline logs */
export interface IEventPipelineLogResponseFormat extends IResponseFormat {
}
/** Search criteria for event pipeline logs */
export interface IEventPipelineLogSearchCriteria extends ISearchCriteria {
}
/** Search results for devices */
export interface IEventPipelineLogSearchResults extends ISearchResults<IEventPipelineLog> {
}
/**
 * Provides summary information about a deployed microservice.
 */
export interface IMicroserviceSummary {
    id: string;
    name: string;
    description: string;
    functionalArea: string;
    icon: string;
    multitenant: boolean;
    dockerImageTag: string;
    debugEnabled: boolean;
    debugJdwpPort: number;
    debugJmxPort: number;
}
/**
 * Information used for configuring a tenant engine.
 */
export interface ITenantEngineConfiguration {
    tenant: ITenant;
    microservice: IMicroserviceSummary;
    instanceConfiguration: IInstanceConfiguration;
    microserviceConfiguration: any;
    tenantConfiguration: any;
}
