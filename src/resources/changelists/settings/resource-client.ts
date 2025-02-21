/**
 * File Generated by Sideko (sideko.dev)
 */
import {
  CoreResourceClient,
  CoreClient,
  RequestOptions,
  ApiPromise,
} from "akamai_edge_dns_zone_management_api/core";
import * as requests from "akamai_edge_dns_zone_management_api/resources/changelists/settings/request-types";
import * as types from "akamai_edge_dns_zone_management_api/types";
import qs from "qs";

export class SettingsClient extends CoreResourceClient {
  // register resources (keep comment for code generation)

  constructor(client: CoreClient) {
    super(client);

    // init resources (keep comment for code generation)
  }

  // register api methods (keep comment for code generation)

  /**
   * Updates the change list with new Zone settings. The entire Zone object is needed no matter how many fields you're updating.
   */
  put(request: requests.PutRequest, opts?: RequestOptions): ApiPromise<null> {
    // send request (keep comment for code generation)
    return this._client.makeRequest({
      method: "put",
      path: `/changelists/${request.zone}/settings`,
      query: [qs.stringify({ accountSwitchKey: request.accountSwitchKey })],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }

  /**
   * Retrieves the zone's settings based on the selected change list. Zone settings include metadata about the zone, but not the record sets. The data returned reflects the zone setting changes included in the change list. This call works even if the change list is stale.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetChangelistsZoneSettingsResponse> {
    // send request (keep comment for code generation)
    return this._client.makeRequest({
      method: "get",
      path: `/changelists/${request.zone}/settings`,
      query: [qs.stringify({ accountSwitchKey: request.accountSwitchKey })],
      responseType: "json",
      opts,
    });
  }
}
