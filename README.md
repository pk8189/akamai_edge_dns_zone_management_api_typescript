
# Akamai: Edge DNS Zone Management API Typescript SDK

## Initilization

```typescript
import Client from "akamai_edge_dns_zone_management_api"

new Client({ hostname: 'akaa-WWW' });
```


### Delete change list
> Removes an unneeded Change List.

```typescript
const response = await client.changelists.delete({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Delete zone's TSIG key
> Removes the TSIG Key for this zone. This action does not affect any other zone, even if they share the same TSIG key as this zone. If the zone does not currently have a key, no actions are taken and no error is thrown.

```typescript
const response = await client.zones.key.delete({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Delete a record set
> Removes an existing record set.

```typescript
import * as types from "akamai_edge_dns_zone_management_api/types"

const response = await client.zones.names.types.delete({
  zone: "example.com",
  name: "www.example.com",
  typePath: "A",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### List user's change lists
> Retrieves the Change Lists that you created. Otherwise, displays both stale change lists and change lists for zones you can no longer access.

```typescript
const response = await client.changelists.list({
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Get change list
> Describes a Change List, showing its base zone version, last modified time, and current change tag.

```typescript
const response = await client.changelists.get({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Show changes
> Show [differences](https://techdocs.akamai.com/edge-dns/reference/get-zone-versions-diff) between this change list and its base version.

```typescript
const response = await client.changelists.diff.list({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Get record set names for change list
> Retrieves a list of record names that exist on this zone, based on the change list. If a record is deleted in the change list, it doesn't appear on the list of records returned. If no record sets exist within the change list, this operation returns an empty list.

```typescript
const response = await client.changelists.names.list({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Get record set types for name and change list
> Retrieves a list of record set types that exist at a given name based on the selected change list. The list of record sets returned reflect the changes added to the change list. Records deleted in this change list do not appear. If the name does not exist within the change list, returns an empty list.

```typescript
import * as types from "akamai_edge_dns_zone_management_api/types"

const response = await client.changelists.names.types.list({
  zone: "example.com",
  name: "www.example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Get a record set for change list
> Returns an individual record set based on the selected change list. The list of record sets returned reflects any changes added to this change list. Record sets are annotated with the related change as clean, modified, new, or deleted. This call works even if the change list is stale.

```typescript
import * as types from "akamai_edge_dns_zone_management_api/types"

const response = await client.changelists.names.types.get({
  zone: "example.com",
  name: "www.example.com",
  typePath: "A",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Get record sets for change list
> Retrieves the current list of record sets based on the selected change list. The record sets returned reflect any Changes added to this change list. This call works even if the change list is stale. This operation is (paginated](ref:use-pagination).

```typescript
const response = await client.changelists.recordsets.list({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  page: 1,
  pageSize: 25,
  search: "xamp",
  showAll: false,
  sortBy: "name,type",
  types: "A,AAAA",
});
```

---

### Get change list settings
> Retrieves the zone's settings based on the selected change list. Zone settings include metadata about the zone, but not the record sets. The data returned reflects the zone setting changes included in the change list. This call works even if the change list is stale.

```typescript
const response = await client.changelists.settings.list({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### List authoritative nameservers
> Retrieves the currently assigned Akamai authoritative nameservers for one or more contracts.

```typescript
const response = await client.data.authorities.list({
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  contractIds: "9-9XXXXX,7-8YYYYY",
});
```

---

### List contracts
> Lists the contracts accessible to the current user. Each Contract object includes the list of features and permissions that are available to you on that contract.

```typescript
const response = await client.data.contracts.list({
  gid: 100,
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### List DNSSEC algorithms
> Retrieves a list of DNSSEC algorithm names.

```typescript
const response = await client.data.dnsSecAlgorithms.list({
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### List edge hostnames
> Displays a list of Edge Hostnames that have been configured for the current customer.

```typescript
const response = await client.data.edgehostnames.list({
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### List groups
> Lists the groups accessible to the current user. Each Group object includes the list of contracts related to that group, as well as your permissions of `READ`, `WRITE`, `ADD`, or `DELETE` zone on that group.

```typescript
const response = await client.data.groups.list({
  gid: 100,
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### List record types
> Retrieves a list of record types you can add to the requested zone. Record types depend on both the zone type and the available contract features.

```typescript
const response = await client.data.recordsetTypes.list({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### List TSIG key algorithms
> Retrieves a list of TSIG algorithm names.

```typescript
const response = await client.data.tsigAlgorithms.list({
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### List TSIG keys
> Get a list of the TSIG keys used by zones that you are allowed to manage.

```typescript
const response = await client.keys.list({
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  contractIds: "K-0N7RAK7,C-0N7RAC7",
  search: "md5",
  sortBy: "name,-algorithm",
});
```

---

### List zones
> Get a list of all zones that the current user has access to manage. Includes the version identifier, propagation status, and SOA serial number for the most recently activated version. This operation is [paginated](https://techdocs.akamai.com/edge-dns/reference/use-pagination).

```typescript
const response = await client.zones.list({
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  contractIds: "1-1ACYUM",
  page: 1,
  pageSize: 25,
  search: "org",
  showAll: false,
  sortBy: "-contractId,zone",
  subzoneGrant: true,
  types: "primary,alias",
});
```

---

### Check bulk-create status
> Retrieves the current status of a running or completed request. The `requestId` was returned when the create request was initiated.

```typescript
const response = await client.zones.createRequests.get({
  requestId: "3219d903-fc95-4a3e-8baf-8a3c621087a9",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Get bulk-create result
> Retrieves the results from a completed request.

```typescript
const response = await client.zones.createRequests.result.list({
  requestId: "3219d903-fc95-4a3e-8baf-8a3c621087a9",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Check bulk-delete status
> Retrieves the current status of a running or completed request. The `requestId` was returned when the delete request was initiated.

```typescript
const response = await client.zones.deleteRequests.get({
  requestId: "18b2ed1a-88c6-4164-8160-1de7c8751a08",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Get bulk-delete result
> Retrieves the `results` from a completed request.

```typescript
const response = await client.zones.deleteRequests.result.list({
  requestId: "18b2ed1a-88c6-4164-8160-1de7c8751a08",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Get zone's settings
> Retrieves the metadata for this zone. Does not include record sets.

```typescript
const response = await client.zones.get({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Get zone's aliases
> Show all zones that alias to this zone.

```typescript
const response = await client.zones.aliases.list({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Get zone's contract
> Show data about the contract to which this zone belongs.

```typescript
const response = await client.zones.contract.list({
  zone: "example.com",
  gid: 100,
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Get zone's TSIG key
> Retrieves the TSIG Key data for this zone. Includes a count of zones that use this key. Returns a 404 error if the zone does not have a TSIG key.

```typescript
const response = await client.zones.key.list({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### List users of zone's TSIG key
> Lists the Zones that use the same TSIG key as this zone.

```typescript
const response = await client.zones.key.usedBy.list({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Get record set names for zone
> Retrieves a list of record set names for a zone.

```typescript
const response = await client.zones.names.list({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Get record set types for name and zone
> Lists all *existing* Record set types for this name. The list of *allowed* types is available at [List record types](https://techdocs.akamai.com/edge-dns/reference/get-record-set-types). If the name does not exist within the zone, an empty list is returned.

```typescript
import * as types from "akamai_edge_dns_zone_management_api/types"

const response = await client.zones.names.types.list({
  zone: "example.com",
  name: "www.example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Get a record set
> Retrieves a single record set for the zone, record name, and record type specified in the URL.

```typescript
import * as types from "akamai_edge_dns_zone_management_api/types"

const response = await client.zones.names.types.get({
  zone: "example.com",
  name: "www.example.com",
  typePath: "A",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Get zone's record sets
> Lists all Record Sets for this Zone. It works only for `PRIMARY` and `SECONDARY` zones. This operation is [paginated](https://techdocs.akamai.com/edge-dns/reference/pagination).

```typescript
const response = await client.zones.recordsets.list({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  page: 1,
  pageSize: 25,
  search: "xamp",
  showAll: false,
  sortBy: "name,type",
  types: "A,AAAA",
});
```

---

### List zone's versions
> Shows the settings for current and prior versions of this Zone, in reverse chronological order of modification. Many versions in this list may look very similar because a new version is created every time the zone's settings or record sets are changed. This operation is [paginated](https://techdocs.akamai.com/edge-dns/reference/use-pagination).

```typescript
const response = await client.zones.versions.list({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  page: 1,
  pageSize: 25,
  showAll: false,
});
```

---

### Show differences
> Displays the [difference](https://techdocs.akamai.com/edge-dns/reference/get-zone-versions-diff) between any two versions of a zone, as specified in the query parameters.

```typescript
const response = await client.zones.versions.diff.list({
  zone: "example.com",
  from: "ac7e47ef-c71e-49cd-a71b-b39fc4d841ac",
  to: "e1100926-9b76-42cb-868a-b8260fdc6cd0",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Get zone version
> Returns an image of the Zone from a previous version. Shows only zone settings, not record sets.

```typescript
const response = await client.zones.versions.get({
  zone: "example.com",
  uuid: "e23a84c5-9ab7-49fb-83ff-b82b8a078f95",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Get version's record sets
> Lists all record sets for this version of this zone. This operation is [paginated](https://techdocs.akamai.com/edge-dns/reference/use-pagination).

```typescript
const response = await client.zones.versions.recordsets.list({
  zone: "example.com",
  uuid: "e23a84c5-9ab7-49fb-83ff-b82b8a078f95",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  page: 1,
  pageSize: 25,
  search: "www",
  showAll: false,
  sortBy: "name,type",
  types: "A,AAAA",
});
```

---

### Get version's master zone file
> Downloads the record sets from a prior zone version in [master zone file](https://techdocs.akamai.com/edge-dns/reference/get-zone-file) format. This applies to primary zones and secondary zones.

```typescript
const response = await client.zones.versions.zoneFile.list({
  zone: "example.com",
  uuid: "e23a84c5-9ab7-49fb-83ff-b82b8a078f95",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Get master zone file
> Download this zone's record set data in master zone file format. This operation applies to primary zones and secondary zones. See [RFC 1035](http://tools.ietf.org/html/rfc1035) section 5 and [RFC 1034](http://tools.ietf.org/html/rfc1034) section 3.6.1 for more information.  `AKAMAICDN` and `AKAMAITLC` records can't be represented in this format, so they are displayed as comment lines.

```typescript
const response = await client.zones.zoneFile.list({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
});
```

---

### Create a change list
> Creates a new Change List based on the most recent version of a zone. No POST body is needed, since the object is read-only.

```typescript
import * as types from "akamai_edge_dns_zone_management_api/types"

const response = await client.changelists.create({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  overwrite: types.PostChangelistsOverwriteEnum.Stale,
});
```

---

### Search for change lists
> Given a list of zone names, this operation lists the Change Lists that you have created on those zones. If the input list is empty, the response does not return any change lists. Note that it is possible to own a change list on a zone that you are no longer allowed to access.

```typescript
const response = await client.changelists.search.create({
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  data: { zones: ["river.com", "brook.com"] },
});
```

---

### Upload master zone file to change list
> Replaces your change list's record sets with the contents of a master zone file.

```typescript
const response = await client.changelists.recordsets.create({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  data: "example.com.        10000    IN SOA ns1.akamaidns.com. webmaster.example.com. 1 28800 14400 2419200 86400 example.com.        10000    IN NS  ns1.akamaidns.com. example.com.        10000    IN NS  ns2.akamaidns.com. example.com.            300 IN  A   10.0.0.1 example.com.            300 IN  A   10.0.0.2 www.example.com.        300 IN  A   10.0.0.1 www.example.com.        300 IN  A   10.0.0.2",
});
```

---

### Modify record set for change list
> Adds a Record Set Change to this change list. Each change is an operation that affects a single record set: `ADD`, `EDIT`, or `DELETE`.

```typescript
import * as types from "akamai_edge_dns_zone_management_api/types"

const response = await client.changelists.recordsets.addChange.create({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  data: {
    name: "ftp.example.com",
    op: types.PostChangelistsZoneRecordsetsAddChangeBodyOpEnum.Add,
    rdata: ["192.0.2.80"],
    ttl: 100,
    type: "A",
  },
});
```

---

### Submit change list
> Applies all of the changes in this change list to the current zone. This operation fails if the change list has become stale.

```typescript
const response = await client.changelists.submit.create({
  zone: "example.com",
  skipSignAndServeSafetyCheck: false,
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  comment: "Updating A record",
});
```

---

### Update TSIG key for multiple zones
> This updates the key data for multiple zones at once. Keep in mind that this operation can only add zones to a TSIG key, not remove them. To safely remove the association between a zone and a TSIG key, update the zone to its new TSIG key or remove the key from the zone if you're sure it's no longer needed.

```typescript
import * as types from "akamai_edge_dns_zone_management_api/types"

const response = await client.keys.bulkUpdate.create({
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  data: {
    key: {
      algorithm: types.PostKeysBulkUpdateBodyKeyAlgorithmEnum.HmacSha512,
      name: "brook.com.akamai.com.",
      secret:
        "Ok1qR5IW1ajVka5cHPEJQIXfLyx5V3PSkFBROAzOn21JumDq6nIpoj6H8rfj5Uo+Ok55ZWQ0Wgrf302fDscHLw==",
      zonesCount: 123,
    },
    zones: ["brook.com", "river.com"],
  },
});
```

---

### List zones using TSIG key
> Returns a list of zone names that use the given TSIG key and for which the current user has READ access. If the list of zones returned is empty, it is possible that the given key is in use by other zones but the current user does not have permission to view those zones.

```typescript
import * as types from "akamai_edge_dns_zone_management_api/types"

const response = await client.keys.usedBy.create({
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  data: {
    algorithm: types.PostKeysUsedByBodyAlgorithmEnum.HmacSha512,
    name: "example.com.akamai.com.",
    secret:
      "Ok1qR5IW1ajVka5cHPEJQIXfLyx5V3PSkFBROAzOn21JumDq6nIpoj6H8rfj5Uo+Ok55ZWQ0Wgrf302fDscHLw==",
  },
});
```

---

### Create a zone
> Creates a new zone. Carefully review the documentation for which fields are relevant to the type of zone you are creating.

```typescript
import * as types from "akamai_edge_dns_zone_management_api/types"

const response = await client.zones.create({
  contractId: "1-2ABCDE",
  gid: 100,
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  data: {
    comment: "Adding bodies of water",
    endCustomerId: "{{endCustomerId}}",
    masters: ["192.0.2.35", "192.0.2.67"],
    signAndServe: "{{signAndServe}}",
    signAndServeAlgorithm: types.PostZonesBodySignAndServeAlgorithmEnum.RsaSha1,
    target: "{{target}}",
    tsigKey: {
      algorithm: types.PostZonesBodyTsigKeyAlgorithmEnum.HmacMd5SigAlgRegInt,
      name: "string",
      secret: "string",
      zonesCount: 123,
    },
    type: types.PostZonesBodyTypeEnum.Secondary,
    zone: "river.com",
  },
});
```

---

### Submit bulk-create request
> Submits a request to create one or more new Zones asynchronously. The request body contains a JSON array. Each object in the array contains the data necessary to create a zone. All zones are created on the same contract and group.  An offline task creates the new zones. You can use the response's `requestId` to check the task's status and view its results once it completes.

```typescript
import * as types from "akamai_edge_dns_zone_management_api/types"

const response = await client.zones.createRequests.create({
  contractId: "1-2ABCDE",
  gid: 100,
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  data: {
    zones: [
      {
        comment: "Adding bodies of water",
        endCustomerId: "string",
        masters: ["192.0.2.63", "192.0.2.110"],
        signAndServe: true,
        signAndServeAlgorithm:
          types.PostZonesCreateRequestsBodyZonesItemSignAndServeAlgorithmEnum
            .RsaSha1,
        target: "string",
        tsigKey: {
          algorithm:
            types.PostZonesCreateRequestsBodyZonesItemTsigKeyAlgorithmEnum
              .HmacMd5SigAlgRegInt,
          name: "string",
          secret: "string",
          zonesCount: 123,
        },
        type: types.PostZonesCreateRequestsBodyZonesItemTypeEnum.Secondary,
        zone: "river.com",
      },
      {
        comment: "Adding bodies of water",
        endCustomerId: "string",
        masters: ["192.0.2.18", "192.0.2.53"],
        signAndServe: true,
        signAndServeAlgorithm:
          types.PostZonesCreateRequestsBodyZonesItemSignAndServeAlgorithmEnum
            .RsaSha1,
        target: "string",
        tsigKey: {
          algorithm:
            types.PostZonesCreateRequestsBodyZonesItemTsigKeyAlgorithmEnum
              .HmacMd5SigAlgRegInt,
          name: "string",
          secret: "string",
          zonesCount: 123,
        },
        type: types.PostZonesCreateRequestsBodyZonesItemTypeEnum.Secondary,
        zone: "lake.com",
      },
      {
        comment: "Adding bodies of water",
        endCustomerId: "string",
        masters: ["192.0.2.240", "192.0.2.204"],
        signAndServe: true,
        signAndServeAlgorithm:
          types.PostZonesCreateRequestsBodyZonesItemSignAndServeAlgorithmEnum
            .RsaSha1,
        target: "string",
        tsigKey: {
          algorithm:
            types.PostZonesCreateRequestsBodyZonesItemTsigKeyAlgorithmEnum
              .HmacMd5SigAlgRegInt,
          name: "string",
          secret: "string",
          zonesCount: 123,
        },
        type: types.PostZonesCreateRequestsBodyZonesItemTypeEnum.Secondary,
        zone: "ocean.com",
      },
    ],
  },
});
```

---

### Submit bulk-delete request
> Submits a request to delete one or more new Zones asynchronously. The request body contains a JSON array. Each element in the array is the name of a zone to be deleted.  Before deleting a zone from the Edge DNS system, the API makes sure Akamai servers aren't receiving DNS requests for that zone. It also checks that the zone is not currently delegated to Akamai's nameservers.  An offline task deletes the new zones. The result of this operation is a `requestId`, that you can use to check the task's status and view its results once it completes.

```typescript
const response = await client.zones.deleteRequests.create({
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  bypassSafetyChecks: false,
  data: { zones: ["river.com", "stream.com"] },
});
```

---

### Get zones DNSSEC status
> Returns the current DNSSEC status for one or more zones.

```typescript
const response = await client.zones.dnsSecStatus.create({
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  data: { zones: ["river.com", "stream.com"] },
});
```

---

### Get secondary zones transfer status
> Returns the results of the most recent zone transfer attempts for one or more zones.  When you configure a `SECONDARY` zone, several Akamai nameservers known as zone transfer agents perform zone transfer requests to fetch the record data from the zone's configured master nameservers. The data returned by this operation describes the results of those zone transfers.

```typescript
const response = await client.zones.zoneTransferStatus.create({
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  data: { zones: ["river.com", "stream.com"] },
});
```

---

### Create a record set
> Creates a new Record set with the specified name and type.

```typescript
import * as types from "akamai_edge_dns_zone_management_api/types"

const response = await client.zones.names.types.create({
  zone: "example.com",
  name: "www.example.com",
  typePath: "A",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  data: {
    name: "www.example.com",
    rdata: ["192.0.2.52", "192.0.2.139"],
    ttl: 300,
    type: "A",
  },
});
```

---

### Create multiple record sets
> Creates multiple new Record Sets on this Zone. If any record set fails to create, for example, because a record set with that name and type already exists, the entire operation fails.

```typescript
const response = await client.zones.recordsets.create({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  data: {
    recordsets: [
      {
        name: "new.example.com",
        rdata: ["www.example.com"],
        ttl: 300,
        type: "CNAME",
      },
    ],
  },
});
```

---

### Reactivate version
> Create and activate a new version of the zone by copying the record sets from a prior version of this zone and reapplying them to the current version. The new version has a new, auto-incremented SOA serial number, and the zone's modification data is set to the current time and user. All other zone settings remain the same as the current version.

```typescript
const response = await client.zones.versions.recordsets.activate.create({
  zone: "example.com",
  uuid: "e23a84c5-9ab7-49fb-83ff-b82b8a078f95",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  comment: "Updating A record",
});
```

---

### Post master zone file
> Upload new record set data for this zone in master zone file format. Replaces any existing record sets. This operation applies to primary zones and secondary zones. See [RFC 1035](http://tools.ietf.org/html/rfc1035) section 5 and [RFC 1034](http://tools.ietf.org/html/rfc1034) section 3.6.1 for more information.  Zone files can contain only US-ASCII characters 0&ndash;127. Where allowed, you can encode high-order ASCII characters, 128+, with a backslash plus a three-digit decimal number representing the byte value. For example, `\233` instead of `&eacute;`.  `AKAMAICDN` and `AKAMAITLC` records can't be represented in this format. Uploading a zone file does not affect these records.

```typescript
const response = await client.zones.zoneFile.create({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  data: "example.com.        10000    IN SOA ns1.akamaidns.com. webmaster.example.com. 1 28800 14400 2419200 86400 example.com.        10000    IN NS  ns1.akamaidns.com. example.com.        10000    IN NS  ns2.akamaidns.com. example.com.            300 IN  A   10.0.0.1 example.com.            300 IN  A   10.0.0.2 www.example.com.        300 IN  A   10.0.0.1 www.example.com.        300 IN  A   10.0.0.2",
});
```

---

### Update change list settings
> Updates the change list with new Zone settings. The entire Zone object is needed no matter how many fields you're updating.

```typescript
import * as types from "akamai_edge_dns_zone_management_api/types"

const response = await client.changelists.settings.put({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  data: {
    comment: "Adding bodies of water",
    contractId: "{{contractId}}",
    endCustomerId: "{{endCustomerId}}",
    masters: ["192.0.2.65", "192.0.2.171"],
    signAndServe: "{{signAndServe}}",
    signAndServeAlgorithm:
      types.PutChangelistsZoneSettingsBodySignAndServeAlgorithmEnum.RsaSha1,
    subzoneGrants: "{{subzoneGrants}}",
    target: "{{target}}",
    tsigKey: {
      algorithm:
        types.PutChangelistsZoneSettingsBodyTsigKeyAlgorithmEnum
          .HmacMd5SigAlgRegInt,
      name: "string",
      secret: "string",
      zonesCount: 123,
    },
    type: types.PutChangelistsZoneSettingsBodyTypeEnum.Secondary,
    zone: "river.com",
  },
});
```

---

### Update zone's settings
> Modifies a zone. You can't change the zone `type` with this operation.

```typescript
import * as types from "akamai_edge_dns_zone_management_api/types"

const response = await client.zones.put({
  zone: "example.com",
  skipSignAndServeSafetyCheck: false,
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  data: {
    comment: "Adding bodies of water",
    contractId: "{{contractId}}",
    endCustomerId: "{{endCustomerId}}",
    masters: ["192.0.2.131", "192.0.2.164"],
    signAndServe: "{{signAndServe}}",
    signAndServeAlgorithm:
      types.PutZonesZoneBodySignAndServeAlgorithmEnum.RsaSha1,
    subzoneGrants: "{{subzoneGrants}}",
    target: "{{target}}",
    tsigKey: {
      algorithm: types.PutZonesZoneBodyTsigKeyAlgorithmEnum.HmacMd5SigAlgRegInt,
      name: "string",
      secret: "string",
      zonesCount: 123,
    },
    type: types.PutZonesZoneBodyTypeEnum.Secondary,
    zone: "river.com",
  },
});
```

---

### Update zone's TSIG key
> Creates or replaces the current TSIG Key for this zone. If other zones use the same key, does not modify those zones.

```typescript
import * as types from "akamai_edge_dns_zone_management_api/types"

const response = await client.zones.key.put({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  data: {
    algorithm: types.PutZonesZoneKeyBodyAlgorithmEnum.HmacSha512,
    name: "example.com.akamai.com.",
    secret:
      "Ok1qR5IW1ajVka5cHPEJQIXfLyx5V3PSkFBROAzOn21JumDq6nIpoj6H8rfj5Uo+Ok55ZWQ0Wgrf302fDscHLw==",
  },
});
```

---

### Replace a record set
> Replaces an existing Record set with the request body. The `name` and `type` need to match the existing record.

```typescript
import * as types from "akamai_edge_dns_zone_management_api/types"

const response = await client.zones.names.types.put({
  zone: "example.com",
  name: "www.example.com",
  typePath: "A",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  data: {
    name: "www.example.com",
    rdata: ["192.0.2.35", "192.0.2.111"],
    ttl: 300,
    type: "A",
  },
});
```

---

### Replace record sets
> Replaces the entire list of Record Sets that currently exists with the list provided.

```typescript
const response = await client.zones.recordsets.put({
  zone: "example.com",
  accountSwitchKey: "1-5C0YLB:1-8BYUX",
  data: {
    recordsets: [
      {
        name: "paveldespot.com",
        rdata: [
          "a33-33.akam.net. hostmaster.akamai.com. 14643123442 43200 7200 604800 7200",
        ],
        ttl: 86400,
        type: "SOA",
      },
      {
        name: "paveldespot.com",
        rdata: ["example3.paveldespot.net.edgekey.net"],
        ttl: 20,
        type: "AKAMAICDN",
      },
      {
        name: "paveldespot.com",
        rdata: ["ns222.name.cloud.ibm.com.", "ns111.name.cloud.ibm.com."],
        ttl: 172800,
        type: "NS",
      },
      {
        name: "api1.paveldespot.com",
        rdata: ["api2.paveldespot.com."],
        ttl: 300,
        type: "CNAME",
      },
      {
        name: "api2.paveldespot.com",
        rdata: ["api.paveldespot.com."],
        ttl: 300,
        type: "CNAME",
      },
      {
        name: "api3.paveldespot.com",
        rdata: ["api.paveldespot.com."],
        ttl: 300,
        type: "CNAME",
      },
      {
        name: "api4.paveldespot.com",
        rdata: ["api.paveldespot.com."],
        ttl: 300,
        type: "CNAME",
      },
      {
        name: "roubrobin.paveldespot.com",
        rdata: ["192.0.2.66", "192.0.2.66", "192.0.2.103", "192.0.2.20"],
        ttl: 30,
        type: "A",
      },
    ],
  },
});
```


