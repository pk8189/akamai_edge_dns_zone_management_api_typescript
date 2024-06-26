/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "akamai_edge_dns_zone_management_api/types";

export type PostZonesBody = {
  comment?: string;
  endCustomerId?: string;
  masters?: string[];
  signAndServe?: boolean;
  signAndServeAlgorithm?: types.PostZonesBodySignAndServeAlgorithmEnum;
  target?: string;
  tsigKey?: types.PostZonesBodyTsigKey;
  type: types.PostZonesBodyTypeEnum;
  zone: string;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | undefined
    | string
    | undefined
    | string
    | undefined
    | string[]
    | undefined
    | boolean
    | undefined
    | types.PostZonesBodySignAndServeAlgorithmEnum
    | undefined
    | string
    | undefined
    | types.PostZonesBodyTsigKey
    | types.PostZonesBodyTypeEnum
    | string
    | any;
};