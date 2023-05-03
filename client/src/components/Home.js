// import React, { useEffect } from 'react'
import {useState} from "react"
import "../styles/Home.css"
const BigNumber = require('bignumber.js');

const Home = ({ connectText, RangeState, SpeedState }) => {
    const [RBalance, setRBalance] = useState("0");
    const [SBalance, setSBalance] = useState("0")
    // console.log(connectText, RangeState, SpeedState)
    
    const requestRange = async (event) => {
        event.preventDefault();
        const { contractRange } = RangeState;
        // console.log(contractRange)

        try {
            const gasLimit = "200000";
            const transaction = await contractRange.requestRange({ gasLimit });
            await transaction.wait();
            alert("Transaction is successful. You have received 100 Range tokens")
            // window.location.reload()

        } catch (error) {
            alert("Transaction reverted: Check wallet connection status. \nYou can not request tokens for 5 minutes after you request once")
        }
    }
    const rangeBalance = async (event) => {
        event.preventDefault();
        const {contractRange} = RangeState;
        try{
            const transaction = await contractRange.userBalance();
            const weiBalance = new BigNumber(transaction.toString());
            const ethBalance = parseFloat(weiBalance.toString()) / 1e18;
            setRBalance(ethBalance)
        }catch(error){
            alert(error)
        }
    }
    
    const requestSpeed = async (event) => {
        event.preventDefault();
        const { contractSpeed } = SpeedState;

        try {
            const gasLimit = "200000";
            const transaction = await contractSpeed.requestSpeed({ gasLimit });
            await transaction.wait();
            alert("Transaction is successful. You have received 100 Speed tokens")
            // window.location.reload()

        } catch (error) {
            // console.log(error)
            alert("Transaction reverted: Check wallet connection status. \nYou can not request tokens for 5 minutes after you request once")
        }
    }
    const speedBalance = async (event) => {
        event.preventDefault();
        const {contractSpeed} = SpeedState;

        try{
            const transaction = await contractSpeed.userBalance();
            const weiBalance = new BigNumber(transaction.toString());
            const ethBalance = parseFloat(weiBalance.toString()) / 1e18;
            setSBalance(ethBalance)
        }catch(error){
            alert(error)
        }
    }
    return (
        <div className='home-cont'>
            <div className="notice">
                <p>Make sure your wallet is connected before requesting tokens.</p>
                <h5>{connectText}</h5>
            </div>
            <div className="token-cont">
                <div className="range tokens">
                    <p>Range token</p>
                    <button onClick={requestRange} >Request Range tokens</button>
                    <div className="balance range-balance-btn">
                        <h5>User Balance: {RBalance} RNG</h5>
                        <button onClick={rangeBalance} >Get Range Balance</button>
                    </div>

                </div>
                <div className="speed tokens">
                    <p>Speed token</p>
                    <button onClick={requestSpeed}>Request Speed tokens</button>
                    <div className="balance">
                        <h5>User Balance: {SBalance} SPD</h5>
                        <button onClick={speedBalance}>Get Speed Balance</button>
                    </div>
                </div>

            </div>
            <div className="address">
                <p>Request Limit: 100 tokens per 5 minutes</p>
                <p>Token addresses for importing tokens into your wallet</p>
                <p>Range token: 0xae0152AC71aAD2c309cD966f823D28B1E81E5d1b</p>
                <p>Speed token: 0x0cfbb394B6e9F73D8431c91F539dde1b1e32c091</p>
            </div>
        </div>
    )
}

export default Home
