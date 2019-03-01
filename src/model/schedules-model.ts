import {
  IPersistentEntityCreateRequest,
  IPersistentEntity,
  ISearchCriteria,
  ISearchResults,
  IResponseFormat
} from "./common-model";

/**
 * Enumeration of trigger types.
 */
export enum TriggerType {
  SimpleTrigger = "SimpleTrigger",
  CronTrigger = "CronTrigger"
}

/**
 * Used to create or update a schedule.
 */
export interface IScheduleCreateRequest extends IPersistentEntityCreateRequest {
  name: string;
  triggerType: TriggerType;
  triggerConfiguration: { [id: string]: string };
  startDate: Date;
  endDate: Date;
}

/**
 * Schedule information.
 */
export interface ISchedule extends IPersistentEntity {
  name: string;
  triggerType: TriggerType;
  triggerConfiguration: { [id: string]: string };
  startDate: Date;
  endDate: Date;
}

/**
 * Response format for schedule records.
 */
export interface IScheduleResponseFormat extends IResponseFormat {}

/**
 * Search criteria for schedules.
 */
export interface IScheduleSearchCriteria extends ISearchCriteria {}

/**
 * Search results for schedules.
 */
export interface IScheduleSearchResults extends ISearchResults<ISchedule> {}
