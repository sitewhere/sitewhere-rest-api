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
export declare const Auth: typeof Authentication;
/** Export core APIs */
export declare const API: {
    AreaTypes: typeof AreaTypesApi;
    Areas: typeof AreasApi;
    AssetTypes: typeof AssetTypesApi;
    Assets: typeof AssetsApi;
    BatchOperations: typeof BatchOperationsApi;
    CustomerTypes: typeof CustomerTypesApi;
    Customers: typeof CustomersApi;
    DeviceAssignments: typeof DeviceAssignmentsApi;
    DeviceCommands: typeof DeviceCommandsApi;
    DeviceGroups: typeof DeviceGroupsApi;
    DeviceStates: typeof DeviceStatesApi;
    DeviceStatuses: typeof DeviceStatusesApi;
    DeviceTypes: typeof DeviceTypesApi;
    Devices: typeof DevicesApi;
    Instance: typeof InstanceApi;
    Schedules: typeof SchedulesApi;
    Scripting: typeof ScriptingApi;
    Tenants: typeof TenantsApi;
    Users: typeof UsersApi;
    Zones: typeof ZonesApi;
};
import * as JwtApi from "./authapi/jwt-api";
/** Export authentication APIs */
export declare const AuthAPI: {
    Jwt: typeof JwtApi;
};
