import { uuid, IPersistentEntityCreateRequest, IPersistentEntity, IAccessible, ISearchCriteria, ISearchResults, IResponseFormat } from "./common-model";
/**
 * Enumeration of parameter types.
 */
export declare enum ParameterType {
    Double = "Double",
    Float = "Float",
    Int32 = "Int32",
    Int64 = "Int64",
    UInt32 = "UInt32",
    UInt64 = "UInt64",
    SInt32 = "SInt32",
    SInt64 = "SInt64",
    Fixed32 = "Fixed32",
    Fixed64 = "Fixed64",
    SFixed32 = "SFixed32",
    SFixed64 = "SFixed64",
    Bool = "Bool",
    String = "String",
    Bytes = "Bytes"
}
/**
 * Command parameter.
 */
export interface ICommandParameter {
    name: string;
    type: ParameterType;
    required: boolean;
}
/**
 * Used to create or update a device command.
 */
export interface IDeviceCommandCreateRequest extends IPersistentEntityCreateRequest, IAccessible {
    deviceTypeToken: string;
    namespace: string;
    parameters: ICommandParameter[];
}
/**
 * Device command information.
 */
export interface IDeviceCommand extends IPersistentEntity, IAccessible {
    deviceTypeId: uuid;
    namespace: string;
    parameters: ICommandParameter[];
}
/**
 * Response format for device command records.
 */
export interface IDeviceCommandResponseFormat extends IResponseFormat {
}
/**
 * Search criteria for device commands.
 */
export interface IDeviceCommandSearchCriteria extends ISearchCriteria {
    deviceTypeToken?: string;
}
/**
 * Search results for device commands.
 */
export interface IDeviceCommandSearchResults extends ISearchResults<IDeviceCommand> {
}
/**
 * List of commands associated with a given namespace.
 */
export interface IDeviceCommandNamespace {
    value: string;
    commands: IDeviceCommand[];
}
/**
 * Search results for device command namespaces.
 */
export interface IDeviceCommandNamespaceSearchResults extends ISearchResults<IDeviceCommandNamespace> {
}
