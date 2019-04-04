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

```npm install --save sitewhere-rest-api```

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
