import { AxiosInstance, AxiosPromise } from "axios";
/**
 * Perform a REST get call.
 *
 * @param axios
 * @param path
 */
export declare function restAuthGet<T>(axios: AxiosInstance, path: string): AxiosPromise<T>;
/**
 * Perform a REST post call.
 *
 * @param axios
 * @param path
 * @param payload
 */
export declare function restAuthPost<T>(axios: AxiosInstance, path: string, payload: any): AxiosPromise<T>;
/**
 * Perform a REST post call with progress monitoring.
 *
 * @param axios
 * @param path
 * @param payload
 * @param callback
 */
export declare function restAuthPostWithProgress<T>(axios: AxiosInstance, path: string, payload: string, callback: any): AxiosPromise<T>;
/**
 * Perform a REST put call.
 *
 * @param axios
 * @param path
 * @param payload
 */
export declare function restAuthPut<T>(axios: AxiosInstance, path: string, payload: any): AxiosPromise<T>;
/**
 * Perform a REST delete call.
 *
 * @param axios
 * @param path
 */
export declare function restAuthDelete<T>(axios: AxiosInstance, path: string): AxiosPromise<T>;
/**
 * Add a filter onto an existing query.
 * @param query
 * @param criteria
 * @param parameter
 */
export declare function addFilter(criteria: boolean | undefined, parameter: string): string;
/**
 * Add a filter onto an existing query.
 * @param query
 * @param criteria
 * @param parameter
 */
export declare function addStringFilter(value: string | undefined, parameter: string): string;
/**
 * Add date filter to an existing query.
 * @param value
 * @param parameter
 */
export declare function addDateFilter(value: Date | undefined, parameter: string): string;
/**
 * Generate a query with a random seed value to prevent caching.
 */
export declare function randomSeedQuery(): string;
