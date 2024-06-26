/**
 * File Generated by Sideko (sideko.dev)
 */
import {
  CoreResourceClient,
  CoreClient,
} from "akamai_edge_dns_zone_management_api/core";
import { AuthoritiesClient } from "akamai_edge_dns_zone_management_api/resources/data/authorities";
import { ContractsClient } from "akamai_edge_dns_zone_management_api/resources/data/contracts";
import { DnsSecAlgorithmsClient } from "akamai_edge_dns_zone_management_api/resources/data/dns-sec-algorithms";
import { EdgehostnamesClient } from "akamai_edge_dns_zone_management_api/resources/data/edgehostnames";
import { GroupsClient } from "akamai_edge_dns_zone_management_api/resources/data/groups";
import { RecordsetTypesClient } from "akamai_edge_dns_zone_management_api/resources/data/recordset-types";
import { TsigAlgorithmsClient } from "akamai_edge_dns_zone_management_api/resources/data/tsig-algorithms";

export class DataClient extends CoreResourceClient {
  // register resources (keep comment for code generation)
  authorities: AuthoritiesClient;
  contracts: ContractsClient;
  dnsSecAlgorithms: DnsSecAlgorithmsClient;
  edgehostnames: EdgehostnamesClient;
  groups: GroupsClient;
  recordsetTypes: RecordsetTypesClient;
  tsigAlgorithms: TsigAlgorithmsClient;

  constructor(client: CoreClient) {
    super(client);

    // init resources (keep comment for code generation)
    this.authorities = new AuthoritiesClient(this._client);
    this.contracts = new ContractsClient(this._client);
    this.dnsSecAlgorithms = new DnsSecAlgorithmsClient(this._client);
    this.edgehostnames = new EdgehostnamesClient(this._client);
    this.groups = new GroupsClient(this._client);
    this.recordsetTypes = new RecordsetTypesClient(this._client);
    this.tsigAlgorithms = new TsigAlgorithmsClient(this._client);
  }

  // register api methods (keep comment for code generation)
}