# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "@cosmjs/cosmwasm-stargate", to: "@cosmjs--cosmwasm-stargate.js" # @0.28.4
pin "#lib/adapters/http.js", to: "#lib--adapters--http.js.js" # @0.21.4
pin "@confio/ics23", to: "@confio--ics23.js" # @0.6.8
pin "@cosmjs/amino", to: "@cosmjs--amino.js" # @0.28.4
pin "@cosmjs/crypto", to: "@cosmjs--crypto.js" # @0.28.4
pin "@cosmjs/encoding", to: "@cosmjs--encoding.js" # @0.28.4
pin "@cosmjs/json-rpc", to: "@cosmjs--json-rpc.js" # @0.28.4
pin "@cosmjs/math", to: "@cosmjs--math.js" # @0.28.4
pin "@cosmjs/proto-signing", to: "@cosmjs--proto-signing.js" # @0.28.4
pin "@cosmjs/socket", to: "@cosmjs--socket.js" # @0.28.4
pin "@cosmjs/stargate", to: "@cosmjs--stargate.js" # @0.28.4
pin "@cosmjs/stream", to: "@cosmjs--stream.js" # @0.28.4
pin "@cosmjs/tendermint-rpc", to: "@cosmjs--tendermint-rpc.js" # @0.28.4
pin "@cosmjs/utils", to: "@cosmjs--utils.js" # @0.28.4
pin "@noble/hashes/crypto", to: "@noble--hashes--crypto.js" # @1.0.0
pin "@noble/hashes/pbkdf2", to: "@noble--hashes--pbkdf2.js" # @1.0.0
pin "@noble/hashes/ripemd160", to: "@noble--hashes--ripemd160.js" # @1.0.0
pin "@noble/hashes/sha256", to: "@noble--hashes--sha256.js" # @1.0.0
pin "@noble/hashes/sha3", to: "@noble--hashes--sha3.js" # @1.0.0
pin "@noble/hashes/sha512", to: "@noble--hashes--sha512.js" # @1.0.0
pin "@protobufjs/aspromise", to: "@protobufjs--aspromise.js" # @1.1.2
pin "@protobufjs/base64", to: "@protobufjs--base64.js" # @1.1.2
pin "@protobufjs/eventemitter", to: "@protobufjs--eventemitter.js" # @1.1.0
pin "@protobufjs/float", to: "@protobufjs--float.js" # @1.0.2
pin "@protobufjs/inquire", to: "@protobufjs--inquire.js" # @1.1.0
pin "@protobufjs/pool", to: "@protobufjs--pool.js" # @1.1.0
pin "@protobufjs/utf8", to: "@protobufjs--utf8.js" # @1.1.0
pin "axios" # @0.21.4
pin "base64-js" # @1.5.1
pin "bech32" # @1.1.4
pin "bn.js" # @5.2.0
pin "brorand" # @1.1.0
pin "buffer" # @2.0.0
pin "cosmjs-types/cosmos/auth/v1beta1/auth", to: "cosmjs-types--cosmos--auth--v1beta1--auth.js" # @0.4.1
pin "cosmjs-types/cosmos/auth/v1beta1/query", to: "cosmjs-types--cosmos--auth--v1beta1--query.js" # @0.4.1
pin "cosmjs-types/cosmos/authz/v1beta1/tx", to: "cosmjs-types--cosmos--authz--v1beta1--tx.js" # @0.4.1
pin "cosmjs-types/cosmos/bank/v1beta1/query", to: "cosmjs-types--cosmos--bank--v1beta1--query.js" # @0.4.1
pin "cosmjs-types/cosmos/bank/v1beta1/tx", to: "cosmjs-types--cosmos--bank--v1beta1--tx.js" # @0.4.1
pin "cosmjs-types/cosmos/base/query/v1beta1/pagination", to: "cosmjs-types--cosmos--base--query--v1beta1--pagination.js" # @0.4.1
pin "cosmjs-types/cosmos/base/v1beta1/coin", to: "cosmjs-types--cosmos--base--v1beta1--coin.js" # @0.4.1
pin "cosmjs-types/cosmos/crypto/multisig/keys", to: "cosmjs-types--cosmos--crypto--multisig--keys.js" # @0.4.1
pin "cosmjs-types/cosmos/crypto/multisig/v1beta1/multisig", to: "cosmjs-types--cosmos--crypto--multisig--v1beta1--multisig.js" # @0.4.1
pin "cosmjs-types/cosmos/crypto/secp256k1/keys", to: "cosmjs-types--cosmos--crypto--secp256k1--keys.js" # @0.4.1
pin "cosmjs-types/cosmos/distribution/v1beta1/query", to: "cosmjs-types--cosmos--distribution--v1beta1--query.js" # @0.4.1
pin "cosmjs-types/cosmos/distribution/v1beta1/tx", to: "cosmjs-types--cosmos--distribution--v1beta1--tx.js" # @0.4.1
pin "cosmjs-types/cosmos/feegrant/v1beta1/tx", to: "cosmjs-types--cosmos--feegrant--v1beta1--tx.js" # @0.4.1
pin "cosmjs-types/cosmos/gov/v1beta1/gov", to: "cosmjs-types--cosmos--gov--v1beta1--gov.js" # @0.4.1
pin "cosmjs-types/cosmos/gov/v1beta1/query", to: "cosmjs-types--cosmos--gov--v1beta1--query.js" # @0.4.1
pin "cosmjs-types/cosmos/gov/v1beta1/tx", to: "cosmjs-types--cosmos--gov--v1beta1--tx.js" # @0.4.1
pin "cosmjs-types/cosmos/mint/v1beta1/query", to: "cosmjs-types--cosmos--mint--v1beta1--query.js" # @0.4.1
pin "cosmjs-types/cosmos/slashing/v1beta1/query", to: "cosmjs-types--cosmos--slashing--v1beta1--query.js" # @0.4.1
pin "cosmjs-types/cosmos/staking/v1beta1/query", to: "cosmjs-types--cosmos--staking--v1beta1--query.js" # @0.4.1
pin "cosmjs-types/cosmos/staking/v1beta1/tx", to: "cosmjs-types--cosmos--staking--v1beta1--tx.js" # @0.4.1
pin "cosmjs-types/cosmos/tx/signing/v1beta1/signing", to: "cosmjs-types--cosmos--tx--signing--v1beta1--signing.js" # @0.4.1
pin "cosmjs-types/cosmos/tx/v1beta1/service", to: "cosmjs-types--cosmos--tx--v1beta1--service.js" # @0.4.1
pin "cosmjs-types/cosmos/tx/v1beta1/tx", to: "cosmjs-types--cosmos--tx--v1beta1--tx.js" # @0.4.1
pin "cosmjs-types/cosmos/vesting/v1beta1/tx", to: "cosmjs-types--cosmos--vesting--v1beta1--tx.js" # @0.4.1
pin "cosmjs-types/cosmos/vesting/v1beta1/vesting", to: "cosmjs-types--cosmos--vesting--v1beta1--vesting.js" # @0.4.1
pin "cosmjs-types/cosmwasm/wasm/v1/query", to: "cosmjs-types--cosmwasm--wasm--v1--query.js" # @0.4.1
pin "cosmjs-types/cosmwasm/wasm/v1/tx", to: "cosmjs-types--cosmwasm--wasm--v1--tx.js" # @0.4.1
pin "cosmjs-types/cosmwasm/wasm/v1/types", to: "cosmjs-types--cosmwasm--wasm--v1--types.js" # @0.4.1
pin "cosmjs-types/google/protobuf/any", to: "cosmjs-types--google--protobuf--any.js" # @0.4.1
pin "cosmjs-types/ibc/applications/transfer/v1/query", to: "cosmjs-types--ibc--applications--transfer--v1--query.js" # @0.4.1
pin "cosmjs-types/ibc/applications/transfer/v1/tx", to: "cosmjs-types--ibc--applications--transfer--v1--tx.js" # @0.4.1
pin "cosmjs-types/ibc/core/channel/v1/channel", to: "cosmjs-types--ibc--core--channel--v1--channel.js" # @0.4.1
pin "cosmjs-types/ibc/core/channel/v1/query", to: "cosmjs-types--ibc--core--channel--v1--query.js" # @0.4.1
pin "cosmjs-types/ibc/core/channel/v1/tx", to: "cosmjs-types--ibc--core--channel--v1--tx.js" # @0.4.1
pin "cosmjs-types/ibc/core/client/v1/query", to: "cosmjs-types--ibc--core--client--v1--query.js" # @0.4.1
pin "cosmjs-types/ibc/core/client/v1/tx", to: "cosmjs-types--ibc--core--client--v1--tx.js" # @0.4.1
pin "cosmjs-types/ibc/core/connection/v1/query", to: "cosmjs-types--ibc--core--connection--v1--query.js" # @0.4.1
pin "cosmjs-types/ibc/core/connection/v1/tx", to: "cosmjs-types--ibc--core--connection--v1--tx.js" # @0.4.1
pin "cosmjs-types/ibc/lightclients/tendermint/v1/tendermint", to: "cosmjs-types--ibc--lightclients--tendermint--v1--tendermint.js" # @0.4.1
pin "crypto" # @2.0.0
pin "define-properties" # @1.1.4
pin "elliptic" # @6.5.4
pin "fs" # @2.0.0
pin "function-bind" # @1.1.1
pin "get-intrinsic" # @1.1.1
pin "globalthis" # @1.0.2
pin "has" # @1.0.3
pin "has-property-descriptors" # @1.0.0
pin "has-symbols" # @1.0.3
pin "hash.js" # @1.1.7
pin "hmac-drbg" # @1.0.1
pin "inherits" # @2.0.4
pin "isomorphic-ws" # @4.0.1
pin "libsodium" # @0.7.10
pin "libsodium-wrappers" # @0.7.10
pin "long" # @4.0.0
pin "minimalistic-assert" # @1.0.1
pin "minimalistic-crypto-utils" # @1.0.1
pin "object-keys" # @1.1.1
pin "pako" # @2.0.4
pin "path" # @2.0.0
pin "process" # @2.0.0
pin "protobufjs/minimal", to: "protobufjs--minimal.js" # @6.11.2
pin "symbol-observable/ponyfill", to: "symbol-observable--ponyfill.js" # @2.0.3
pin "xstream" # @11.14.0
