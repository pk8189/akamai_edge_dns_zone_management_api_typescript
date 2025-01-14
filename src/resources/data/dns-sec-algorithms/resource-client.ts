/**
 * File Generated by Sideko (sideko.dev)
 */
import {
  CoreResourceClient,
  CoreClient,
  RequestOptions,
  ApiPromise,
} from "akamai_edge_dns_zone_management_api/core";
import * as requests from "akamai_edge_dns_zone_management_api/resources/data/dns-sec-algorithms/request-types";
import * as types from "akamai_edge_dns_zone_management_api/types";
import qs from "qs";

export class DnsSecAlgorithmsClient extends CoreResourceClient {
  // register resources (keep comment for code generation)

  constructor(client: CoreClient) {
    super(client);

    // init resources (keep comment for code generation)
  }

  // register api methods (keep comment for code generation)

  /**
   * Retrieves a list of DNSSEC algorithm names.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetDataDnsSecAlgorithmsResponse> {
    // send request (keep comment for code generation)
    return this._client.makeRequest({
      method: "get",
      path: "/data/dns-sec-algorithms",
      query: [qs.stringify({ accountSwitchKey: request.accountSwitchKey })],
      responseType: "json",
      opts,
    });
  }
}
