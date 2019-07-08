/**
 * Declare UUID datatype.
 */
export declare type uuid = string;
/**
 * Common interface for model objects that can provide metadata.
 */
export interface IMetadataProvider {
    metadata?: {};
}
/**
 * Base interface for creating persistent entities.
 */
export interface IPersistentEntityCreateRequest extends IMetadataProvider {
    token?: string;
}
/**
 * Base interface for persistent entities.
 */
export interface IPersistentEntity extends IMetadataProvider {
    id: uuid;
    token: string;
    createdDate: Date;
    createdBy: string;
    updatedDate?: Date;
    updatedBy?: string;
}
/**
 * Common interface for model objects with name/description.
 */
export interface IAccessible {
    name: string;
    description: string;
}
/**
 * Common interface for model objects with color characteristics.
 */
export interface IColorProvider {
    backgroundColor: string;
    foregroundColor: string;
    borderColor: string;
}
/**
 * Common interface for model objects that have an associated icon.
 */
export interface IIconProvider {
    icon: string;
}
/**
 * Common interface for model objects that have an associated image.
 */
export interface IImageProvider {
    imageUrl: string;
}
/**
 * Common interface for model objects that have geospatial boundaries.
 */
export interface IBoundsProvider {
    bounds: ILocation[];
}
/**
 * Common interface for creating entities that have parent/child relationships.
 */
export interface ITreeEntityCreateRequest {
    parentToken: string;
}
/**
 * Entity with parent/child relationships.
 */
export interface ITreeEntity {
    parentId: uuid;
}
/**
 * Interface for creating persistent model object with branding information.
 */
export interface IBrandedEntityCreateRequest extends IPersistentEntityCreateRequest, IColorProvider, IIconProvider, IImageProvider {
}
/**
 * Interface for persistent model object with branding information.
 */
export interface IBrandedEntity extends IPersistentEntity, IColorProvider, IIconProvider, IImageProvider {
}
/**
 * Tree entity with branding information.
 */
export interface IBrandedTreeEntity extends IBrandedEntity, ITreeEntity {
}
/**
 * Base interface for response format configuration.
 */
export interface IResponseFormat {
}
/**
 * Base interface for model search criteria.
 */
export interface ISearchCriteria {
    pageNumber?: number;
    pageSize?: number;
}
/**
 * Extends base search criteria with date range.
 */
export interface IDateRangeSearchCriteria extends ISearchCriteria {
    startDate?: Date;
    endDate?: Date;
}
/**
 * Base interface for model search results.
 */
export interface ISearchResults<T> {
    numResults: number;
    results: T[];
}
/**
 * Node in a tree structure.
 */
export interface ITreeNode {
    token: string;
    name: string;
    icon?: string;
    children?: ITreeNode[];
}
/**
 * Interface for location information.
 */
export interface ILocation {
    latitude: number;
    longitude: number;
    elevation: number;
}
/**
 * Create query string parameters for paging attributes of criteria.
 * @param criteria
 */
export declare function createPagingQuery(criteria: ISearchCriteria): string;
/**
 * Create query string parameters for paging attributes of criteria.
 * @param criteria
 */
export declare function createDateRangeQuery(criteria: IDateRangeSearchCriteria): string;
