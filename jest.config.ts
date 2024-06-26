import { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^akamai_edge_dns_zone_management_api$": "<rootDir>/src/index.ts",
    "^akamai_edge_dns_zone_management_api/(.*)$": "<rootDir>/src/$1",
  },
};

export default config;
