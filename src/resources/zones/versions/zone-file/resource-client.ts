/**
 * File Generated by Sideko (sideko.dev)
 */
import {
  CoreResourceClient,
  CoreClient,
  RequestOptions,
  ApiPromise,
} from "akamai_edge_dns_zone_management_api/core";
import * as requests from "akamai_edge_dns_zone_management_api/resources/zones/versions/zone-file/request-types";
import qs from "qs";

export class ZoneFileClient extends CoreResourceClient {
  // register resources (keep comment for code generation)

  constructor(client: CoreClient) {
    super(client);

    // init resources (keep comment for code generation)
  }

  // register api methods (keep comment for code generation)

  /**
   * Downloads the record sets from a prior zone version in [master zone file](https://techdocs.akamai.com/edge-dns/reference/get-zone-file) format. This applies to primary zones and secondary zones.
   */
  list(request: requests.ListRequest, opts?: RequestOptions): ApiPromise<null> {
    // send request (keep comment for code generation)
    return this._client.makeRequest({
      method: "get",
      path: `/zones/${request.zone}/versions/${request.uuid}/zone-file`,
      query: [qs.stringify({ accountSwitchKey: request.accountSwitchKey })],
      responseType: "json",
      opts,
    });
  }
}
