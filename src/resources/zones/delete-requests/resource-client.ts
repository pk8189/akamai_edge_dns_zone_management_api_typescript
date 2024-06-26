/**
 * File Generated by Sideko (sideko.dev)
 */
import {
  CoreResourceClient,
  CoreClient,
  RequestOptions,
  ApiPromise,
} from "akamai_edge_dns_zone_management_api/core";
import { ResultClient } from "akamai_edge_dns_zone_management_api/resources/zones/delete-requests/result";
import * as requests from "akamai_edge_dns_zone_management_api/resources/zones/delete-requests/request-types";
import * as types from "akamai_edge_dns_zone_management_api/types";
import qs from "qs";

export class DeleteRequestsClient extends CoreResourceClient {
  // register resources (keep comment for code generation)
  result: ResultClient;

  constructor(client: CoreClient) {
    super(client);

    // init resources (keep comment for code generation)
    this.result = new ResultClient(this._client);
  }

  // register api methods (keep comment for code generation)

  /**
   * Submits a request to delete one or more new Zones asynchronously. The request body contains a JSON array. Each element in the array is the name of a zone to be deleted.  Before deleting a zone from the Edge DNS system, the API makes sure Akamai servers aren't receiving DNS requests for that zone. It also checks that the zone is not currently delegated to Akamai's nameservers.  An offline task deletes the new zones. The result of this operation is a `requestId`, that you can use to check the task's status and view its results once it completes.
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostZonesDeleteRequestsResponse> {
    // send request (keep comment for code generation)
    return this._client.makeRequest({
      method: "post",
      path: "/zones/delete-requests",
      query: [
        qs.stringify({ accountSwitchKey: request.accountSwitchKey }),
        qs.stringify({ bypassSafetyChecks: request.bypassSafetyChecks }),
      ],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }

  /**
   * Retrieves the current status of a running or completed request. The `requestId` was returned when the delete request was initiated.
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetZonesDeleteRequestsRequestIdResponse> {
    // send request (keep comment for code generation)
    return this._client.makeRequest({
      method: "get",
      path: `/zones/delete-requests/${request.requestId}`,
      query: [qs.stringify({ accountSwitchKey: request.accountSwitchKey })],
      responseType: "json",
      opts,
    });
  }
}
