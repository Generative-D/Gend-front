/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from "@algorandfoundation/algokit-utils";
import type {
  ABIAppCallArg,
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  AppCompilationResult,
  AppReference,
  AppState,
  AppStorageSchema,
  CoreAppCallArgs,
  RawAppCallArgs,
  TealTemplateParams,
} from "@algorandfoundation/algokit-utils/types/app";
import type {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from "@algorandfoundation/algokit-utils/types/app-client";
import type { AppSpec } from "@algorandfoundation/algokit-utils/types/app-spec";
import type {
  SendTransactionResult,
  TransactionToSign,
  SendTransactionFrom,
  SendTransactionParams,
} from "@algorandfoundation/algokit-utils/types/transaction";
import type { ABIResult, TransactionWithSigner } from "algosdk";
import {
  Algodv2,
  OnApplicationComplete,
  Transaction,
  AtomicTransactionComposer,
  modelsv2,
} from "algosdk";
export const APP_SPEC: AppSpec = {
  hints: {
    "hello(string)string": {
      call_config: {
        no_op: "CALL",
      },
    },
    "store_my_data(uint64,address[],string)uint64": {
      call_config: {
        no_op: "CALL",
      },
    },
    "buy_data(uint64,address,pay)uint64": {
      call_config: {
        no_op: "CALL",
      },
    },
  },
  source: {
    approval:
      "I3ByYWdtYSB2ZXJzaW9uIDEwCgpzbWFydF9jb250cmFjdHMuaGVsbG9fd29ybGQuY29udHJhY3QuSGVsbG9Xb3JsZC5hcHByb3ZhbF9wcm9ncmFtOgogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGJueiBtYWluX2VudHJ5cG9pbnRAMgogICAgY2FsbHN1YiBfX2luaXRfXwoKbWFpbl9lbnRyeXBvaW50QDI6CiAgICAvLyBzbWFydF9jb250cmFjdHMvaGVsbG9fd29ybGQvY29udHJhY3QucHk6MjMtMjQKICAgIC8vICMgT3duZXJNeURhdGFzOiB0eXBpbmcuVHlwZUFsaWFzID0gYXJjNC5EeW5hbWljQXJyYXlbT3duZXJNeURhdGFdCiAgICAvLyBjbGFzcyBIZWxsb1dvcmxkKEFSQzRDb250cmFjdCk6CiAgICB0eG4gTnVtQXBwQXJncwogICAgYnogbWFpbl9iYXJlX3JvdXRpbmdAOQogICAgbWV0aG9kICJoZWxsbyhzdHJpbmcpc3RyaW5nIgogICAgbWV0aG9kICJzdG9yZV9teV9kYXRhKHVpbnQ2NCxhZGRyZXNzW10sc3RyaW5nKXVpbnQ2NCIKICAgIG1ldGhvZCAiYnV5X2RhdGEodWludDY0LGFkZHJlc3MscGF5KXVpbnQ2NCIKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDAKICAgIG1hdGNoIG1haW5faGVsbG9fcm91dGVANCBtYWluX3N0b3JlX215X2RhdGFfcm91dGVANSBtYWluX2J1eV9kYXRhX3JvdXRlQDYKICAgIGVyciAvLyByZWplY3QgdHJhbnNhY3Rpb24KCm1haW5faGVsbG9fcm91dGVANDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9oZWxsb193b3JsZC9jb250cmFjdC5weTozMQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBpcyBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9oZWxsb193b3JsZC9jb250cmFjdC5weToyMy0yNAogICAgLy8gIyBPd25lck15RGF0YXM6IHR5cGluZy5UeXBlQWxpYXMgPSBhcmM0LkR5bmFtaWNBcnJheVtPd25lck15RGF0YV0KICAgIC8vIGNsYXNzIEhlbGxvV29ybGQoQVJDNENvbnRyYWN0KToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9oZWxsb193b3JsZC9jb250cmFjdC5weTozMQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgaGVsbG8KICAgIGJ5dGUgMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludCAxCiAgICByZXR1cm4KCm1haW5fc3RvcmVfbXlfZGF0YV9yb3V0ZUA1OgogICAgLy8gc21hcnRfY29udHJhY3RzL2hlbGxvX3dvcmxkL2NvbnRyYWN0LnB5OjM1CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGlzIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL2hlbGxvX3dvcmxkL2NvbnRyYWN0LnB5OjIzLTI0CiAgICAvLyAjIE93bmVyTXlEYXRhczogdHlwaW5nLlR5cGVBbGlhcyA9IGFyYzQuRHluYW1pY0FycmF5W093bmVyTXlEYXRhXQogICAgLy8gY2xhc3MgSGVsbG9Xb3JsZChBUkM0Q29udHJhY3QpOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwogICAgLy8gc21hcnRfY29udHJhY3RzL2hlbGxvX3dvcmxkL2NvbnRyYWN0LnB5OjM1CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzdG9yZV9teV9kYXRhCiAgICBieXRlIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnQgMQogICAgcmV0dXJuCgptYWluX2J1eV9kYXRhX3JvdXRlQDY6CiAgICAvLyBzbWFydF9jb250cmFjdHMvaGVsbG9fd29ybGQvY29udHJhY3QucHk6NjEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gaXMgbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMvaGVsbG9fd29ybGQvY29udHJhY3QucHk6MjMtMjQKICAgIC8vICMgT3duZXJNeURhdGFzOiB0eXBpbmcuVHlwZUFsaWFzID0gYXJjNC5EeW5hbWljQXJyYXlbT3duZXJNeURhdGFdCiAgICAvLyBjbGFzcyBIZWxsb1dvcmxkKEFSQzRDb250cmFjdCk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICB0eG4gR3JvdXBJbmRleAogICAgaW50IDEKICAgIC0KICAgIGR1cAogICAgZ3R4bnMgVHlwZUVudW0KICAgIGludCBwYXkKICAgID09CiAgICBhc3NlcnQgLy8gdHJhbnNhY3Rpb24gdHlwZSBpcyBwYXkKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9oZWxsb193b3JsZC9jb250cmFjdC5weTo2MQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgYnV5X2RhdGEKICAgIGJ5dGUgMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludCAxCiAgICByZXR1cm4KCm1haW5fYmFyZV9yb3V0aW5nQDk6CiAgICAvLyBzbWFydF9jb250cmFjdHMvaGVsbG9fd29ybGQvY29udHJhY3QucHk6MjMtMjQKICAgIC8vICMgT3duZXJNeURhdGFzOiB0eXBpbmcuVHlwZUFsaWFzID0gYXJjNC5EeW5hbWljQXJyYXlbT3duZXJNeURhdGFdCiAgICAvLyBjbGFzcyBIZWxsb1dvcmxkKEFSQzRDb250cmFjdCk6CiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gcmVqZWN0IHRyYW5zYWN0aW9uCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgIQogICAgYXNzZXJ0IC8vIGlzIGNyZWF0aW5nCiAgICBpbnQgMQogICAgcmV0dXJuCgoKLy8gc21hcnRfY29udHJhY3RzLmhlbGxvX3dvcmxkLmNvbnRyYWN0LkhlbGxvV29ybGQuaGVsbG8obmFtZTogYnl0ZXMpIC0+IGJ5dGVzOgpoZWxsbzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9oZWxsb193b3JsZC9jb250cmFjdC5weTozMS0zMgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBoZWxsbyhzZWxmLCBuYW1lOiBhcmM0LlN0cmluZykgLT4gYXJjNC5TdHJpbmc6CiAgICBwcm90byAxIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9oZWxsb193b3JsZC9jb250cmFjdC5weTozMwogICAgLy8gcmV0dXJuICJIZWxsbywgIiArIG5hbWUKICAgIGZyYW1lX2RpZyAtMQogICAgZXh0cmFjdCAyIDAKICAgIGJ5dGUgMHg0ODY1NmM2YzZmMmMyMAogICAgc3dhcAogICAgY29uY2F0CiAgICBkdXAKICAgIGxlbgogICAgaXRvYgogICAgZXh0cmFjdCA2IDIKICAgIHN3YXAKICAgIGNvbmNhdAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLmhlbGxvX3dvcmxkLmNvbnRyYWN0LkhlbGxvV29ybGQuc3RvcmVfbXlfZGF0YSh1bmlxdWVfaWQ6IGJ5dGVzLCBvd25lcl9hZGRyOiBieXRlcywgcHJvbXB0OiBieXRlcykgLT4gYnl0ZXM6CnN0b3JlX215X2RhdGE6CiAgICAvLyBzbWFydF9jb250cmFjdHMvaGVsbG9fd29ybGQvY29udHJhY3QucHk6MzUtNDAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc3RvcmVfbXlfZGF0YSgKICAgIC8vICAgICAgc2VsZiwKICAgIC8vICAgICAgdW5pcXVlX2lkOiBhcmM0LlVJbnQ2NCwKICAgIC8vICAgICAgb3duZXJfYWRkcjogQWRkckFycmF5LAogICAgLy8gICAgICBwcm9tcHQ6IGFyYzQuU3RyaW5nKSAtPiBhcmM0LlVJbnQ2NDoKICAgIHByb3RvIDMgMQogICAgLy8gc21hcnRfY29udHJhY3RzL2hlbGxvX3dvcmxkL2NvbnRyYWN0LnB5OjU5CiAgICAvLyByZXR1cm4gdW5pcXVlX2lkCiAgICBmcmFtZV9kaWcgLTMKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy5oZWxsb193b3JsZC5jb250cmFjdC5IZWxsb1dvcmxkLmJ1eV9kYXRhKHVuaXF1ZV9pZDogYnl0ZXMsIGJ1eWVyOiBieXRlcywgdHg6IHVpbnQ2NCkgLT4gYnl0ZXM6CmJ1eV9kYXRhOgogICAgLy8gc21hcnRfY29udHJhY3RzL2hlbGxvX3dvcmxkL2NvbnRyYWN0LnB5OjYxLTYyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIGJ1eV9kYXRhKHNlbGYsIHVuaXF1ZV9pZDogYXJjNC5VSW50NjQsIGJ1eWVyOiBhcmM0LkFkZHJlc3MsIHR4OiBndHhuLlBheW1lbnRUcmFuc2FjdGlvbikgLT4gYXJjNC5VSW50NjQ6CiAgICBwcm90byAzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9oZWxsb193b3JsZC9jb250cmFjdC5weTo2MwogICAgLy8gcmV0dXJuIHVuaXF1ZV9pZAogICAgZnJhbWVfZGlnIC0zCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMuaGVsbG9fd29ybGQuY29udHJhY3QuSGVsbG9Xb3JsZC5fX2luaXRfXygpIC0+IHZvaWQ6Cl9faW5pdF9fOgogICAgLy8gc21hcnRfY29udHJhY3RzL2hlbGxvX3dvcmxkL2NvbnRyYWN0LnB5OjI2CiAgICAvLyBkZWYgX19pbml0X18oc2VsZikgLT4gTm9uZToKICAgIHByb3RvIDAgMAogICAgLy8gc21hcnRfY29udHJhY3RzL2hlbGxvX3dvcmxkL2NvbnRyYWN0LnB5OjI3CiAgICAvLyByZXR1cm4KICAgIHJldHN1Ygo=",
    clear:
      "I3ByYWdtYSB2ZXJzaW9uIDEwCgpzbWFydF9jb250cmFjdHMuaGVsbG9fd29ybGQuY29udHJhY3QuSGVsbG9Xb3JsZC5jbGVhcl9zdGF0ZV9wcm9ncmFtOgogICAgLy8gc21hcnRfY29udHJhY3RzL2hlbGxvX3dvcmxkL2NvbnRyYWN0LnB5OjIzLTI0CiAgICAvLyAjIE93bmVyTXlEYXRhczogdHlwaW5nLlR5cGVBbGlhcyA9IGFyYzQuRHluYW1pY0FycmF5W093bmVyTXlEYXRhXQogICAgLy8gY2xhc3MgSGVsbG9Xb3JsZChBUkM0Q29udHJhY3QpOgogICAgaW50IDEKICAgIHJldHVybgo=",
  },
  state: {
    global: {
      num_byte_slices: 0,
      num_uints: 0,
    },
    local: {
      num_byte_slices: 0,
      num_uints: 0,
    },
  },
  schema: {
    global: {
      declared: {},
      reserved: {},
    },
    local: {
      declared: {},
      reserved: {},
    },
  },
  contract: {
    name: "HelloWorld",
    methods: [
      {
        name: "hello",
        args: [
          {
            type: "string",
            name: "name",
          },
        ],
        returns: {
          type: "string",
        },
      },
      {
        name: "store_my_data",
        args: [
          {
            type: "uint64",
            name: "unique_id",
          },
          {
            type: "address[]",
            name: "owner_addr",
          },
          {
            type: "string",
            name: "prompt",
          },
        ],
        returns: {
          type: "uint64",
        },
      },
      {
        name: "buy_data",
        args: [
          {
            type: "uint64",
            name: "unique_id",
          },
          {
            type: "address",
            name: "buyer",
          },
          {
            type: "pay",
            name: "tx",
          },
        ],
        returns: {
          type: "uint64",
        },
      },
    ],
    networks: {},
  },
  bare_call_config: {
    no_op: "CREATE",
  },
};

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp = {
  onCompleteAction?: "no_op" | OnApplicationComplete.NoOpOC;
};
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn = {
  onCompleteAction: "opt_in" | OnApplicationComplete.OptInOC;
};
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut = {
  onCompleteAction: "close_out" | OnApplicationComplete.CloseOutOC;
};
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp = {
  onCompleteAction:
    | "delete_application"
    | OnApplicationComplete.DeleteApplicationOC;
};
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp = {
  onCompleteAction:
    | "update_application"
    | OnApplicationComplete.UpdateApplicationOC;
};
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt.
   */
  asBigInt(): bigint;
  /**
   * Gets the state value as a number.
   */
  asNumber(): number;
};
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array;
  /**
   * Gets the state value as a string
   */
  asString(): string;
};

export type AppCreateCallTransactionResult = AppCallTransactionResult &
  Partial<AppCompilationResult> &
  AppReference;
export type AppUpdateCallTransactionResult = AppCallTransactionResult &
  Partial<AppCompilationResult>;

export type AppClientComposeCallCoreParams = Omit<
  AppClientCallCoreParams,
  "sendParams"
> & {
  sendParams?: Omit<
    SendTransactionParams,
    | "skipSending"
    | "atc"
    | "skipWaiting"
    | "maxRoundsToWaitForConfirmation"
    | "populateAppCallResources"
  >;
};
export type AppClientComposeExecuteParams = Pick<
  SendTransactionParams,
  | "skipWaiting"
  | "maxRoundsToWaitForConfirmation"
  | "populateAppCallResources"
  | "suppressLog"
>;

export type IncludeSchema = {
  /**
   * Any overrides for the storage schema to request for the created app; by default the schema indicated by the app spec is used.
   */
  schema?: Partial<AppStorageSchema>;
};

/**
 * Defines the types of available calls and state of the HelloWorld smart contract.
 */
export type HelloWorld = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods: Record<
    "hello(string)string" | "hello",
    {
      argsObj: {
        name: string;
      };
      argsTuple: [name: string];
      returns: string;
    }
  > &
    Record<
      "store_my_data(uint64,address[],string)uint64" | "store_my_data",
      {
        argsObj: {
          uniqueId: bigint | number;
          ownerAddr: string[];
          prompt: string;
        };
        argsTuple: [
          uniqueId: bigint | number,
          ownerAddr: string[],
          prompt: string
        ];
        returns: bigint;
      }
    > &
    Record<
      "buy_data(uint64,address,pay)uint64" | "buy_data",
      {
        argsObj: {
          uniqueId: bigint | number;
          buyer: string;
          tx: TransactionToSign | Transaction | Promise<SendTransactionResult>;
        };
        argsTuple: [
          uniqueId: bigint | number,
          buyer: string,
          tx: TransactionToSign | Transaction | Promise<SendTransactionResult>
        ];
        returns: bigint;
      }
    >;
};
/**
 * Defines the possible abi call signatures
 */
export type HelloWorldSig = keyof HelloWorld["methods"];
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends HelloWorldSig | undefined> = {
  method: TSignature;
  methodArgs: TSignature extends undefined
    ? undefined
    : Array<ABIAppCallArg | undefined>;
} & AppClientCallCoreParams &
  CoreAppCallArgs;
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>;
/**
 * Maps a method signature from the HelloWorld smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends HelloWorldSig> =
  HelloWorld["methods"][TSignature]["argsObj" | "argsTuple"];
/**
 * Maps a method signature from the HelloWorld smart contract to the method's return type
 */
export type MethodReturn<TSignature extends HelloWorldSig> =
  HelloWorld["methods"][TSignature]["returns"];

/**
 * A factory for available 'create' calls
 */
export type HelloWorldCreateCalls = (typeof HelloWorldCallFactory)["create"];
/**
 * Defines supported create methods for this smart contract
 */
export type HelloWorldCreateCallParams =
  | TypedCallParams<undefined> & OnCompleteNoOp;
/**
 * Defines arguments required for the deploy method.
 */
export type HelloWorldDeployArgs = {
  deployTimeParams?: TealTemplateParams;
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (
    callFactory: HelloWorldCreateCalls
  ) => HelloWorldCreateCallParams;
};

/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class HelloWorldCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the HelloWorld smart contract using a bare call
       *
       * @param params Any parameters for the call
       * @returns A TypedCallParams object for the call
       */
      bare(
        params: BareCallArgs &
          AppClientCallCoreParams &
          CoreAppCallArgs &
          AppClientCompilationParams &
          OnCompleteNoOp = {}
      ) {
        return {
          method: undefined,
          methodArgs: undefined,
          ...params,
        };
      },
    };
  }

  /**
   * Constructs a no op call for the hello(string)string ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static hello(
    args: MethodArgs<"hello(string)string">,
    params: AppClientCallCoreParams & CoreAppCallArgs
  ) {
    return {
      method: "hello(string)string" as const,
      methodArgs: Array.isArray(args) ? args : [args.name],
      ...params,
    };
  }
  /**
   * Constructs a no op call for the store_my_data(uint64,address[],string)uint64 ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static storeMyData(
    args: MethodArgs<"store_my_data(uint64,address[],string)uint64">,
    params: AppClientCallCoreParams & CoreAppCallArgs
  ) {
    return {
      method: "store_my_data(uint64,address[],string)uint64" as const,
      methodArgs: Array.isArray(args)
        ? args
        : [args.uniqueId, args.ownerAddr, args.prompt],
      ...params,
    };
  }
  /**
   * Constructs a no op call for the buy_data(uint64,address,pay)uint64 ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static buyData(
    args: MethodArgs<"buy_data(uint64,address,pay)uint64">,
    params: AppClientCallCoreParams & CoreAppCallArgs
  ) {
    return {
      method: "buy_data(uint64,address,pay)uint64" as const,
      methodArgs: Array.isArray(args)
        ? args
        : [args.uniqueId, args.buyer, args.tx],
      ...params,
    };
  }
}

/**
 * A client to make calls to the HelloWorld smart contract
 */
export class HelloWorldClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient;

  private readonly sender: SendTransactionFrom | undefined;

  /**
   * Creates a new instance of `HelloWorldClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender;
    this.appClient = algokit.getAppClient(
      {
        ...appDetails,
        app: APP_SPEC,
      },
      algod
    );
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<
    TReturn,
    TResult extends AppCallTransactionResult = AppCallTransactionResult
  >(
    result: AppCallTransactionResult,
    returnValueFormatter?: (value: any) => TReturn
  ): AppCallTransactionResultOfType<TReturn> & TResult {
    if (result.return?.decodeError) {
      throw result.return.decodeError;
    }
    const returnValue =
      result.return?.returnValue !== undefined &&
      returnValueFormatter !== undefined
        ? returnValueFormatter(result.return.returnValue)
        : (result.return?.returnValue as TReturn | undefined);
    return {
      ...result,
      return: returnValue,
    } as AppCallTransactionResultOfType<TReturn> & TResult;
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof HelloWorld["methods"]>(
    typedCallParams: TypedCallParams<TSignature>,
    returnValueFormatter?: (value: any) => MethodReturn<TSignature>
  ) {
    return this.mapReturnValue<MethodReturn<TSignature>>(
      await this.appClient.call(typedCallParams),
      returnValueFormatter
    );
  }

  /**
   * Idempotently deploys the HelloWorld smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(
    params: HelloWorldDeployArgs &
      AppClientDeployCoreParams &
      IncludeSchema = {}
  ): ReturnType<ApplicationClient["deploy"]> {
    const createArgs = params.createCall?.(HelloWorldCallFactory.create);
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    });
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this;
    return {
      /**
       * Creates a new instance of the HelloWorld smart contract using a bare call.
       *
       * @param args The arguments for the bare call
       * @returns The create result
       */
      async bare(
        args: BareCallArgs &
          AppClientCallCoreParams &
          AppClientCompilationParams &
          IncludeSchema &
          CoreAppCallArgs &
          OnCompleteNoOp = {}
      ) {
        return $this.mapReturnValue<undefined, AppCreateCallTransactionResult>(
          await $this.appClient.create(args)
        );
      },
    };
  }

  /**
   * Makes a clear_state call to an existing instance of the HelloWorld smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(
    args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}
  ) {
    return this.appClient.clearState(args);
  }

  /**
   * Calls the hello(string)string ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public hello(
    args: MethodArgs<"hello(string)string">,
    params: AppClientCallCoreParams & CoreAppCallArgs = {}
  ) {
    return this.call(HelloWorldCallFactory.hello(args, params));
  }

  /**
   * Calls the store_my_data(uint64,address[],string)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public storeMyData(
    args: MethodArgs<"store_my_data(uint64,address[],string)uint64">,
    params: AppClientCallCoreParams & CoreAppCallArgs = {}
  ) {
    return this.call(HelloWorldCallFactory.storeMyData(args, params));
  }

  /**
   * Calls the buy_data(uint64,address,pay)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public buyData(
    args: MethodArgs<"buy_data(uint64,address,pay)uint64">,
    params: AppClientCallCoreParams & CoreAppCallArgs = {}
  ) {
    return this.call(HelloWorldCallFactory.buyData(args, params));
  }

  public compose(): HelloWorldComposer {
    const client = this;
    const atc = new AtomicTransactionComposer();
    let promiseChain: Promise<unknown> = Promise.resolve();
    const resultMappers: Array<undefined | ((x: any) => any)> = [];
    return {
      hello(
        args: MethodArgs<"hello(string)string">,
        params?: AppClientComposeCallCoreParams & CoreAppCallArgs
      ) {
        promiseChain = promiseChain.then(() =>
          client.hello(args, {
            ...params,
            sendParams: { ...params?.sendParams, skipSending: true, atc },
          })
        );
        resultMappers.push(undefined);
        return this;
      },
      storeMyData(
        args: MethodArgs<"store_my_data(uint64,address[],string)uint64">,
        params?: AppClientComposeCallCoreParams & CoreAppCallArgs
      ) {
        promiseChain = promiseChain.then(() =>
          client.storeMyData(args, {
            ...params,
            sendParams: { ...params?.sendParams, skipSending: true, atc },
          })
        );
        resultMappers.push(undefined);
        return this;
      },
      buyData(
        args: MethodArgs<"buy_data(uint64,address,pay)uint64">,
        params?: AppClientComposeCallCoreParams & CoreAppCallArgs
      ) {
        promiseChain = promiseChain.then(() =>
          client.buyData(args, {
            ...params,
            sendParams: { ...params?.sendParams, skipSending: true, atc },
          })
        );
        resultMappers.push(undefined);
        return this;
      },
      clearState(
        args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs
      ) {
        promiseChain = promiseChain.then(() =>
          client.clearState({
            ...args,
            sendParams: { ...args?.sendParams, skipSending: true, atc },
          })
        );
        resultMappers.push(undefined);
        return this;
      },
      addTransaction(
        txn:
          | TransactionWithSigner
          | TransactionToSign
          | Transaction
          | Promise<SendTransactionResult>,
        defaultSender?: SendTransactionFrom
      ) {
        promiseChain = promiseChain.then(async () =>
          atc.addTransaction(
            await algokit.getTransactionWithSigner(
              txn,
              defaultSender ?? client.sender
            )
          )
        );
        return this;
      },
      async atc() {
        await promiseChain;
        return atc;
      },
      async simulate(options?: SimulateOptions) {
        await promiseChain;
        const result = await atc.simulate(
          client.algod,
          new modelsv2.SimulateRequest({ txnGroups: [], ...options })
        );
        return {
          ...result,
          returns: result.methodResults?.map((val, i) =>
            resultMappers[i] !== undefined
              ? resultMappers[i]!(val.returnValue)
              : val.returnValue
          ),
        };
      },
      async execute(sendParams?: AppClientComposeExecuteParams) {
        await promiseChain;
        const result = await algokit.sendAtomicTransactionComposer(
          { atc, sendParams },
          client.algod
        );
        return {
          ...result,
          returns: result.returns?.map((val, i) =>
            resultMappers[i] !== undefined
              ? resultMappers[i]!(val.returnValue)
              : val.returnValue
          ),
        };
      },
    } as unknown as HelloWorldComposer;
  }
}
export type HelloWorldComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the hello(string)string ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  hello(
    args: MethodArgs<"hello(string)string">,
    params?: AppClientComposeCallCoreParams & CoreAppCallArgs
  ): HelloWorldComposer<[...TReturns, MethodReturn<"hello(string)string">]>;

  /**
   * Calls the store_my_data(uint64,address[],string)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  storeMyData(
    args: MethodArgs<"store_my_data(uint64,address[],string)uint64">,
    params?: AppClientComposeCallCoreParams & CoreAppCallArgs
  ): HelloWorldComposer<
    [...TReturns, MethodReturn<"store_my_data(uint64,address[],string)uint64">]
  >;

  /**
   * Calls the buy_data(uint64,address,pay)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  buyData(
    args: MethodArgs<"buy_data(uint64,address,pay)uint64">,
    params?: AppClientComposeCallCoreParams & CoreAppCallArgs
  ): HelloWorldComposer<
    [...TReturns, MethodReturn<"buy_data(uint64,address,pay)uint64">]
  >;

  /**
   * Makes a clear_state call to an existing instance of the HelloWorld smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(
    args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs
  ): HelloWorldComposer<[...TReturns, undefined]>;

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(
    txn:
      | TransactionWithSigner
      | TransactionToSign
      | Transaction
      | Promise<SendTransactionResult>,
    defaultSender?: SendTransactionFrom
  ): HelloWorldComposer<TReturns>;
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>;
  /**
   * Simulates the transaction group and returns the result
   */
  simulate(
    options?: SimulateOptions
  ): Promise<HelloWorldComposerSimulateResult<TReturns>>;
  /**
   * Executes the transaction group and returns the results
   */
  execute(
    sendParams?: AppClientComposeExecuteParams
  ): Promise<HelloWorldComposerResults<TReturns>>;
};
export type SimulateOptions = Omit<
  ConstructorParameters<typeof modelsv2.SimulateRequest>[0],
  "txnGroups"
>;
export type HelloWorldComposerSimulateResult<TReturns extends [...any[]]> = {
  returns: TReturns;
  methodResults: ABIResult[];
  simulateResponse: modelsv2.SimulateResponse;
};
export type HelloWorldComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns;
  groupId: string;
  txIds: string[];
  transactions: Transaction[];
};