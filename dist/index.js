(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios')) :
  typeof define === 'function' && define.amd ? define(['exports', 'axios'], factory) :
  (global = global || self, factory(global['sitewhere-rest-api'] = {}, global.axios));
}(this, function (exports, axios) { 'use strict';

  axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;

  /**
   * Create Axios request that uses basic authentication.
   * This version takes username and password to be encoded.
   * @param baseUrl
   * @param username
   * @param password
   */
  function createBasicAuthRequestForCredentials(baseUrl, username, password) {
      var encoded = btoa(username + ":" + password);
      return createBasicAuthRequest(baseUrl, encoded);
  }
  /**
   * Create Axios request that uses basic authentication.
   * @param baseUrl
   * @param encoded
   */
  function createBasicAuthRequest(baseUrl, encoded) {
      var config = {};
      config.baseURL = baseUrl;
      config.headers = {};
      config.headers["Authorization"] = "Basic " + encoded;
      return axios.create(config);
  }
  /**
   * Create call that uses JWT for authentication.
   * @param baseUrl
   * @param jwt
   * @param tenantId
   * @param tenantAuth
   */
  function createJwtRequest(baseUrl, jwt, tenantId, tenantAuth) {
      var config = {};
      config.baseURL = baseUrl;
      config.headers = {};
      if (jwt) {
          config.headers["Authorization"] = "Bearer " + jwt;
      }
      if (tenantId) {
          config.headers["X-SiteWhere-Tenant-Id"] = tenantId;
      }
      if (tenantAuth) {
          config.headers["X-SiteWhere-Tenant-Auth"] = tenantAuth;
      }
      return axios.create(config);
  }

  var Authentication = /*#__PURE__*/Object.freeze({
    createBasicAuthRequestForCredentials: createBasicAuthRequestForCredentials,
    createBasicAuthRequest: createBasicAuthRequest,
    createJwtRequest: createJwtRequest
  });

  /**
   * Create query string parameters for paging attributes of criteria.
   * @param criteria
   */
  function createPagingQuery(criteria) {
      return "&page=" + (criteria.pageNumber || 1) + "&pageSize=" + (criteria.pageSize ||
          100);
  }
  /**
   * Create query string parameters for paging attributes of criteria.
   * @param criteria
   */
  function createDateRangeQuery(criteria) {
      return "&page=" + (criteria.pageNumber || 1) + "&pageSize=" + (criteria.pageSize || 0);
  }

  /**
   * Perform a REST get call.
   *
   * @param axios
   * @param path
   */
  function restAuthGet(axios, path) {
      return axios.get(path);
  }
  /**
   * Perform a REST post call.
   *
   * @param axios
   * @param path
   * @param payload
   */
  function restAuthPost(axios, path, payload) {
      return axios.post(path, payload);
  }
  /**
   * Perform a REST put call.
   *
   * @param axios
   * @param path
   * @param payload
   */
  function restAuthPut(axios, path, payload) {
      return axios.put(path, payload);
  }
  /**
   * Perform a REST delete call.
   *
   * @param axios
   * @param path
   */
  function restAuthDelete(axios, path) {
      return axios.delete(path);
  }
  /**
   * Add a filter onto an existing query.
   * @param query
   * @param criteria
   * @param parameter
   */
  function addFilter(criteria, parameter) {
      if (criteria) {
          return "&" + parameter + "=true";
      }
      else {
          return "&" + parameter + "=false";
      }
  }
  /**
   * Add a filter onto an existing query.
   * @param query
   * @param criteria
   * @param parameter
   */
  function addStringFilter(value, parameter) {
      if (value) {
          return "&" + parameter + "=" + value;
      }
      return "";
  }
  /**
   * Generate a query with a random seed value to prevent caching.
   */
  function randomSeedQuery() {
      var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
          var r = crypto.getRandomValues(new Uint8Array(1))[0] % 16 | 0;
          var v = c === "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
      });
      return "?rnd=" + uuid;
  }

  /**
   * Create a new area type.
   * @param axios
   * @param request
   */
  function createAreaType(axios, request) {
      return restAuthPost(axios, "areatypes", request);
  }
  /**
   * Get an area type by unique token.
   * @param axios
   * @param token
   * @param format
   */
  function getAreaType(axios, token, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeContainedAreaTypes, "includeContainedAreaTypes");
      }
      return restAuthGet(axios, "areatypes/" + token + query);
  }
  /**
   * Update an existing area type.
   * @param axios
   * @param token
   * @param request
   */
  function updateAreaType(axios, token, request) {
      return restAuthPut(axios, "areatypes/" + token, request);
  }
  /**
   * List area types that match the given criteria.
   * @param axios
   * @param criteria
   * @param format
   */
  function listAreaTypes(axios, criteria, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeContainedAreaTypes, "includeContainedAreaTypes");
      }
      if (criteria) {
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "areatypes" + query);
  }
  /**
   * Delete an existing area type.
   * @param axios
   * @param token
   */
  function deleteAreaType(axios, token) {
      return restAuthDelete(axios, "areatypes/" + token);
  }

  var AreaTypesApi = /*#__PURE__*/Object.freeze({
    createAreaType: createAreaType,
    getAreaType: getAreaType,
    updateAreaType: updateAreaType,
    listAreaTypes: listAreaTypes,
    deleteAreaType: deleteAreaType
  });

  /**
   * Create a new area.
   * @param axios
   * @param request
   */
  function createArea(axios, request) {
      return restAuthPost(axios, "areas", request);
  }
  /**
   * Get an area by unique token.
   * @param axios
   * @param token
   * @param format
   */
  function getArea(axios, token, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeAreaType, "includeAreaType");
          query += addFilter(format.includeAssignments, "includeAssignments");
          query += addFilter(format.includeZones, "includeZones");
      }
      return restAuthGet(axios, "areas/" + token + query);
  }
  /**
   * Update an existing area.
   * @param axios
   * @param token
   * @param request
   */
  function updateArea(axios, token, request) {
      return restAuthPut(axios, "areas/" + token, request);
  }
  /**
   * List areas that match the given criteria.
   * @param axios
   * @param criteria
   * @param format
   */
  function listAreas(axios, criteria, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeAreaType, "includeAreaType");
          query += addFilter(format.includeAssignments, "includeAssignments");
          query += addFilter(format.includeZones, "includeZones");
      }
      if (criteria) {
          query += addFilter(criteria.rootOnly, "rootOnly");
          query += addStringFilter(criteria.parentAreaToken, "parentAreaToken");
          query += addStringFilter(criteria.areaTypeToken, "areaTypeToken");
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "areas" + query);
  }
  /**
   * Get all areas as a tree structure.
   * @param axios
   */
  function getAreasTree(axios) {
      var query = randomSeedQuery();
      return restAuthGet(axios, "areas/tree" + query);
  }
  /**
   * Delete an existing area.
   * @param axios
   * @param token
   */
  function deleteArea(axios, token) {
      return restAuthDelete(axios, "areas/" + token);
  }
  /**
   * List assignments associated with an area.
   * @param axios
   * @param token
   * @param criteria
   * @param format
   */
  function listAssignmentsForArea(axios, token, criteria, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeDevice, "includeDevice");
          query += addFilter(format.includeCustomer, "includeCustomer");
          query += addFilter(format.includeArea, "includeArea");
          query += addFilter(format.includeAsset, "includeAsset");
      }
      if (criteria) {
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "areas/" + token + "/assignments" + query);
  }
  /**
   * List measurement events associated with area.
   * @param axios
   * @param token
   * @param criteria
   */
  function listMeasurementsForArea(axios, token, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "areas/" + token + "/measurements" + query);
  }
  /**
   * List location events associated with area.
   * @param axios
   * @param token
   * @param criteria
   */
  function listLocationsForArea(axios, token, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "areas/" + token + "/locations" + query);
  }
  /**
   * List alert events associated with area.
   * @param axios
   * @param token
   * @param criteria
   */
  function listAlertsForArea(axios, token, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "areas/" + token + "/alerts" + query);
  }

  var AreasApi = /*#__PURE__*/Object.freeze({
    createArea: createArea,
    getArea: getArea,
    updateArea: updateArea,
    listAreas: listAreas,
    getAreasTree: getAreasTree,
    deleteArea: deleteArea,
    listAssignmentsForArea: listAssignmentsForArea,
    listMeasurementsForArea: listMeasurementsForArea,
    listLocationsForArea: listLocationsForArea,
    listAlertsForArea: listAlertsForArea
  });

  /**
   * Create a new asset type.
   * @param axios
   * @param request
   */
  function createAssetType(axios, request) {
      return restAuthPost(axios, "assettypes", request);
  }
  /**
   * Get an asset type by unique token.
   * @param axios
   * @param token
   * @param format
   */
  function getAssetType(axios, token, format) {
      var query = randomSeedQuery();
      return restAuthGet(axios, "assettypes/" + token + query);
  }
  /**
   * Update an existing asset type.
   * @param axios
   * @param token
   * @param request
   */
  function updateAssetType(axios, token, request) {
      return restAuthPut(axios, "assettypes/" + token, request);
  }
  /**
   * List asset types that match the given criteria.
   * @param axios
   * @param criteria
   * @param format
   */
  function listAssetTypes(axios, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "assettypes" + query);
  }
  /**
   * Delete an existing asset type.
   * @param axios
   * @param token
   */
  function deleteAssetType(axios, token) {
      return restAuthDelete(axios, "assettypes/" + token);
  }

  var AssetTypesApi = /*#__PURE__*/Object.freeze({
    createAssetType: createAssetType,
    getAssetType: getAssetType,
    updateAssetType: updateAssetType,
    listAssetTypes: listAssetTypes,
    deleteAssetType: deleteAssetType
  });

  /**
   * Create a new asset.
   * @param axios
   * @param request
   */
  function createAsset(axios, request) {
      return restAuthPost(axios, "assets", request);
  }
  /**
   * Get an asset by unique token.
   * @param axios
   * @param token
   * @param format
   */
  function getAsset(axios, token, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeAssetType, "includeAssetType");
      }
      return restAuthGet(axios, "assets/" + token + query);
  }
  /**
   * Update an existing asset.
   * @param axios
   * @param token
   * @param request
   */
  function updateAsset(axios, token, request) {
      return restAuthPut(axios, "assets/" + token, request);
  }
  /**
   * List assets that match the given criteria.
   * @param axios
   * @param criteria
   * @param format
   */
  function listAssets(axios, criteria, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeAssetType, "includeAssetType");
      }
      if (criteria) {
          query += addStringFilter(criteria.assetTypeToken, "assetTypeToken");
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "assets" + query);
  }
  /**
   * Delete an existing asset.
   * @param axios
   * @param token
   */
  function deleteAsset(axios, token) {
      return restAuthDelete(axios, "assets/" + token);
  }

  var AssetsApi = /*#__PURE__*/Object.freeze({
    createAsset: createAsset,
    getAsset: getAsset,
    updateAsset: updateAsset,
    listAssets: listAssets,
    deleteAsset: deleteAsset
  });

  /**
   * Get an batch operation by unique token.
   * @param axios
   * @param token
   * @param format
   */
  function getBatchOperation(axios, token, format) {
      return restAuthGet(axios, "batch/" + token);
  }
  /**
   * List batch operations that match the given criteria.
   * @param axios
   * @param criteria
   * @param format
   */
  function listBatchOperations(axios, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "batch" + query);
  }
  /**
   * List elements for a batch operation that match the given criteria.
   */
  function listBatchOperationElements(axios, token, criteria, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeDevice, "includeDevice");
      }
      if (criteria) {
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "batch/" + token + "/elements" + query);
  }
  /**
   * Create a batch command invocation.
   * @param axios
   * @param request
   */
  function createBatchCommandInvocation(axios, request) {
      return restAuthPost(axios, "batch/command", request);
  }
  /**
   * Create batch command invocations based on devices that match criteria.
   * @param axios
   * @param request
   */
  function createInvocationsByDeviceCriteria(axios, request) {
      return restAuthPost(axios, "batch/command/criteria/device", request);
  }
  /**
   * Create batch command invocations based on device assignments that match criteria.
   * @param axios
   * @param request
   */
  function createInvocationsByAssignmentCriteria(axios, request) {
      return restAuthPost(axios, "batch/command/criteria/assignment", request);
  }

  var BatchOperationsApi = /*#__PURE__*/Object.freeze({
    getBatchOperation: getBatchOperation,
    listBatchOperations: listBatchOperations,
    listBatchOperationElements: listBatchOperationElements,
    createBatchCommandInvocation: createBatchCommandInvocation,
    createInvocationsByDeviceCriteria: createInvocationsByDeviceCriteria,
    createInvocationsByAssignmentCriteria: createInvocationsByAssignmentCriteria
  });

  /**
   * Create a new customer type.
   * @param axios
   * @param request
   */
  function createCustomerType(axios, request) {
      return restAuthPost(axios, "customertypes", request);
  }
  /**
   * Get a customer type by unique token.
   * @param axios
   * @param token
   * @param format
   */
  function getCustomerType(axios, token, format) {
      var query = randomSeedQuery();
      return restAuthGet(axios, "customertypes/" + token + query);
  }
  /**
   * Update an existing customer type.
   * @param axios
   * @param token
   * @param request
   */
  function updateCustomerType(axios, token, request) {
      return restAuthPut(axios, "customertypes/" + token, request);
  }
  /**
   * List customer types that match the given criteria.
   * @param axios
   * @param criteria
   * @param format
   */
  function listCustomerTypes(axios, criteria, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeContainedCustomerTypes, "includeContainedCustomerTypes");
      }
      if (criteria) {
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "customertypes" + query);
  }
  /**
   * Delete an existing customer type.
   * @param axios
   * @param token
   */
  function deleteCustomerType(axios, token) {
      return restAuthDelete(axios, "customertypes/" + token);
  }

  var CustomerTypesApi = /*#__PURE__*/Object.freeze({
    createCustomerType: createCustomerType,
    getCustomerType: getCustomerType,
    updateCustomerType: updateCustomerType,
    listCustomerTypes: listCustomerTypes,
    deleteCustomerType: deleteCustomerType
  });

  /**
   * Create a new customer.
   * @param axios
   * @param request
   */
  function createCustomer(axios, request) {
      return restAuthPost(axios, "customers", request);
  }
  /**
   * Get a customer by unique token.
   * @param axios
   * @param token
   */
  function getCustomer(axios, token, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeCustomerType, "includeCustomerType");
          query += addFilter(format.includeParentCustomer, "includeParentCustomer");
      }
      return restAuthGet(axios, "customers/" + token + query);
  }
  /**
   * Update an existing customer.
   * @param axios
   * @param token
   * @param request
   */
  function updateCustomer(axios, token, request) {
      return restAuthPut(axios, "customers/" + token, request);
  }
  /**
   * List customers that match the given criteria.
   * @param axios
   * @param criteria
   * @param format
   */
  function listCustomers(axios, criteria, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeCustomerType, "includeCustomerType");
      }
      if (criteria) {
          query += addFilter(criteria.rootOnly, "rootOnly");
          query += addStringFilter(criteria.parentCustomerToken, "parentCustomerToken");
          query += addStringFilter(criteria.customerTypeToken, "customerTypeToken");
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "customers" + query);
  }
  /**
   * Get all customers as a tree structure.
   * @param axios
   */
  function getCustomersTree(axios) {
      var query = randomSeedQuery();
      return restAuthGet(axios, "customers/tree" + query);
  }
  /**
   * Delete an existing customer.
   * @param axios
   * @param token
   */
  function deleteCustomer(axios, token) {
      return restAuthDelete(axios, "customers/" + token);
  }
  /**
   * List assignments associated with a customer.
   * @param axios
   * @param token
   * @param criteria
   * @param format
   */
  function listAssignmentsForCustomer(axios, token, criteria, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeDevice, "includeDevice");
          query += addFilter(format.includeCustomer, "includeCustomer");
          query += addFilter(format.includeArea, "includeArea");
          query += addFilter(format.includeAsset, "includeAsset");
      }
      if (criteria) {
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "customers/" + token + "/assignments" + query);
  }
  /**
   * List measurement events associated with customer.
   * @param axios
   * @param token
   * @param criteria
   * @param format
   */
  function listMeasurementsForCustomer(axios, token, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "customers/" + token + "/measurements" + query);
  }
  /**
   * List location events associated with customer.
   * @param axios
   * @param token
   * @param criteria
   * @param format
   */
  function listLocationsForCustomer(axios, token, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "customers/" + token + "/locations" + query);
  }
  /**
   * List alert events associated with customer.
   * @param axios
   * @param token
   * @param criteria
   * @param format
   */
  function listAlertsForCustomer(axios, token, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "customers/" + token + "/alerts" + query);
  }

  var CustomersApi = /*#__PURE__*/Object.freeze({
    createCustomer: createCustomer,
    getCustomer: getCustomer,
    updateCustomer: updateCustomer,
    listCustomers: listCustomers,
    getCustomersTree: getCustomersTree,
    deleteCustomer: deleteCustomer,
    listAssignmentsForCustomer: listAssignmentsForCustomer,
    listMeasurementsForCustomer: listMeasurementsForCustomer,
    listLocationsForCustomer: listLocationsForCustomer,
    listAlertsForCustomer: listAlertsForCustomer
  });

  /**
   * Create a new device assignment.
   * @param axios
   * @param request
   */
  function createDeviceAssignment(axios, request) {
      return restAuthPost(axios, "assignments", request);
  }
  /**
   * Get a device assignment by unique token.
   * @param axios
   * @param token
   * @param format
   */
  function getDeviceAssignment(axios, token, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeArea, "includeArea");
          query += addFilter(format.includeAsset, "includeAsset");
          query += addFilter(format.includeCustomer, "includeCustomer");
          query += addFilter(format.includeDevice, "includeDevice");
      }
      return restAuthGet(axios, "assignments/" + token + query);
  }
  /**
   * Update an existing device assignment.
   * @param axios
   * @param deviceTypeToken
   * @param request
   */
  function updateDeviceAssignment(axios, token, request) {
      return restAuthPut(axios, "assignments/" + token, request);
  }
  /**
   * List device assignments that match the given criteria.
   * @param axios
   * @param criteria
   * @param format
   */
  function listDeviceAssignments(axios, criteria, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeDevice, "includeDevice");
          query += addFilter(format.includeCustomer, "includeCustomer");
          query += addFilter(format.includeArea, "includeArea");
          query += addFilter(format.includeAsset, "includeAsset");
      }
      if (criteria) {
          query += addStringFilter(criteria.areaToken, "areaToken");
          query += addStringFilter(criteria.assetToken, "assetToken");
          query += addStringFilter(criteria.customerToken, "customerToken");
          query += addStringFilter(criteria.deviceToken, "deviceToken");
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "assignments" + query);
  }
  /**
   * Perform an advanced search on device assignments.
   * @param axios
   * @param criteria
   * @param format
   */
  function searchDeviceAssignments(axios, criteria, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeDevice, "includeDevice");
          query += addFilter(format.includeCustomer, "includeCustomer");
          query += addFilter(format.includeArea, "includeArea");
          query += addFilter(format.includeAsset, "includeAsset");
      }
      return restAuthPost(axios, "assignments/search" + query, criteria);
  }
  /**
   * Delete an existing device assignment.
   * @param axios
   * @param token
   */
  function deleteDeviceAssignment(axios, token) {
      return restAuthDelete(axios, "assignments/" + token);
  }
  /**
   * Release an active device assignment.
   * @param axios
   * @param token
   */
  function releaseDeviceAssignment(axios, token) {
      return restAuthPost(axios, "assignments/" + token + "/end", null);
  }
  /**
   * Mark a device assignment as missing.
   * @param axios
   * @param token
   */
  function missingDeviceAssignment(axios, token) {
      return restAuthPost(axios, "assignments/" + token + "/missing", null);
  }
  /**
   * Create measurement for a device assignment.
   * @param axios
   * @param token
   * @param request
   */
  function createMeasurementForAssignment(axios, token, request) {
      return restAuthPost(axios, "assignments/" + token + "/measurements", request);
  }
  /**
   * List measurements for assignment based on criteria.
   * @param axios
   * @param token
   * @param criteria
   * @param format
   */
  function listMeasurementsForAssignment(axios, token, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createDateRangeQuery(criteria);
      }
      return restAuthGet(axios, "assignments/" + token + "/measurements" + query);
  }
  /**
   * List measurements for assignment in chart series format.
   * @param axios
   * @param token
   * @param criteria
   * @param format
   */
  function listMeasurementsForAssignmentAsChartSeries(axios, token, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createDateRangeQuery(criteria);
      }
      return restAuthGet(axios, "assignments/" + token + "/measurements/series" + query);
  }
  /**
   * List measurements for multiple assignments based on criteria.
   * @param axios
   * @param bulk
   * @param criteria
   * @param format
   */
  function listBulkMeasurementsForAssignment(axios, bulk, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createDateRangeQuery(criteria);
      }
      return restAuthPost(axios, "/assignments/bulk/measurements" + query, bulk);
  }
  /**
   * List measurements for multiple assignments in chart series format.
   * @param axios
   * @param bulk
   * @param criteria
   * @param format
   */
  function listBulkMeasurementsForAssignmentAsChartSeries(axios, bulk, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createDateRangeQuery(criteria);
      }
      return restAuthPost(axios, "/assignments/bulk/measurements/series" + query, bulk);
  }
  /**
   * Create location for a device assignment.
   * @param axios
   * @param token
   * @param request
   */
  function createLocationForAssignment(axios, token, request) {
      return restAuthPost(axios, "assignments/" + token + "/locations", request);
  }
  /**
   * List locations for assignment based on criteria.
   * @param axios
   * @param token
   * @param criteria
   * @param format
   */
  function listLocationsForAssignment(axios, token, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createDateRangeQuery(criteria);
      }
      return restAuthGet(axios, "assignments/" + token + "/locations" + query);
  }
  /**
   * List locations for multiple assignments based on criteria.
   * @param axios
   * @param bulk
   * @param criteria
   * @param format
   */
  function listBulkLocationsForAssignment(axios, bulk, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createDateRangeQuery(criteria);
      }
      return restAuthPost(axios, "/assignments/bulk/locations" + query, bulk);
  }
  /**
   * Create alert for a device assignment.
   * @param axios
   * @param token
   * @param request
   */
  function createAlertForAssignment(axios, token, request) {
      return restAuthPost(axios, "assignments/" + token + "/alerts", request);
  }
  /**
   * List alerts for assignment based on criteria.
   * @param axios
   * @param token
   * @param criteria
   * @param format
   */
  function listAlertsForAssignment(axios, token, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createDateRangeQuery(criteria);
      }
      return restAuthGet(axios, "assignments/" + token + "/alerts" + query);
  }
  /**
   * List alerts for multiple assignments based on criteria.
   * @param axios
   * @param bulk
   * @param criteria
   * @param format
   */
  function listBulkAlertsForAssignment(axios, bulk, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createDateRangeQuery(criteria);
      }
      return restAuthPost(axios, "/assignments/bulk/alerts" + query, bulk);
  }
  /**
   * Create command invocation for a device assignment.
   * @param axios
   * @param token
   * @param request
   */
  function createCommandInvocationForAssignment(axios, token, request) {
      return restAuthPost(axios, "assignments/" + token + "/invocations", request);
  }
  /**
   * Schedule the creation of a command invocation for a future time.
   * @param axios
   * @param assignmentToken
   * @param scheduleToken
   * @param request
   */
  function scheduleCommandInvocationForAssignment(axios, assignmentToken, scheduleToken, request) {
      return restAuthPost(axios, "assignments/" + assignmentToken + "/invocations/schedules/" + scheduleToken, request);
  }
  /**
   * List command invocations for assignment based on criteria.
   * @param axios
   * @param token
   * @param criteria
   * @param format
   */
  function listCommandInvocationsForAssignment(axios, token, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createDateRangeQuery(criteria);
      }
      return restAuthGet(axios, "assignments/" + token + "/invocations" + query);
  }
  /**
   * List command invocations for multiple assignments based on criteria.
   * @param axios
   * @param bulk
   * @param criteria
   * @param format
   */
  function listBulkCommandInvocationsForAssignment(axios, bulk, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createDateRangeQuery(criteria);
      }
      return restAuthPost(axios, "/assignments/bulk/invocations" + query, bulk);
  }
  /**
   * Create command response for a device assignment.
   * @param axios
   * @param token
   * @param request
   */
  function createCommandResponseForAssignment(axios, token, request) {
      return restAuthPost(axios, "assignments/" + token + "/responses", request);
  }
  /**
   * List command responses for assignment based on criteria.
   * @param axios
   * @param token
   * @param criteria
   * @param format
   */
  function listCommandResponsesForAssignment(axios, token, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createDateRangeQuery(criteria);
      }
      return restAuthGet(axios, "assignments/" + token + "/responses" + query);
  }
  /**
   * List command responses for multiple assignments based on criteria.
   * @param axios
   * @param bulk
   * @param criteria
   * @param format
   */
  function listBulkCommandResponsesForAssignment(axios, bulk, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createDateRangeQuery(criteria);
      }
      return restAuthPost(axios, "/assignments/bulk/responses" + query, bulk);
  }
  /**
   * Create state change for a device assignment.
   * @param axios
   * @param token
   * @param request
   */
  function createStateChangeForAssignment(axios, token, request) {
      return restAuthPost(axios, "assignments/" + token + "/statechanges", request);
  }
  /**
   * List state changes for assignment based on criteria.
   * @param axios
   * @param token
   * @param criteria
   * @param format
   */
  function listStateChangesForAssignment(axios, token, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createDateRangeQuery(criteria);
      }
      return restAuthGet(axios, "assignments/" + token + "/statechanges" + query);
  }
  /**
   * List state changes for multiple assignments based on criteria.
   * @param axios
   * @param bulk
   * @param criteria
   * @param format
   */
  function listBulkStateChangesForAssignment(axios, bulk, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createDateRangeQuery(criteria);
      }
      return restAuthPost(axios, "/assignments/bulk/statechanges" + query, bulk);
  }

  var DeviceAssignmentsApi = /*#__PURE__*/Object.freeze({
    createDeviceAssignment: createDeviceAssignment,
    getDeviceAssignment: getDeviceAssignment,
    updateDeviceAssignment: updateDeviceAssignment,
    listDeviceAssignments: listDeviceAssignments,
    searchDeviceAssignments: searchDeviceAssignments,
    deleteDeviceAssignment: deleteDeviceAssignment,
    releaseDeviceAssignment: releaseDeviceAssignment,
    missingDeviceAssignment: missingDeviceAssignment,
    createMeasurementForAssignment: createMeasurementForAssignment,
    listMeasurementsForAssignment: listMeasurementsForAssignment,
    listMeasurementsForAssignmentAsChartSeries: listMeasurementsForAssignmentAsChartSeries,
    listBulkMeasurementsForAssignment: listBulkMeasurementsForAssignment,
    listBulkMeasurementsForAssignmentAsChartSeries: listBulkMeasurementsForAssignmentAsChartSeries,
    createLocationForAssignment: createLocationForAssignment,
    listLocationsForAssignment: listLocationsForAssignment,
    listBulkLocationsForAssignment: listBulkLocationsForAssignment,
    createAlertForAssignment: createAlertForAssignment,
    listAlertsForAssignment: listAlertsForAssignment,
    listBulkAlertsForAssignment: listBulkAlertsForAssignment,
    createCommandInvocationForAssignment: createCommandInvocationForAssignment,
    scheduleCommandInvocationForAssignment: scheduleCommandInvocationForAssignment,
    listCommandInvocationsForAssignment: listCommandInvocationsForAssignment,
    listBulkCommandInvocationsForAssignment: listBulkCommandInvocationsForAssignment,
    createCommandResponseForAssignment: createCommandResponseForAssignment,
    listCommandResponsesForAssignment: listCommandResponsesForAssignment,
    listBulkCommandResponsesForAssignment: listBulkCommandResponsesForAssignment,
    createStateChangeForAssignment: createStateChangeForAssignment,
    listStateChangesForAssignment: listStateChangesForAssignment,
    listBulkStateChangesForAssignment: listBulkStateChangesForAssignment
  });

  /**
   * List device commands that match the given criteria.
   * @param axios
   * @param criteria
   * @param format
   */
  function listDeviceCommands(axios, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += addStringFilter(criteria.deviceTypeToken, "deviceTypeToken");
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "commands" + query);
  }
  /**
   * List device commands that match the given criteria
   * and arrange them by namespace.
   * @param axios
   * @param criteria
   * @param format
   */
  function listDeviceCommandsForNamespace(axios, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += addStringFilter(criteria.deviceTypeToken, "deviceTypeToken");
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "commands/namespaces" + query);
  }

  var DeviceCommandsApi = /*#__PURE__*/Object.freeze({
    listDeviceCommands: listDeviceCommands,
    listDeviceCommandsForNamespace: listDeviceCommandsForNamespace
  });

  /**
   * Create a new device group.
   * @param axios
   * @param request
   */
  function createDeviceGroup(axios, request) {
      return restAuthPost(axios, "devicegroups", request);
  }
  /**
   * Get a device group by unique token.
   * @param axios
   * @param token
   * @param format
   */
  function getDeviceGroup(axios, token, format) {
      var query = randomSeedQuery();
      return restAuthGet(axios, "devicegroups/" + token + query);
  }
  /**
   * Update an existing device group.
   * @param axios
   * @param token
   * @param request
   */
  function updateDeviceGroup(axios, token, request) {
      return restAuthPut(axios, "devicegroups/" + token, request);
  }
  /**
   * List device groups that match the given criteria.
   * @param axios
   * @param criteria
   * @param format
   */
  function listDeviceGroups(axios, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += addStringFilter(criteria.role, "role");
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "devicegroups" + query);
  }
  /**
   * Delete an existing device group.
   * @param axios
   * @param token
   */
  function deleteDeviceGroup(axios, token) {
      return restAuthDelete(axios, "devicegroups/" + token);
  }
  /**
   * Add one or more elements to a device group.
   * @param axios
   * @param token
   * @param request
   */
  function createDeviceGroupElements(axios, token, request) {
      return restAuthPost(axios, "devicegroups/" + token + "/elements", request);
  }
  /**
   * List device group elements that match the given criteria.
   * @param axios
   * @param token
   * @param criteria
   * @param format
   */
  function listDeviceGroupElements(axios, token, criteria, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeDetails, "includeDetails");
      }
      if (criteria) {
          query += addStringFilter(criteria.deviceGroupToken, "groupToken");
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "devicegroups/" + token + "/elements" + query);
  }
  /**
   * Delete an existing device group element.
   * @param axios
   * @param token
   * @param elementId
   */
  function deleteDeviceGroupElement(axios, token, elementId) {
      return restAuthDelete(axios, "devicegroups/" + token + "/elements/" + elementId);
  }

  var DeviceGroupsApi = /*#__PURE__*/Object.freeze({
    createDeviceGroup: createDeviceGroup,
    getDeviceGroup: getDeviceGroup,
    updateDeviceGroup: updateDeviceGroup,
    listDeviceGroups: listDeviceGroups,
    deleteDeviceGroup: deleteDeviceGroup,
    createDeviceGroupElements: createDeviceGroupElements,
    listDeviceGroupElements: listDeviceGroupElements,
    deleteDeviceGroupElement: deleteDeviceGroupElement
  });

  /**
   * Search for device states that match the given criteria.
   * @param axios
   * @param criteria
   * @param format
   */
  function searchDeviceStates(axios, criteria, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeArea, "includeArea");
          query += addFilter(format.includeAsset, "includeAsset");
          query += addFilter(format.includeCustomer, "includeCustomer");
          query += addFilter(format.includeDevice, "includeDevice");
          query += addFilter(format.includeDeviceAssignment, "includeDeviceAssignment");
          query += addFilter(format.includeDeviceType, "includeDeviceType");
          query += addFilter(format.includeEventDetails, "includeEventDetails");
      }
      return restAuthPost(axios, "devicestates/search" + query, criteria);
  }

  var DeviceStatesApi = /*#__PURE__*/Object.freeze({
    searchDeviceStates: searchDeviceStates
  });

  /**
   * List device statuses that match the given criteria.
   * @param axios
   * @param criteria
   * @param format
   */
  function listDeviceStatuses(axios, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += addStringFilter(criteria.deviceTypeToken, "deviceTypeToken");
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "statuses" + query);
  }

  var DeviceStatusesApi = /*#__PURE__*/Object.freeze({
    listDeviceStatuses: listDeviceStatuses
  });

  /**
   * Create a new device type.
   * @param axios
   * @param request
   */
  function createDeviceType(axios, request) {
      return restAuthPost(axios, "devicetypes", request);
  }
  /**
   * Get a device type by unique token.
   * @param axios
   * @param token
   */
  function getDeviceType(axios, token, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeAsset, "includeAsset");
      }
      return restAuthGet(axios, "devicetypes/" + token + query);
  }
  /**
   * Update an existing device type.
   * @param axios
   * @param deviceTypeToken
   * @param request
   */
  function updateDeviceType(axios, deviceTypeToken, request) {
      return restAuthPut(axios, "devicetypes/" + deviceTypeToken, request);
  }
  /**
   * List device types that match the given criteria.
   * @param axios
   * @param criteria
   * @param format
   */
  function listDeviceTypes(axios, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "devicetypes" + query);
  }
  /**
   * Delete an existing device type.
   * @param axios
   * @param deviceTypeToken
   */
  function deleteDeviceType(axios, deviceTypeToken) {
      return restAuthDelete(axios, "devicetypes/" + deviceTypeToken);
  }
  /**
   * Create a new device command.
   * @param axios
   * @param deviceTypeToken
   * @param request
   */
  function createDeviceCommand(axios, deviceTypeToken, request) {
      return restAuthPost(axios, "devicetypes/" + deviceTypeToken + "/commands", request);
  }
  /**
   * Get a device command by unique token.
   * @param axios
   * @param deviceTypeToken
   * @param commandToken
   * @param format
   */
  function getDeviceCommand(axios, deviceTypeToken, commandToken, format) {
      var query = randomSeedQuery();
      return restAuthGet(axios, "devicetypes/" + deviceTypeToken + "/commands/" + commandToken + query);
  }
  /**
   * Update an existing device command.
   * @param axios
   * @param deviceTypeToken
   * @param commandToken
   * @param request
   */
  function updateDeviceCommand(axios, deviceTypeToken, commandToken, request) {
      return restAuthPut(axios, "devicetypes/" + deviceTypeToken + "/commands/" + commandToken, request);
  }
  /**
   * Delete an existing device command.
   * @param axios
   * @param deviceTypeToken
   * @param commandToken
   */
  function deleteDeviceCommand(axios, deviceTypeToken, commandToken) {
      return restAuthDelete(axios, "devicetypes/" + deviceTypeToken + "/commands/" + commandToken);
  }
  /**
   * Create a new device status.
   * @param axios
   * @param deviceTypeToken
   * @param request
   */
  function createDeviceStatus(axios, deviceTypeToken, request) {
      return restAuthPost(axios, "devicetypes/" + deviceTypeToken + "/statuses", request);
  }
  /**
   * Get a device status by unique token.
   * @param axios
   * @param deviceTypeToken
   * @param statusToken
   * @param format
   */
  function getDeviceStatus(axios, deviceTypeToken, statusToken, format) {
      var query = randomSeedQuery();
      return restAuthGet(axios, "devicetypes/" + deviceTypeToken + "/statuses/" + statusToken + query);
  }
  /**
   * Update an existing device status.
   * @param axios
   * @param deviceTypeToken
   * @param statusToken
   * @param request
   */
  function updateDeviceStatus(axios, deviceTypeToken, statusToken, request) {
      return restAuthPut(axios, "devicetypes/" + deviceTypeToken + "/statuses/" + statusToken, request);
  }
  /**
   * Delete an existing device status.
   * @param axios
   * @param deviceTypeToken
   * @param statusToken
   */
  function deleteDeviceStatus(axios, deviceTypeToken, statusToken) {
      return restAuthDelete(axios, "devicetypes/" + deviceTypeToken + "/statuses/" + statusToken);
  }

  var DeviceTypesApi = /*#__PURE__*/Object.freeze({
    createDeviceType: createDeviceType,
    getDeviceType: getDeviceType,
    updateDeviceType: updateDeviceType,
    listDeviceTypes: listDeviceTypes,
    deleteDeviceType: deleteDeviceType,
    createDeviceCommand: createDeviceCommand,
    getDeviceCommand: getDeviceCommand,
    updateDeviceCommand: updateDeviceCommand,
    deleteDeviceCommand: deleteDeviceCommand,
    createDeviceStatus: createDeviceStatus,
    getDeviceStatus: getDeviceStatus,
    updateDeviceStatus: updateDeviceStatus,
    deleteDeviceStatus: deleteDeviceStatus
  });

  /**
   * Create a new device.
   * @param axios
   * @param request
   */
  function createDevice(axios, request) {
      return restAuthPost(axios, "devices", request);
  }
  /**
   * Get a device by unique token.
   * @param axios
   * @param deviceToken
   */
  function getDevice(axios, token, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeDeviceType, "includeDeviceType");
          query += addFilter(format.includeAssignment, "includeAssignment");
      }
      return restAuthGet(axios, "devices/" + token + query);
  }
  /**
   * Update an existing device.
   * @param axios
   * @param deviceToken
   * @param request
   */
  function updateDevice(axios, deviceToken, request) {
      return restAuthPut(axios, "devices/" + deviceToken, request);
  }
  /**
   * List devices that match the given criteria.
   * @param axios
   * @param criteria
   * @param format
   */
  function listDevices(axios, criteria, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeDeviceType, "includeDeviceType");
          query += addFilter(format.includeAssignment, "includeAssignment");
      }
      if (criteria) {
          query += addFilter(criteria.excludeAssigned, "excludeAssigned");
          query += addStringFilter(criteria.deviceTypeToken, "deviceType");
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "devices" + query);
  }
  /**
   * Delete an existing device.
   * @param axios
   * @param deviceToken
   */
  function deleteDevice(axios, deviceToken) {
      return restAuthDelete(axios, "devices/" + deviceToken);
  }
  /**
   * List devices that match the given criteria.
   * @param axios
   * @param criteria
   * @param format
   */
  function listDeviceAssignmentHistory(axios, deviceToken, criteria, format) {
      var query = randomSeedQuery();
      if (format) {
          query += addFilter(format.includeDevice, "includeDevice");
          query += addFilter(format.includeCustomer, "includeCustomer");
          query += addFilter(format.includeArea, "includeArea");
          query += addFilter(format.includeAsset, "includeAsset");
      }
      if (criteria) {
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "devices/" + deviceToken + "/assignments" + query);
  }

  var DevicesApi = /*#__PURE__*/Object.freeze({
    createDevice: createDevice,
    getDevice: getDevice,
    updateDevice: updateDevice,
    listDevices: listDevices,
    deleteDevice: deleteDevice,
    listDeviceAssignmentHistory: listDeviceAssignmentHistory
  });

  /**
   * Get the currently effective instance configuration.
   * @param axios
   */
  function getInstanceConfiguration(axios) {
      return restAuthGet(axios, "instance/configuration");
  }
  /**
   * Update global instance configuration.
   * @param axios
   * @param request
   */
  function updateInstanceConfiguration(axios, request) {
      return restAuthPut(axios, "instance/configuration", request);
  }
  /**
   * Get a list of all microservices registered for instance.
   * @param axios
   */
  function getInstanceMicroservices(axios) {
      return restAuthGet(axios, "instance/microservices");
  }
  /**
   * Get configuration information for a tenant engine.
   * @param axios
   * @param functionalArea
   * @param tenant
   */
  function getTenantEngineConfiguration(axios, functionalArea, tenant) {
      return restAuthGet(axios, "instance/microservices/" + functionalArea + "/tenants/" + tenant + "/configuration");
  }
  /**
   * Update configuration information for a tenant engine.
   * @param axios
   * @param functionalArea
   * @param tenant
   * @param configuration
   */
  function updateTenantEngineConfiguration(axios, functionalArea, tenant, configuration) {
      return restAuthPost(axios, "instance/microservices/" + functionalArea + "/tenants/" + tenant + "/configuration", configuration);
  }

  var InstanceApi = /*#__PURE__*/Object.freeze({
    getInstanceConfiguration: getInstanceConfiguration,
    updateInstanceConfiguration: updateInstanceConfiguration,
    getInstanceMicroservices: getInstanceMicroservices,
    getTenantEngineConfiguration: getTenantEngineConfiguration,
    updateTenantEngineConfiguration: updateTenantEngineConfiguration
  });

  /**
   * Create a new schedule.
   * @param axios
   * @param request
   */
  function createSchedule(axios, request) {
      return restAuthPost(axios, "schedules", request);
  }
  /**
   * Get a schedule by unique token.
   * @param axios
   * @param token
   */
  function getSchedule(axios, token, format) {
      var query = randomSeedQuery();
      return restAuthGet(axios, "schedules/" + token + query);
  }
  /**
   * Update an existing schedule.
   * @param axios
   * @param token
   * @param request
   */
  function updateSchedule(axios, token, request) {
      return restAuthPut(axios, "schedules/" + token, request);
  }
  /**
   * List schedules that match the given criteria.
   * @param axios
   * @param criteria
   * @param format
   */
  function listSchedules(axios, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "schedules" + query);
  }
  /**
   * Delete an existing schedule.
   * @param axios
   * @param token
   */
  function deleteSchedule(axios, token) {
      return restAuthDelete(axios, "schedules/" + token);
  }

  var SchedulesApi = /*#__PURE__*/Object.freeze({
    createSchedule: createSchedule,
    getSchedule: getSchedule,
    updateSchedule: updateSchedule,
    listSchedules: listSchedules,
    deleteSchedule: deleteSchedule
  });

  /**
   * List script templates for a microservice by identifier.
   * @param axios
   * @param identifier
   */
  function listScriptTemplates(axios, identifier) {
      return restAuthGet(axios, "instance/microservice/" + identifier + "/scripting/templates");
  }
  /**
   * Get content for a script template.
   * @param axios
   * @param identifier
   * @param templateId
   */
  function getScriptTemplateContent(axios, identifier, templateId) {
      return restAuthGet(axios, "instance/microservice/" + identifier + "/scripting/templates/" + templateId);
  }
  /**
   * List metadata for scripts associated with a global microservice.
   * @param axios
   * @param identifier
   */
  function listGlobalScriptMetadata(axios, identifier) {
      return restAuthGet(axios, "instance/microservice/" + identifier + "/scripting/scripts");
  }
  /**
   * Get metadata for a global script.
   * @param axios
   * @param identifier
   * @param scriptId
   */
  function getGlobalScriptMetadata(axios, identifier, scriptId) {
      return restAuthGet(axios, "instance/microservice/" + identifier + "/scripting/scripts/" + scriptId);
  }
  /**
   * Create a global script.
   * @param axios
   * @param identifier
   * @param request
   */
  function createGlobalScript(axios, identifier, request) {
      return restAuthPost(axios, "instance/microservice/" + identifier + "/scripting/scripts", request);
  }
  /**
   * Get content for a global script.
   * @param axios
   * @param identifier
   * @param scriptId
   * @param versionId
   */
  function getGlobalScriptContent(axios, identifier, scriptId, versionId) {
      return restAuthGet(axios, "instance/microservice/" + identifier + "/scripting/scripts/" + scriptId + "/versions/" + versionId + "/content");
  }
  /**
   * Update an existing global script.
   * @param axios
   * @param identifier
   * @param scriptId
   * @param versionId
   * @param request
   */
  function updateGlobalScript(axios, identifier, scriptId, versionId, request) {
      return restAuthPost(axios, "instance/microservice/" + identifier + "/scripting/scripts/" + scriptId + "/versions/" + versionId, request);
  }
  /**
   * Clone an existing global script.
   * @param axios
   * @param identifier
   * @param scriptId
   * @param versionId
   * @param request
   */
  function cloneGlobalScript(axios, identifier, scriptId, versionId, request) {
      return restAuthPost(axios, "instance/microservice/" + identifier + "/scripting/scripts/" + scriptId + "/versions/" + versionId + "/clone", request);
  }
  /**
   * Activate a global script.
   * @param axios
   * @param identifier
   * @param scriptId
   * @param versionId
   */
  function activateGlobalScript(axios, identifier, scriptId, versionId) {
      return restAuthPost(axios, "instance/microservice/" + identifier + "/scripting/scripts/" + scriptId + "/versions/" + versionId + "/activate", null);
  }
  /**
   * Delete a global script and its version history.
   * @param axios
   * @param identifier
   * @param scriptId
   */
  function deleteGlobalScript(axios, identifier, scriptId) {
      return restAuthDelete(axios, "instance/microservice/" + identifier + "/scripting/scripts/" + scriptId);
  }
  /**
   * List metadata for microservice tenant scripts.
   * @param axios
   * @param identifier
   * @param tenantToken
   */
  function listTenantScriptMetadata(axios, identifier, tenantToken) {
      return restAuthGet(axios, "instance/microservice/" + identifier + "/tenants/" + tenantToken + "/scripting/scripts");
  }
  /**
   * Get metadata for a given microservice tenant script.
   * @param axios
   * @param identifier
   * @param tenantToken
   * @param scriptId
   */
  function getTenantScriptMetadata(axios, identifier, tenantToken, scriptId) {
      return restAuthGet(axios, "instance/microservice/" + identifier + "/tenants/" + tenantToken + "/scripting/scripts/" + scriptId);
  }
  /**
   * Create a new script for a microservice tenant.
   * @param axios
   * @param identifier
   * @param tenantToken
   * @param request
   */
  function createTenantScript(axios, identifier, tenantToken, request) {
      return restAuthPost(axios, "instance/microservice/" + identifier + "/tenants/" + tenantToken + "/scripting/scripts", request);
  }
  /**
   * Get content associated with a microservice tenant script.
   * @param axios
   * @param identifier
   * @param tenantToken
   * @param scriptId
   * @param versionId
   */
  function getTenantScriptContent(axios, identifier, tenantToken, scriptId, versionId) {
      return restAuthGet(axios, "instance/microservice/" + identifier + "/tenants/" + tenantToken + "/scripting/scripts/" + scriptId + "/versions/" + versionId + "/content");
  }
  /**
   * Update an existing microservice tenant script.
   * @param axios
   * @param identifier
   * @param tenantToken
   * @param scriptId
   * @param versionId
   * @param request
   */
  function updateTenantScript(axios, identifier, tenantToken, scriptId, versionId, request) {
      return restAuthPost(axios, "instance/microservice/" + identifier + "/tenants/" + tenantToken + "/scripting/scripts/" + scriptId + "/versions/" + versionId, request);
  }
  /**
   * Clone an existing microservice tenant script.
   * @param axios
   * @param identifier
   * @param tenantToken
   * @param scriptId
   * @param versionId
   * @param request
   */
  function cloneTenantScript(axios, identifier, tenantToken, scriptId, versionId, request) {
      return restAuthPost(axios, "instance/microservice/" + identifier + "/tenants/" + tenantToken + "/scripting/scripts/" + scriptId + "/versions/" + versionId + "/clone", request);
  }
  /**
   * Activate a given version of a microservice tenant script.
   * @param axios
   * @param identifier
   * @param tenantToken
   * @param scriptId
   * @param versionId
   */
  function activateTenantScript(axios, identifier, tenantToken, scriptId, versionId) {
      return restAuthPost(axios, "instance/microservice/" + identifier + "/tenants/" + tenantToken + "/scripting/scripts/" + scriptId + "/versions/" + versionId + "/activate", null);
  }
  /**
   * Delete a microservice tenant script and its version history.
   * @param axios
   * @param identifier
   * @param tenantToken
   * @param scriptId
   */
  function deleteTenantScript(axios, identifier, tenantToken, scriptId) {
      return restAuthDelete(axios, "instance/microservice/" + identifier + "/tenants/" + tenantToken + "/scripting/scripts/" + scriptId);
  }

  var ScriptingApi = /*#__PURE__*/Object.freeze({
    listScriptTemplates: listScriptTemplates,
    getScriptTemplateContent: getScriptTemplateContent,
    listGlobalScriptMetadata: listGlobalScriptMetadata,
    getGlobalScriptMetadata: getGlobalScriptMetadata,
    createGlobalScript: createGlobalScript,
    getGlobalScriptContent: getGlobalScriptContent,
    updateGlobalScript: updateGlobalScript,
    cloneGlobalScript: cloneGlobalScript,
    activateGlobalScript: activateGlobalScript,
    deleteGlobalScript: deleteGlobalScript,
    listTenantScriptMetadata: listTenantScriptMetadata,
    getTenantScriptMetadata: getTenantScriptMetadata,
    createTenantScript: createTenantScript,
    getTenantScriptContent: getTenantScriptContent,
    updateTenantScript: updateTenantScript,
    cloneTenantScript: cloneTenantScript,
    activateTenantScript: activateTenantScript,
    deleteTenantScript: deleteTenantScript
  });

  /**
   * Create a new tenant.
   * @param axios
   * @param request
   */
  function createTenant(axios, request) {
      return restAuthPost(axios, "tenants", request);
  }
  /**
   * Get a tenant by unique token.
   * @param axios
   * @param token
   * @param format
   */
  function getTenant(axios, token, format) {
      var query = randomSeedQuery();
      return restAuthGet(axios, "tenants/" + token + query);
  }
  /**
   * Update an existing tenant.
   * @param axios
   * @param token
   * @param request
   */
  function updateTenant(axios, token, request) {
      return restAuthPut(axios, "tenants/" + token, request);
  }
  /**
   * List tenants that match the given criteria.
   * @param axios
   * @param criteria
   * @param format
   */
  function listTenants(axios, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "tenants" + query);
  }
  /**
   * Delete an existing tenant.
   * @param axios
   * @param token
   */
  function deleteTenant(axios, token) {
      return restAuthDelete(axios, "tenants/" + token);
  }
  /**
   * List available tenant templates.
   * @param axios
   */
  function listTenantTemplates(axios) {
      return restAuthGet(axios, "tenants/templates");
  }
  /**
   * List available dataset templates.
   * @param axios
   */
  function listDatasetTemplates(axios) {
      return restAuthGet(axios, "tenants/datasets");
  }

  var TenantsApi = /*#__PURE__*/Object.freeze({
    createTenant: createTenant,
    getTenant: getTenant,
    updateTenant: updateTenant,
    listTenants: listTenants,
    deleteTenant: deleteTenant,
    listTenantTemplates: listTenantTemplates,
    listDatasetTemplates: listDatasetTemplates
  });

  /**
   * Create a new user.
   * @param axios
   * @param request
   */
  function createUser(axios, request) {
      return restAuthPost(axios, "users", request);
  }
  /**
   * Get a user by username.
   * @param axios
   * @param username
   * @param format
   */
  function getUser(axios, username, format) {
      var query = randomSeedQuery();
      return restAuthGet(axios, "users/" + username + query);
  }
  /**
   * Update an existing user.
   * @param axios
   * @param username
   * @param request
   */
  function updateUser(axios, username, request) {
      return restAuthPut(axios, "users/" + username, request);
  }
  /**
   * List users that match the given criteria.
   * @param axios
   * @param criteria
   * @param format
   */
  function listUsers(axios, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "users" + query);
  }
  /**
   * Delete an existing user.
   * @param axios
   * @param username
   */
  function deleteUser(axios, username) {
      return restAuthDelete(axios, "users/" + username);
  }
  /**
   * Get granted authorities associated with user.
   * @param axios
   * @param username
   */
  function getAuthoritiesForUsername(axios, username) {
      return restAuthGet(axios, "users/" + username + "/authorities");
  }
  /**
   * Get records representing granted authority hierarchy.
   * @param axios
   */
  function getAuthoritiesHierarchy(axios) {
      return restAuthGet(axios, "/authorities/hierarchy");
  }

  var UsersApi = /*#__PURE__*/Object.freeze({
    createUser: createUser,
    getUser: getUser,
    updateUser: updateUser,
    listUsers: listUsers,
    deleteUser: deleteUser,
    getAuthoritiesForUsername: getAuthoritiesForUsername,
    getAuthoritiesHierarchy: getAuthoritiesHierarchy
  });

  /**
   * Create a new zone.
   * @param axios
   * @param request
   */
  function createZone(axios, request) {
      return restAuthPost(axios, "zones", request);
  }
  /**
   * Get a zone by unique token.
   * @param axios
   * @param zoneToken
   */
  function getZone(axios, zoneToken) {
      return restAuthGet(axios, "zones/" + zoneToken);
  }
  /**
   * Update an existing zone.
   * @param axios
   * @param zoneToken
   * @param request
   */
  function updateZone(axios, zoneToken, request) {
      return restAuthPut(axios, "zones/" + zoneToken, request);
  }
  /**
   * List zones that match the given criteria.
   * @param axios
   * @param criteria
   * @param format
   */
  function listZones(axios, criteria, format) {
      var query = randomSeedQuery();
      if (criteria) {
          query += addStringFilter(criteria.areaToken, "areaToken");
          query += createPagingQuery(criteria);
      }
      return restAuthGet(axios, "zones" + query);
  }
  /**
   * Delete an existing zone.
   * @param axios
   * @param zoneToken
   */
  function deleteZone(axios, zoneToken) {
      return restAuthDelete(axios, "zones/" + zoneToken);
  }

  var ZonesApi = /*#__PURE__*/Object.freeze({
    createZone: createZone,
    getZone: getZone,
    updateZone: updateZone,
    listZones: listZones,
    deleteZone: deleteZone
  });

  /**
   * Get a JWT. (Reqires basic authentication)
   * @param axios
   */
  function getJwt(axios) {
      return restAuthGet(axios, "jwt");
  }

  var JwtApi = /*#__PURE__*/Object.freeze({
    getJwt: getJwt
  });

  /**
   * Enumeration of asset categories.
   */
  (function (AssetCategory) {
      AssetCategory["Device"] = "Device";
      AssetCategory["Person"] = "Person";
      AssetCategory["Hardware"] = "Hardware";
  })(exports.AssetCategory || (exports.AssetCategory = {}));

  /**
   * Enumeration of batch operation status values.
   */
  (function (BatchOperationStatus) {
      BatchOperationStatus["Unprocessed"] = "Unprocessed";
      BatchOperationStatus["Initializing"] = "Initializing";
      BatchOperationStatus["InitializedSuccessfully"] = "InitializedSuccessfully";
      BatchOperationStatus["InitializedWithErrors"] = "InitializedWithErrors";
      BatchOperationStatus["FinishedSuccessfully"] = "FinishedSuccessfully";
      BatchOperationStatus["FinishedWithErrors"] = "FinishedWithErrors";
  })(exports.BatchOperationStatus || (exports.BatchOperationStatus = {}));
  (function (ElementProcessingStatus) {
      ElementProcessingStatus["Unprocessed"] = "Unprocessed";
      ElementProcessingStatus["Initializing"] = "Initializing";
      ElementProcessingStatus["Processing"] = "Processing";
      ElementProcessingStatus["Failed"] = "Failed";
      ElementProcessingStatus["Succeeded"] = "Succeeded";
  })(exports.ElementProcessingStatus || (exports.ElementProcessingStatus = {}));

  /**
   * Enumeration of device assignment statuses.
   */
  (function (DeviceAssignmentStatus) {
      DeviceAssignmentStatus["Active"] = "Active";
      DeviceAssignmentStatus["Missing"] = "Missing";
      DeviceAssignmentStatus["Released"] = "Released";
  })(exports.DeviceAssignmentStatus || (exports.DeviceAssignmentStatus = {}));

  /**
   * Enumeration of parameter types.
   */
  (function (ParameterType) {
      ParameterType["Double"] = "Double";
      ParameterType["Float"] = "Float";
      ParameterType["Int32"] = "Int32";
      ParameterType["Int64"] = "Int64";
      ParameterType["UInt32"] = "UInt32";
      ParameterType["UInt64"] = "UInt64";
      ParameterType["SInt32"] = "SInt32";
      ParameterType["SInt64"] = "SInt64";
      ParameterType["Fixed32"] = "Fixed32";
      ParameterType["Fixed64"] = "Fixed64";
      ParameterType["SFixed32"] = "SFixed32";
      ParameterType["SFixed64"] = "SFixed64";
      ParameterType["Bool"] = "Bool";
      ParameterType["String"] = "String";
      ParameterType["Bytes"] = "Bytes";
  })(exports.ParameterType || (exports.ParameterType = {}));

  /**
   * Enumeration of device assignment statuses.
   */
  (function (DeviceEventType) {
      DeviceEventType["Measurement"] = "Measurement";
      DeviceEventType["Location"] = "Location";
      DeviceEventType["Alert"] = "Alert";
      DeviceEventType["CommandInvocation"] = "CommandInvocation";
      DeviceEventType["CommandResponse"] = "CommandResponse";
      DeviceEventType["StateChange"] = "StateChange";
  })(exports.DeviceEventType || (exports.DeviceEventType = {}));
  (function (AlertSource) {
      AlertSource["Device"] = "Device";
      AlertSource["System"] = "System";
  })(exports.AlertSource || (exports.AlertSource = {}));
  (function (AlertLevel) {
      AlertLevel["Info"] = "Info";
      AlertLevel["Warning"] = "Warning";
      AlertLevel["Error"] = "Error";
      AlertLevel["Critical"] = "Critical";
  })(exports.AlertLevel || (exports.AlertLevel = {}));
  (function (CommandInitiator) {
      CommandInitiator["REST"] = "REST";
      CommandInitiator["BatchOperation"] = "BatchOperation";
      CommandInitiator["Script"] = "Script";
      CommandInitiator["Scheduler"] = "Scheduler";
  })(exports.CommandInitiator || (exports.CommandInitiator = {}));
  (function (CommandTarget) {
      CommandTarget["Assignment"] = "Assignment";
  })(exports.CommandTarget || (exports.CommandTarget = {}));

  /**
   * Enum of device container policy choices.
   */
  (function (DeviceContainerPolicy) {
      DeviceContainerPolicy["Standalone"] = "Standalone";
      DeviceContainerPolicy["Composite"] = "Composite";
  })(exports.DeviceContainerPolicy || (exports.DeviceContainerPolicy = {}));

  /**
   * Enumeration of lifecycle statuses.
   */
  (function (LifecycleStatus) {
      LifecycleStatus["Initializing"] = "Initializing";
      LifecycleStatus["InitializationError"] = "InitializationError";
      LifecycleStatus["Stopped"] = "Stopped";
      LifecycleStatus["StoppedWithErrors"] = "StoppedWithErrors";
      LifecycleStatus["Starting"] = "Starting";
      LifecycleStatus["Started"] = "Started";
      LifecycleStatus["StartedWithErrors"] = "StartedWithErrors";
      LifecycleStatus["Pausing"] = "Pausing";
      LifecycleStatus["Paused"] = "Paused";
      LifecycleStatus["Stopping"] = "Stopping";
      LifecycleStatus["Terminating"] = "Terminating";
      LifecycleStatus["Terminated"] = "Terminated";
      LifecycleStatus["LifecycleError"] = "LifecycleError";
  })(exports.LifecycleStatus || (exports.LifecycleStatus = {}));

  /**
   * Enumeration of trigger types.
   */
  (function (TriggerType) {
      TriggerType["SimpleTrigger"] = "SimpleTrigger";
      TriggerType["CronTrigger"] = "CronTrigger";
  })(exports.TriggerType || (exports.TriggerType = {}));

  /**
   * Enumeration of user account status values.
   */
  (function (AccountStatus) {
      AccountStatus["AccountStatus"] = "A";
      AccountStatus["Expired"] = "E";
      AccountStatus["Locked"] = "L";
  })(exports.AccountStatus || (exports.AccountStatus = {}));

  /** Export authentication functions */
  var Auth = Authentication;
  /** Export core APIs */
  var API = {
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
  /** Export authentication APIs */
  var AuthAPI = {
      Jwt: JwtApi
  };

  exports.API = API;
  exports.Auth = Auth;
  exports.AuthAPI = AuthAPI;
  exports.createDateRangeQuery = createDateRangeQuery;
  exports.createPagingQuery = createPagingQuery;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
