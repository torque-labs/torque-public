[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / TemplateInput

# Type Alias: TemplateInput

```ts
type TemplateInput = {
  description: string | null;
  name: string;
 } & 
  | {
  template: {
     endTime: Date;
     metadata: {
        backgroundColor: string | null;
        backgroundImage: string | null;
        colorMode: ... | ... | null;
        description: string | null;
        image: string | null;
        title: string;
        url: string | null;
       };
     startTime: Date;
     status: "DRAFT" | "ACTIVE" | "CLOSED";
    };
  type: "OFFER";
 }
  | {
  template: {
     name: string;
    } & 
     | {
     addresses: ... | ...;
     slug: ... | ...;
     type: "ALLOWLIST";
    }
     | {
     addresses: ... | ...;
     slug: ... | ...;
     type: "DENYLIST";
    }
     | {
     address: ... | ...;
     amount: number;
     tokenGateType: "NFT" | "SPL";
     type: "TOKEN_GATE";
    };
  type: "AUDIENCE";
 }
  | {
  template: {
     activation:   | {
        type: "OFFER_START";
       }
        | {
        type: "OFFER_CONCLUSION";
       }
        | {
        type: "CONVERSION_COUNT";
       }
        | {
        amount: number;
        oracle:   | "TORQUE"
           | "SOLANA_TX"
           | "CUSTOM_EVENT_PROVIDER"
           | "PYTH_MKT_CAP"
           | "PYTH_MKT_VOLUME"
           | "MESSAGE_SIGNATURE"
           | "SOCIAL_MEDIA";
        type: "EVENT";
       }
        | {
        date: Date;
        type: "DATE";
       } & {
        requiredConversionCount: number;
       };
     availability:   | {
        maxConversionsPerRecipient: ...;
        maxTotalConversions: ...;
        recipientConversionPeriod: ...;
       }
        | null;
     distributionFunctionInput:   | {
        type: "CONVERSION_INDEX";
       }
        | {
        max: number | null;
        min: number | null;
        type: "CONVERSION_DATA";
       }
        | {
        aggregationType: "BUY_VOLUME" | "BUY_AVERAGE";
        type: "AGGREGATION";
       };
     recipient: "USER" | "PUBLISHER" | "BOTH" | "NONE";
    };
  type: "CRANK_GUARD";
 }
  | {
  template:   | {
     type: "CONSTANT";
     yIntercept: number;
    }
     | {
     slope: number;
     trend: "NEGATIVE" | "POSITIVE";
     type: "LINEAR";
     yIntercept: number;
    }
     | {
     tiers: {
        input: number;
        output: number;
       }[];
     type: "STEP";
    }
     | {
     curveDepth: number;
     curveWidth: number;
     type: "EXPONENTIAL";
     yIntercept: number;
    };
  type: "DISTRIBUTION_FUNCTION";
 }
  | {
  template: {
     closeTxSignature: string | null;
     conversions: number | null;
     crankerStatus: "IDLE" | "RUNNING" | "STOPPED";
     crankGuard: {
        activation:   | {
           type: ...;
          }
           | {
           type: ...;
          }
           | {
           type: ...;
          }
           | {
           amount: ...;
           oracle: ...;
           type: ...;
          }
           | {
           date: ...;
           type: ...;
          } & {
           requiredConversionCount: number;
          };
        availability:   | {
           maxConversionsPerRecipient: ...;
           maxTotalConversions: ...;
           recipientConversionPeriod: ...;
          }
           | null;
        distributionFunctionInput:   | {
           type: "CONVERSION_INDEX";
          }
           | {
           max: ...;
           min: ...;
           type: "CONVERSION_DATA";
          }
           | {
           aggregationType: "BUY_VOLUME" | "BUY_AVERAGE";
           type: "AGGREGATION";
          };
        recipient: "USER" | "PUBLISHER" | "BOTH" | "NONE";
       };
     currentBlockHash: string | null;
     deployTxSignature: string | null;
     distributionFunction: {
        createdAt: Date;
        curveDepth: ... | null;
        curveWidth: ... | null;
        id: string;
        slope: ... | null;
        tiers: any | null;
        trend: ... | null;
        type: "CONSTANT" | "LINEAR" | "STEP" | "EXPONENTIAL";
        updatedAt: Date;
        yIntercept: ... | null;
       };
     emissionType: "SOL" | "TOKENS" | "NFT" | "POINTS";
     index: number;
     pubkey: string;
     serializedDeployTx: string | null;
     status: "DRAFT" | "ACTIVE" | "CLOSED";
     tokenAddress: string | null;
     tokenDecimals: number;
     totalFundAmount:   | number
        | string
        | {
        d: number[];
        e: number;
        s: number;
       };
     type: "CONVERSION" | "ASYMMETRIC";
    };
  type: "DISTRIBUTOR";
 }
  | {
  template:   | {
     config: {
        amount: {
           max: ... | ...;
           min: ... | ...;
           type: "number";
          };
        tokenAddress: {
           type: "string";
           validation: ... | ...;
           value: string;
          };
       };
     oracle: "SOLANA_TX";
     type: "BURN";
    }
     | {
     config: {
        amount: {
           max: ... | ...;
           min: ... | ...;
           type: "number";
          };
        tokenAddress: {
           type: "string";
           validation: ... | ...;
           value: string;
          };
       };
     oracle: "SOLANA_TX";
     type: "BUY";
    }
     | {
     config: {
        amount: {
           max: ... | ...;
           min: ... | ...;
           type: "number";
          };
        tokenAddress: {
           type: "string";
           validation: ... | ...;
           value: string;
          };
       };
     oracle: "SOLANA_TX";
     type: "SELL";
    }
     | {
     config: {
        amount: {
           max: ... | ...;
           min: ... | ...;
           type: "number";
          };
        seconds: number;
        validatorAddress: {
           type: "string";
           validation: ... | ...;
           value: string;
          };
       };
     oracle: "SOLANA_TX";
     type: "STAKE_SOL";
    }
     | {
     config: {
        customProgram: {
           type: ...;
           validation: ...;
           value: ...;
          };
        dao: {
           type: "string";
           validation: ... | ...;
           value: string;
          };
        proposal: {
           type: "string";
           validation: ... | ...;
           value: string;
          };
       };
     oracle: "SOLANA_TX";
     type: "VOTE";
    }
     | {
     config: {
        message: {
           type: "string";
           validation: ... | ...;
           value: string;
          };
       };
     oracle: "MESSAGE_SIGNATURE";
     type: "MESSAGE_SIGNATURE";
    }
     | {
     config: {
        targetId: {
           type: "string";
           validation: ... | ...;
           value: string;
          };
       };
     oracle: "SOCIAL_MEDIA";
     type: "X_FOLLOW";
    }
     | {
     config: {
        targetId: {
           type: "string";
           validation: ... | ...;
           value: string;
          };
       };
     oracle: "SOCIAL_MEDIA";
     type: "X_LIKE";
    }
     | {
     config: {
        targetId: {
           type: "string";
           validation: ... | ...;
           value: string;
          };
       };
     oracle: "SOCIAL_MEDIA";
     type: "X_REPOST";
    }
     | {
     config: {
        targetId: {
           type: "string";
           validation: ... | ...;
           value: string;
          };
       };
     oracle: "SOCIAL_MEDIA";
     type: "X_COMMENT";
    }
     | {
     config: {
        eventName: string;
        fields: ...[];
       };
     oracle: "CUSTOM_EVENT_PROVIDER";
     type: "CUSTOM";
    }
     | {
     config: {
        amount: {
           max: ... | ...;
           min: ... | ...;
           type: "number";
          };
        proposal: {
           type: "string";
           validation: ... | ...;
           value: string;
          };
       };
     oracle: "CUSTOM_EVENT_PROVIDER";
     type: "META_DAO_BUY";
    } & {
     actionUrl: string | null;
     oracle:   | "TORQUE"
        | "SOLANA_TX"
        | "CUSTOM_EVENT_PROVIDER"
        | "PYTH_MKT_CAP"
        | "PYTH_MKT_VOLUME"
        | "MESSAGE_SIGNATURE"
        | "SOCIAL_MEDIA";
    };
  type: "OFFER_REQUIREMENT";
};
```

Defined in: sdk/src/types/schemaTypes.ts:2194

## Type declaration

| Name | Type |
| ------ | ------ |
| `description?` | `string` \| `null` |
| `name` | `string` |
