const HEX_ADDRESS = "0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39";
const HDRN_ADDRESS = "0x3819f64f282bf135d62168C1e513280dAF905e06";
const ICSA_ADDRESS = "0xfc4913214444aF5c715cc9F7b52655e788A569ed";

const web3ETH = new Web3("https://rpc.ankr.com/eth"); 
const web3ETHW = new Web3("https://mainnet.ethereumpow.org"); 
const web3ETHF = new Web3("https://rpc.etherfair.org/"); 

const hexContractETH = new web3ETH.eth.Contract(HEX_ABI, HEX_ADDRESS);
const hexContractETHW = new web3ETHW.eth.Contract(HEX_ABI, HEX_ADDRESS);
const hexContractETHF = new web3ETHF.eth.Contract(HEX_ABI, HEX_ADDRESS);

const hdrnContractETH = new web3ETH.eth.Contract(HDRN_ABI, HDRN_ADDRESS);
const hdrnContractETHW = new web3ETHW.eth.Contract(HDRN_ABI, HDRN_ADDRESS);
const hdrnContractETHF = new web3ETHF.eth.Contract(HDRN_ABI, HDRN_ADDRESS);

const icsaContractETH = new web3ETH.eth.Contract(ICSA_ABI, ICSA_ADDRESS);
const icsaContractETHW = new web3ETHW.eth.Contract(ICSA_ABI, ICSA_ADDRESS);
const icsaContractETHF = new web3ETHF.eth.Contract(ICSA_ABI, ICSA_ADDRESS);

async function getBalance(contract,provider,wallet_address) {
    const balance = await contract.methods.balanceOf(wallet_address).call();
    const decimals = await contract.methods.decimals().call();
    return(balance/10**decimals)
}

var content1 = document.getElementById("content");
var form1 = document.createElement("form");
form1.id="getBalanceForm";
var p1 = document.createElement("p");
p1.textContent="Enter your Ethereum wallet address:";
var input_type1=document.createElement("input");
input_type1.type="text";
input_type1.id="walletAddress";
input_type1.name="walletAddress";
var button1=document.createElement("button");
button1.type="submit";
button1.textContent="Get ETH Balance";
var pETH = document.createElement("p");
pETH.id="balanceResult";
var pETHW = document.createElement("p");
pETHW.id="balanceResult";
var pETHF = document.createElement("p");
pETHF.id="balanceResult";
var pETH_Hex = document.createElement("p");
pETH_Hex.id="balanceResult";
var pETHW_Hex = document.createElement("p");
pETHW_Hex.id="balanceResult";
var pETHF_Hex = document.createElement("p");
pETHF_Hex.id="balanceResult";

var pETH_HDRN = document.createElement("p");
pETH_HDRN.id="balanceResult";
var pETHW_HDRN = document.createElement("p");
pETHW_HDRN.id="balanceResult";
var pETHF_HDRN = document.createElement("p");
pETHF_HDRN.id="balanceResult";

var pETH_ICSA = document.createElement("p");
pETH_ICSA.id="balanceResult";
var pETHW_ICSA = document.createElement("p");
pETHW_ICSA.id="balanceResult";
var pETHF_ICSA = document.createElement("p");
pETHF_ICSA.id="balanceResult";

content1.appendChild(form1);
form1.appendChild(p1);
form1.appendChild(input_type1);
form1.appendChild(button1);
content1.appendChild(pETH);
content1.appendChild(pETH_Hex);
content1.appendChild(pETH_HDRN);
content1.appendChild(pETH_ICSA);
content1.appendChild(pETHW);
content1.appendChild(pETHW_Hex);
content1.appendChild(pETHW_HDRN);
content1.appendChild(pETHW_ICSA);
content1.appendChild(pETHF);
content1.appendChild(pETHF_Hex);
content1.appendChild(pETHF_HDRN);
content1.appendChild(pETHF_ICSA);

//0xe7D0d7a9699E15326B725865Bd38d1205f7cA557
//0xB7e27A1539c9C912454D818692BA1d53f68a4917
//const balanceResult = document.getElementById("balanceResult");

      form1.addEventListener("submit", async (event) => {
        event.preventDefault();
        const walletAddress = event.target.elements.walletAddress.value;
        const balanceETH = await getETHBalance(walletAddress,"mainnet");
        const balanceETHW = await getETHBalance(walletAddress,"https://mainnet.ethereumpow.org");
        const balanceETHF = await getETHBalance(walletAddress,"https://rpc.etherfair.org/");
        
        const balanceHEX_ETH = await getBalance(hexContractETH,web3ETH,walletAddress);
        const balanceHEX_ETHW = await getBalance(hexContractETHW,web3ETHW,walletAddress);
        const balanceHEX_ETHF = await getBalance(hexContractETHF,web3ETHF,walletAddress);
        
        const balanceHDRN_ETH = await getBalance(hdrnContractETH,web3ETH,walletAddress);
        const balanceHDRN_ETHW = await getBalance(hdrnContractETHW,web3ETHW,walletAddress);
        const balanceHDRN_ETHF = await getBalance(hdrnContractETHF,web3ETHF,walletAddress);       

        const balanceICSA_ETH = await getBalance(icsaContractETH,web3ETH,walletAddress);
        const balanceICSA_ETHW = await getBalance(icsaContractETHW,web3ETHW,walletAddress);
        const balanceICSA_ETHF = await getBalance(icsaContractETHF,web3ETHF,walletAddress);     

        pETH.innerText = `Balance: ${balanceETH} ETH`;
            pETH_Hex.innerText = `HEX: ${balanceHEX_ETH}`;
            pETH_HDRN.innerText = `HDRN: ${balanceHDRN_ETH}`;   
            pETH_ICSA.innerText = `ICSA: ${balanceICSA_ETH}`;                       
        pETHW.innerText = `Balance: ${balanceETHW} ETHW`;
            pETHW_Hex.innerText = `HEXW: ${balanceHEX_ETHW}`;
            pETHW_HDRN.innerText = `HDRN: ${balanceHDRN_ETHW}`;      
            pETHW_ICSA.innerText = `ICSA: ${balanceICSA_ETHW}`;                       
        pETHF.innerText = `Balance: ${balanceETHF} ETHF`;
            pETHF_Hex.innerText = `HEXF: ${balanceHEX_ETHF}`;
            pETHF_HDRN.innerText = `HDRN: ${balanceHDRN_ETHF}`;
            pETHF_ICSA.innerText = `ICSA: ${balanceICSA_ETHF}`;                             
        
      });

      async function getETHBalance(walletAddress,provider_address) {
        const provider = ethers.getDefaultProvider(provider_address);
        const balance = await provider.getBalance(walletAddress);
        return ethers.utils.formatEther(balance);
      }