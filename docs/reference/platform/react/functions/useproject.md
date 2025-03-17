[**@torque-labs/react**](../../../@torque-labs/react/README.md)

***

[Torque Labs](../../../README.md) / [@torque-labs/react](../README.md) / useProject

# Function: useProject()

```ts
function useProject(__namedParameters): UseQueryResult<{
  audience: unknown[];
  createdAt: Date;
  customEvent: unknown[];
  description: null | string;
  discord: null | string;
  id: string;
  image: null | string;
  name: string;
  offchainAllocationEndpoint: null | string;
  offchainRewards: unknown[];
  offers:   | null
     | {
     audience: Record<string, unknown>;
     audienceId: null | string;
     conversions: unknown[];
     distributors: unknown[];
     endTime: Date;
     metadata: {
        backgroundColor: null | string;
        backgroundImage: null | string;
        colorMode: null | "light" | "dark";
        description: null | string;
        image: null | string;
        title: string;
        url: null | string;
       };
     offerJourneys: unknown[];
     offerRequirements: unknown[];
     project: Record<string, unknown>;
     projectId: null | string;
     requirementJourneys: unknown[];
     startTime: Date;
     status: "DRAFT" | "ACTIVE" | "CLOSED";
     user: Record<string, unknown>;
     userId: string;
    } & {
     distributors: {
        id: string;
        status: string;
       }[];
     id: string;
    }[];
  owner: Record<string, unknown>;
  ownerId: string;
  roles: {
     createdAt: Date;
     id: string;
     project: Record<string, unknown>;
     projectId: string;
     role: "ADMIN" | "BUILDER" | "VIEWER";
     updatedAt: Date;
     user: Record<string, unknown>;
     userId: string;
    }[];
  telegram: null | string;
  twitter: null | string;
  updatedAt: Date;
  website: null | string;
}, Error>
```

Defined in: [packages/react/src/hooks/useProject.ts:12](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/react/src/hooks/useProject.ts#L12)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `UseProjectOptions` |

## Returns

`UseQueryResult`\<\{
  `audience`: `unknown`[];
  `createdAt`: `Date`;
  `customEvent`: `unknown`[];
  `description`: `null` \| `string`;
  `discord`: `null` \| `string`;
  `id`: `string`;
  `image`: `null` \| `string`;
  `name`: `string`;
  `offchainAllocationEndpoint`: `null` \| `string`;
  `offchainRewards`: `unknown`[];
  `offers`:   \| `null`
     \| \{
     `audience`: `Record`\<`string`, `unknown`\>;
     `audienceId`: `null` \| `string`;
     `conversions`: `unknown`[];
     `distributors`: `unknown`[];
     `endTime`: `Date`;
     `metadata`: \{
        `backgroundColor`: `null` \| `string`;
        `backgroundImage`: `null` \| `string`;
        `colorMode`: `null` \| `"light"` \| `"dark"`;
        `description`: `null` \| `string`;
        `image`: `null` \| `string`;
        `title`: `string`;
        `url`: `null` \| `string`;
       \};
     `offerJourneys`: `unknown`[];
     `offerRequirements`: `unknown`[];
     `project`: `Record`\<`string`, `unknown`\>;
     `projectId`: `null` \| `string`;
     `requirementJourneys`: `unknown`[];
     `startTime`: `Date`;
     `status`: `"DRAFT"` \| `"ACTIVE"` \| `"CLOSED"`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
    \} & \{
     `distributors`: \{
        `id`: `string`;
        `status`: `string`;
       \}[];
     `id`: `string`;
    \}[];
  `owner`: `Record`\<`string`, `unknown`\>;
  `ownerId`: `string`;
  `roles`: \{
     `createdAt`: `Date`;
     `id`: `string`;
     `project`: `Record`\<`string`, `unknown`\>;
     `projectId`: `string`;
     `role`: `"ADMIN"` \| `"BUILDER"` \| `"VIEWER"`;
     `updatedAt`: `Date`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
    \}[];
  `telegram`: `null` \| `string`;
  `twitter`: `null` \| `string`;
  `updatedAt`: `Date`;
  `website`: `null` \| `string`;
 \}, `Error`\>
