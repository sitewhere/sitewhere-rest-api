import { Auth, API } from "../index";
import { AxiosInstance, AxiosPromise } from "axios";
import { IAreaTypeCreateRequest, IAreaType } from "../model/area-types-model";

import { expect } from "chai";
import "mocha";

// Create Axios instance with basic auth.
let axios: AxiosInstance = Auth.createBasicAuthRequestForCredentials(
  "http://localhost:8080/sitewhere/api",
  "admin",
  "password"
);

// Build area type create request.
let request: IAreaTypeCreateRequest = {
  name: "area51",
  description: "Area 51",
  containedAreaTypeTokens: []
};

describe("Create area type", () => {
  it("should return area type", async () => {
    let promise: AxiosPromise<IAreaType> = API.AreaTypes.createAreaType(
      axios,
      request
    );
    const result = await promise;
    expect(result).to.equal("promise resolved");
  });
});
