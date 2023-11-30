/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';
import useContextInfo from '../../Hooks/useContextInfo';
import useUser from '../../Api/useUser';

const ContestCountdownAndPayment = ({contest}) => {
  const {setSelected} = useContextInfo()

  const {userData} = useUser()

    return (
      <motion.div
        animate={{ y: 0 }}
        transition={{ from: 100, type: "spring", duration: 1 }}
        exit={{ y: -100 }}
        className="flex flex-col gap-5 "
      >
        <Counter date={contest?.contestDeadline} />
        <div className="flex justify-end">
          {userData.role === "user" && (
            <Link
              onClick={() => setSelected(null)}
              to={`/payment/${contest._id}`}
              className="btn"
            >
              Pay ${contest?.contestPrice} to Participate
            </Link>
          )}
        </div>
      </motion.div>
    );
};

export default ContestCountdownAndPayment;