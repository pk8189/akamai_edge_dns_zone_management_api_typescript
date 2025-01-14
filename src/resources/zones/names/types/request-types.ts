/**
 * File Generated by Sideko (sideko.dev)
 */
import * as types from "akamai_edge_dns_zone_management_api/types";

export type DeleteRequest = {
  zone: string;
  name: string;
  typePath: string;
  accountSwitchKey?: string;
};

export type ListRequest = {
  zone: string;
  name: string;
  accountSwitchKey?: string;
};

export type GetRequest = {
  zone: string;
  name: string;
  typePath: string;
  accountSwitchKey?: string;
};

export type CreateRequest = {
  zone: string;
  name: string;
  typePath: string;
  accountSwitchKey?: string;
  data: types.PostZonesZoneNamesNameTypesTypeBody;
};

export type PutRequest = {
  zone: string;
  name: string;
  typePath: string;
  accountSwitchKey?: string;
  data: types.PutZonesZoneNamesNameTypesTypeBody;
};
