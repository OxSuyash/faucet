import './App.css';
import RangeABI from "./contracts/RangeFaucet.json"
import SpeedABI from "./contracts/SpeedFaucet.json"
import {useState} from "react"
import { ethers } from 'ethers';
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  const [RangeState, setRangeState] = useState({
    provider: null,
    signer: null,
    contract: null
  })
  const [SpeedState, setSpeedState] = useState({
    provider: null,
    signer: null,
    contract: null
  })
  // const [state, setState] = useState({
  //   provider: null,
  //   signer: null,
  //   contract: null
  // })

  const [connectText, setConnectText] = useState("Wallet not connected.")
  const [buttonText, setButtonText] = useState("Connect Wallet")

  const connectWallet = async () => {
    const RangeContractAddress = "0x1F0aAE3DE02488b66953e6CE9cC5Fef028D22549";
    const SpeedContractAddress = "0xF5b4e6227AB8cAf5369b90a878318c566Bfb9d0A";
    const RangeContractABI = RangeABI.abi;
    const SpeedContractABI = SpeedABI.abi;
    // console.log(RangeContractABI)
    // console.log(SpeedContractABI)
    try {
      const { ethereum } = window;

      if (ethereum) {
        const account = await ethereum.request({ method: "eth_requestAccounts", })
        setConnectText(account)
        setButtonText("Connected")
        
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        })
        window.ethereum.on("accountChanged", () => {
          window.location.reload();
        })
        
      const provider = await new ethers.providers.Web3Provider(ethereum);
        // console.log(provider)
      const signer = await provider.getSigner();
      // console.log(signer)
      const contractRange = await new ethers.Contract(RangeContractAddress, RangeContractABI, signer);
      const contractSpeed = await new ethers.Contract(SpeedContractAddress, SpeedContractABI, signer);
      setRangeState({ provider, signer, contractRange })
      setSpeedState({ provider, signer, contractSpeed })
      // console.log(signer)
      }
      else{
        alert("Please install Metamask")
      }
    } catch (error) {
      console.log(error)
    }
  }
  // connectWallet();
  // }, [])
  // console.log(state)

  return (
    <>
    <Header connectWallet={connectWallet} buttonText={buttonText}/>
    <Router>
      <Routes>
      <Route  path="/" element={<Home connectText={connectText} RangeState={RangeState} SpeedState={SpeedState}/>} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
