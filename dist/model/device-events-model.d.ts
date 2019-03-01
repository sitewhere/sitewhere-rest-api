import { uuid, IMetadataProvider } from "./common-model";
/**
 * Enumeration of device assignment statuses.
 */
export declare enum DeviceEventType {
    Measurement = "Measurement",
    Location = "Location",
    Alert = "Alert",
    CommandInvocation = "CommandInvocation",
    CommandResponse = "CommandResponse",
    StateChange = "StateChange"
}
/**
 * Base class for creating device events.
 */
export interface IDeviceEventCreateRequest extends IMetadataProvider {
    eventType: DeviceEventType;
    eventDate: Date;
    alternateId?: string;
    customerToken?: string;
    areaToken?: string;
    assetToken?: string;
    updateState?: boolean;
}
/**
 * Device measurement event create request.
 */
export interface IDeviceMeasurementCreateRequest extends IDeviceEventCreateRequest {
    name: string;
    value: number;
}
/**
 * Enumeration of alert sources.
 */
export declare enum AlertSource {
    Device = "Device",
    System = "System"
}
/**
 * Enumeration of alert levels.
 */
export declare enum AlertLevel {
    Info = "Info",
    Warning = "Warning",
    Error = "Error",
    Critical = "Critical"
}
/**
 * Alert event create request.
 */
export interface IDeviceAlertCreateRequest extends IDeviceEventCreateRequest {
    source: AlertSource;
    level: AlertLevel;
    type: string;
    message: string;
}
/**
 * Device location event create request.
 */
export interface IDeviceLocationCreateRequest extends IDeviceEventCreateRequest {
    latitude: number;
    longitude: number;
    elevation?: number;
}
/**
 * Enumeration of command initiator values.
 */
export declare enum CommandInitiator {
    REST = "REST",
    BatchOperation = "BatchOperation",
    Script = "Script",
    Scheduler = "Scheduler"
}
/**
 * Enumeration of command target values.
 */
export declare enum CommandTarget {
    Assignment = "Assignment"
}
/**
 * Command invocation event create request.
 */
export interface IDeviceCommandInvocationCreateRequest extends IDeviceEventCreateRequest {
    initiator: CommandInitiator;
    initiatorId: string;
    target: CommandTarget;
    targetId: string;
    commandToken: string;
    parameterValues: {};
}
/**
 * Device command response event create request.
 */
export interface IDeviceCommandResponseCreateRequest extends IDeviceEventCreateRequest {
    originatingEventId?: uuid;
    responseEventId?: uuid;
    response?: string;
}
/**
 * Device state change event create request.
 */
export interface IDeviceStateChangeCreateRequest extends IDeviceEventCreateRequest {
    attribute: string;
    type: string;
    previousState?: string;
    newState?: string;
}
/**
 * Device event base interface.
 */
export interface IDeviceEvent extends IMetadataProvider {
    id: uuid;
    deviceId: uuid;
    deviceAssignmentId: uuid;
    eventType: DeviceEventType;
    eventDate: Date;
    receivedDate: Date;
    customerId?: uuid;
    areaId?: uuid;
    assetId?: uuid;
    alternateId?: string;
}
/**
 * Device measurement event.
 */
export interface IDeviceMeasurement extends IDeviceEvent {
    name: string;
    value: number;
}
/**
 * Device alert event.
 */
export interface IDeviceAlert extends IDeviceEvent {
    source: AlertSource;
    level: AlertLevel;
    type: string;
    message: string;
}
/**
 * Device location event.
 */
export interface IDeviceLocation extends IDeviceEvent {
    latitude: number;
    longitude: number;
    elevation?: number;
}
/**
 * Device command invocation event.
 */
export interface IDeviceCommandInvocation extends IDeviceEvent {
    initiator: CommandInitiator;
    initiatorId: string;
    target: CommandTarget;
    targetId: string;
    commandToken: string;
    parameterValues: {};
}
/**
 * Device command response event.
 */
export interface IDeviceCommandResponse extends IDeviceEvent {
    originatingEventId?: uuid;
    responseEventId?: uuid;
    response?: string;
}
/**
 * Device state change event.
 */
export interface IDeviceStateChange extends IDeviceEvent {
    attribute: string;
    type: string;
    previousState?: string;
    newState?: string;
}
/**
 * Single entry in a chart series.
 */
export interface IChartSeriesEntry<T> {
    value: T;
    measurementDate: Date;
}
/**
 * Series of values for a given measurement.
 */
export interface IChartSeries<T> {
    measurementId: string;
    entries: IChartSeriesEntry<T>[];
}
