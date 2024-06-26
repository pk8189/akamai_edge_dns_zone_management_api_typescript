/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "akamai_edge_dns_zone_management_api/types";

export type GetZonesZoneVersionsDiffResponseDiffsRecordSetDiffsItem = {
  fromValue?: boolean | number | Record<string, any> | string;
  name: string;
  operation: types.GetZonesZoneVersionsDiffResponseDiffsRecordSetDiffsItemOperationEnum;
  toValue?: boolean | number | Record<string, any> | string;
  type: string;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | undefined
    | (boolean | number | Record<string, any> | string)
    | string
    | types.GetZonesZoneVersionsDiffResponseDiffsRecordSetDiffsItemOperationEnum
    | undefined
    | (boolean | number | Record<string, any> | string)
    | string
    | any;
};
