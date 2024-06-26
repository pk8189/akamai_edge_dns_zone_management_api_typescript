/**
 * File Generated by Sideko (sideko.dev)
 */
import {
  CoreResourceClient,
  CoreClient,
  RequestOptions,
  ApiPromise,
} from "akamai_edge_dns_zone_management_api/core";
import { TypesClient } from "akamai_edge_dns_zone_management_api/resources/changelists/names/types";
import * as requests from "akamai_edge_dns_zone_management_api/resources/changelists/names/request-types";
import * as types from "akamai_edge_dns_zone_management_api/types";
import qs from "qs";

export class NamesClient extends CoreResourceClient {
  // register resources (keep comment for code generation)
  types: TypesClient;

  constructor(client: CoreClient) {
    super(client);

    // init resources (keep comment for code generation)
    this.types = new TypesClient(this._client);
  }

  // register api methods (keep comment for code generation)

  /**
   * Retrieves a list of record names that exist on this zone, based on the change list. If a record is deleted in the change list, it doesn't appear on the list of records returned. If no record sets exist within the change list, this operation returns an empty list.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetChangelistsZoneNamesResponse> {
    // send request (keep comment for code generation)
    return this._client.makeRequest({
      method: "get",
      path: `/changelists/${request.zone}/names`,
      query: [qs.stringify({ accountSwitchKey: request.accountSwitchKey })],
      responseType: "json",
      opts,
    });
  }
}