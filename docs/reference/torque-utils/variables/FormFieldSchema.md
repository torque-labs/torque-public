[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / FormFieldSchema

# Variable: FormFieldSchema

> `const` **FormFieldSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

Individual form field schema

## Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`label`

</td>
<td>

`ZodString`

</td>
<td>

The label for the field

</td>
<td>

[types/eventConfig/requirements.ts:268](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/requirements.ts#L268)

</td>
</tr>
<tr>
<td>

`name`

</td>
<td>

`ZodString`

</td>
<td>

The name of the field

</td>
<td>

[types/eventConfig/requirements.ts:264](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/requirements.ts#L264)

</td>
</tr>
<tr>
<td>

`options`

</td>
<td>

`ZodOptional`\<`ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>\>

</td>
<td>

The options for the field (eg. dropdowns/select)

</td>
<td>

[types/eventConfig/requirements.ts:280](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/requirements.ts#L280)

</td>
</tr>
<tr>
<td>

`required`

</td>
<td>

`ZodOptional`\<`ZodNullable`\<`ZodBoolean`\>\>

</td>
<td>

Whether the field is required or not

</td>
<td>

[types/eventConfig/requirements.ts:276](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/requirements.ts#L276)

</td>
</tr>
<tr>
<td>

`type`

</td>
<td>

`ZodNativeEnum`\<*typeof* [`FormFieldType`](../enumerations/FormFieldType.md)\>

</td>
<td>

The type of field

</td>
<td>

[types/eventConfig/requirements.ts:272](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/requirements.ts#L272)

</td>
</tr>
</tbody>
</table>

## Defined in

[types/eventConfig/requirements.ts:260](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/requirements.ts#L260)
