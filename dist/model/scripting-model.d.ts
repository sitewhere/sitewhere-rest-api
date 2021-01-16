/**
 * Script template information.
 */
export interface IScriptTemplate {
    id: string;
    name: string;
    description: string;
    interpreterType: string;
    script: string;
}
/**
 * Metadata about a script version.
 */
export interface IScriptVersion {
    versionId: string;
    comment: string;
    createdDate: Date;
}
/**
 * Metadata for a script.
 */
export interface IScriptMetadata {
    id: string;
    name: string;
    category: string;
    interpreterType: string;
    activeVersion: string;
    versions: IScriptVersion[];
}
/**
 * Script category information.
 */
export interface IScriptCategory {
    id: string;
    name: string;
    description: string;
    scripts: IScriptMetadata[];
}
/**
 * Information used to create a script.
 */
export interface IScriptCreateRequest {
    id: string;
    name: string;
    category: string;
    interpreterType: string;
    description: string;
    content: string;
}
/**
 * Information used to clone a script.
 */
export interface IScriptCloneRequest {
    comment: string;
}
/**
 * Information used to activate a script.
 */
export interface IScriptActivationRequest {
}
