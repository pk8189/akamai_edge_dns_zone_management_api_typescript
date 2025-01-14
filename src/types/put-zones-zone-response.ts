/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "akamai_edge_dns_zone_management_api/types";

export type PutZonesZoneResponse = {
  activationState: types.PutZonesZoneResponseActivationStateEnum;
  aliasCount?: number;
  comment?: string;
  contractId: string;
  endCustomerId?: string;
  lastActivationDate?: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  masters?: string[];
  signAndServe?: boolean;
  signAndServeAlgorithm?: types.PutZonesZoneResponseSignAndServeAlgorithmEnum | null;
  subzoneGrants?: boolean;
  target?: string;
  tsigKey?: types.PutZonesZoneResponseTsigKey;
  type: types.PutZonesZoneResponseTypeEnum;
  versionId: string;
  zone: string;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | types.PutZonesZoneResponseActivationStateEnum
    | undefined
    | number
    | undefined
    | string
    | string
    | undefined
    | string
    | undefined
    | string
    | string
    | string
    | undefined
    | string[]
    | undefined
    | boolean
    | undefined
    | null
    | types.PutZonesZoneResponseSignAndServeAlgorithmEnum
    | undefined
    | boolean
    | undefined
    | string
    | undefined
    | types.PutZonesZoneResponseTsigKey
    | types.PutZonesZoneResponseTypeEnum
    | string
    | string
    | any;
};
