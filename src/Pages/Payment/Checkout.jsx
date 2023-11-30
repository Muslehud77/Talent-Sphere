
import {loadStripe} from '@stripe/stripe-js'

import Transition from '../../Transition/Transition';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import {  useParams } from 'react-router-dom';

import { Elements } from '@stripe/react-stripe-js';
import Form from './Form';

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_PublishableKey);
import SectionHeading from './../../Shared/SectionHeading/SectionHeading';


const Checkout = () => {
    const {id} = useParams()
   
    
    const axiosSecure = useAxiosSecure()

    const { data: contest = {} } = useQuery({
      queryKey: [`contest_${id}`],
      queryFn: async () => {
        const data = await axiosSecure.get(`/contest/${id}`);
        const secret = await axiosSecure.post("/create-payment-intent", {
          price: data.data.contestPrice,
        });
       
       
        return {contest:data.data,secret:secret.data};
      },
    });


console.log(contest.secret);


    return (
      <div>
        <SectionHeading head={"payment"} hasLogo />
        {contest.secret && (
          <Elements
            stripe={stripePromise}
            options={{ clientSecret: contest.secret.clientSecret }}
          >
            <Form contest={contest}></Form>
          </Elements>
        )}
        <Transition />
      </div>
    );
};

export default Checkout;