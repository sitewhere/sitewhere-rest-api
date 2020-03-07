import { ITenant } from "./tenants-model";
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
 * Relational database configuration.
 */
export interface IRdbConfiguration {
    type: string;
    configuration: any;
}
/** Map of IRdbConfigurations by string id */
export declare type IRdbConfigurationMap = {
    [index: string]: IRdbConfiguration;
};
/**
 * Persistence configuration defaults.
 */
export interface IPersistenceConfigurations {
    rdbConfigurations: IRdbConfigurationMap;
    influxDbConfigurations: any;
    cassandraConfigurations: any;
}
/**
 * Global instance configuration.
 */
export interface IInstanceConfiguration {
    infrastructure: IInfrastructureConfiguration;
    persistenceConfigurations: IPersistenceConfigurations;
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
