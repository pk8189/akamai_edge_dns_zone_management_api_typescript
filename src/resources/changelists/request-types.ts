/**
 * File Generated by Sideko (sideko.dev)
 */
import * as types from "akamai_edge_dns_zone_management_api/types";

export type DeleteRequest = {
  zone: string;
  accountSwitchKey?: string;
};

export type ListRequest = {
  accountSwitchKey?: string;
};

export type GetRequest = {
  zone: string;
  accountSwitchKey?: string;
};

export type CreateRequest = {
  zone: string;
  accountSwitchKey?: string;
  overwrite?: types.PostChangelistsOverwriteEnum;
};