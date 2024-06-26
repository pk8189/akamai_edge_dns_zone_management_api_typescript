/**
 * File Generated by Sideko (sideko.dev)
 */

export type GetZonesCreateRequestsRequestIdResponse = {
  expirationDate: string;
  failureCount: number;
  isComplete: boolean;
  requestId: string;
  successCount: number;
  zonesSubmitted: number;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | string
    | number
    | boolean
    | string
    | number
    | number
    | any;
};