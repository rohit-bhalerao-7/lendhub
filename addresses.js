const ETHAddress = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";

/****************** LOCAL HOST **********************/
// npx hardhat run scripts/deploy.js --network localhost
// const DAITokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
// const LINKTokenAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
// const USDCTokenAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
// const AddressToTokenMapAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
// const LendingConfigAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
// const LendingHelperAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
// const LendingPoolAddress = "0x0165878A594ca255338adfa4d48449f69242Eb8F";

/****************** SEPOLIA TESTNET **********************/

// npx hardhat run scripts/deploy-sepolia.js --network sepolia
const DAITokenAddress = "0x7b2b399d63c613034f1c12ea298Af6412E7267FC";
const LINKTokenAddress = "0x6C4F06d96F4b8c9cD681deaE89DB2d42Fb01A6B1";
const USDCTokenAddress = "0x93618F5a8A1Fd35C06678ca291836EC7e57Ce61E";
const AddressToTokenMapAddress = "0x58D6929136c402137F6E53fe8A8D8999f0Ce28c1";
const LendingConfigAddress = "0x83c01C1f363c322029610abD650E0Abe813240C6";
const LendingHelperAddress = "0x8F61DEeF0453EaAD726DD296afAAfE9c64bd2Bbd";
const LendingPoolAddress = "0x0156980D30C6224895989ab5a5C0Ef63b033687D";
const deployerAddress = "0x2F659E2de2c5E62C26A3a6472Eac6B4e333D9a44";

// deployerAddress : 0x2F659E2de2c5E62C26A3a6472Eac6B4e333D9a44
//  Transferring assets to account1

/********* PRICE FEED ADDRESSES ***********/
// Sepolia PF addresses
// https://docs.chain.link/data-feeds/price-feeds/addresses/#Sepolia%20Testnet
const ETH_USD_PF_ADDRESS = "0x694AA1769357215DE4FAC081bf1f309aDC325306";
const DAI_USD_PF_ADDRESS = "0x14866185B1962B63C3Ea9E03Bc1da838bab34C19";
const USDC_USD_PF_ADDRESS = "0xA2F78ab2355fe2f984D808B5CeE7FD0A93D5270E";
const LINK_USD_PF_ADDRESS = "0xc59E3633BAAC79493d908e63626716e204A45EdF";


//const account1 = "0x4644933680922aE17748753ae20264436ca616cc";
const account1 = "0x2F659E2de2c5E62C26A3a6472Eac6B4e333D9a44";
const account2 = "0x021edEFA528293eB8ad9A2d9e0d71011f6297601";
const account3 = "0xc1f33e8c427fd4126A23A4a9B721BD97Fb11dDe6";

const account4 = "0x315F60449DaB3D321aF75821b576E7F436308635";
const account5 = "0x4B40f99E93A8814be7fDe5F6AaFA5e9823E13728";
const account6 = "0x3f39Ae58Cb1148ec1Ad903648319359Cfdc34a02";

module.exports = {
  ETHAddress,
  DAITokenAddress,
  LINKTokenAddress,
  USDCTokenAddress,
  AddressToTokenMapAddress,
  LendingConfigAddress,
  LendingHelperAddress,
  LendingPoolAddress,
  ETH_USD_PF_ADDRESS,
  DAI_USD_PF_ADDRESS,
  USDC_USD_PF_ADDRESS,
  LINK_USD_PF_ADDRESS,
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
};
