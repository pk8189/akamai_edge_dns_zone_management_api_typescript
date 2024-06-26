/**
 * File Generated by Sideko (sideko.dev)
 */

export type GetKeysResponseMetadata = {
  contracts?: string[];
  gid?: number;
  search?: string;
  sortBy?: string[];
  totalElements: number;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | undefined
    | string[]
    | undefined
    | number
    | undefined
    | string
    | undefined
    | string[]
    | number
    | any;
};
