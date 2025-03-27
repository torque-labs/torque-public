# Type Alias: ApiAudience

[**@torque-labs/torque-ts-sdk**](../) • **Docs**

***

[@torque-labs/torque-ts-sdk](../) / ApiAudience

## Type Alias: ApiAudience

```ts
type ApiAudience: {
  bucket: string;
  config: object;
  description: string;
  fileKey: string;
  global: boolean;
  id: string;
  title: string;
  type: AudienceType;
};
```

Audience data.

### Type declaration

| Name           | Type                                              |
| -------------- | ------------------------------------------------- |
| `bucket`?      | `string`                                          |
| `config`       | `object`                                          |
| `description`? | `string`                                          |
| `fileKey`?     | `string`                                          |
| `global`       | `boolean`                                         |
| `id`           | `string`                                          |
| `title`        | `string`                                          |
| `type`         | [`AudienceType`](../enumerations/audiencetype.md) |

### Defined in

[src/types/api.ts:152](https://github.com/torque-labs/torque-ts-sdk/blob/a30afeab92cb119627ec542f4c8aff2dd9faf383/src/types/api.ts#L152)
