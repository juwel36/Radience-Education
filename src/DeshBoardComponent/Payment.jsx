import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../Component/CheckOutForm";
import { useFormData } from "../Hooks/FormDataContext";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);



const Payment = () => {
  const { formData } = useFormData();



  return (
    <div>
      <div className="text-center mt-16 lg:w-96 mx-auto ">
      <p className="text-red-600 text-xl lg:text-2xl border-y-2 py-2 mt-2">📝 Make Your Payment 📜</p>
      </div>
<div className="text-center my-8">
<p className="text-sm">Welcome to Radiance Education IELTS Mock Test Booking!</p>

<p  className="text-xs mt-2">Prepare for success with our exclusive IELTS Mock Test at just 400 TK! Secure your spot now by making a quick and easy payment. This payment covers the reservation of your seat for the upcoming mock test, providing you with a valuable opportunity to assess and enhance your IELTS skills.</p>
</div>

      <div className="border p-10 lg:w-96 mx-auto border-red-500  rounded-lg">
      
      <Elements stripe={stripePromise}>
          
      <CheckOutForm formData={formData}></CheckOutForm>
      
          </Elements>
      
          </div>


    </div>
  );
};

export default Payment;