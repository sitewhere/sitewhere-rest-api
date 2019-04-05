# SiteWhere REST API

The [SiteWhere](https://sitewhere.io/) REST API library provides a complete
TypeScript implementation of the core SiteWhere object model along with comprehensive
support for accessing all system functionality via strongly-typed APIs. This
means you get syntax completion for all core SiteWhere APIs including the
objects passed to and received from the interactions when using editors such
as Visual Studio Code.

The SiteWhere REST APIs are packaged as a Node.js module and are available
via NPM (https://www.npmjs.com/package/sitewhere-rest-api). Install the APIs
into an existing Node-enabled project by issuing the following command:

`npm install --save sitewhere-rest-api`

After installation, the API elements may be imported individually along with
various parts of the object model. For instance, the code below authenticates
with the SiteWhere server to get a JWT, then sends an authenticated call for
creating a device on the default tenant:

```typescript
import * as SiteWhere from "sitewhere-rest-api";
import { AxiosResponse, AxiosInstance } from "axios";
import { IDeviceCreateRequest, IDevice } from "sitewhere-rest-api";

async function createDevice() {
  // Create Axios instance with basic auth for getting JWT.
  let auth: AxiosInstance = SiteWhere.Auth.createBasicAuthRequestForCredentials(
    "http://localhost:8080/sitewhere/authapi",
    "admin",
    "password"
  );

  // Extract JWT.
  let jwtResp: AxiosResponse<any> = await SiteWhere.AuthAPI.Jwt.getJwt(auth);
  let jwt: string = jwtResp.headers["x-sitewhere-jwt"];

  // Create Axios instance with JWT and tenant auth information.
  let axios: AxiosInstance = SiteWhere.Auth.createJwtRequest(
    "http://localhost:8080/sitewhere/api",
    jwt,
    "default",
    "sitewhere01234567890"
  );

  // Create request for new device.
  let request: IDeviceCreateRequest = {
    deviceTypeToken: "ipad",
    token: "123-TEST-4989485938",
    comments: "Created via REST API"
  };

  // Send device create message and use response.
  let resp: AxiosResponse<IDevice> = await SiteWhere.API.Devices.createDevice(
    axios,
    request
  );
  let device: IDevice = resp.data;
  console.log(`Created ${device.token} on ${device.createdDate}`);
}

createDevice();
```

## Getting a JSON Web Token for Authentication

In order to use any of the SiteWhere APIs, a JWT must first be obtained using
HTTP basic authentication to establish the identity of a system user making
the call. The logic below obtains a JWT for user `admin` with password
`password`. The JWT has a limited lifetime which is determined on the
SiteWhere server that issues it. New JWTs may be obtained at any time since
there is little-or-no server overhead for creating new ones.

```typescript
// Create Axios instance with basic auth for getting JWT.
let auth: AxiosInstance = SiteWhere.Auth.createBasicAuthRequestForCredentials(
  "http://localhost:8080/sitewhere/authapi",
  "admin",
  "password"
);

// Extract JWT.
let jwtResp: AxiosResponse<any> = await SiteWhere.AuthAPI.Jwt.getJwt(auth);
let jwt: string = jwtResp.headers["x-sitewhere-jwt"];
```

Note that since the code uses `await`, this block would need to be nested
in an `async` function. As an alternative, standard promise-based access
is also supported.

## Issuing API Calls for Specific Tenants

Since SiteWhere is a multitenant system, API calls must specify the tenant
and associated authentication token in order to access the tenant-specific APIs.
Before issuing API calls, create an Axios context. The example shown below
will access the `default` tenant with authentication token `sitewhere0123456789`:

```typescript
// Create Axios instance with JWT and tenant auth information.
let axios: AxiosInstance = SiteWhere.Auth.createJwtRequest(
  "http://localhost:8080/sitewhere/api",
  jwt,
  "default",
  "sitewhere0123456789"
);
```

The same Axios context may be reused any number of times as long as the included
JWT is still valid. If accessing multiple tenants, a separate context should be
created for each tenant.
