/**
 * File Generated by Sideko (sideko.dev)
 */
import {
  CoreResourceClient,
  CoreClient,
  RequestOptions,
  ApiPromise,
} from "akamai_edge_dns_zone_management_api/core";
import * as requests from "akamai_edge_dns_zone_management_api/resources/zones/dns-sec-status/request-types";
import * as types from "akamai_edge_dns_zone_management_api/types";
import qs from "qs";

export class DnsSecStatusClient extends CoreResourceClient {
  // register resources (keep comment for code generation)

  constructor(client: CoreClient) {
    super(client);

    // init resources (keep comment for code generation)
  }

  // register api methods (keep comment for code generation)

  /**
   * Returns the current DNSSEC status for one or more zones.
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostZonesDnsSecStatusResponse> {
    // send request (keep comment for code generation)
    return this._client.makeRequest({
      method: "post",
      path: "/zones/dns-sec-status",
      query: [qs.stringify({ accountSwitchKey: request.accountSwitchKey })],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
}