import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import AuthContext from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Payment = () => {
    const navigate = useNavigate()
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [upiId, setUpiId] = useState('');
    const [membership, setMembership] = useState('');
    const [timing, setTiming] = useState('');
    const [amount, setAmount] = useState(0)

    const [errorMessage, setErrorMessage] = useState('');
    const {accessToken} = useContext(AuthContext)

    const handleSubmit =async (e) => {
        e.preventDefault();
        if(upiId && cardNumber){
            alert('Please choose any one payment method')
        }
        
        
        if(cardNumber){
            if (!cardNumber || !expiry || !cvv || !membership || !timing) {
                setErrorMessage('Please fill out all fields.');
                return;
            }
            if(cardNumber.length < 16){
                setErrorMessage("Invalid Card Number")
                }
        }
        else{
            
        if(!upiId || !membership || !timing){
            setErrorMessage('Please fill out all fields')
            return;
        }
        }
        
        console.log(document.getElementById('timing').value);

        try{
            const timeId=Number(document.getElementById('timing').value);
            const res = axios.post('http://localhost:4080/getmembership',{membership :`${document.getElementById('membership').value}`,timeId:timeId},{
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${accessToken}`
                }
            }
            )
            if(res.status === 200){
                // navigate('/PaymentSuccess');
                console.log('Success');
            }
        }
        catch(e){
            console.log(e)
        }
        setCardNumber('');
        setExpiry('');
        setCvv('');
        setUpiId('');
        setMembership('');
        setTiming('');


    };
    return (
        <div className="min-h-screen pay-bg flex items-center justify-center">
            <div className='overlay'></div>
            <div className="backdrop-blur-xl p-8 shadow-lg rounded-lg w-full md:w-1/2 lg:w-1/3 z-10">
                <h2 className="text-2xl font-bold mb-4 tracking-widest text-white">Secure <span className='text-yellow-400'>Payment</span></h2>

                <form onSubmit={handleSubmit} >
                    <div className="mb-4">
                        <label htmlFor="card-number" className="block text-white font-medium mb-2">
                            Card Number
                        </label>
                        <input
                            type="text"
                            id="card-number"
                            className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                            placeholder="Enter card number"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                    </div>

                    <div className="flex mb-4">
                        <div className="w-1/2 mr-2">
                            <label htmlFor="expiry" className="block text-white font-medium mb-2">
                                Expiry Date
                            </label>
                            <input
                                type="text"
                                id="expiry"
                                className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                                placeholder="MM/YY"
                                value={expiry}
                                onChange={(e) => setExpiry(e.target.value)}
                            />
                        </div>
                        <div className="w-1/2 ml-2">
                            <label htmlFor="cvv" className="block text-white font-medium mb-2">
                                CVV
                            </label>
                            <input
                                type="text"
                                id="cvv"
                                className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                                placeholder="CVV"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                            />
                        </div>
                    </div>

                    <h1 className='text-center text-white text-3xl'>OR</h1>

                    {/* UPI ID section */}
                    <div className="mb-4">
                        <label htmlFor="upi-id" className="block text-white font-medium mb-2">
                            UPI ID
                        </label>
                        <input
                            type="text"
                            id="upi-id"
                            className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                            placeholder="Enter UPI ID"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                        />
                    </div>

                    {/* Membership selection */}
                    <div className="mb-4">
                        <label htmlFor="membership" className="block text-white font-medium mb-2">
                            Select Package
                        </label>
                        <select
                            id="membership"
                            className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                            value={membership}
                            onChange={((e) => setMembership(e.target.value))}
                        >
                            <option value="">Select Membership</option>
                            <option value="basic">Standard Membership: 1500/-</option>
                            <option value="premium">Premium Membership : 2500/-</option>
                            <option value="family">Family Membership : 4000/-</option>
                            <option value="corporate">Corporate Membership : 3000/-</option>
                        </select>
                    </div>

                    {/* Timing selection */}
                    <div className="mb-4">
                        <label htmlFor="timing" className="block text-white font-medium mb-2">
                            Select Timing Slot
                        </label>
                        <select
                            id="timing"
                            className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                            value={timing}
                            onChange={(e) => setTiming(e.target.value)}
                        >
                            <option value="">Select Timing</option>
                            <option value="1" >Morning (5:00 AM - 7:00 AM)</option>
                            <option value="2">Morning (7:00 AM - 9:00 AM)</option>
                            <option value="3">Afternoon (4:00 PM - 6:00 PM)</option>
                            <option value="4">Evening (6:00 PM - 8:00 PM)</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="upi-id" className="block text-white font-medium mb-2">
                            PROMO CODE
                        </label>
                        <input
                            type="text"
                            id="upi-id"
                            className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                            placeholder="Enter PROMO CODE"
                            value={upiId}
                        />
                    </div>

                    {/* Error message section */}
                    {errorMessage && <div className="text-red-500 text-sm mb-4">{errorMessage}</div>}

                    {/* Submit button */}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none"
                    >
                        Pay Now
                    </button>
                </form>
                <p className='text-center text-sm text-white tracking-widest m-3'>This is a dummy Payment Page.The payment API is not integrated</p>
            </div>

        </div>
    );
};

export default Payment
