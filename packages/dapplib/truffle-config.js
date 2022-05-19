require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth payment collect gesture hidden swift gentle'; 
let testAccounts = [
"0x32079a84a004c66bf946e07f1e62d2a45683573103dc7a2db36c470333ae780b",
"0x3dd0b8fbd848d9df89844ef75362640919790f2254c677dc2f9161d93b7e645a",
"0xa17a153544f042a7e59aa0b09c7d6a5ed53dc39f13ae369a3dcf95c324d04db9",
"0x4910c1a0ab7aed99083a192c33d08c2ac89454d763fb990e0fde8252d47e2845",
"0xeb5838777a0e02ed4896b79b0beb9eb95ae4452c728b94263926310956e1eff7",
"0xdd19191b1f773e1cad1789079d1989f8bdcbb11d80d7277d7990db9b6cd87b6c",
"0x1213ebde24ef9f9fb0da9132a13f4d3886db710e6596f55ebd557e251f4ea0c3",
"0xd7e803e5aed997bf4c67197b383bc7b43fe525fb941a5c55b366e5d03f08124b",
"0xa940bfae952f019009c7961eb466daf2d4a729cf123a95c90114eb9ab4c1378b",
"0xb92e06fb9e8502b9b60d0d30d7f8ce21431c0bc5231c1f5f58c688d8c82a2bc1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

