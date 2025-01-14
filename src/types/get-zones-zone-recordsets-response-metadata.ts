/**
 * File Generated by Sideko (sideko.dev)
 */

export type GetZonesZoneRecordsetsResponseMetadata = {
  page: number;
  pageSize: number;
  totalElements: number;
  types: string[];
  zone: string;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | number
    | number
    | number
    | string[]
    | string
    | any;
};
