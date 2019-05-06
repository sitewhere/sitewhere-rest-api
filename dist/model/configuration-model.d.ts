import { IAccessible, IIconProvider } from "./common-model";
import { IMicroserviceDetails } from "./instance-model";
/**
 * Enumeration of node types.
 */
export declare enum NodeType {
    Element = "Element",
    Attribute = "Attribute"
}
/**
 * Enumeration of attribute types.
 */
export declare enum AttributeType {
    String = "String",
    Integer = "Integer",
    Decimal = "Decimal",
    Boolean = "Boolean",
    Script = "Script",
    DeviceTypeReference = "DeviceTypeReference",
    CustomerReference = "CustomerReference",
    AreaReference = "AreaReference",
    AssetReference = "AssetReference"
}
/**
 * Contains information about an XML node.
 */
export interface IXmlNode extends IAccessible, IIconProvider {
    localName: string;
    namespace: string;
    nodeType: NodeType;
}
/**
 * Choice available for attribute.
 */
export interface IAttributeChoice {
    name: string;
    value: string;
}
/**
 * Node for a configuration attribute.
 */
export interface IAttributeNode extends IXmlNode {
    type: AttributeType;
    defaultValue?: string;
    index?: boolean;
    choices?: IAttributeChoice[];
    required?: boolean;
    group?: string;
}
/**
 * Node for a configuration element.
 */
export interface IElementNode extends IXmlNode {
    attributes?: IAttributeNode[];
    role: string;
    onDeleteWarning: string;
    specializes: {
        [id: string]: string;
    };
    attributeGroups: {
        [id: string]: string;
    };
    deprecated: boolean;
}
/**
 * Configuration element role.
 */
export interface IElementRole {
    name: string;
    optional: boolean;
    multiple: boolean;
    reorderable: boolean;
    permanent: boolean;
    childRoles: string[];
    subtypeRoles: string[];
}
/**
 * Contains model for configuring a microservice.
 */
export interface IConfigurationModel {
    microserviceDetails: IMicroserviceDetails;
    defaultXmlNamespace: string;
    rootRoleId: string;
    elementsByRole: {
        [id: string]: IElementNode[];
    };
    rolesById: {
        [id: string]: IElementRole;
    };
}
/**
 * Base container for XML content.
 */
export interface IXmlContent {
    name: string;
    namespace: string;
}
/**
 * XML attribute content.
 */
export interface IAttributeContent extends IXmlContent {
    value: string;
}
/**
 * XML element content.
 */
export interface IElementContent extends IXmlContent {
    id: string;
    children: IElementContent[];
    attributes: IAttributeContent[];
}
