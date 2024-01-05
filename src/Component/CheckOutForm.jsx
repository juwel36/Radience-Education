import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxoisPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import emailjs from 'emailjs-com';
import useAxoisSecure from "../Hooks/useAxiosSecure";


const CheckOutForm = ({formData}) => {
  const {user}=useContext(AuthContext)
  const [error, setError] = useState('')
  const stripe = useStripe();
  const elements = useElements();
const axoisPublic=useAxoisPublic()
const axoisSecure=useAxoisSecure()
const [clientSecret, setClientSecret] = useState('')
const [transactionId, setTranscationId] = useState('')
const [afterloading, setAfterloading] = useState(false);


  const totalPrice="400"

  useEffect(() => {
    if(totalPrice){
      axoisPublic.post('/create-payment-intent', { price: totalPrice })
      .then(res => {
        setClientSecret(res.data.clientSecret)
  
      })
    }
  
    }, [axoisPublic])



  const handleSubmit = async (event) => {
    event.preventDefault();
    setAfterloading(true);
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError('')
    }


   // confirm payment
const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
  payment_method: {
    card: card,
    billing_details: {
      email: user?.email || 'anonymous',
      name: user?.displayName || 'anonymous'
    }
  }
});

if (confirmError) {
  console.error('Error confirming payment:', confirmError);
} else {
  console.log('payment intent', paymentIntent);
  if (paymentIntent.status === 'succeeded') {
    console.log('transaction id', paymentIntent.id);
    setTranscationId(paymentIntent.id);
  }
}


  if (confirmError) {
    console.log('confirm error');
  }
  else {
    console.log('payment intent', paymentIntent);
    if (paymentIntent.status === 'succeeded') {
      console.log('transaction id', paymentIntent.id);
      setTranscationId(paymentIntent.id)}
    }

   
console.log(formData,paymentIntent.id);
    
const currentDateTime = new Date();
const currentTime = currentDateTime.toLocaleString("en-US", { timeZone: "Asia/Dhaka" });


 // now save the payment in the database
 const payment = {
  studentData:formData,
   transactionId:paymentIntent.id,
   timestamp:currentTime
}
const res=await axoisSecure.post("/MockBooking",payment)
setAfterloading(false);

 // Send confirmation email
 try {
  const templateParams = {
    to_name: formData.email,  
    subject: 'Payment Confirmation',
    // message: `message: ${JSON.stringify(formData)}`,
    message: `
    Booking Details:
          -Name: ${formData.studentName}
          -Email: ${formData.email}
          -Phone Number: ${formData.phoneNumbe}
          -Exam Code: ${formData.examNumber}
          -Transaction ID: ${paymentIntent.id}
        `,
  };

 
  await emailjs.send(import.meta.env.VITE_Service_id, import.meta.env.VITE_Template_id, templateParams, import.meta.env.VITE_TemplateParams);


  console.log('Email sent successfully');
} catch (error) {
  console.error('Error sending email:', error);
}


  };

  

  
  return (
    <div>
       <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn bg-red-500 text-white mt-5 " type="submit" disabled={!stripe}>
        Pay
      </button>
      <p className="text-red-500">
          {error}
        </p>
        {transactionId && <p className="text-green-500"> Your Transaction Id : {transactionId} </p>}
        {afterloading && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <span className="loading loading-spinner text-primary"></span>
            </div>
          )} 
    </form>
    </div>
  );
};

export default CheckOutForm;