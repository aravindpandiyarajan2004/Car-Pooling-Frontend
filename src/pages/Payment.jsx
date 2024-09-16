

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
  }, []);

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