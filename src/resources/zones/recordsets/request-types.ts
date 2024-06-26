/**
 * File Generated by Sideko (sideko.dev)
 */
import * as types from "akamai_edge_dns_zone_management_api/types";

export type ListRequest = {
  zone: string;
  accountSwitchKey?: string;
  page?: number;
  pageSize?: number;
  search?: string;
  showAll?: boolean;
  sortBy?: string;
  types?: string;
};

export type CreateRequest = {
  zone: string;
  accountSwitchKey?: string;
  data: types.PostZonesZoneRecordsetsBody;
};

export type PutRequest = {
  zone: string;
  accountSwitchKey?: string;
  data: types.PutZonesZoneRecordsetsBody;
};
