/**
 * File Generated by Sideko (sideko.dev)
 */

export type PostZonesDnsSecStatusResponseDnsSecStatusesItemCurrentRecords = {
  dnskeyRecord: string;
  dsRecord: string;
  expectedTtl: number;
  lastModifiedDate: string;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]: string | string | number | string | any;
};
