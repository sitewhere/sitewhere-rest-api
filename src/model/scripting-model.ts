import { IAccessible } from "./common-model";

/**
 * Script template information.
 */
export interface IScriptTemplate extends IAccessible {
  id: string;
  type: string;
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
export interface IScriptMetadata extends IAccessible {
  id: string;
  type: string;
  activeVersion: string;
  versions: IScriptVersion[];
}

/**
 * Information used to create a script.
 */
export interface IScriptCreateRequest extends IAccessible {
  id: string;
  type: string;
  content: string;
}
