/* eslint-disable react/prop-types */
import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import useContextInfo from "../../Hooks/useContextInfo";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Form = ({contest}) => {
    const clientSecret = contest.secret.clientSecret || null;
    const[isProcessing,setIsProcessing] = useState(false) 
    const stripe = useStripe()
    const elements = useElements();
    const [error,setError] = useState('')
    const [transactionId,setTransactionId] = useState('')
    const {user} = useContextInfo()
    const axiosSecure = useAxiosSecure()

    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
            e.preventDefault()
            setError('')
            if(!stripe || !elements){
                return
            }

            const card = elements.getElement(PaymentElement);
            if(!card){
                return
            }

            setIsProcessing(true)
            
          const { paymentIntent, error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
              // Make sure to change this to your payment completion page
              return_url: `${window.location.origin}`,
              payment_method_data: {
                billing_details: {
                  name: user.displayName,
                  email: user.email,
                },
              },
            },
            redirect: "if_required",
          });


         

          if (error) {
            // Handle the error
            setError(error.message);
            console.error("Payment confirmation error:", error);
          } else {
            // Payment confirmation was successful
            console.log("PaymentIntent confirmation:", paymentIntent);
            
            const payment = {
              name: user.displayName,
              email: user.email,
              contest:contest.contest,
              payment: "Successful",
              payment_id: paymentIntent.id,
              amount: contest.contest.contestPrice,
              winningStatus: 'Pending',
            };

           axiosSecure.post('/payment',payment).then(res=>{
            if(res.data.insertedId){
                 Swal.fire({
                   position: "top-end",
                   icon: "success",
                   title: "Your payment was successful",
                   text: `transaction id id ${paymentIntent.id}`,
                   showConfirmButton: false,
                   timer: 1500,
                 });
            }
            navigate("/dashboard/user/registered-contests");
           })

           



          }
            
          setIsProcessing(false);
           


    }

     

    return (
      <div className="flex justify-center mt-5">
        <form
          id="payment-form"
          className="w-96 text-white  bg-white border rounded-xl border-[#03A9F4] p-10"
          onSubmit={handleSubmit}
        >
          <PaymentElement
           
          />
          <div className="flex flex-col justify-center items-center mt-5">
            <button
              data-theme="dark"
              className="btn btn-secondary text-white"
              disabled={isProcessing || !stripe || !elements}
              id="submit"
            >
              {isProcessing && (
                <span className="loading pointer-events-none loading-spinner loading-sm text-black"></span>
              )}
              <span id="button-text">Pay</span>
            </button>
            
            {error && <p className="text-red-500">{error}</p>}
          </div>
          {/* Show any error or success messages */}
          {/* {message && <div id="payment-message">{message}</div>} */}
          {}
        </form>
      </div>
    );
};

export default Form;