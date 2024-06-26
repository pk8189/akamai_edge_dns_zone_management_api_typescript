/**
 * File Generated by Sideko (sideko.dev)
 */
import {
  CoreResourceClient,
  CoreClient,
  RequestOptions,
  ApiPromise,
} from "akamai_edge_dns_zone_management_api/core";
import * as requests from "akamai_edge_dns_zone_management_api/resources/changelists/search/request-types";
import * as types from "akamai_edge_dns_zone_management_api/types";
import qs from "qs";

export class SearchClient extends CoreResourceClient {
  // register resources (keep comment for code generation)

  constructor(client: CoreClient) {
    super(client);

    // init resources (keep comment for code generation)
  }

  // register api methods (keep comment for code generation)

  /**
   * Given a list of zone names, this operation lists the Change Lists that you have created on those zones. If the input list is empty, the response does not return any change lists. Note that it is possible to own a change list on a zone that you are no longer allowed to access.
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostChangelistsSearchResponse> {
    // send request (keep comment for code generation)
    return this._client.makeRequest({
      method: "post",
      path: "/changelists/search",
      query: [qs.stringify({ accountSwitchKey: request.accountSwitchKey })],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
}
