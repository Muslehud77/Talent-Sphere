/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import Counter from '../Counter/Counter';

const ContestCountdownAndPayment = ({contest}) => {
    return (
      <motion.div
        animate={{ y: 0 }}
        transition={{ from: 100, type: "spring", duration: 1 }}
        exit={{ y: -100 }}
        className="flex flex-col gap-5 "
      >
        <Counter date={contest?.contestDeadline} />
        <div className="flex justify-end">
          <button className="btn">
            Pay ${contest?.contestPrice} to Participate
          </button>
        </div>
      </motion.div>
    );
};

export default ContestCountdownAndPayment;