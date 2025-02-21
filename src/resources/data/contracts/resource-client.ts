/**
 * File Generated by Sideko (sideko.dev)
 */
import {
  CoreResourceClient,
  CoreClient,
  RequestOptions,
  ApiPromise,
} from "akamai_edge_dns_zone_management_api/core";
import * as requests from "akamai_edge_dns_zone_management_api/resources/data/contracts/request-types";
import * as types from "akamai_edge_dns_zone_management_api/types";
import qs from "qs";

export class ContractsClient extends CoreResourceClient {
  // register resources (keep comment for code generation)

  constructor(client: CoreClient) {
    super(client);

    // init resources (keep comment for code generation)
  }

  // register api methods (keep comment for code generation)

  /**
   * Lists the contracts accessible to the current user. Each Contract object includes the list of features and permissions that are available to you on that contract.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetDataContractsResponse> {
    // send request (keep comment for code generation)
    return this._client.makeRequest({
      method: "get",
      path: "/data/contracts",
      query: [
        qs.stringify({ gid: request.gid }),
        qs.stringify({ accountSwitchKey: request.accountSwitchKey }),
      ],
      responseType: "json",
      opts,
    });
  }
}
