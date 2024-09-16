// // // // // // // // // // // src/PaymentPage.js

// // // // // // // // // // import React, { useState } from 'react';


// // // // // // // // // // const PaymentPage = () => {
// // // // // // // // // //     const [paymentMethod, setPaymentMethod] = useState('UPI');
// // // // // // // // // //     const [amount] = useState(5000); // This should ideally come from session or backend
// // // // // // // // // //     const [upiId, setUpiId] = useState('');
// // // // // // // // // //     const [cardNumber, setCardNumber] = useState('');
// // // // // // // // // //     const [cardExpiry, setCardExpiry] = useState('');
// // // // // // // // // //     const [cardCVV, setCardCVV] = useState('');
// // // // // // // // // //     const [payDate] = useState(new Date().toISOString().split('T')[0]);
// // // // // // // // // //     const [isProcessing, setIsProcessing] = useState(false);
// // // // // // // // // //     const [showOtp, setShowOtp] = useState(false);
// // // // // // // // // //     const [otp, setOtp] = useState('');
// // // // // // // // // //     const [pdfUrl, setPdfUrl] = useState('');

// // // // // // // // // //     const handlePaymentMethodChange = (e) => {
// // // // // // // // // //         setPaymentMethod(e.target.value);
// // // // // // // // // //     };

// // // // // // // // // //     const handleSubmit = () => {
// // // // // // // // // //         setIsProcessing(true);
// // // // // // // // // //         setTimeout(() => {
// // // // // // // // // //             setIsProcessing(false);
// // // // // // // // // //             setShowOtp(true);
// // // // // // // // // //         }, 2000); // Simulate processing time
// // // // // // // // // //     };

// // // // // // // // // //     const handleOtpVerification = () => {
// // // // // // // // // //         if (otp === '1234') {
// // // // // // // // // //             setShowOtp(false);
// // // // // // // // // //             setPdfUrl('/path/to/generated/pdf'); // Update this with actual PDF URL
// // // // // // // // // //         } else {
// // // // // // // // // //             alert('Invalid OTP');
// // // // // // // // // //         }
// // // // // // // // // //     };

// // // // // // // // // //     return (
// // // // // // // // // //         <div className="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg shadow-lg">
// // // // // // // // // //             <h1 className="text-2xl font-bold mb-6 text-center">Payment Page</h1>
// // // // // // // // // //             <form>
// // // // // // // // // //                 <div className="mb-4">
// // // // // // // // // //                     <label className="block text-sm font-medium text-gray-700">Amount:</label>
// // // // // // // // // //                     <input
// // // // // // // // // //                         type="text"
// // // // // // // // // //                         readOnly
// // // // // // // // // //                         value={amount}
// // // // // // // // // //                         className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // // // //                     />
// // // // // // // // // //                 </div>

// // // // // // // // // //                 <div className="mb-4">
// // // // // // // // // //                     <label className="block text-sm font-medium text-gray-700">Payment Method:</label>
// // // // // // // // // //                     <div className="flex items-center">
// // // // // // // // // //                         <input
// // // // // // // // // //                             type="radio"
// // // // // // // // // //                             id="upi"
// // // // // // // // // //                             name="paymentMethod"
// // // // // // // // // //                             value="UPI"
// // // // // // // // // //                             checked={paymentMethod === 'UPI'}
// // // // // // // // // //                             onChange={handlePaymentMethodChange}
// // // // // // // // // //                             className="mr-2"
// // // // // // // // // //                         />
// // // // // // // // // //                         <label htmlFor="upi" className="text-sm font-medium text-gray-700">UPI</label>
// // // // // // // // // //                         <input
// // // // // // // // // //                             type="radio"
// // // // // // // // // //                             id="creditCard"
// // // // // // // // // //                             name="paymentMethod"
// // // // // // // // // //                             value="Credit Card"
// // // // // // // // // //                             checked={paymentMethod === 'Credit Card'}
// // // // // // // // // //                             onChange={handlePaymentMethodChange}
// // // // // // // // // //                             className="ml-4 mr-2"
// // // // // // // // // //                         />
// // // // // // // // // //                         <label htmlFor="creditCard" className="text-sm font-medium text-gray-700">Credit Card</label>
// // // // // // // // // //                     </div>
// // // // // // // // // //                 </div>

// // // // // // // // // //                 {paymentMethod === 'UPI' && (
// // // // // // // // // //                     <div className="mb-4">
// // // // // // // // // //                         <label htmlFor="upiId" className="block text-sm font-medium text-gray-700">UPI ID:</label>
// // // // // // // // // //                         <input
// // // // // // // // // //                             type="text"
// // // // // // // // // //                             id="upiId"
// // // // // // // // // //                             value={upiId}
// // // // // // // // // //                             onChange={(e) => setUpiId(e.target.value)}
// // // // // // // // // //                             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // // // //                         />
// // // // // // // // // //                     </div>
// // // // // // // // // //                 )}

// // // // // // // // // //                 {paymentMethod === 'Credit Card' && (
// // // // // // // // // //                     <div className="mb-4">
// // // // // // // // // //                         <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number:</label>
// // // // // // // // // //                         <input
// // // // // // // // // //                             type="text"
// // // // // // // // // //                             id="cardNumber"
// // // // // // // // // //                             value={cardNumber}
// // // // // // // // // //                             onChange={(e) => setCardNumber(e.target.value)}
// // // // // // // // // //                             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // // // //                         />
// // // // // // // // // //                         <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mt-2">Expiry Date:</label>
// // // // // // // // // //                         <input
// // // // // // // // // //                             type="text"
// // // // // // // // // //                             id="cardExpiry"
// // // // // // // // // //                             value={cardExpiry}
// // // // // // // // // //                             onChange={(e) => setCardExpiry(e.target.value)}
// // // // // // // // // //                             placeholder="MM/YY"
// // // // // // // // // //                             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // // // //                         />
// // // // // // // // // //                         <label htmlFor="cardCVV" className="block text-sm font-medium text-gray-700 mt-2">CVV:</label>
// // // // // // // // // //                         <input
// // // // // // // // // //                             type="text"
// // // // // // // // // //                             id="cardCVV"
// // // // // // // // // //                             value={cardCVV}
// // // // // // // // // //                             onChange={(e) => setCardCVV(e.target.value)}
// // // // // // // // // //                             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // // // //                         />
// // // // // // // // // //                     </div>
// // // // // // // // // //                 )}

// // // // // // // // // //                 <div className="mb-4">
// // // // // // // // // //                     <label htmlFor="payDate" className="block text-sm font-medium text-gray-700">Payment Date:</label>
// // // // // // // // // //                     <input
// // // // // // // // // //                         type="date"
// // // // // // // // // //                         id="payDate"
// // // // // // // // // //                         value={payDate}
// // // // // // // // // //                         readOnly
// // // // // // // // // //                         className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // // // //                     />
// // // // // // // // // //                 </div>

// // // // // // // // // //                 <button
// // // // // // // // // //                     type="button"
// // // // // // // // // //                     onClick={handleSubmit}
// // // // // // // // // //                     className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
// // // // // // // // // //                 >
// // // // // // // // // //                     Pay Now
// // // // // // // // // //                 </button>
// // // // // // // // // //             </form>

// // // // // // // // // //             {isProcessing && (
// // // // // // // // // //                 <div className="text-center mt-6">
// // // // // // // // // //                     <p className="text-lg font-medium">Processing Payment...</p>
// // // // // // // // // //                     <img src="/path/to/processing.gif" alt="Processing" className="mx-auto mt-4" />
// // // // // // // // // //                 </div>
// // // // // // // // // //             )}

// // // // // // // // // //             {showOtp && (
// // // // // // // // // //                 <div className="mt-6">
// // // // // // // // // //                     <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP:</label>
// // // // // // // // // //                     <input
// // // // // // // // // //                         type="text"
// // // // // // // // // //                         id="otp"
// // // // // // // // // //                         value={otp}
// // // // // // // // // //                         onChange={(e) => setOtp(e.target.value)}
// // // // // // // // // //                         className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // // // //                     />
// // // // // // // // // //                     <button
// // // // // // // // // //                         type="button"
// // // // // // // // // //                         onClick={handleOtpVerification}
// // // // // // // // // //                         className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
// // // // // // // // // //                     >
// // // // // // // // // //                         Verify OTP
// // // // // // // // // //                     </button>
// // // // // // // // // //                 </div>
// // // // // // // // // //             )}

// // // // // // // // // //             {pdfUrl && (
// // // // // // // // // //                 <div className="text-center mt-6">
// // // // // // // // // //                     <p className="text-lg font-medium">Payment Successful!</p>
// // // // // // // // // //                     <a
// // // // // // // // // //                         href={pdfUrl}
// // // // // // // // // //                         download
// // // // // // // // // //                         className="text-blue-500 underline mt-2 block"
// // // // // // // // // //                     >
// // // // // // // // // //                         Download PDF
// // // // // // // // // //                     </a>
// // // // // // // // // //                 </div>
// // // // // // // // // //             )}
// // // // // // // // // //         </div>
// // // // // // // // // //     );
// // // // // // // // // // };

// // // // // // // // // // export default PaymentPage;

// // // // // // // // // import React, { useState } from 'react';

// // // // // // // // // const PaymentPage = () => {
// // // // // // // // //     const [paymentMethod, setPaymentMethod] = useState('UPI');
// // // // // // // // //     const [amount] = useState(5000); // This should ideally come from session or backend
// // // // // // // // //     const [upiId, setUpiId] = useState('');
// // // // // // // // //     const [cardNumber, setCardNumber] = useState('');
// // // // // // // // //     const [cardExpiry, setCardExpiry] = useState('');
// // // // // // // // //     const [cardCVV, setCardCVV] = useState('');
// // // // // // // // //     const [payDate] = useState(new Date().toISOString().split('T')[0]);
// // // // // // // // //     const [isProcessing, setIsProcessing] = useState(false);
// // // // // // // // //     const [showOtp, setShowOtp] = useState(false);
// // // // // // // // //     const [otp, setOtp] = useState('');
// // // // // // // // //     const [pdfUrl, setPdfUrl] = useState('');
// // // // // // // // //     const [transactionId, setTransactionId] = useState('');

// // // // // // // // //     const handlePaymentMethodChange = (e) => {
// // // // // // // // //         setPaymentMethod(e.target.value);
// // // // // // // // //     };

// // // // // // // // //     const handleSubmit = async () => {
// // // // // // // // //         setIsProcessing(true);
// // // // // // // // //         setTimeout(() => {
// // // // // // // // //             setIsProcessing(false);
// // // // // // // // //             setShowOtp(true);
// // // // // // // // //         }, 2000); // Simulate processing time
// // // // // // // // //     };

// // // // // // // // //     const handleOtpVerification = async () => {
// // // // // // // // //         if (otp === '1234') {
// // // // // // // // //             // Post payment details to the backend
// // // // // // // // //             const paymentData = {
// // // // // // // // //                 amount,
// // // // // // // // //                 payMethod: paymentMethod,
// // // // // // // // //                 status: 'Pending', // Initial status
// // // // // // // // //                 payDate,
// // // // // // // // //                 user: {
// // // // // // // // //                     // Assuming user ID is known or fetched from session
// // // // // // // // //                     userId: 1,
// // // // // // // // //                 }
// // // // // // // // //             };

// // // // // // // // //             try {
// // // // // // // // //                 const response = await fetch('http://localhost:8029/payment', {
// // // // // // // // //                     method: 'POST',
// // // // // // // // //                     headers: {
// // // // // // // // //                         'Content-Type': 'application/json',
// // // // // // // // //                     },
// // // // // // // // //                     body: JSON.stringify(paymentData),
// // // // // // // // //                 });
// // // // // // // // //                 const result = await response.text();
// // // // // // // // //                 if (result === 'Success') {
// // // // // // // // //                     setTransactionId('TXN123456'); // You would get this from the backend
// // // // // // // // //                     setShowOtp(false);
// // // // // // // // //                     setPdfUrl('/path/to/generated/pdf'); // Update this with actual PDF URL
// // // // // // // // //                 } else {
// // // // // // // // //                     alert('Payment failed');
// // // // // // // // //                 }
// // // // // // // // //             } catch (error) {
// // // // // // // // //                 console.error('Error:', error);
// // // // // // // // //                 alert('Payment failed');
// // // // // // // // //             }
// // // // // // // // //         } else {
// // // // // // // // //             alert('Invalid OTP');
// // // // // // // // //         }
// // // // // // // // //     };

// // // // // // // // //     return (
// // // // // // // // //         <div className="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg shadow-lg">
// // // // // // // // //             <h1 className="text-2xl font-bold mb-6 text-center">Payment Page</h1>
// // // // // // // // //             <form>
// // // // // // // // //                 <div className="mb-4">
// // // // // // // // //                     <label className="block text-sm font-medium text-gray-700">Amount:</label>
// // // // // // // // //                     <input
// // // // // // // // //                         type="text"
// // // // // // // // //                         readOnly
// // // // // // // // //                         value={amount}
// // // // // // // // //                         className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // // //                     />
// // // // // // // // //                 </div>

// // // // // // // // //                 <div className="mb-4">
// // // // // // // // //                     <label className="block text-sm font-medium text-gray-700">Payment Method:</label>
// // // // // // // // //                     <div className="flex items-center">
// // // // // // // // //                         <input
// // // // // // // // //                             type="radio"
// // // // // // // // //                             id="upi"
// // // // // // // // //                             name="paymentMethod"
// // // // // // // // //                             value="UPI"
// // // // // // // // //                             checked={paymentMethod === 'UPI'}
// // // // // // // // //                             onChange={handlePaymentMethodChange}
// // // // // // // // //                             className="mr-2"
// // // // // // // // //                         />
// // // // // // // // //                         <label htmlFor="upi" className="text-sm font-medium text-gray-700">UPI</label>
// // // // // // // // //                         <input
// // // // // // // // //                             type="radio"
// // // // // // // // //                             id="creditCard"
// // // // // // // // //                             name="paymentMethod"
// // // // // // // // //                             value="Credit Card"
// // // // // // // // //                             checked={paymentMethod === 'Credit Card'}
// // // // // // // // //                             onChange={handlePaymentMethodChange}
// // // // // // // // //                             className="ml-4 mr-2"
// // // // // // // // //                         />
// // // // // // // // //                         <label htmlFor="creditCard" className="text-sm font-medium text-gray-700">Credit Card</label>
// // // // // // // // //                     </div>
// // // // // // // // //                 </div>

// // // // // // // // //                 {paymentMethod === 'UPI' && (
// // // // // // // // //                     <div className="mb-4">
// // // // // // // // //                         <label htmlFor="upiId" className="block text-sm font-medium text-gray-700">UPI ID:</label>
// // // // // // // // //                         <input
// // // // // // // // //                             type="text"
// // // // // // // // //                             id="upiId"
// // // // // // // // //                             value={upiId}
// // // // // // // // //                             onChange={(e) => setUpiId(e.target.value)}
// // // // // // // // //                             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // // //                         />
// // // // // // // // //                     </div>
// // // // // // // // //                 )}

// // // // // // // // //                 {paymentMethod === 'Credit Card' && (
// // // // // // // // //                     <div className="mb-4">
// // // // // // // // //                         <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number:</label>
// // // // // // // // //                         <input
// // // // // // // // //                             type="text"
// // // // // // // // //                             id="cardNumber"
// // // // // // // // //                             value={cardNumber}
// // // // // // // // //                             onChange={(e) => setCardNumber(e.target.value)}
// // // // // // // // //                             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // // //                         />
// // // // // // // // //                         <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mt-2">Expiry Date:</label>
// // // // // // // // //                         <input
// // // // // // // // //                             type="text"
// // // // // // // // //                             id="cardExpiry"
// // // // // // // // //                             value={cardExpiry}
// // // // // // // // //                             onChange={(e) => setCardExpiry(e.target.value)}
// // // // // // // // //                             placeholder="MM/YY"
// // // // // // // // //                             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // // //                         />
// // // // // // // // //                         <label htmlFor="cardCVV" className="block text-sm font-medium text-gray-700 mt-2">CVV:</label>
// // // // // // // // //                         <input
// // // // // // // // //                             type="text"
// // // // // // // // //                             id="cardCVV"
// // // // // // // // //                             value={cardCVV}
// // // // // // // // //                             onChange={(e) => setCardCVV(e.target.value)}
// // // // // // // // //                             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // // //                         />
// // // // // // // // //                     </div>
// // // // // // // // //                 )}

// // // // // // // // //                 <div className="mb-4">
// // // // // // // // //                     <label htmlFor="payDate" className="block text-sm font-medium text-gray-700">Payment Date:</label>
// // // // // // // // //                     <input
// // // // // // // // //                         type="date"
// // // // // // // // //                         id="payDate"
// // // // // // // // //                         value={payDate}
// // // // // // // // //                         readOnly
// // // // // // // // //                         className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // // //                     />
// // // // // // // // //                 </div>

// // // // // // // // //                 <button
// // // // // // // // //                     type="button"
// // // // // // // // //                     onClick={handleSubmit}
// // // // // // // // //                     className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
// // // // // // // // //                 >
// // // // // // // // //                     Pay Now
// // // // // // // // //                 </button>
// // // // // // // // //             </form>

// // // // // // // // //             {isProcessing && (
// // // // // // // // //                 <div className="text-center mt-6">
// // // // // // // // //                     <p className="text-lg font-medium">Processing Payment...</p>
// // // // // // // // //                     <img src="/path/to/processing.gif" alt="Processing" className="mx-auto mt-4" />
// // // // // // // // //                 </div>
// // // // // // // // //             )}

// // // // // // // // //             {showOtp && (
// // // // // // // // //                 <div className="mt-6">
// // // // // // // // //                     <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP:</label>
// // // // // // // // //                     <input
// // // // // // // // //                         type="text"
// // // // // // // // //                         id="otp"
// // // // // // // // //                         value={otp}
// // // // // // // // //                         onChange={(e) => setOtp(e.target.value)}
// // // // // // // // //                         className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // // //                     />
// // // // // // // // //                     <button
// // // // // // // // //                         type="button"
// // // // // // // // //                         onClick={handleOtpVerification}
// // // // // // // // //                         className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
// // // // // // // // //                     >
// // // // // // // // //                         Verify OTP
// // // // // // // // //                     </button>
// // // // // // // // //                 </div>
// // // // // // // // //             )}

// // // // // // // // //             {pdfUrl && (
// // // // // // // // //                 <div className="text-center mt-6">
// // // // // // // // //                     <p className="text-lg font-medium">Payment Successful!</p>
// // // // // // // // //                     <a
// // // // // // // // //                         href={pdfUrl}
// // // // // // // // //                         download
// // // // // // // // //                         className="text-blue-500 underline mt-2 block"
// // // // // // // // //                     >
// // // // // // // // //                         Download PDF
// // // // // // // // //                     </a>
// // // // // // // // //                 </div>
// // // // // // // // //             )}
// // // // // // // // //         </div>
// // // // // // // // //     );
// // // // // // // // // };

// // // // // // // // // export default PaymentPage;


// // // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // // const PaymentPage = () => {
// // // // // // // //   const [paymentMethod, setPaymentMethod] = useState('UPI');
// // // // // // // //   const [amount, setAmount] = useState(0);
// // // // // // // //   const [upiId, setUpiId] = useState('');
// // // // // // // //   const [cardNumber, setCardNumber] = useState('');
// // // // // // // //   const [cardExpiry, setCardExpiry] = useState('');
// // // // // // // //   const [cardCVV, setCardCVV] = useState('');
// // // // // // // //   const [payDate, setPayDate] = useState(new Date().toISOString().split('T')[0]);
// // // // // // // //   const [isProcessing, setIsProcessing] = useState(false);
// // // // // // // //   const [showOtp, setShowOtp] = useState(false);
// // // // // // // //   const [otp, setOtp] = useState('');
// // // // // // // //   const [pdfUrl, setPdfUrl] = useState('');
// // // // // // // //   const [transactionId, setTransactionId] = useState('');
// // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // //   const userId = sessionStorage.getItem("userId"); // Assume you get the user ID from context or props

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchPaymentDetails = async () => {
// // // // // // // //       try {
// // // // // // // //         const response = await fetch(`http://localhost:8029/payment/${userId}`);
// // // // // // // //         const data = await response.json();
// // // // // // // //         setAmount(data.amount);
// // // // // // // //         setPayDate(new Date(data.payDate).toISOString().split('T')[0]);
// // // // // // // //         setLoading(false);
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error('Error fetching payment details:', error);
// // // // // // // //         setLoading(false);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     fetchPaymentDetails();
// // // // // // // //   }, [userId]);

// // // // // // // //   const handlePaymentMethodChange = (e) => {
// // // // // // // //     setPaymentMethod(e.target.value);
// // // // // // // //   };

// // // // // // // //   const handleSubmit = async () => {
// // // // // // // //     setIsProcessing(true);
// // // // // // // //     setTimeout(() => {
// // // // // // // //       setIsProcessing(false);
// // // // // // // //       setShowOtp(true);
// // // // // // // //     }, 2000); // Simulate processing time
// // // // // // // //   };

// // // // // // // //   const handleOtpVerification = async () => {
// // // // // // // //     if (otp === '1234') {
// // // // // // // //       const paymentData = {
// // // // // // // //         amount,
// // // // // // // //         payMethod: paymentMethod,
// // // // // // // //         status: 'Paid', // Update status to Paid
// // // // // // // //         payDate,
// // // // // // // //         user: {
// // // // // // // //           userId: userId, // Example user ID
// // // // // // // //         },
// // // // // // // //       };

// // // // // // // //       try {
// // // // // // // //         const response = await fetch('http://localhost:8029/payment', {
// // // // // // // //           method: 'PUT',
// // // // // // // //           headers: {
// // // // // // // //             'Content-Type': 'application/json',
// // // // // // // //           },
// // // // // // // //           body: JSON.stringify(paymentData),
// // // // // // // //         });

// // // // // // // //         if (response.ok) {
// // // // // // // //           setTransactionId('TXN123456'); // You would get this from the backend
// // // // // // // //           setShowOtp(false);
// // // // // // // //           setPdfUrl('/path/to/generated/pdf'); // Update this with actual PDF URL
// // // // // // // //         } else {
// // // // // // // //           alert('Payment failed');
// // // // // // // //         }
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error('Error updating payment:', error);
// // // // // // // //         alert('Payment failed');
// // // // // // // //       }
// // // // // // // //     } else {
// // // // // // // //       alert('Invalid OTP');
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className={`relative max-w-lg mx-auto p-6 border border-gray-300 rounded-lg shadow-lg ${isProcessing ? 'blur-sm' : ''}`}>
// // // // // // // //       <h1 className="text-2xl font-bold mb-6 text-center">Payment Page</h1>
      
// // // // // // // //       {loading ? (
// // // // // // // //         <div className="text-center">
// // // // // // // //           <p className="text-lg font-medium">Loading payment details...</p>
// // // // // // // //         </div>
// // // // // // // //       ) : (
// // // // // // // //         <form>
// // // // // // // //           <div className="mb-4">
// // // // // // // //             <label className="block text-sm font-medium text-gray-700">Amount:</label>
// // // // // // // //             <input
// // // // // // // //               type="text"
// // // // // // // //               readOnly
// // // // // // // //               value={amount}
// // // // // // // //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // //             />
// // // // // // // //           </div>

// // // // // // // //           <div className="mb-4">
// // // // // // // //             <label className="block text-sm font-medium text-gray-700">Payment Method:</label>
// // // // // // // //             <div className="flex items-center">
// // // // // // // //               <input
// // // // // // // //                 type="radio"
// // // // // // // //                 id="upi"
// // // // // // // //                 name="paymentMethod"
// // // // // // // //                 value="UPI"
// // // // // // // //                 checked={paymentMethod === 'UPI'}
// // // // // // // //                 onChange={handlePaymentMethodChange}
// // // // // // // //                 className="mr-2"
// // // // // // // //               />
// // // // // // // //               <label htmlFor="upi" className="text-sm font-medium text-gray-700">UPI</label>
// // // // // // // //               <input
// // // // // // // //                 type="radio"
// // // // // // // //                 id="creditCard"
// // // // // // // //                 name="paymentMethod"
// // // // // // // //                 value="Credit Card"
// // // // // // // //                 checked={paymentMethod === 'Credit Card'}
// // // // // // // //                 onChange={handlePaymentMethodChange}
// // // // // // // //                 className="ml-4 mr-2"
// // // // // // // //               />
// // // // // // // //               <label htmlFor="creditCard" className="text-sm font-medium text-gray-700">Credit Card</label>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {paymentMethod === 'UPI' && (
// // // // // // // //             <div className="mb-4">
// // // // // // // //               <label htmlFor="upiId" className="block text-sm font-medium text-gray-700">UPI ID:</label>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 id="upiId"
// // // // // // // //                 value={upiId}
// // // // // // // //                 onChange={(e) => setUpiId(e.target.value)}
// // // // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //           )}

// // // // // // // //           {paymentMethod === 'Credit Card' && (
// // // // // // // //             <div className="mb-4">
// // // // // // // //               <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number:</label>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 id="cardNumber"
// // // // // // // //                 value={cardNumber}
// // // // // // // //                 onChange={(e) => setCardNumber(e.target.value)}
// // // // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // //               />
// // // // // // // //               <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mt-2">Expiry Date:</label>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 id="cardExpiry"
// // // // // // // //                 value={cardExpiry}
// // // // // // // //                 onChange={(e) => setCardExpiry(e.target.value)}
// // // // // // // //                 placeholder="MM/YY"
// // // // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // //               />
// // // // // // // //               <label htmlFor="cardCVV" className="block text-sm font-medium text-gray-700 mt-2">CVV:</label>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 id="cardCVV"
// // // // // // // //                 value={cardCVV}
// // // // // // // //                 onChange={(e) => setCardCVV(e.target.value)}
// // // // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //           )}

// // // // // // // //           <div className="mb-4">
// // // // // // // //             <label htmlFor="payDate" className="block text-sm font-medium text-gray-700">Payment Date:</label>
// // // // // // // //             <input
// // // // // // // //               type="date"
// // // // // // // //               id="payDate"
// // // // // // // //               value={payDate}
// // // // // // // //               readOnly
// // // // // // // //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // //             />
// // // // // // // //           </div>

// // // // // // // //           <button
// // // // // // // //             type="button"
// // // // // // // //             onClick={handleSubmit}
// // // // // // // //             className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
// // // // // // // //           >
// // // // // // // //             Pay Now
// // // // // // // //           </button>
// // // // // // // //         </form>
// // // // // // // //       )}

// // // // // // // //       {isProcessing && (
// // // // // // // //         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
// // // // // // // //           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
// // // // // // // //             <p className="text-lg font-medium">Processing Payment...</p>
// // // // // // // //             <img src="/path/to/processing.gif" alt="Processing" className="mx-auto mt-4" />
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       )}

// // // // // // // //       {showOtp && (
// // // // // // // //         <div className="mt-6">
// // // // // // // //           <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP:</label>
// // // // // // // //           <input
// // // // // // // //             type="text"
// // // // // // // //             id="otp"
// // // // // // // //             value={otp}
// // // // // // // //             onChange={(e) => setOtp(e.target.value)}
// // // // // // // //             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // // //           />
// // // // // // // //           <button
// // // // // // // //             type="button"
// // // // // // // //             onClick={handleOtpVerification}
// // // // // // // //             className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
// // // // // // // //           >
// // // // // // // //             Verify OTP
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       )}

// // // // // // // //       {pdfUrl && (
// // // // // // // //         <div className="text-center mt-6">
// // // // // // // //           <p className="text-lg font-medium">Payment Successful!</p>
// // // // // // // //           <a
// // // // // // // //             href={pdfUrl}
// // // // // // // //             download
// // // // // // // //             className="text-blue-500 underline mt-2 block"
// // // // // // // //           >
// // // // // // // //             Download PDF
// // // // // // // //           </a>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default PaymentPage;

// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { jsPDF } from 'jspdf';
// // // // // // // import { useNavigate } from 'react-router-dom';

// // // // // // // const PaymentPage = () => {
// // // // // // //   const [paymentMethod, setPaymentMethod] = useState('UPI');
// // // // // // //   const [amount, setAmount] = useState(0);
// // // // // // //   const [upiId, setUpiId] = useState('');
// // // // // // //   const [cardNumber, setCardNumber] = useState('');
// // // // // // //   const [cardExpiry, setCardExpiry] = useState('');
// // // // // // //   const [cardCVV, setCardCVV] = useState('');
// // // // // // //   const [payDate, setPayDate] = useState(new Date().toISOString().split('T')[0]);
// // // // // // //   const [isProcessing, setIsProcessing] = useState(false);
// // // // // // //   const [showOtp, setShowOtp] = useState(false);
// // // // // // //   const [otp, setOtp] = useState('');
// // // // // // //   const [pdfUrl, setPdfUrl] = useState('');
// // // // // // //   const [transactionId, setTransactionId] = useState('');
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const userId = sessionStorage.getItem("userId"); // Assume you get the user ID from context or props

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchPaymentDetails = async () => {
// // // // // // //       try {
// // // // // // //         const response = await fetch(`http://localhost:8029/payment/${userId}`);
// // // // // // //         const data = await response.json();
// // // // // // //         setAmount(data.amount);
// // // // // // //         setPayDate(new Date(data.payDate).toISOString().split('T')[0]);
// // // // // // //         setLoading(false);
// // // // // // //       } catch (error) {
// // // // // // //         console.error('Error fetching payment details:', error);
// // // // // // //         setLoading(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchPaymentDetails();
// // // // // // //   }, [userId]);

// // // // // // //   const generateTransactionId = () => {
// // // // // // //     return 'TXN' + Math.floor(Math.random() * 1000000);
// // // // // // //   };

// // // // // // //   const generatePdf = (data) => {
// // // // // // //     const doc = new jsPDF();

// // // // // // //     const margin = 10;
// // // // // // //     const lineHeight = 10;  

// // // // // // //     doc.setFontSize(16);
// // // // // // //     doc.setFont('helvetica', 'bold');
// // // // // // //     doc.text('Premium Payment Receipt', margin, margin + 10);

// // // // // // //     doc.setFontSize(12);
// // // // // // //     doc.setFont('helvetica', 'bold');
// // // // // // //     doc.text('Payment Information', margin, margin + 20);

// // // // // // //     doc.setFont('helvetica', 'normal');
// // // // // // //     doc.setFontSize(12);

// // // // // // //     let y = margin + 30;
// // // // // // //     doc.text(`Transaction ID: ${generateTransactionId()}`, margin, y);
// // // // // // //     y += lineHeight;
// // // // // // //     doc.text(`Amount: ${data.amount}`, margin, y);
// // // // // // //     y += lineHeight;
// // // // // // //     doc.text(`Payment Method: ${data.payMethod}`, margin, y);
// // // // // // //     y += lineHeight;
// // // // // // //     doc.text(`Payment Date: ${data.payDate}`, margin, y);

// // // // // // //     doc.save('payment-info.pdf');
// // // // // // //   };

// // // // // // //   const handlePaymentMethodChange = (e) => {
// // // // // // //     setPaymentMethod(e.target.value);
// // // // // // //   };

// // // // // // //   const handleSubmit = async () => {
// // // // // // //     setIsProcessing(true);
// // // // // // //     setTimeout(() => {
// // // // // // //       setIsProcessing(false);
// // // // // // //       setShowOtp(true);
// // // // // // //     }, 2000); // Simulate processing time
// // // // // // //   };

// // // // // // //   const handleOtpVerification = async () => {
// // // // // // //     if (otp === '1234') {
// // // // // // //       const paymentData = {
// // // // // // //         amount,
// // // // // // //         payMethod: paymentMethod,
// // // // // // //         status: 'Paid', // Update status to Paid
// // // // // // //         payDate,
// // // // // // //         user: {
// // // // // // //           userId: userId, // Example user ID
// // // // // // //         },
// // // // // // //       };

// // // // // // //       try {
// // // // // // //         const response = await fetch('http://localhost:8029/payment', {
// // // // // // //           method: 'PUT',
// // // // // // //           headers: {
// // // // // // //             'Content-Type': 'application/json',
// // // // // // //           },
// // // // // // //           body: JSON.stringify(paymentData),
// // // // // // //         });

// // // // // // //         if (response.ok) {
// // // // // // //           const transactionId = generateTransactionId();
// // // // // // //           setTransactionId(transactionId); // Set the generated transaction ID
// // // // // // //           setPdfUrl('/path/to/generated/pdf'); // Update this with actual PDF URL
// // // // // // //           generatePdf(paymentData); // Generate and download the PDF
// // // // // // //           setShowOtp(false);
// // // // // // //           setTimeout(() => {
// // // // // // //             navigate('/userdashboard'); // Redirect to home dashboard
// // // // // // //           }, 2000); // Simulate time before redirect
// // // // // // //           sessionStorage.setItem("button",true)
// // // // // // //         } else {
// // // // // // //           alert('Payment failed');
// // // // // // //         }
// // // // // // //       } catch (error) {
// // // // // // //         console.error('Error updating payment:', error);
// // // // // // //         alert('Payment failed');
// // // // // // //       }
// // // // // // //     } else {
// // // // // // //       alert('Invalid OTP');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className={`relative max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg shadow-lg ${isProcessing ? 'blur-sm' : ''}`}>
// // // // // // //       <button
// // // // // // //         onClick={() => navigate('/userdashboard')}
// // // // // // //         className="absolute top-4 left-4 px-4 py-2 bg-gray-300 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400"
// // // // // // //       >
// // // // // // //         Back to Dashboard
// // // // // // //       </button>

// // // // // // //       <h1 className="text-2xl font-bold mb-6 text-center">Payment Page</h1>
      
// // // // // // //       {loading ? (
// // // // // // //         <div className="text-center">
// // // // // // //           <p className="text-lg font-medium">Loading payment details...</p>
// // // // // // //         </div>
// // // // // // //       ) : (
// // // // // // //         <form>
// // // // // // //           <div className="mb-4">
// // // // // // //             <label className="block text-sm font-medium text-gray-700">Amount:</label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               readOnly
// // // // // // //               value={amount}
// // // // // // //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           <div className="mb-4">
// // // // // // //             <label className="block text-sm font-medium text-gray-700">Payment Method:</label>
// // // // // // //             <div className="flex items-center">
// // // // // // //               <input
// // // // // // //                 type="radio"
// // // // // // //                 id="upi"
// // // // // // //                 name="paymentMethod"
// // // // // // //                 value="UPI"
// // // // // // //                 checked={paymentMethod === 'UPI'}
// // // // // // //                 onChange={handlePaymentMethodChange}
// // // // // // //                 className="mr-2"
// // // // // // //               />
// // // // // // //               <label htmlFor="upi" className="text-sm font-medium text-gray-700">UPI</label>
// // // // // // //               <input
// // // // // // //                 type="radio"
// // // // // // //                 id="creditCard"
// // // // // // //                 name="paymentMethod"
// // // // // // //                 value="Credit Card"
// // // // // // //                 checked={paymentMethod === 'Credit Card'}
// // // // // // //                 onChange={handlePaymentMethodChange}
// // // // // // //                 className="ml-4 mr-2"
// // // // // // //               />
// // // // // // //               <label htmlFor="creditCard" className="text-sm font-medium text-gray-700">Credit Card</label>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {paymentMethod === 'UPI' && (
// // // // // // //             <div className="mb-4">
// // // // // // //               <label htmlFor="upiId" className="block text-sm font-medium text-gray-700">UPI ID:</label>
// // // // // // //               <input
// // // // // // //                 type="text"
// // // // // // //                 id="upiId"
// // // // // // //                 value={upiId}
// // // // // // //                 onChange={(e) => setUpiId(e.target.value)}
// // // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           {paymentMethod === 'Credit Card' && (
// // // // // // //             <div className="mb-4">
// // // // // // //               <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number:</label>
// // // // // // //               <input
// // // // // // //                 type="text"
// // // // // // //                 id="cardNumber"
// // // // // // //                 value={cardNumber}
// // // // // // //                 onChange={(e) => setCardNumber(e.target.value)}
// // // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // //               />
// // // // // // //               <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mt-2">Expiry Date:</label>
// // // // // // //               <input
// // // // // // //                 type="text"
// // // // // // //                 id="cardExpiry"
// // // // // // //                 value={cardExpiry}
// // // // // // //                 onChange={(e) => setCardExpiry(e.target.value)}
// // // // // // //                 placeholder="MM/YY"
// // // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // //               />
// // // // // // //               <label htmlFor="cardCVV" className="block text-sm font-medium text-gray-700 mt-2">CVV:</label>
// // // // // // //               <input
// // // // // // //                 type="text"
// // // // // // //                 id="cardCVV"
// // // // // // //                 value={cardCVV}
// // // // // // //                 onChange={(e) => setCardCVV(e.target.value)}
// // // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           <div className="mb-4">
// // // // // // //             <label htmlFor="payDate" className="block text-sm font-medium text-gray-700">Payment Date:</label>
// // // // // // //             <input
// // // // // // //               type="date"
// // // // // // //               id="payDate"
// // // // // // //               value={payDate}
// // // // // // //               readOnly
// // // // // // //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           <button
// // // // // // //             type="button"
// // // // // // //             onClick={handleSubmit}
// // // // // // //             className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
// // // // // // //           >
// // // // // // //             Pay Now
// // // // // // //           </button>
// // // // // // //         </form>
// // // // // // //       )}

// // // // // // //       {isProcessing && (
// // // // // // //         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
// // // // // // //           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
// // // // // // //             <p className="text-lg font-medium">Processing Payment...</p>
// // // // // // //             <img src="https://i.pinimg.com/originals/65/5d/2d/655d2da400a648abca600766a89deead.gif" alt="Processing" className="mx-auto mt-4" />
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {showOtp && (
// // // // // // //         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
// // // // // // //           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
// // // // // // //             <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP:</label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               id="otp"
// // // // // // //               value={otp}
// // // // // // //               onChange={(e) => setOtp(e.target.value)}
// // // // // // //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // // //             />
// // // // // // //             <button
// // // // // // //               type="button"
// // // // // // //               onClick={handleOtpVerification}
// // // // // // //               className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
// // // // // // //             >
// // // // // // //               Verify OTP
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {pdfUrl && (
// // // // // // //         <div className="text-center mt-6">
// // // // // // //           <p className="text-lg font-medium">Payment Successful!</p>
// // // // // // //           <a
// // // // // // //             href={pdfUrl}
// // // // // // //             download
// // // // // // //             className="text-blue-500 underline mt-2 block"
// // // // // // //           >
// // // // // // //             Download PDF
// // // // // // //           </a>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default PaymentPage;


// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { jsPDF } from 'jspdf';
// // // // // // import { useNavigate } from 'react-router-dom';

// // // // // // const PaymentPage = () => {
// // // // // //   const [paymentMethod, setPaymentMethod] = useState('UPI');
// // // // // //   const [amount, setAmount] = useState(0);
// // // // // //   const [upiId, setUpiId] = useState('');
// // // // // //   const [cardNumber, setCardNumber] = useState('');
// // // // // //   const [cardExpiry, setCardExpiry] = useState('');
// // // // // //   const [cardCVV, setCardCVV] = useState('');
// // // // // //   const [payDate, setPayDate] = useState(new Date().toISOString().split('T')[0]);
// // // // // //   const [isProcessing, setIsProcessing] = useState(false);
// // // // // //   const [showOtp, setShowOtp] = useState(false);
// // // // // //   const [otp, setOtp] = useState('');
// // // // // //   const [transactionId, setTransactionId] = useState('');
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [errors, setErrors] = useState({});
// // // // // //   const [pdfUrl, setPdfUrl] = useState(''); // Initialize pdfUrl as an empty string
// // // // // //   const navigate = useNavigate();
// // // // // //   const userId = sessionStorage.getItem("userId");

// // // // // //   useEffect(() => {
// // // // // //     const fetchPaymentDetails = async () => {
// // // // // //       try {
// // // // // //         const response = await fetch(`http://localhost:8029/payment/${userId}`);
// // // // // //         const data = await response.json();
// // // // // //         setAmount(data.amount);
// // // // // //         setPayDate(new Date(data.payDate).toISOString().split('T')[0]);
// // // // // //         setLoading(false);
// // // // // //       } catch (error) {
// // // // // //         console.error('Error fetching payment details:', error);
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchPaymentDetails();
// // // // // //   }, [userId]);

// // // // // //   const generateTransactionId = () => {
// // // // // //     return 'TXN' + Math.floor(Math.random() * 1000000);
// // // // // //   };

// // // // // //   const generatePdf = (data) => {
// // // // // //     const doc = new jsPDF();
// // // // // //     const margin = 10;
// // // // // //     const lineHeight = 10;

// // // // // //     doc.setFontSize(16);
// // // // // //     doc.setFont('helvetica', 'bold');
// // // // // //     doc.text('Premium Payment Receipt', margin, margin + 10);

// // // // // //     doc.setFontSize(12);
// // // // // //     doc.setFont('helvetica', 'bold');
// // // // // //     doc.text('Payment Information', margin, margin + 20);

// // // // // //     doc.setFont('helvetica', 'normal');
// // // // // //     doc.setFontSize(12);

// // // // // //     let y = margin + 30;
// // // // // //     const transactionId = generateTransactionId();
// // // // // //     doc.text(`Transaction ID: ${transactionId}`, margin, y);
// // // // // //     y += lineHeight;
// // // // // //     doc.text(`Amount: ${data.amount}`, margin, y);
// // // // // //     y += lineHeight;
// // // // // //     doc.text(`Payment Method: ${data.payMethod}`, margin, y);
// // // // // //     y += lineHeight;
// // // // // //     doc.text(`Payment Date: ${data.payDate}`, margin, y);

// // // // // //     const pdfBlob = doc.output('blob');
// // // // // //     const pdfUrl = URL.createObjectURL(pdfBlob);
// // // // // //     setPdfUrl(pdfUrl); // Update pdfUrl with the generated PDF URL
// // // // // //     doc.save('payment-info.pdf');
// // // // // //   };

// // // // // //   const handlePaymentMethodChange = (e) => {
// // // // // //     setPaymentMethod(e.target.value);
// // // // // //     setErrors({}); // Clear errors when changing payment method
// // // // // //   };

// // // // // //   const validateForm = () => {
// // // // // //     let valid = true;
// // // // // //     let errorMessages = {};

// // // // // //     if (paymentMethod === 'Credit Card') {
// // // // // //       if (!/^\d{16}$/.test(cardNumber)) {
// // // // // //         errorMessages.cardNumber = 'Credit Card Number must be 16 digits';
// // // // // //         valid = false;
// // // // // //       }
// // // // // //       if (!/^\d{3}$/.test(cardCVV)) {
// // // // // //         errorMessages.cardCVV = 'CVV must be 3 digits';
// // // // // //         valid = false;
// // // // // //       }
// // // // // //       if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
// // // // // //         errorMessages.cardExpiry = 'Expiry Date must be in MM/YY format';
// // // // // //         valid = false;
// // // // // //       }
// // // // // //     } else if (paymentMethod === 'UPI') {
// // // // // //       if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/.test(upiId)) {
// // // // // //         errorMessages.upiId = 'UPI ID must be in the format "username@bankname"';
// // // // // //         valid = false;
// // // // // //       }
// // // // // //     } else {
// // // // // //       errorMessages.paymentMethod = 'Payment method is required';
// // // // // //       valid = false;
// // // // // //     }

// // // // // //     setErrors(errorMessages);
// // // // // //     return valid;
// // // // // //   };

// // // // // //   const handleSubmit = async () => {
// // // // // //     if (!validateForm()) return;

// // // // // //     setIsProcessing(true);
// // // // // //     setTimeout(() => {
// // // // // //       setIsProcessing(false);
// // // // // //       setShowOtp(true);
// // // // // //     }, 2000); // Simulate processing time
// // // // // //   };

// // // // // //   const handleOtpVerification = async () => {
// // // // // //     if (otp === '1234') {
// // // // // //       const paymentData = {
// // // // // //         amount,
// // // // // //         payMethod: paymentMethod,
// // // // // //         status: 'Paid',
// // // // // //         payDate,
// // // // // //         user: {
// // // // // //           userId: userId,
// // // // // //         },
// // // // // //       };

// // // // // //       try {
// // // // // //         const response = await fetch('http://localhost:8029/payment', {
// // // // // //           method: 'PUT',
// // // // // //           headers: {
// // // // // //             'Content-Type': 'application/json',
// // // // // //           },
// // // // // //           body: JSON.stringify(paymentData),
// // // // // //         });

// // // // // //         if (response.ok) {
// // // // // //           const transactionId = generateTransactionId();
// // // // // //           setTransactionId(transactionId);
// // // // // //           generatePdf(paymentData);
// // // // // //           setShowOtp(false);
// // // // // //           setTimeout(() => {
// // // // // //             navigate('/userdashboard');
// // // // // //           }, 2000);
// // // // // //           sessionStorage.setItem("button", true);
// // // // // //         } else {
// // // // // //           alert('Payment failed');
// // // // // //         }
// // // // // //       } catch (error) {
// // // // // //         console.error('Error updating payment:', error);
// // // // // //         alert('Payment failed');
// // // // // //       }
// // // // // //     } else {
// // // // // //       alert('Invalid OTP');
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className={`relative max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg shadow-lg ${isProcessing ? 'blur-sm' : ''}`}>
// // // // // //       <button
// // // // // //         onClick={() => navigate('/userdashboard')}
// // // // // //         className="absolute top-4 left-4 px-4 py-2 bg-gray-300 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400"
// // // // // //       >
// // // // // //         Back to Dashboard
// // // // // //       </button>

// // // // // //       <h1 className="text-2xl font-bold mb-6 text-center">Payment Page</h1>

// // // // // //       {loading ? (
// // // // // //         <div className="text-center">
// // // // // //           <p className="text-lg font-medium">Loading payment details...</p>
// // // // // //         </div>
// // // // // //       ) : (
// // // // // //         <form>
// // // // // //           <div className="mb-4">
// // // // // //             <label className="block text-sm font-medium text-gray-700">Amount:</label>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               readOnly
// // // // // //               value={amount}
// // // // // //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // //             />
// // // // // //           </div>

// // // // // //           <div className="mb-4">
// // // // // //             <label className="block text-sm font-medium text-gray-700">Payment Method:</label>
// // // // // //             <div className="flex items-center">
// // // // // //               <input
// // // // // //                 type="radio"
// // // // // //                 id="upi"
// // // // // //                 name="paymentMethod"
// // // // // //                 value="UPI"
// // // // // //                 checked={paymentMethod === 'UPI'}
// // // // // //                 onChange={handlePaymentMethodChange}
// // // // // //                 className="mr-2"
// // // // // //               />
// // // // // //               <label htmlFor="upi" className="text-sm font-medium text-gray-700">UPI</label>
// // // // // //               <input
// // // // // //                 type="radio"
// // // // // //                 id="creditCard"
// // // // // //                 name="paymentMethod"
// // // // // //                 value="Credit Card"
// // // // // //                 checked={paymentMethod === 'Credit Card'}
// // // // // //                 onChange={handlePaymentMethodChange}
// // // // // //                 className="ml-4 mr-2"
// // // // // //               />
// // // // // //               <label htmlFor="creditCard" className="text-sm font-medium text-gray-700">Credit Card</label>
// // // // // //             </div>
// // // // // //             {errors.paymentMethod && <div className="text-red-500 text-sm">{errors.paymentMethod}</div>}
// // // // // //           </div>

// // // // // //           {paymentMethod === 'UPI' && (
// // // // // //             <div className="mb-4">
// // // // // //               <label htmlFor="upiId" className="block text-sm font-medium text-gray-700">UPI ID:</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 id="upiId"
// // // // // //                 value={upiId}
// // // // // //                 onChange={(e) => setUpiId(e.target.value)}
// // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // //               />
// // // // // //               {errors.upiId && <div className="text-red-500 text-sm">{errors.upiId}</div>}
// // // // // //             </div>
// // // // // //           )}

// // // // // //           {paymentMethod === 'Credit Card' && (
// // // // // //             <div className="mb-4">
// // // // // //               <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number:</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 id="cardNumber"
// // // // // //                 value={cardNumber}
// // // // // //                 onChange={(e) => setCardNumber(e.target.value)}
// // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // //               />
// // // // // //               {errors.cardNumber && <div className="text-red-500 text-sm">{errors.cardNumber}</div>}

// // // // // //               <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mt-2">Expiry Date:</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 id="cardExpiry"
// // // // // //                 value={cardExpiry}
// // // // // //                 onChange={(e) => setCardExpiry(e.target.value)}
// // // // // //                 placeholder="MM/YY"
// // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // //               />
// // // // // //               {errors.cardExpiry && <div className="text-red-500 text-sm">{errors.cardExpiry}</div>}

// // // // // //               <label htmlFor="cardCVV" className="block text-sm font-medium text-gray-700 mt-2">CVV:</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 id="cardCVV"
// // // // // //                 value={cardCVV}
// // // // // //                 onChange={(e) => setCardCVV(e.target.value)}
// // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // //               />
// // // // // //               {errors.cardCVV && <div className="text-red-500 text-sm">{errors.cardCVV}</div>}
// // // // // //             </div>
// // // // // //           )}

// // // // // //           <div className="mb-4">
// // // // // //             <label htmlFor="payDate" className="block text-sm font-medium text-gray-700">Payment Date:</label>
// // // // // //             <input
// // // // // //               type="date"
// // // // // //               id="payDate"
// // // // // //               value={payDate}
// // // // // //               readOnly
// // // // // //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // //             />
// // // // // //           </div>

// // // // // //           <button
// // // // // //             type="button"
// // // // // //             onClick={handleSubmit}
// // // // // //             className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
// // // // // //           >
// // // // // //             Pay Now
// // // // // //           </button>
// // // // // //         </form>
// // // // // //       )}

// // // // // //       {isProcessing && (
// // // // // //         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
// // // // // //           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
// // // // // //             <p className="text-lg font-medium">Processing Payment...</p>
// // // // // //             <img src="https://i.pinimg.com/originals/65/5d/2d/655d2da400a648abca600766a89deead.gif" alt="Processing" className="mx-auto mt-4" />
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {showOtp && (
// // // // // //         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
// // // // // //           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
// // // // // //             <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP:</label>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               id="otp"
// // // // // //               value={otp}
// // // // // //               onChange={(e) => setOtp(e.target.value)}
// // // // // //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // // //             />
// // // // // //             <button
// // // // // //               type="button"
// // // // // //               onClick={handleOtpVerification}
// // // // // //               className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
// // // // // //             >
// // // // // //               Verify OTP
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {pdfUrl && (
// // // // // //         <div className="text-center mt-6">
// // // // // //           <p className="text-lg font-medium">Payment Successful!</p>
// // // // // //           <a
// // // // // //             href={pdfUrl}
// // // // // //             download
// // // // // //             className="text-blue-500 underline mt-2 block"
// // // // // //           >
// // // // // //             Download PDF
// // // // // //           </a>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default PaymentPage;


// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { jsPDF } from 'jspdf';
// // // // // import { useNavigate } from 'react-router-dom';

// // // // // const PaymentPage = () => {
// // // // //   const [paymentMethod, setPaymentMethod] = useState('UPI');
// // // // //   const [amount, setAmount] = useState(0);
// // // // //   const [upiId, setUpiId] = useState('');
// // // // //   const [cardNumber, setCardNumber] = useState('');
// // // // //   const [cardExpiry, setCardExpiry] = useState('');
// // // // //   const [cardCVV, setCardCVV] = useState('');
// // // // //   const [payDate, setPayDate] = useState(new Date().toISOString().split('T')[0]);
// // // // //   const [isProcessing, setIsProcessing] = useState(false);
// // // // //   const [showOtp, setShowOtp] = useState(false);
// // // // //   const [otp, setOtp] = useState('');
// // // // //   const [transactionId, setTransactionId] = useState('');
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [errors, setErrors] = useState({});
// // // // //   const [cardType, setCardType] = useState('');
// // // // //   const [pdfUrl, setPdfUrl] = useState('');
// // // // //   const navigate = useNavigate();
// // // // //   const userId = sessionStorage.getItem("userId");

// // // // //   useEffect(() => {
// // // // //     const fetchPaymentDetails = async () => {
// // // // //       try {
// // // // //         const response = await fetch(`http://localhost:8029/payment/${userId}`);
// // // // //         const data = await response.json();
// // // // //         setAmount(data.amount);
// // // // //         setPayDate(new Date(data.payDate).toISOString().split('T')[0]);
// // // // //         setLoading(false);
// // // // //       } catch (error) {
// // // // //         console.error('Error fetching payment details:', error);
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchPaymentDetails();
// // // // //   }, [userId]);

// // // // //   const generateTransactionId = () => {
// // // // //     return 'TXN' + Math.floor(Math.random() * 1000000);
// // // // //   };

// // // // //   const generatePdf = (data) => {
// // // // //     const doc = new jsPDF();
// // // // //     const margin = 10;
// // // // //     const lineHeight = 10;

// // // // //     doc.setFontSize(16);
// // // // //     doc.setFont('helvetica', 'bold');
// // // // //     doc.text('Premium Payment Receipt', margin, margin + 10);

// // // // //     doc.setFontSize(12);
// // // // //     doc.setFont('helvetica', 'bold');
// // // // //     doc.text('Payment Information', margin, margin + 20);

// // // // //     doc.setFont('helvetica', 'normal');
// // // // //     doc.setFontSize(12);

// // // // //     let y = margin + 30;
// // // // //     const transactionId = generateTransactionId();
// // // // //     doc.text(`Transaction ID: ${transactionId}`, margin, y);
// // // // //     y += lineHeight;
// // // // //     doc.text(`Amount: ${data.amount}`, margin, y);
// // // // //     y += lineHeight;
// // // // //     doc.text(`Payment Method: ${data.payMethod}`, margin, y);
// // // // //     y += lineHeight;
// // // // //     doc.text(`Payment Date: ${data.payDate}`, margin, y);

// // // // //     const pdfBlob = doc.output('blob');
// // // // //     const pdfUrl = URL.createObjectURL(pdfBlob);
// // // // //     setPdfUrl(pdfUrl);
// // // // //     doc.save('payment-info.pdf');
// // // // //   };

// // // // //   const handlePaymentMethodChange = (e) => {
// // // // //     setPaymentMethod(e.target.value);
// // // // //     setErrors({}); // Clear errors when changing payment method
// // // // //     if (e.target.value === 'Credit Card') {
// // // // //       setCardType(detectCardType(cardNumber));
// // // // //     } else {
// // // // //       setCardType('');
// // // // //     }
// // // // //   };

// // // // //   const detectCardType = (number) => {
// // // // //     const patterns = {
// // // // //       'Visa': /^4/,
// // // // //       'MasterCard': /^5[1-5]/,
// // // // //       'American Express': /^3[47]/,
// // // // //       'Discover': /^6(011|5)/
// // // // //     };

// // // // //     for (const [type, pattern] of Object.entries(patterns)) {
// // // // //       if (pattern.test(number)) {
// // // // //         return type;
// // // // //       }
// // // // //     }
// // // // //     return 'Unknown';
// // // // //   };

// // // // //   const validateForm = () => {
// // // // //     let valid = true;
// // // // //     let errorMessages = {};

// // // // //     if (!paymentMethod) {
// // // // //       errorMessages.paymentMethod = 'Payment method is required';
// // // // //       valid = false;
// // // // //     }

// // // // //     if (paymentMethod === 'Credit Card') {
// // // // //       if (!cardNumber) {
// // // // //         errorMessages.cardNumber = 'Card Number is required';
// // // // //         valid = false;
// // // // //       } else if (!/^\d{16}$/.test(cardNumber)) {
// // // // //         errorMessages.cardNumber = 'Credit Card Number must be 16 digits';
// // // // //         valid = false;
// // // // //       }
// // // // //       if (!cardCVV) {
// // // // //         errorMessages.cardCVV = 'CVV is required';
// // // // //         valid = false;
// // // // //       } else if (!/^\d{3}$/.test(cardCVV)) {
// // // // //         errorMessages.cardCVV = 'CVV must be 3 digits';
// // // // //         valid = false;
// // // // //       }
// // // // //       if (!cardExpiry) {
// // // // //         errorMessages.cardExpiry = 'Expiry Date is required';
// // // // //         valid = false;
// // // // //       } else if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
// // // // //         errorMessages.cardExpiry = 'Expiry Date must be in MM/YY format';
// // // // //         valid = false;
// // // // //       }
// // // // //     } else if (paymentMethod === 'UPI') {
// // // // //       if (!upiId) {
// // // // //         errorMessages.upiId = 'UPI ID is required';
// // // // //         valid = false;
// // // // //       } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/.test(upiId)) {
// // // // //         errorMessages.upiId = 'UPI ID must be in the format "username@bankname"';
// // // // //         valid = false;
// // // // //       }
// // // // //     }

// // // // //     setErrors(errorMessages);
// // // // //     return valid;
// // // // //   };

// // // // //   const handleSubmit = async () => {
// // // // //     if (!validateForm()) return;

// // // // //     setIsProcessing(true);
// // // // //     setTimeout(() => {
// // // // //       setIsProcessing(false);
// // // // //       setShowOtp(true);
// // // // //     }, 2000); // Simulate processing time
// // // // //   };

// // // // //   const handleOtpVerification = async () => {
// // // // //     if (otp === '1234') {
// // // // //       const paymentData = {
// // // // //         amount,
// // // // //         payMethod: paymentMethod,
// // // // //         status: 'Paid',
// // // // //         payDate,
// // // // //         user: {
// // // // //           userId: userId,
// // // // //         },
// // // // //       };

// // // // //       try {
// // // // //         const response = await fetch('http://localhost:8029/payment', {
// // // // //           method: 'PUT',
// // // // //           headers: {
// // // // //             'Content-Type': 'application/json',
// // // // //           },
// // // // //           body: JSON.stringify(paymentData),
// // // // //         });

// // // // //         if (response.ok) {
// // // // //           const transactionId = generateTransactionId();
// // // // //           setTransactionId(transactionId);
// // // // //           generatePdf(paymentData);
// // // // //           setShowOtp(false);
// // // // //           setTimeout(() => {
// // // // //             navigate('/userdashboard');
// // // // //           }, 2000);
// // // // //           sessionStorage.setItem("button", true);
// // // // //         } else {
// // // // //           alert('Payment failed');
// // // // //         }
// // // // //       } catch (error) {
// // // // //         console.error('Error updating payment:', error);
// // // // //         alert('Payment failed');
// // // // //       }
// // // // //     } else {
// // // // //       alert('Invalid OTP');
// // // // //     }
// // // // //   };

// // // // //   const cardImages = {
// // // // //     'Visa': 'path/to/visa-image.png',
// // // // //     'MasterCard': 'path/to/mastercard-image.png',
// // // // //     'American Express': 'path/to/amex-image.png',
// // // // //     'Discover': 'path/to/discover-image.png',
// // // // //     'Unknown': 'path/to/unknown-card.png'
// // // // //   };

// // // // //   return (
// // // // //     <div className={`relative max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg shadow-lg ${isProcessing ? 'blur-sm' : ''}`}>
// // // // //       <button
// // // // //         onClick={() => navigate('/userdashboard')}
// // // // //         className="absolute top-4 left-4 px-4 py-2 bg-gray-300 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400"
// // // // //       >
// // // // //         Back to Dashboard
// // // // //       </button>

// // // // //       <h1 className="text-2xl font-bold mb-6 text-center">Payment Page</h1>

// // // // //       {loading ? (
// // // // //         <div className="text-center">
// // // // //           <p className="text-lg font-medium">Loading payment details...</p>
// // // // //         </div>
// // // // //       ) : (
// // // // //         <form>
// // // // //           <div className="mb-4">
// // // // //             <label className="block text-sm font-medium text-gray-700">Amount:</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               readOnly
// // // // //               value={amount}
// // // // //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // //             />
// // // // //           </div>

// // // // //           <div className="mb-4">
// // // // //             <label className="block text-sm font-medium text-gray-700">Payment Method:</label>
// // // // //             <div className="flex items-center">
// // // // //               <input
// // // // //                 type="radio"
// // // // //                 id="upi"
// // // // //                 name="paymentMethod"
// // // // //                 value="UPI"
// // // // //                 checked={paymentMethod === 'UPI'}
// // // // //                 onChange={handlePaymentMethodChange}
// // // // //                 className="mr-2"
// // // // //               />
// // // // //               <label htmlFor="upi" className="text-sm font-medium text-gray-700">UPI</label>
// // // // //               <input
// // // // //                 type="radio"
// // // // //                 id="creditCard"
// // // // //                 name="paymentMethod"
// // // // //                 value="Credit Card"
// // // // //                 checked={paymentMethod === 'Credit Card'}
// // // // //                 onChange={handlePaymentMethodChange}
// // // // //                 className="ml-4 mr-2"
// // // // //               />
// // // // //               <label htmlFor="creditCard" className="text-sm font-medium text-gray-700">Credit Card</label>
// // // // //             </div>
// // // // //             {errors.paymentMethod && <div className="text-red-500 text-sm">{errors.paymentMethod}</div>}
// // // // //           </div>

// // // // //           {paymentMethod === 'UPI' && (
// // // // //             <div className="mb-4">
// // // // //               <label htmlFor="upiId" className="block text-sm font-medium text-gray-700">UPI ID:</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 id="upiId"
// // // // //                 value={upiId}
// // // // //                 onChange={(e) => {
// // // // //                   setUpiId(e.target.value);
// // // // //                   if (e.target.value) setErrors(prevErrors => ({ ...prevErrors, upiId: '' }));
// // // // //                 }}
// // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // //               />
// // // // //               {errors.upiId && <div className="text-red-500 text-sm">{errors.upiId}</div>}
// // // // //             </div>
// // // // //           )}

// // // // //           {paymentMethod === 'Credit Card' && (
// // // // //             <div className="mb-4">
// // // // //               <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number:</label>
// // // // //               <div className="flex items-center">
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   id="cardNumber"
// // // // //                   value={cardNumber}
// // // // //                   onChange={(e) => {
// // // // //                     setCardNumber(e.target.value);
// // // // //                     setCardType(detectCardType(e.target.value));
// // // // //                     if (e.target.value) setErrors(prevErrors => ({ ...prevErrors, cardNumber: '' }));
// // // // //                   }}
// // // // //                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // //                 />
// // // // //                 <img
// // // // //                   src={cardImages[cardType] || cardImages['Unknown']}
// // // // //                   alt="Card Type"
// // // // //                   className="ml-4 h-8"
// // // // //                 />
// // // // //               </div>
// // // // //               {errors.cardNumber && <div className="text-red-500 text-sm">{errors.cardNumber}</div>}

// // // // //               <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mt-2">Expiry Date:</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 id="cardExpiry"
// // // // //                 value={cardExpiry}
// // // // //                 onChange={(e) => {
// // // // //                   setCardExpiry(e.target.value);
// // // // //                   if (e.target.value) setErrors(prevErrors => ({ ...prevErrors, cardExpiry: '' }));
// // // // //                 }}
// // // // //                 placeholder="MM/YY"
// // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // //               />
// // // // //               {errors.cardExpiry && <div className="text-red-500 text-sm">{errors.cardExpiry}</div>}

// // // // //               <label htmlFor="cardCVV" className="block text-sm font-medium text-gray-700 mt-2">CVV:</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 id="cardCVV"
// // // // //                 value={cardCVV}
// // // // //                 onChange={(e) => {
// // // // //                   setCardCVV(e.target.value);
// // // // //                   if (e.target.value) setErrors(prevErrors => ({ ...prevErrors, cardCVV: '' }));
// // // // //                 }}
// // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // //               />
// // // // //               {errors.cardCVV && <div className="text-red-500 text-sm">{errors.cardCVV}</div>}
// // // // //             </div>
// // // // //           )}

// // // // //           <div className="mb-4">
// // // // //             <label htmlFor="payDate" className="block text-sm font-medium text-gray-700">Payment Date:</label>
// // // // //             <input
// // // // //               type="date"
// // // // //               id="payDate"
// // // // //               value={payDate}
// // // // //               readOnly
// // // // //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // //             />
// // // // //           </div>

// // // // //           <button
// // // // //             type="button"
// // // // //             onClick={handleSubmit}
// // // // //             className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
// // // // //           >
// // // // //             Pay Now
// // // // //           </button>
// // // // //         </form>
// // // // //       )}

// // // // //       {isProcessing && (
// // // // //         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
// // // // //           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
// // // // //             <p className="text-lg font-medium">Processing Payment...</p>
// // // // //             <img src="https://i.pinimg.com/originals/65/5d/2d/655d2da400a648abca600766a89deead.gif" alt="Processing" className="mx-auto mt-4" />
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       {showOtp && (
// // // // //         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
// // // // //           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
// // // // //             <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP:</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               id="otp"
// // // // //               value={otp}
// // // // //               onChange={(e) => setOtp(e.target.value)}
// // // // //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // // //             />
// // // // //             <button
// // // // //               type="button"
// // // // //               onClick={handleOtpVerification}
// // // // //               className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
// // // // //             >
// // // // //               Verify OTP
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       {pdfUrl && (
// // // // //         <div className="text-center mt-6">
// // // // //           <p className="text-lg font-medium">Payment Successful!</p>
// // // // //           <a
// // // // //             href={pdfUrl}
// // // // //             download
// // // // //             className="text-blue-500 underline mt-2 block"
// // // // //           >
// // // // //             Download PDF
// // // // //           </a>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PaymentPage;

// // // // import React, { useState, useEffect } from 'react';
// // // // import { jsPDF } from 'jspdf';
// // // // import { useNavigate } from 'react-router-dom';

// // // // const PaymentPage = () => {
// // // //   const [paymentMethod, setPaymentMethod] = useState('UPI');
// // // //   const [amount, setAmount] = useState(0);
// // // //   const [upiId, setUpiId] = useState('');
// // // //   const [cardNumber, setCardNumber] = useState('');
// // // //   const [cardExpiry, setCardExpiry] = useState('');
// // // //   const [cardCVV, setCardCVV] = useState('');
// // // //   const [payDate, setPayDate] = useState(new Date().toISOString().split('T')[0]);
// // // //   const [isProcessing, setIsProcessing] = useState(false);
// // // //   const [showOtp, setShowOtp] = useState(false);
// // // //   const [otp, setOtp] = useState('');
// // // //   const [transactionId, setTransactionId] = useState('');
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [errors, setErrors] = useState({});
// // // //   const [cardType, setCardType] = useState('');
// // // //   const [pdfUrl, setPdfUrl] = useState('');
// // // //   const navigate = useNavigate();
// // // //   const userId = sessionStorage.getItem("userId");

// // // //   useEffect(() => {
// // // //     const fetchPaymentDetails = async () => {
// // // //       try {
// // // //         const response = await fetch(`http://localhost:8029/payment/${userId}`);
// // // //         const data = await response.json();
// // // //         setAmount(data.amount);
// // // //         setPayDate(new Date(data.payDate).toISOString().split('T')[0]);
// // // //         setLoading(false);
// // // //       } catch (error) {
// // // //         console.error('Error fetching payment details:', error);
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchPaymentDetails();
// // // //   }, [userId]);

// // // //   const generateTransactionId = () => {
// // // //     return 'TXN' + Math.floor(Math.random() * 1000000);
// // // //   };

// // // //   const generatePdf = (data) => {
// // // //     const doc = new jsPDF();
// // // //     const margin = 10;
// // // //     const lineHeight = 10;

// // // //     doc.setFontSize(16);
// // // //     doc.setFont('helvetica', 'bold');
// // // //     doc.text('Premium Payment Receipt', margin, margin + 10);

// // // //     doc.setFontSize(12);
// // // //     doc.setFont('helvetica', 'bold');
// // // //     doc.text('Payment Information', margin, margin + 20);

// // // //     doc.setFont('helvetica', 'normal');
// // // //     doc.setFontSize(12);

// // // //     let y = margin + 30;
// // // //     const transactionId = generateTransactionId();
// // // //     doc.text(`Transaction ID: ${transactionId}`, margin, y);
// // // //     y += lineHeight;
// // // //     doc.text(`Amount: ${data.amount}`, margin, y);
// // // //     y += lineHeight;
// // // //     doc.text(`Payment Method: ${data.payMethod}`, margin, y);
// // // //     y += lineHeight;
// // // //     doc.text(`Payment Date: ${data.payDate}`, margin, y);

// // // //     const pdfBlob = doc.output('blob');
// // // //     const pdfUrl = URL.createObjectURL(pdfBlob);
// // // //     setPdfUrl(pdfUrl);
// // // //     doc.save('payment-info.pdf');
// // // //   };

// // // //   const handlePaymentMethodChange = (e) => {
// // // //     setPaymentMethod(e.target.value);
// // // //     setErrors({}); // Clear errors when changing payment method
// // // //     if (e.target.value === 'Credit Card') {
// // // //       setCardType(detectCardType(cardNumber));
// // // //     } else {
// // // //       setCardType('');
// // // //     }
// // // //   };

// // // //   const detectCardType = (number) => {
// // // //     const patterns = {
// // // //       'Visa': /^4/,
// // // //       'MasterCard': /^5[1-5]/,
// // // //       'American Express': /^3[47]/,
// // // //       'Discover': /^6(011|5)/
// // // //     };

// // // //     for (const [type, pattern] of Object.entries(patterns)) {
// // // //       if (pattern.test(number)) {
// // // //         return type;
// // // //       }
// // // //     }
// // // //     return 'Unknown';
// // // //   };

// // // //   const isDateInFuture = (expiryDate) => {
// // // //     const [month, year] = expiryDate.split('/');
// // // //     const currentDate = new Date();
// // // //     const expiryMonth = parseInt(month, 10);
// // // //     const expiryYear = 2000 + parseInt(year, 10); // Assuming the year is in 'YY' format

// // // //     const expiryDateObj = new Date(expiryYear, expiryMonth - 1);
// // // //     return expiryDateObj > currentDate;
// // // //   };

// // // //   const validateForm = () => {
// // // //     let valid = true;
// // // //     let errorMessages = {};

// // // //     if (!paymentMethod) {
// // // //       errorMessages.paymentMethod = 'Payment method is required';
// // // //       valid = false;
// // // //     }

// // // //     if (paymentMethod === 'Credit Card') {
// // // //       if (!cardNumber) {
// // // //         errorMessages.cardNumber = 'Card Number is required';
// // // //         valid = false;
// // // //       } else if (!/^\d{16}$/.test(cardNumber)) {
// // // //         errorMessages.cardNumber = 'Credit Card Number must be 16 digits';
// // // //         valid = false;
// // // //       }
// // // //       if (!cardCVV) {
// // // //         errorMessages.cardCVV = 'CVV is required';
// // // //         valid = false;
// // // //       } else if (!/^\d{3}$/.test(cardCVV)) {
// // // //         errorMessages.cardCVV = 'CVV must be 3 digits';
// // // //         valid = false;
// // // //       }
// // // //       if (!cardExpiry) {
// // // //         errorMessages.cardExpiry = 'Expiry Date is required';
// // // //         valid = false;
// // // //       } else if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
// // // //         errorMessages.cardExpiry = 'Expiry Date must be in MM/YY format';
// // // //         valid = false;
// // // //       } else if (!isDateInFuture(cardExpiry)) {
// // // //         errorMessages.cardExpiry = 'Expiry Date must be a future date';
// // // //         valid = false;
// // // //       }
// // // //     } else if (paymentMethod === 'UPI') {
// // // //       if (!upiId) {
// // // //         errorMessages.upiId = 'UPI ID is required';
// // // //         valid = false;
// // // //       } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/.test(upiId)) {
// // // //         errorMessages.upiId = 'UPI ID must be in the format "username@bankname"';
// // // //         valid = false;
// // // //       }
// // // //     }

// // // //     setErrors(errorMessages);
// // // //     return valid;
// // // //   };

// // // //   const handleSubmit = async () => {
// // // //     if (!validateForm()) return;

// // // //     setIsProcessing(true);
// // // //     setTimeout(() => {
// // // //       setIsProcessing(false);
// // // //       setShowOtp(true);
// // // //     }, 2000); // Simulate processing time
// // // //   };

// // // //   const handleOtpChange = (e, index) => {
// // // //     const newOtp = [...otp.split('')];
// // // //     newOtp[index] = e.target.value;
// // // //     setOtp(newOtp.join(''));
// // // //   };

// // // //   const handleOtpVerification = async () => {
// // // //     if (otp === '1234') {
// // // //       const paymentData = {
// // // //         amount,
// // // //         payMethod: paymentMethod,
// // // //         status: 'Paid',
// // // //         payDate,
// // // //         user: {
// // // //           userId: userId,
// // // //         },
// // // //       };

// // // //       try {
// // // //         const response = await fetch('http://localhost:8029/payment', {
// // // //           method: 'PUT',
// // // //           headers: {
// // // //             'Content-Type': 'application/json',
// // // //           },
// // // //           body: JSON.stringify(paymentData),
// // // //         });

// // // //         if (response.ok) {
// // // //           const transactionId = generateTransactionId();
// // // //           setTransactionId(transactionId);
// // // //           generatePdf(paymentData);
// // // //           setShowOtp(false);
// // // //           setTimeout(() => {
// // // //             navigate('/userdashboard');
// // // //           }, 2000);
// // // //           sessionStorage.setItem("button", true);
// // // //         } else {
// // // //           alert('Payment failed');
// // // //         }
// // // //       } catch (error) {
// // // //         console.error('Error updating payment:', error);
// // // //         alert('Payment failed');
// // // //       }
// // // //     } else {
// // // //       alert('Invalid OTP');
// // // //     }
// // // //   };

// // // //   const cardImages = {
// // // //     'Visa': 'https://th.bing.com/th/id/OIP.qmQYyj1ByR7si4njwyQLDgHaEK?w=296&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
// // // //     'MasterCard': 'https://th.bing.com/th/id/OIP.5RYUktehnlhfr3CpihBobAHaEr?w=309&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7',
// // // //     'American Express': 'https://th.bing.com/th/id/OIP.XO9gRXm2BtUIkfHNdifbJQHaEs?rs=1&pid=ImgDetMain',
// // // //     'Discover': 'https://th.bing.com/th/id/R.4a6ab82d84d0762df582d9d551e325df?rik=oNG9wb5lI6EdGA&riu=http%3a%2f%2f2.bp.blogspot.com%2f_oBRbTQRZwVI%2fTOL_HqjU0fI%2fAAAAAAAAAaY%2fqH7duiBaHdM%2fs1600%2fdiscover.jpg&ehk=HMxU3GaUYGk4R0zGse0ajhopuaRFTdfHxxJQeMOmCso%3d&risl=&pid=ImgRaw&r=0',
// // // //     'Unknown': 'path/to/unknown-card.png'
// // // //   };

// // // //   const renderOtpInputs = () => {
// // // //     return Array.from({ length: 4 }, (_, index) => (
// // // //       <input
// // // //         key={index}
// // // //         type="text"
// // // //         value={otp[index] || ''}
// // // //         onChange={(e) => handleOtpChange(e, index)}
// // // //         maxLength="1"
// // // //         className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl font-bold mx-1"
// // // //       />
// // // //     ));
// // // //   };

// // // //   return (
// // // //     <div className={`relative max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg shadow-lg ${isProcessing ? 'blur-sm' : ''}`}>
// // // //       <button
// // // //         onClick={() => navigate('/userdashboard')}
// // // //         className="absolute top-4 left-4 px-4 py-2 bg-gray-300 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400"
// // // //       >
// // // //         Back to Dashboard
// // // //       </button>

// // // //       <h1 className="text-2xl font-bold mb-6 text-center">Payment Page</h1>

// // // //       {loading ? (
// // // //         <div className="text-center">
// // // //           <p className="text-lg font-medium">Loading payment details...</p>
// // // //         </div>
// // // //       ) : (
// // // //         <form>
// // // //           <div className="mb-4">
// // // //             <label className="block text-sm font-medium text-gray-700">Amount:</label>
// // // //             <input
// // // //               type="text"
// // // //               readOnly
// // // //               value={amount}
// // // //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // //             />
// // // //           </div>

// // // //           <div className="mb-4">
// // // //             <label className="block text-sm font-medium text-gray-700">Payment Method:</label>
// // // //             <div className="flex items-center">
// // // //               <input
// // // //                 type="radio"
// // // //                 id="upi"
// // // //                 name="paymentMethod"
// // // //                 value="UPI"
// // // //                 checked={paymentMethod === 'UPI'}
// // // //                 onChange={handlePaymentMethodChange}
// // // //                 className="mr-2"
// // // //               />
// // // //               <label htmlFor="upi" className="text-sm font-medium text-gray-700">UPI</label>
// // // //               <input
// // // //                 type="radio"
// // // //                 id="creditCard"
// // // //                 name="paymentMethod"
// // // //                 value="Credit Card"
// // // //                 checked={paymentMethod === 'Credit Card'}
// // // //                 onChange={handlePaymentMethodChange}
// // // //                 className="ml-4 mr-2"
// // // //               />
// // // //               <label htmlFor="creditCard" className="text-sm font-medium text-gray-700">Credit Card</label>
// // // //             </div>
// // // //             {errors.paymentMethod && <div className="text-red-500 text-sm">{errors.paymentMethod}</div>}
// // // //           </div>

// // // //           {paymentMethod === 'UPI' && (
// // // //             <div className="mb-4">
// // // //               <label htmlFor="upiId" className="block text-sm font-medium text-gray-700">UPI ID:</label>
// // // //               <input
// // // //                 type="text"
// // // //                 id="upiId"
// // // //                 value={upiId}
// // // //                 onChange={(e) => {
// // // //                   setUpiId(e.target.value);
// // // //                   if (e.target.value) setErrors(prevErrors => ({ ...prevErrors, upiId: '' }));
// // // //                 }}
// // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // //               />
// // // //               {errors.upiId && <div className="text-red-500 text-sm">{errors.upiId}</div>}
// // // //             </div>
// // // //           )}

// // // //           {paymentMethod === 'Credit Card' && (
// // // //             <div className="mb-4">
// // // //               <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number:</label>
// // // //               <div className="flex items-center">
// // // //                 <input
// // // //                   type="text"
// // // //                   id="cardNumber"
// // // //                   value={cardNumber}
// // // //                   onChange={(e) => {
// // // //                     setCardNumber(e.target.value);
// // // //                     setCardType(detectCardType(e.target.value));
// // // //                     if (e.target.value) setErrors(prevErrors => ({ ...prevErrors, cardNumber: '' }));
// // // //                   }}
// // // //                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // //                 />
// // // //                 <img
// // // //                   src={cardImages[cardType] || cardImages['Unknown']}
// // // //                   alt="Card Type"
// // // //                   className="ml-4 h-90 w-90"
// // // //                 />
// // // //               </div>
// // // //               {errors.cardNumber && <div className="text-red-500 text-sm">{errors.cardNumber}</div>}

// // // //               <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mt-2">Expiry Date:</label>
// // // //               <input
// // // //                 type="text"
// // // //                 id="cardExpiry"
// // // //                 value={cardExpiry}
// // // //                 onChange={(e) => {
// // // //                   setCardExpiry(e.target.value);
// // // //                   if (e.target.value) setErrors(prevErrors => ({ ...prevErrors, cardExpiry: '' }));
// // // //                 }}
// // // //                 placeholder="MM/YY"
// // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // //               />
// // // //               {errors.cardExpiry && <div className="text-red-500 text-sm">{errors.cardExpiry}</div>}

// // // //               <label htmlFor="cardCVV" className="block text-sm font-medium text-gray-700 mt-2">CVV:</label>
// // // //               <input
// // // //                 type="text"
// // // //                 id="cardCVV"
// // // //                 value={cardCVV}
// // // //                 onChange={(e) => {
// // // //                   setCardCVV(e.target.value);
// // // //                   if (e.target.value) setErrors(prevErrors => ({ ...prevErrors, cardCVV: '' }));
// // // //                 }}
// // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // //               />
// // // //               {errors.cardCVV && <div className="text-red-500 text-sm">{errors.cardCVV}</div>}
// // // //             </div>
// // // //           )}

// // // //           <div className="mb-4">
// // // //             <label htmlFor="payDate" className="block text-sm font-medium text-gray-700">Payment Date:</label>
// // // //             <input
// // // //               type="date"
// // // //               id="payDate"
// // // //               value={payDate}
// // // //               readOnly
// // // //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // // //             />
// // // //           </div>

// // // //           <button
// // // //             type="button"
// // // //             onClick={handleSubmit}
// // // //             className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
// // // //           >
// // // //             Pay Now
// // // //           </button>
// // // //         </form>
// // // //       )}

// // // //       {isProcessing && (
// // // //         <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
// // // //           <div className="bg-white p-8 rounded-lg text-center">
// // // //             <p className="text-lg font-medium">Processing Payment...</p>
// // // //             <img src="https://i.pinimg.com/originals/65/5d/2d/655d2da400a648abca600766a89deead.gif" alt="Processing" className="mx-auto mt-4 w-24 h-24" />
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {showOtp && (
// // // //         <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
// // // //           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
// // // //             <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP:</label>
// // // //             <div className="flex justify-center mt-2">
// // // //               {renderOtpInputs()}
// // // //             </div>
// // // //             <button
// // // //               type="button"
// // // //               onClick={handleOtpVerification}
// // // //               className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
// // // //             >
// // // //               Verify OTP
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {pdfUrl && (
// // // //         <div className="text-center mt-6">
// // // //           <p className="text-lg font-medium">Payment Successful!</p>
// // // //           <a
// // // //             href={pdfUrl}
// // // //             download
// // // //             className="text-blue-500 underline mt-2 block"
// // // //           >
// // // //             Download PDF
// // // //           </a>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PaymentPage;

// // // import React, { useState, useEffect } from 'react';
// // // import { jsPDF } from 'jspdf';
// // // import { useNavigate } from 'react-router-dom';

// // // const PaymentPage = () => {
// // //   const [paymentMethod, setPaymentMethod] = useState('UPI');
// // //   const [amount, setAmount] = useState(0);
// // //   const [upiId, setUpiId] = useState('');
// // //   const [cardNumber, setCardNumber] = useState('');
// // //   const [cardExpiry, setCardExpiry] = useState('');
// // //   const [cardCVV, setCardCVV] = useState('');
// // //   const [payDate, setPayDate] = useState(new Date().toISOString().split('T')[0]);
// // //   const [isProcessing, setIsProcessing] = useState(false);
// // //   const [showOtp, setShowOtp] = useState(false);
// // //   const [otp, setOtp] = useState('');
// // //   const [transactionId, setTransactionId] = useState('');
// // //   const [loading, setLoading] = useState(true);
// // //   const [errors, setErrors] = useState({});
// // //   const [cardType, setCardType] = useState('');
// // //   const [pdfUrl, setPdfUrl] = useState('');
// // //   const navigate = useNavigate();
// // //    const [paymentId, setPaymentId] = useState(null);
// // //   const userId = sessionStorage.getItem("userId");

// // //   useEffect(() => {
// // //     const fetchPaymentDetails = async () => {
// // //       try {
// // //         const response = await fetch(`http://localhost:8029/payment/${userId}`);
// // //         const data = await response.json();
// // //        setAmount(data.amount);
// // //         setPayDate(new Date(data.payDate).toISOString().split('T')[0]);
// // //         setPaymentId(data.payId);
// // //         console.log(data);
// // //         setLoading(false);
// // //       } catch (error) {
// // //         console.error('Error fetching payment details:', error);
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchPaymentDetails();
// // //   }, [userId]);

// // //   const generateTransactionId = () => {
// // //     return 'TXN' + Math.floor(Math.random() * 1000000);
// // //   };

// // //   const generatePdf = (data) => {
// // //     const doc = new jsPDF();
// // //     const margin = 10;
// // //     const lineHeight = 10;

// // //     doc.setFontSize(16);
// // //     doc.setFont('helvetica', 'bold');
// // //     doc.text('Premium Payment Receipt', margin, margin + 10);

// // //     doc.setFontSize(12);
// // //     doc.setFont('helvetica', 'bold');
// // //     doc.text('Payment Information', margin, margin + 20);

// // //     doc.setFont('helvetica', 'normal');
// // //     doc.setFontSize(12);

// // //     let y = margin + 30;
// // //     const transactionId = generateTransactionId();
// // //     doc.text(`Transaction ID: ${transactionId}`, margin, y);
// // //     y += lineHeight;
// // //     doc.text(`Amount: ${data.amount}`, margin, y);
// // //     y += lineHeight;
// // //     doc.text(`Payment Method: ${data.payMethod}`, margin, y);
// // //     y += lineHeight;
// // //     doc.text(`Payment Date: ${data.payDate}`, margin, y);

// // //     const pdfBlob = doc.output('blob');
// // //     const pdfUrl = URL.createObjectURL(pdfBlob);
// // //     setPdfUrl(pdfUrl);
// // //     doc.save('payment-info.pdf');
// // //   };

// // //   const handlePaymentMethodChange = (e) => {
// // //     setPaymentMethod(e.target.value);
// // //     setErrors({}); // Clear errors when changing payment method
// // //     if (e.target.value === 'Credit Card') {
// // //       setCardType(detectCardType(cardNumber));
// // //     } else {
// // //       setCardType('');
// // //     }
// // //   };

// // //   const detectCardType = (number) => {
// // //     const patterns = {
// // //       'Visa': /^4/,
// // //       'MasterCard': /^5[1-5]/,
// // //       'American Express': /^3[47]/,
// // //       'Discover': /^6(011|5)/
// // //     };

// // //     for (const [type, pattern] of Object.entries(patterns)) {
// // //       if (pattern.test(number)) {
// // //         return type;
// // //       }
// // //     }
// // //     return 'Unknown';
// // //   };

// // //   const isDateInFuture = (expiryDate) => {
// // //     const [month, year] = expiryDate.split('/');
// // //     const currentDate = new Date();
// // //     const expiryMonth = parseInt(month, 10);
// // //     const expiryYear = 2000 + parseInt(year, 10); // Assuming the year is in 'YY' format

// // //     const expiryDateObj = new Date(expiryYear, expiryMonth - 1);
// // //     return expiryDateObj > currentDate;
// // //   };

// // //   const validateForm = () => {
// // //     let valid = true;
// // //     let errorMessages = {};

// // //     if (!paymentMethod) {
// // //       errorMessages.paymentMethod = 'Payment method is required';
// // //       valid = false;
// // //     }

// // //     if (paymentMethod === 'Credit Card') {
// // //       if (!cardNumber) {
// // //         errorMessages.cardNumber = 'Card Number is required';
// // //         valid = false;
// // //       } else if (!/^\d{16}$/.test(cardNumber)) {
// // //         errorMessages.cardNumber = 'Credit Card Number must be 16 digits';
// // //         valid = false;
// // //       }
// // //       if (!cardCVV) {
// // //         errorMessages.cardCVV = 'CVV is required';
// // //         valid = false;
// // //       } else if (!/^\d{3}$/.test(cardCVV)) {
// // //         errorMessages.cardCVV = 'CVV must be 3 digits';
// // //         valid = false;
// // //       }
// // //       if (!cardExpiry) {
// // //         errorMessages.cardExpiry = 'Expiry Date is required';
// // //         valid = false;
// // //       } else if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
// // //         errorMessages.cardExpiry = 'Expiry Date must be in MM/YY format';
// // //         valid = false;
// // //       } else if (!isDateInFuture(cardExpiry)) {
// // //         errorMessages.cardExpiry = 'Expiry Date must be a future date';
// // //         valid = false;
// // //       }
// // //     } else if (paymentMethod === 'UPI') {
// // //       if (!upiId) {
// // //         errorMessages.upiId = 'UPI ID is required';
// // //         valid = false;
// // //       } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/.test(upiId)) {
// // //         errorMessages.upiId = 'UPI ID must be in the format "username@bankname"';
// // //         valid = false;
// // //       }
// // //     }

// // //     setErrors(errorMessages);
// // //     return valid;
// // //   };

// // //   const handleSubmit = async () => {
// // //     if (!validateForm()) return;

// // //     setIsProcessing(true);
// // //     setTimeout(() => {
// // //       setIsProcessing(false);
// // //       setShowOtp(true);
// // //     }, 2000); // Simulate processing time
// // //   };

// // //   const handleOtpChange = (e, index) => {
// // //     const value = e.target.value;
// // //     if (/\d/.test(value)) {
// // //       const newOtp = [...otp.split('')];
// // //       newOtp[index] = value;
// // //       setOtp(newOtp.join(''));

// // //       if (index < 3) {
// // //         document.getElementById(`otp-input-${index + 1}`).focus();
// // //       }
// // //     }
// // //   };

// // //   const handleOtpVerification = async () => {
// // //     if (otp === '1234') {
// // //       const paymentData = {
// // //         paymentId,
// // //         amount,
// // //         payMethod: paymentMethod,
// // //         status: 'Paid',
// // //         payDate,
// // //         user: {
// // //           userId: userId,
// // //         },
// // //       };

// // //       try {
// // //         const response = await fetch(`http://localhost:8029/payment`, {
// // //           method: 'PUT',
// // //           headers: {
// // //             'Content-Type': 'application/json',
// // //           },
// // //           body: JSON.stringify(paymentData),
// // //         });

// // //         if (response.ok) {
// // //           const transactionId = generateTransactionId();
// // //           setTransactionId(transactionId);
// // //           generatePdf(paymentData);
// // //           setShowOtp(false);
// // //           setTimeout(() => {
// // //             navigate('/userdashboard');
// // //           }, 2000);
// // //           sessionStorage.setItem("button", true);
// // //         } else {
// // //           alert('Payment failed');
// // //         }
// // //       } catch (error) {
// // //         console.error('Error updating payment:', error);
// // //         alert('Payment failed');
// // //       }
// // //     } else {
// // //       alert('Invalid OTP');
// // //     }
// // //   };

// // //   const cardImages = {
// // //     'Visa': 'https://th.bing.com/th/id/OIP.qmQYyj1ByR7si4njwyQLDgHaEK?w=296&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
// // //     'MasterCard': 'https://th.bing.com/th/id/OIP.5RYUktehnlhfr3CpihBobAHaEr?w=309&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7',
// // //     'American Express': 'https://th.bing.com/th/id/OIP.XO9gRXm2BtUIkfHNdifbJQHaEs?rs=1&pid=ImgDetMain',
// // //     'Discover': 'https://th.bing.com/th/id/R.4a6ab82d84d0762df582d9d551e325df?rik=oNG9wb5lI6EdGA&riu=http%3a%2f%2f2.bp.blogspot.com%2f_oBRbTQRZwVI%2fTOL_HqjU0fI%2fAAAAAAAAAaY%2fqH7duiBaHdM%2fs1600%2fdiscover.jpg&ehk=HMxU3GaUYGk4R0zGse0ajhopuaRFTdfHxxJQeMOmCso%3d&risl=&pid=ImgRaw&r=0',
// // //     'Unknown': 'path/to/unknown-card.png'
// // //   };

// // //   const renderOtpInputs = () => {
// // //     return Array.from({ length: 4 }, (_, index) => (
// // //       <input
// // //         key={index}
// // //         id={`otp-input-${index}`}
// // //         type="text"
// // //         value={otp[index] || ''}
// // //         onChange={(e) => handleOtpChange(e, index)}
// // //         maxLength="1"
// // //         className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl font-bold mx-1"
// // //       />
// // //     ));
// // //   };

// // //   return (
// // //     <div className={`relative max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg shadow-lg ${isProcessing ? 'blur-sm' : ''}`}>
// // //       <button
// // //         onClick={() => navigate('/userdashboard')}
// // //         className="absolute top-4 left-4 px-4 py-2 bg-gray-300 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400"
// // //       >
// // //         Back to Dashboard
// // //       </button>

// // //       <h1 className="text-2xl font-bold mb-6 text-center">Payment Page</h1>

// // //       {loading ? (
// // //         <div className="text-center">
// // //           <p className="text-lg font-medium">Loading payment details...</p>
// // //         </div>
// // //       ) : (
// // //         <form>
// // //           <div className="mb-4">
// // //             <label className="block text-sm font-medium text-gray-700">Amount:</label>
// // //             <input
// // //               type="text"
// // //               readOnly
// // //               value={amount}
// // //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // //             />
// // //           </div>

// // //           <div className="mb-4">
// // //             <label className="block text-sm font-medium text-gray-700">Payment Method:</label>
// // //             <div className="flex items-center">
// // //               <input
// // //                 type="radio"
// // //                 id="upi"
// // //                 name="paymentMethod"
// // //                 value="UPI"
// // //                 checked={paymentMethod === 'UPI'}
// // //                 onChange={handlePaymentMethodChange}
// // //                 className="mr-2"
// // //               />
// // //               <label htmlFor="upi" className="text-sm font-medium text-gray-700">UPI</label>
// // //               <input
// // //                 type="radio"
// // //                 id="creditCard"
// // //                 name="paymentMethod"
// // //                 value="Credit Card"
// // //                 checked={paymentMethod === 'Credit Card'}
// // //                 onChange={handlePaymentMethodChange}
// // //                 className="ml-4 mr-2"
// // //               />
// // //               <label htmlFor="creditCard" className="text-sm font-medium text-gray-700">Credit Card</label>
// // //             </div>
// // //             {errors.paymentMethod && <div className="text-red-500 text-sm">{errors.paymentMethod}</div>}
// // //           </div>

// // //           {paymentMethod === 'UPI' && (
// // //             <div className="mb-4">
// // //               <label htmlFor="upiId" className="block text-sm font-medium text-gray-700">UPI ID:</label>
// // //               <input
// // //                 type="text"
// // //                 id="upiId"
// // //                 value={upiId}
// // //                 onChange={(e) => {
// // //                   setUpiId(e.target.value);
// // //                   if (e.target.value) setErrors(prevErrors => ({ ...prevErrors, upiId: '' }));
// // //                 }}
// // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // //               />
// // //               {errors.upiId && <div className="text-red-500 text-sm">{errors.upiId}</div>}
// // //             </div>
// // //           )}

// // //           {paymentMethod === 'Credit Card' && (
// // //             <div className="mb-4">
// // //               <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number:</label>
// // //               <div className="flex items-center">
// // //                 <input
// // //                   type="text"
// // //                   id="cardNumber"
// // //                   value={cardNumber}
// // //                   onChange={(e) => {
// // //                     setCardNumber(e.target.value);
// // //                     setCardType(detectCardType(e.target.value));
// // //                     if (e.target.value) setErrors(prevErrors => ({ ...prevErrors, cardNumber: '' }));
// // //                   }}
// // //                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // //                 />
// // //                 <img
// // //                   src={cardImages[cardType] || cardImages['Unknown']}
// // //                   alt="Card Type"
// // //                   className="ml-4 h-150 w-150"
// // //                 />
// // //               </div>
// // //               {errors.cardNumber && <div className="text-red-500 text-sm">{errors.cardNumber}</div>}

// // //               <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mt-2">Expiry Date:</label>
// // //               <input
// // //                 type="text"
// // //                 id="cardExpiry"
// // //                 value={cardExpiry}
// // //                 onChange={(e) => {
// // //                   setCardExpiry(e.target.value);
// // //                   if (e.target.value) setErrors(prevErrors => ({ ...prevErrors, cardExpiry: '' }));
// // //                 }}
// // //                 placeholder="MM/YY"
// // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // //               />
// // //               {errors.cardExpiry && <div className="text-red-500 text-sm">{errors.cardExpiry}</div>}

// // //               <label htmlFor="cardCVV" className="block text-sm font-medium text-gray-700 mt-2">CVV:</label>
// // //               <input
// // //                 type="text"
// // //                 id="cardCVV"
// // //                 value={cardCVV}
// // //                 onChange={(e) => {
// // //                   setCardCVV(e.target.value);
// // //                   if (e.target.value) setErrors(prevErrors => ({ ...prevErrors, cardCVV: '' }));
// // //                 }}
// // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // //               />
// // //               {errors.cardCVV && <div className="text-red-500 text-sm">{errors.cardCVV}</div>}
// // //             </div>
// // //           )}

// // //           <div className="mb-4">
// // //             <label htmlFor="payDate" className="block text-sm font-medium text-gray-700">Payment Date:</label>
// // //             <input
// // //               type="date"
// // //               id="payDate"
// // //               value={payDate}
// // //               readOnly
// // //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
// // //             />
// // //           </div>

// // //           <button
// // //             type="button"
// // //             onClick={handleSubmit}
// // //             className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
// // //           >
// // //             Pay Now
// // //           </button>
// // //         </form>
// // //       )}

// // //       {isProcessing && (
// // //         <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
// // //           <div className="bg-white p-8 rounded-lg text-center">
// // //             <p className="text-lg font-medium">Processing Payment...</p>
// // //             <img src="https://i.pinimg.com/originals/65/5d/2d/655d2da400a648abca600766a89deead.gif" alt="Processing" className="mx-auto mt-4 w-24 h-24" />
// // //           </div>
// // //         </div>
// // //       )}

// // //       {showOtp && (
// // //         <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
// // //           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
// // //             <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP:</label>
// // //             <div className="flex justify-center mt-2">
// // //               {renderOtpInputs()}
// // //             </div>
// // //             <button
// // //               type="button"
// // //               onClick={handleOtpVerification}
// // //               className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
// // //             >
// // //               Verify OTP
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {pdfUrl && (
// // //         <div className="text-center mt-6">
// // //           <p className="text-lg font-medium">Payment Successful!</p>
// // //           <a
// // //             href={pdfUrl}
// // //             download
// // //             className="text-blue-500 underline mt-2 block"
// // //           >
// // //             Download PDF
// // //           </a>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default PaymentPage;




// // import React, { useState, useEffect } from 'react';
// // import { jsPDF } from 'jspdf';
// // import { useNavigate } from 'react-router-dom';

// // const PaymentPage = () => {
// //   const [paymentMethod, setPaymentMethod] = useState('UPI');
// //   const [amount, setAmount] = useState(0);
// //   const [upiId, setUpiId] = useState('');
// //   const [cardNumber, setCardNumber] = useState('');
// //   const [cardExpiry, setCardExpiry] = useState('');
// //   const [cardCVV, setCardCVV] = useState('');
// //   const [payDate, setPayDate] = useState(new Date().toISOString().split('T')[0]);
// //   const [isProcessing, setIsProcessing] = useState(false);
// //   const [showOtp, setShowOtp] = useState(false);
// //   const [otp, setOtp] = useState('');
// //   const [transactionId, setTransactionId] = useState('');
// //   const [loading, setLoading] = useState(true);
// //   const [errors, setErrors] = useState({});
// //   const [cardType, setCardType] = useState('');
// //   const [pdfUrl, setPdfUrl] = useState('');
// //   const navigate = useNavigate();
// //   const [paymentId, setPaymentId] = useState(null);
// //   const userId = sessionStorage.getItem("userId");

// //   useEffect(() => {
// //     const fetchPaymentDetails = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:8029/payment/${userId}`);
// //         const data = await response.json();
// //         setAmount(data.amount);
// //         setPaymentId(data.payId);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching payment details:', error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchPaymentDetails();
// //   }, [userId]);

// //   const generateTransactionId = () => {
// //     return 'TXN' + Math.floor(Math.random() * 1000000);
// //   };

// //   const generatePdf = (data) => {
// //     const doc = new jsPDF();
// //     const margin = 10;
// //     const lineHeight = 10;

// //     doc.setFontSize(16);
// //     doc.setFont('helvetica', 'bold');
// //     doc.text('Premium Payment Receipt', margin, margin + 10);

// //     doc.setFontSize(12);
// //     doc.setFont('helvetica', 'bold');
// //     doc.text('Payment Information', margin, margin + 20);

// //     doc.setFont('helvetica', 'normal');
// //     doc.setFontSize(12);

// //     let y = margin + 30;
// //     const transactionId = generateTransactionId();
// //     doc.text(`Transaction ID: ${transactionId}`, margin, y);
// //     y += lineHeight;
// //     doc.text(`Amount: ${data.amount}`, margin, y);
// //     y += lineHeight;
// //     doc.text(`Payment Method: ${data.payMethod}`, margin, y);
// //     y += lineHeight;
// //     doc.text(`Payment Date: ${data.payDate}`, margin, y);

// //     const pdfBlob = doc.output('blob');
// //     const pdfUrl = URL.createObjectURL(pdfBlob);
// //     setPdfUrl(pdfUrl);
// //     doc.save('payment-info.pdf');
// //   };

// //   const handlePaymentMethodChange = (e) => {
// //     setPaymentMethod(e.target.value);
// //     setErrors({});
// //     if (e.target.value === 'Credit Card') {
// //       setCardType(detectCardType(cardNumber));
// //     } else {
// //       setCardType('');
// //     }
// //   };

// //   const detectCardType = (number) => {
// //     const patterns = {
// //       'Visa': /^4/,
// //       'MasterCard': /^5[1-5]/,
// //       'American Express': /^3[47]/,
// //       'Discover': /^6(011|5)/
// //     };

// //     for (const [type, pattern] of Object.entries(patterns)) {
// //       if (pattern.test(number)) {
// //         return type;
// //       }
// //     }
// //     return 'Unknown';
// //   };

// //   const isDateInFuture = (expiryDate) => {
// //     const [month, year] = expiryDate.split('/');
// //     const currentDate = new Date();
// //     const expiryMonth = parseInt(month, 10);
// //     const expiryYear = 2000 + parseInt(year, 10);

// //     const expiryDateObj = new Date(expiryYear, expiryMonth - 1);
// //     return expiryDateObj > currentDate;
// //   };

// //   const validateForm = () => {
// //     let valid = true;
// //     let errorMessages = {};

// //     if (!paymentMethod) {
// //       errorMessages.paymentMethod = 'Payment method is required';
// //       valid = false;
// //     }

// //     if (paymentMethod === 'Credit Card') {
// //       if (!cardNumber) {
// //         errorMessages.cardNumber = 'Card Number is required';
// //         valid = false;
// //       } else if (!/^\d{16}$/.test(cardNumber)) {
// //         errorMessages.cardNumber = 'Credit Card Number must be 16 digits';
// //         valid = false;
// //       }
// //       if (!cardCVV) {
// //         errorMessages.cardCVV = 'CVV is required';
// //         valid = false;
// //       } else if (!/^\d{3}$/.test(cardCVV)) {
// //         errorMessages.cardCVV = 'CVV must be 3 digits';
// //         valid = false;
// //       }
// //       if (!cardExpiry) {
// //         errorMessages.cardExpiry = 'Expiry Date is required';
// //         valid = false;
// //       } else if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
// //         errorMessages.cardExpiry = 'Expiry Date must be in MM/YY format';
// //         valid = false;
// //       } else if (!isDateInFuture(cardExpiry)) {
// //         errorMessages.cardExpiry = 'Expiry Date must be a future date';
// //         valid = false;
// //       }
// //     } else if (paymentMethod === 'UPI') {
// //       if (!upiId) {
// //         errorMessages.upiId = 'UPI ID is required';
// //         valid = false;
// //       } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/.test(upiId)) {
// //         errorMessages.upiId = 'UPI ID must be in the format "username@bankname"';
// //         valid = false;
// //       }
// //     }

// //     setErrors(errorMessages);
// //     return valid;
// //   };

// //   const handleSubmit = async () => {
// //     if (!validateForm()) return;

// //     setIsProcessing(true);
// //     setTimeout(() => {
// //       setIsProcessing(false);
// //       setShowOtp(true);
// //     }, 2000);
// //   };

// //   const handleOtpChange = (e, index) => {
// //     const value = e.target.value;
// //     if (/\d/.test(value)) {
// //       const newOtp = [...otp.split('')];
// //       newOtp[index] = value;
// //       setOtp(newOtp.join(''));

// //       if (index < 3) {
// //         document.getElementById(`otp-input-${index + 1}`).focus();
// //       }
// //     }
// //   };

// //   const handleOtpVerification = async () => {
// //     if (otp === '1234') {
// //       const paymentData = {
// //         amount,
// //         payMethod: paymentMethod,
// //         status: 'Paid',
// //         payDate,
// //       };

// //       try {
// //         const response = await fetch(`http://localhost:8029/payment/${paymentId}`, {
// //           method: 'PUT',
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //           body: JSON.stringify(paymentData),
// //         });

// //         if (response.ok) {
// //           const transactionId = generateTransactionId();
// //           setTransactionId(transactionId);
// //           generatePdf(paymentData);
// //           setShowOtp(false);
// //           setTimeout(() => {
// //             navigate('/userdashboard');
// //           }, 2000);
// //           sessionStorage.setItem("button", true);
// //         } else {
// //           alert('Payment failed');
// //         }
// //       } catch (error) {
// //         console.error('Error updating payment:', error);
// //         alert('Payment failed');
// //       }
// //     } else {
// //       alert('Invalid OTP');
// //     }
// //   };

// //   const cardImages = {
// //     'Visa': 'https://th.bing.com/th/id/OIP.qmQYyj1ByR7si4njwyQLDgHaEK?w=296&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
// //     'MasterCard': 'https://th.bing.com/th/id/OIP.5RYUktehnlhfr3CpihBobAHaEr?w=309&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7',
// //     'American Express': 'https://th.bing.com/th/id/OIP.XO9gRXm2BtUIkfHNdifbJQHaEs?rs=1&pid=ImgDetMain',
// //     'Discover': 'https://th.bing.com/th/id/R.4a6ab82d84d0762df582d9d551e325df?rik=oNG9wb5lI6EdGA&riu=http%3a%2f%2f2.bp.blogspot.com%2f_oBRbTQRZwVI%2fTOL_HqjU0fI%2fAAAAAAAAAaY%2fqH7duiBaHdM%2fs1600%2fdiscover.jpg&ehk=CDH2d0lvjfC8PxJ7mMxSZ9b2R5B1C4gdQ9Qh7r2v3K4%3d&risl=&pid=ImgRaw&r=0'
// //   };

// //   if (loading) return <div>Loading...</div>;

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-2xl font-bold mb-4">Payment Page</h1>

// //       <div className="mb-4">
// //         <label className="block text-gray-700">Payment Method</label>
// //         <select
// //           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
// //           value={paymentMethod}
// //           onChange={handlePaymentMethodChange}
// //         >
// //           <option value="UPI">UPI</option>
// //           <option value="Credit Card">Credit Card</option>
// //         </select>
// //         {errors.paymentMethod && <p className="text-red-500 text-sm mt-1">{errors.paymentMethod}</p>}
// //       </div>

// //       {paymentMethod === 'Credit Card' && (
// //         <>
// //           <div className="mb-4">
// //             <label className="block text-gray-700">Card Number</label>
// //             <input
// //               type="text"
// //               className="mt-1 block w-full border border-gray-300 rounded-md p-2"
// //               value={cardNumber}
// //               onChange={(e) => setCardNumber(e.target.value)}
// //               maxLength="16"
// //             />
// //             {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
// //           </div>

// //           <div className="mb-4">
// //             <label className="block text-gray-700">Expiry Date (MM/YY)</label>
// //             <input
// //               type="text"
// //               className="mt-1 block w-full border border-gray-300 rounded-md p-2"
// //               value={cardExpiry}
// //               onChange={(e) => setCardExpiry(e.target.value)}
// //               maxLength="5"
// //             />
// //             {errors.cardExpiry && <p className="text-red-500 text-sm mt-1">{errors.cardExpiry}</p>}
// //           </div>

// //           <div className="mb-4">
// //             <label className="block text-gray-700">CVV</label>
// //             <input
// //               type="text"
// //               className="mt-1 block w-full border border-gray-300 rounded-md p-2"
// //               value={cardCVV}
// //               onChange={(e) => setCardCVV(e.target.value)}
// //               maxLength="3"
// //             />
// //             {errors.cardCVV && <p className="text-red-500 text-sm mt-1">{errors.cardCVV}</p>}
// //           </div>

// //           {cardType && (
// //             <div className="mb-4">
// //               <img src={cardImages[cardType]} alt={cardType} className="w-24" />
// //             </div>
// //           )}
// //         </>
// //       )}

// //       {paymentMethod === 'UPI' && (
// //         <div className="mb-4">
// //           <label className="block text-gray-700">UPI ID</label>
// //           <input
// //             type="text"
// //             className="mt-1 block w-full border border-gray-300 rounded-md p-2"
// //             value={upiId}
// //             onChange={(e) => setUpiId(e.target.value)}
// //           />
// //           {errors.upiId && <p className="text-red-500 text-sm mt-1">{errors.upiId}</p>}
// //         </div>
// //       )}

// //       <div className="mb-4">
// //         <label className="block text-gray-700">Amount</label>
// //         <input
// //           type="text"
// //           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
// //           value={amount}
// //           readOnly
// //         />
// //       </div>

// //       <div className="mb-4">
// //         <label className="block text-gray-700">Payment Date</label>
// //         <input
// //           type="date"
// //           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
// //           value={payDate}
// //           onChange={(e) => setPayDate(e.target.value)}
// //         />
// //       </div>

// //       <button
// //         className={`py-2 px-4 bg-blue-500 text-white font-bold rounded-md ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
// //         onClick={handleSubmit}
// //         disabled={isProcessing}
// //       >
// //         {isProcessing ? 'Processing...' : 'Proceed to Payment'}
// //       </button>

// //       {showOtp && (
// //         <div className="mt-4 p-4 border border-gray-300 rounded-md bg-gray-50">
// //           <h2 className="text-lg font-semibold mb-2">Enter OTP</h2>
// //           <div className="flex space-x-2">
// //             {[0, 1, 2, 3].map((index) => (
// //               <input
// //                 key={index}
// //                 id={`otp-input-${index}`}
// //                 type="text"
// //                 maxLength="1"
// //                 className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl"
// //                 onChange={(e) => handleOtpChange(e, index)}
// //               />
// //             ))}
// //           </div>
// //           <button
// //             className="mt-4 py-2 px-4 bg-green-500 text-white font-bold rounded-md"
// //             onClick={handleOtpVerification}
// //           >
// //             Verify OTP
// //           </button>
// //         </div>
// //       )}

// //       {transactionId && (
// //         <div className="mt-4 p-4 border border-gray-300 rounded-md bg-gray-50">
// //           <h2 className="text-lg font-semibold mb-2">Transaction Successful</h2>
// //           <p>Transaction ID: {transactionId}</p>
// //           <p className="mt-2">Your payment was successful. Download the receipt below:</p>
// //           <a
// //             href={pdfUrl}
// //             className="mt-2 inline-block py-2 px-4 bg-gray-700 text-white font-bold rounded-md"
// //             download="payment-info.pdf"
// //           >
// //             Download PDF
// //           </a>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default PaymentPage;




// import React, { useState, useEffect } from 'react';
// import { jsPDF } from 'jspdf';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const PaymentPage = () => {
//   const [paymentMethod, setPaymentMethod] = useState('UPI');
//   const [amount, setAmount] = useState(0);
//   const [upiId, setUpiId] = useState('');
//   const [cardNumber, setCardNumber] = useState('');
//   const [cardExpiry, setCardExpiry] = useState('');
//   const [cardCVV, setCardCVV] = useState('');
//   const [payDate, setPayDate] = useState(new Date().toISOString().split('T')[0]);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [showOtp, setShowOtp] = useState(false);
//   const [otp, setOtp] = useState('');
//   const [transactionId, setTransactionId] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [errors, setErrors] = useState({});
//   const [cardType, setCardType] = useState('');
//   const [pdfUrl, setPdfUrl] = useState('');
//   const navigate = useNavigate();
//   const [paymentId, setPaymentId] = useState(null);
//   const userId = sessionStorage.getItem("userId");

//   useEffect(() => {
//     const fetchPaymentDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:8029/payment/${userId}`);
//         const data = await response.json();
//         setAmount(data.amount);
//         setPaymentId(data.payId);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching payment details:', error);
//         setLoading(false);
//       }
//     };

//     fetchPaymentDetails();
//   }, [userId]);

//   const generateTransactionId = () => {
//     return 'TXN' + Math.floor(Math.random() * 1000000);
//   };

//   const generatePdf = (data) => {
//     const doc = new jsPDF();
//     const margin = 10;
//     const lineHeight = 10;

//     doc.setFontSize(16);
//     doc.setFont('helvetica', 'bold');
//     doc.text('Premium Payment Receipt', margin, margin + 10);

//     doc.setFontSize(12);
//     doc.setFont('helvetica', 'bold');
//     doc.text('Payment Information', margin, margin + 20);

//     doc.setFont('helvetica', 'normal');
//     doc.setFontSize(12);

//     let y = margin + 30;
//     const transactionId = generateTransactionId();
//     doc.text(`Transaction ID: ${transactionId}`, margin, y);
//     y += lineHeight;
//     doc.text(`Amount: ${data.amount}`, margin, y);
//     y += lineHeight;
//     doc.text(`Payment Method: ${data.payMethod}`, margin, y);
//     y += lineHeight;
//     doc.text(`Payment Date: ${data.payDate}`, margin, y);

//     const pdfBlob = doc.output('blob');
//     const pdfUrl = URL.createObjectURL(pdfBlob);
//     setPdfUrl(pdfUrl);
//     doc.save('payment-info.pdf');
//   };

//   const handlePaymentMethodChange = (e) => {
//     setPaymentMethod(e.target.value);
//     setErrors({}); // Clear errors when changing payment method
//     setCardNumber(''); // Clear card number when changing payment method
//     setCardType(''); // Clear card type when changing payment method
//   };

//   const detectCardType = (number) => {
//     const patterns = {
//       'Visa': /^4/,
//       'MasterCard': /^5[1-5]/,
//       'American Express': /^3[47]/,
//       'Discover': /^6(011|5)/
//     };

//     for (const [type, pattern] of Object.entries(patterns)) {
//       if (pattern.test(number)) {
//         return type;
//       }
//     }
//     return 'Unknown';
//   };

//   const isDateInFuture = (expiryDate) => {
//     const [month, year] = expiryDate.split('/');
//     const currentDate = new Date();
//     const expiryMonth = parseInt(month, 10);
//     const expiryYear = 2000 + parseInt(year, 10); // Assuming the year is in 'YY' format

//     const expiryDateObj = new Date(expiryYear, expiryMonth - 1);
//     return expiryDateObj > currentDate;
//   };

//   const validateForm = () => {
//     let valid = true;
//     let errorMessages = {};

//     if (!paymentMethod) {
//       errorMessages.paymentMethod = 'Payment method is required';
//       valid = false;
//     }

//     if (paymentMethod === 'Credit Card') {
//       if (!cardNumber) {
//         errorMessages.cardNumber = 'Card Number is required';
//         valid = false;
//       } else if (!/^\d{16}$/.test(cardNumber)) {
//         errorMessages.cardNumber = 'Credit Card Number must be 16 digits';
//         valid = false;
//       }
//       if (!cardCVV) {
//         errorMessages.cardCVV = 'CVV is required';
//         valid = false;
//       } else if (!/^\d{3}$/.test(cardCVV)) {
//         errorMessages.cardCVV = 'CVV must be 3 digits';
//         valid = false;
//       }
//       if (!cardExpiry) {
//         errorMessages.cardExpiry = 'Expiry Date is required';
//         valid = false;
//       } else if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
//         errorMessages.cardExpiry = 'Expiry Date must be in MM/YY format';
//         valid = false;
//       } else if (!isDateInFuture(cardExpiry)) {
//         errorMessages.cardExpiry = 'Expiry Date must be a future date';
//         valid = false;
//       }
//     } else if (paymentMethod === 'UPI') {
//       if (!upiId) {
//         errorMessages.upiId = 'UPI ID is required';
//         valid = false;
//       } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/.test(upiId)) {
//         errorMessages.upiId = 'UPI ID must be in the format "username@bankname"';
//         valid = false;
//       }
//     }

//     setErrors(errorMessages);
//     return valid;
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) return;

//     setIsProcessing(true);
//     setTimeout(() => {
//       setIsProcessing(false);
//       setShowOtp(true);
//     }, 2000); // Simulate processing time
//   };

//   const handleOtpChange = (e, index) => {
//     const value = e.target.value;
//     if (/\d/.test(value)) {
//       const newOtp = [...otp.split('')];
//       newOtp[index] = value;
//       setOtp(newOtp.join(''));
//     }
//   };

//   const handleOtpVerification = async () => {
//     if (otp === '1234') {
//       const paymentData = {
//         amount,
//         payMethod: paymentMethod,
//         status: 'Paid',
//         payDate,
//       };

//       try {
//         const response = await fetch(`http://localhost:8029/payment/${paymentId}`, {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(paymentData),
//         });

//         if (response.ok) {
//           const transactionId = generateTransactionId();
//           setTransactionId(transactionId);
//           generatePdf(paymentData);
//           setShowOtp(false);

//           Swal.fire({
//             title: 'Payment Successful!',
//             text: `Transaction ID: ${transactionId}`,
//             icon: 'success',
//             confirmButtonText: 'OK'
//           }).then((result) => {
//             if (result.isConfirmed) {
//               // Download PDF after user clicks OK
//               window.location.href = pdfUrl;
//               navigate('/userdashboard');
//             }
//           });

//           sessionStorage.setItem("button", true);
//         } else {
//           Swal.fire('Payment failed', 'Please try again', 'error');
//         }
//       } catch (error) {
//         console.error('Error updating payment:', error);
//         Swal.fire('Payment failed', 'An error occurred. Please try again.', 'error');
//       }
//     } else {
//       Swal.fire('Invalid OTP', 'Please enter a valid OTP', 'error');
//     }
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="relative max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
//       <button
//         onClick={() => navigate(-1)}
//         className="absolute top-4 left-4 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
//       >
//         Back
//       </button>

//       {isProcessing && (
//         <div className="absolute inset-0 bg-gray-200 opacity-50 flex items-center justify-center">
//           <div className="text-xl">Processing...</div>
//         </div>
//       )}

//       <h2 className="text-2xl font-bold mb-4">Payment Page</h2>

//       <div className="mb-4">
//         <label className="block mb-2 font-bold">Amount</label>
//         <input
//           type="number"
//           value={amount}
//           readOnly
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block mb-2 font-bold">Payment Method</label>
//         <select
//           value={paymentMethod}
//           onChange={handlePaymentMethodChange}
//           className="w-full p-2 border border-gray-300 rounded"
//         >
//           <option value="">Select Payment Method</option>
//           <option value="UPI">UPI</option>
//           <option value="Credit Card">Credit Card</option>
//         </select>
//         {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod}</p>}
//       </div>

//       {paymentMethod === 'Credit Card' && (
//         <>
//           <div className="mb-4">
//             <label className="block mb-2 font-bold">Card Number</label>
//             <input
//               type="text"
//               value={cardNumber}
//               onChange={(e) => {
//                 setCardNumber(e.target.value);
//                 setCardType(detectCardType(e.target.value));
//               }}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//             {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 font-bold">Expiry Date (MM/YY)</label>
//             <input
//               type="text"
//               value={cardExpiry}
//               onChange={(e) => setCardExpiry(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//             {errors.cardExpiry && <p className="text-red-500 text-sm">{errors.cardExpiry}</p>}
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 font-bold">CVV</label>
//             <input
//               type="text"
//               value={cardCVV}
//               onChange={(e) => setCardCVV(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//             {errors.cardCVV && <p className="text-red-500 text-sm">{errors.cardCVV}</p>}
//           </div>
//           {cardType && <div className="mb-4 font-bold">Card Type: {cardType}</div>}
//         </>
//       )}

//       {paymentMethod === 'UPI' && (
//         <div className="mb-4">
//           <label className="block mb-2 font-bold">UPI ID</label>
//           <input
//             type="text"
//             value={upiId}
//             onChange={(e) => setUpiId(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//           {errors.upiId && <p className="text-red-500 text-sm">{errors.upiId}</p>}
//         </div>
//       )}

//       <div className="mb-4">
//         <button
//           onClick={handleSubmit}
//           className="w-full p-2 bg-blue-500 text-white rounded"
//           disabled={isProcessing}
//         >
//           {isProcessing ? 'Processing...' : 'Submit Payment'}
//         </button>
//       </div>

//       {showOtp && (
//         <div className="mb-4">
//           <label className="block mb-2 font-bold">Enter OTP</label>
//           <div className="flex">
//             {[0, 1, 2, 3].map((_, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 maxLength="1"
//                 value={otp[index] || ''}
//                 onChange={(e) => handleOtpChange(e, index)}
//                 className="w-12 h-12 text-center border border-gray-300 rounded mx-1"
//               />
//             ))}
//           </div>
//           <button
//             onClick={handleOtpVerification}
//             className="w-full mt-4 p-2 bg-green-500 text-white rounded"
//           >
//             Verify OTP
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentPage;



import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import { useNavigate,useParams } from 'react-router-dom';


const PaymentPage = () => {
  const { payId } = useParams();
 
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [amount, setAmount] = useState(0);
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [payDate, setPayDate] = useState(new Date().toISOString().split('T')[0]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [cardType, setCardType] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const navigate = useNavigate();
//   const [paymentId, setPaymentId] = useState(null);
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8029/payment/${payId}`);
        const data = await response.json();

             console.log(data);
        setAmount(data.amount);
        // setPayDate(new Date(data.payDate).toISOString().split('T')[0]);
        console.log(setPayDate);
        // setPaymentId(data.payId);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching payment details:', error);
        setLoading(false);
      }
    };

    fetchPaymentDetails();
  }, [userId]);

  const generateTransactionId = () => {
    return 'TXN' + Math.floor(Math.random() * 1000000);
  };

  const generatePdf = (data) => {
    const doc = new jsPDF();
    const margin = 10;
    const lineHeight = 10;

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Premium Payment Receipt', margin, margin + 10);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Payment Information', margin, margin + 20);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);

    let y = margin + 30;
    const transactionId = generateTransactionId();
    doc.text(`Transaction ID: ${transactionId}`, margin, y);
    y += lineHeight;
    doc.text(`Amount: ${data.amount}`, margin, y);
    y += lineHeight;
    doc.text(`Payment Method: ${data.payMethod}`, margin, y);
    y += lineHeight;
    doc.text(`Payment Date: ${data.payDate}`, margin, y);

    const pdfBlob = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);
    setPdfUrl(pdfUrl);
    doc.save('payment-info.pdf');
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setErrors({}); // Clear errors when changing payment method
    if (e.target.value === 'Credit Card') {
      setCardType(detectCardType(cardNumber));
    } else {
      setCardType('');
    }
  };

  const detectCardType = (number) => {
    const patterns = {
      'Visa': /^4/,
      'MasterCard': /^5[1-5]/,
      'American Express': /^3[47]/,
      'Discover': /^6(011|5)/
    };

    for (const [type, pattern] of Object.entries(patterns)) {
      if (pattern.test(number)) {
        return type;
      }
    }
    return 'Unknown';
  };

  const isDateInFuture = (expiryDate) => {
    const [month, year] = expiryDate.split('/');
    const currentDate = new Date();
    const expiryMonth = parseInt(month, 10);
    const expiryYear = 2000 + parseInt(year, 10); // Assuming the year is in 'YY' format

    const expiryDateObj = new Date(expiryYear, expiryMonth - 1);
    return expiryDateObj > currentDate;
  };

  const validateForm = () => {
    let valid = true;
    let errorMessages = {};

    if (!paymentMethod) {
      errorMessages.paymentMethod = 'Payment method is required';
      valid = false;
    }

    if (paymentMethod === 'Credit Card') {
      if (!cardNumber) {
        errorMessages.cardNumber = 'Card Number is required';
        valid = false;
      } else if (!/^\d{16}$/.test(cardNumber)) {
        errorMessages.cardNumber = 'Credit Card Number must be 16 digits';
        valid = false;
      }
      if (!cardCVV) {
        errorMessages.cardCVV = 'CVV is required';
        valid = false;
      } else if (!/^\d{3}$/.test(cardCVV)) {
        errorMessages.cardCVV = 'CVV must be 3 digits';
        valid = false;
      }
      if (!cardExpiry) {
        errorMessages.cardExpiry = 'Expiry Date is required';
        valid = false;
      } else if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
        errorMessages.cardExpiry = 'Expiry Date must be in MM/YY format';
        valid = false;
      } else if (!isDateInFuture(cardExpiry)) {
        errorMessages.cardExpiry = 'Expiry Date must be a future date';
        valid = false;
      }
    } else if (paymentMethod === 'UPI') {
      if (!upiId) {
        errorMessages.upiId = 'UPI ID is required';
        valid = false;
      } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/.test(upiId)) {
        errorMessages.upiId = 'UPI ID must be in the format "username@bankname"';
        valid = false;
      }
    }

    setErrors(errorMessages);
    return valid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowOtp(true);
    }, 2000); // Simulate processing time
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/\d/.test(value)) {
      const newOtp = [...otp.split('')];
      newOtp[index] = value;
      setOtp(newOtp.join(''));

      if (index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };
  const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
};

  const handleOtpVerification = async () => {
    if (otp === '1234') {
      const paymentData = {
        // payId: paymentId, // Ensure to include payId in the request
        amount,
        payMethod: paymentMethod,
        status: 'Paid',
        payDate,
        // user: {
        //   userId: userId,
        // },
      };

      try {
        const response = await fetch(`http://localhost:8029/payment/${payId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(paymentData),
        });

        if (response.ok) {
          const transactionId = generateTransactionId();
          setTransactionId(transactionId);
          generatePdf(paymentData);
          setShowOtp(false);
          setTimeout(() => {
            navigate('/userdashboard');
          }, 2000);
          sessionStorage.setItem("button", true);
        } else {
          alert('Payment failed');
        }
      } catch (error) {
        console.error('Error updating payment:', error);
        alert('Payment failed');
      }
    } else {
      alert('Invalid OTP');
    }
  };

  const cardImages = {
    'Visa': 'https://th.bing.com/th/id/OIP.qmQYyj1ByR7si4njwyQLDgHaEK?w=296&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'MasterCard': 'https://th.bing.com/th/id/OIP.5RYUktehnlhfr3CpihBobAHaEr?w=309&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'American Express': 'https://th.bing.com/th/id/OIP.XO9gRXm2BtUIkfHNdifbJQHaEs?rs=1&pid=ImgDetMain',
    'Discover': 'https://th.bing.com/th/id/R.4a6ab82d84d0762df582d9d551e325df?rik=oNG9wb5lI6EdGA&riu=http%3a%2f%2f2.bp.blogspot.com%2f_oBRbTQRZwVI%2fTOL_HqjU0fI%2fAAAAAAAAAaY%2fqH7duiBaHdM%2fs1600%2fdiscover.jpg&ehk=HMxU3GaUYGk4R0zGse0ajhopuaRFTdfHxxJQeMOmCso%3d&risl=&pid=ImgRaw&r=0',
    'Unknown': 'path/to/unknown-card.png'
  };

  const renderOtpInputs = () => {
    return Array.from({ length: 4 }, (_, index) => (
      <input
        key={index}
        id={`otp-input-${index}`}
        type="text"
        value={otp[index] || ''}
        onChange={(e) => handleOtpChange(e, index)}
        maxLength="1"
        className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl font-bold mx-1"
      />
    ));
  };

  return (
    <div className={`relative max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg shadow-lg ${isProcessing ? 'blur-sm' : ''}`}>
      <button
        onClick={() => navigate('/userdashboard')}
        className="absolute top-4 left-4 px-4 py-2 bg-gray-300 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400"
      >
        Back to Dashboard
      </button>

      <h1 className="text-2xl font-bold mb-6 text-center">Payment Page</h1>

      {loading ? (
        <div className="text-center">
          <p className="text-lg font-medium">Loading payment details...</p>
        </div>
      ) : (
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Amount:</label>
            <input
              type="text"
              readOnly
              value={amount}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Payment Method:</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="upi"
                name="paymentMethod"
                value="UPI"
                checked={paymentMethod === 'UPI'}
                onChange={handlePaymentMethodChange}
                className="mr-2"
              />
              <label htmlFor="upi" className="text-sm font-medium text-gray-700">UPI</label>
              <input
                type="radio"
                id="creditCard"
                name="paymentMethod"
                value="Credit Card"
                checked={paymentMethod === 'Credit Card'}
                onChange={handlePaymentMethodChange}
                className="ml-4 mr-2"
              />
              <label htmlFor="creditCard" className="text-sm font-medium text-gray-700">Credit Card</label>
            </div>
            {errors.paymentMethod && <div className="text-red-500 text-sm">{errors.paymentMethod}</div>}
          </div>

          {paymentMethod === 'UPI' && (
            <div className="mb-4">
              <label htmlFor="upiId" className="block text-sm font-medium text-gray-700">UPI ID:</label>
              <input
                type="text"
                id="upiId"
                value={upiId}
                onChange={(e) => {
                  setUpiId(e.target.value);
                  if (e.target.value) setErrors(prevErrors => ({ ...prevErrors, upiId: '' }));
                }}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.upiId && <div className="text-red-500 text-sm">{errors.upiId}</div>}
            </div>
          )}

          {paymentMethod === 'Credit Card' && (
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number:</label>
              <div className="flex items-center">
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => {
                    setCardNumber(e.target.value);
                    setCardType(detectCardType(e.target.value));
                    if (e.target.value) setErrors(prevErrors => ({ ...prevErrors, cardNumber: '' }));
                  }}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                />
                <img
                  src={cardImages[cardType] || cardImages['Unknown']}
                  alt="Card Type"
                  className="ml-4 h-50 w-50"
                />
              </div>
              {errors.cardNumber && <div className="text-red-500 text-sm">{errors.cardNumber}</div>}

              <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mt-2">Expiry Date:</label>
              <input
                type="text"
                id="cardExpiry"
                value={cardExpiry}
                onChange={(e) => {
                  setCardExpiry(e.target.value);
                  if (e.target.value) setErrors(prevErrors => ({ ...prevErrors, cardExpiry: '' }));
                }}
                placeholder="MM/YY"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.cardExpiry && <div className="text-red-500 text-sm">{errors.cardExpiry}</div>}

              <label htmlFor="cardCVV" className="block text-sm font-medium text-gray-700 mt-2">CVV:</label>
              <input
                type="text"
                id="cardCVV"
                value={cardCVV}
                onChange={(e) => {
                  setCardCVV(e.target.value);
                  if (e.target.value) setErrors(prevErrors => ({ ...prevErrors, cardCVV: '' }));
                }}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.cardCVV && <div className="text-red-500 text-sm">{errors.cardCVV}</div>}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="payDate" className="block text-sm font-medium text-gray-700">Payment Date:</label>
            <input
              type="date"
              id="payDate"
              value={payDate}
              readOnly
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
          >
            Pay Now
          </button>
        </form>
      )}


{isProcessing && (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-lg text-center">
      <p className="text-lg font-medium mb-4">Processing Payment...</p>
      <img
        src="https://i.pinimg.com/originals/65/5d/2d/655d2da400a648abca600766a89deead.gif"
        alt="Processing"
        className="w-24 h-24 mx-auto"
      />
    </div>
  </div>
)}



      {showOtp && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP:</label>
            <div className="flex justify-center mt-2">
              {renderOtpInputs()}
            </div>
            <button
              type="button"
              onClick={handleOtpVerification}
              className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
            >
              Verify OTP
            </button>
          </div>
        </div>
      )}

      {pdfUrl && (
        <div className="text-center mt-6">
          <p className="text-lg font-medium">Payment Successful!</p>
          <a
            href={pdfUrl}
            download
            className="text-blue-500 underline mt-2 block"
          >
            Download PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;