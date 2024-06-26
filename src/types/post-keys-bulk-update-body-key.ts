/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "akamai_edge_dns_zone_management_api/types";

export type PostKeysBulkUpdateBodyKey = {
  algorithm: types.PostKeysBulkUpdateBodyKeyAlgorithmEnum;
  name: string;
  secret: string;
  zonesCount?: number;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | types.PostKeysBulkUpdateBodyKeyAlgorithmEnum
    | string
    | string
    | undefined
    | number
    | any;
};