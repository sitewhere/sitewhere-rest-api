import * as Authentication from "./auth";
import * as AreaTypesApi from "./api/area-types-api";
import * as AreasApi from "./api/areas-api";
import * as AssetTypesApi from "./api/asset-types-api";
import * as AssetsApi from "./api/assets-api";
import * as BatchOperationsApi from "./api/batch-operations-api";
import * as CustomerTypesApi from "./api/customer-types-api";
import * as CustomersApi from "./api/customers-api";
import * as DeviceAssignmentsApi from "./api/device-assignments-api";
import * as DeviceCommandsApi from "./api/device-commands-api";
import * as DeviceGroupsApi from "./api/device-groups-api";
import * as DeviceStatesApi from "./api/device-states-api";
import * as DeviceStatusesApi from "./api/device-statuses-api";
import * as DeviceTypesApi from "./api/device-types-api";
import * as DevicesApi from "./api/devices-api";
import * as InstanceApi from "./api/instance-api";
import * as SchedulesApi from "./api/schedules-api";
import * as ScriptingApi from "./api/scripting-api";
import * as TenantsApi from "./api/tenants-api";
import * as UsersApi from "./api/users-api";
import * as ZonesApi from "./api/zones-api";

/** Export authentication functions */
export const Auth = Authentication;

/** Export core APIs */
export const API = {
  AreaTypes: AreaTypesApi,
  Areas: AreasApi,
  AssetTypes: AssetTypesApi,
  Assets: AssetsApi,
  BatchOperations: BatchOperationsApi,
  CustomerTypes: CustomerTypesApi,
  Customers: CustomersApi,
  DeviceAssignments: DeviceAssignmentsApi,
  DeviceCommands: DeviceCommandsApi,
  DeviceGroups: DeviceGroupsApi,
  DeviceStates: DeviceStatesApi,
  DeviceStatuses: DeviceStatusesApi,
  DeviceTypes: DeviceTypesApi,
  Devices: DevicesApi,
  Instance: InstanceApi,
  Schedules: SchedulesApi,
  Scripting: ScriptingApi,
  Tenants: TenantsApi,
  Users: UsersApi,
  Zones: ZonesApi
};

import * as JwtApi from "./authapi/jwt-api";

/** Export authentication APIs */
export const AuthAPI = {
  Jwt: JwtApi
};

/** Export object model */
export * from "./model/area-types-model";
export * from "./model/areas-model";
export * from "./model/asset-types-model";
export * from "./model/assets-model";
export * from "./model/batch-operations-model";
export * from "./model/common-model";
export * from "./model/customer-types-model";
export * from "./model/customers-model";
export * from "./model/device-assignments-model";
export * from "./model/device-commands-model";
export * from "./model/device-events-model";
export * from "./model/device-groups-model";
export * from "./model/device-states-model";
export * from "./model/device-statuses-model";
export * from "./model/device-types-model";
export * from "./model/devices-model";
export * from "./model/instance-model";
export * from "./model/schedules-model";
export * from "./model/scripting-model";
export * from "./model/tenants-model";
export * from "./model/users-model";
export * from "./model/zones-model";
