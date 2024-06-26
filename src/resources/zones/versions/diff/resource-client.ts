/**
 * File Generated by Sideko (sideko.dev)
 */
import {
  CoreResourceClient,
  CoreClient,
  RequestOptions,
  ApiPromise,
} from "akamai_edge_dns_zone_management_api/core";
import * as requests from "akamai_edge_dns_zone_management_api/resources/zones/versions/diff/request-types";
import * as types from "akamai_edge_dns_zone_management_api/types";
import qs from "qs";

export class DiffClient extends CoreResourceClient {
  // register resources (keep comment for code generation)

  constructor(client: CoreClient) {
    super(client);

    // init resources (keep comment for code generation)
  }

  // register api methods (keep comment for code generation)

  /**
   * Displays the [difference](https://techdocs.akamai.com/edge-dns/reference/get-zone-versions-diff) between any two versions of a zone, as specified in the query parameters.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetZonesZoneVersionsDiffResponse> {
    // send request (keep comment for code generation)
    return this._client.makeRequest({
      method: "get",
      path: `/zones/${request.zone}/versions/diff`,
      query: [
        qs.stringify({ from: request.from }),
        qs.stringify({ to: request.to }),
        qs.stringify({ accountSwitchKey: request.accountSwitchKey }),
      ],
      responseType: "json",
      opts,
    });
  }
}