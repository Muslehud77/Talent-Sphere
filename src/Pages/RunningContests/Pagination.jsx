/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import useAllContest from '../../Api/useAllContest';
import { motion } from 'framer-motion';

const Pagination = ({
  count,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  setItemsPerPage,
}) => {
 
  const pagesCount = Math.ceil(count / itemsPerPage);

  const pages = [...Array(pagesCount).keys()].map(
    (pageNumber) => pageNumber + 1
  );

  const perPageItems = (e) => {
    setItemsPerPage(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="flex justify-center my-10">
      <div data-theme="dark" className="join border-none">
        {currentPage !== 1 && (
          <button
            
            
            onClick={() => {
              setCurrentPage(currentPage !== 1 && currentPage - 1);
            }}
            className={`join-item outline-0 btn btn-md ${
              currentPage === 1 && "hidden"
            }`}
          >
            prev
          </button>
        )}
        {pages.map((page, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentPage(page);
            }}
            className={`join-item ${
              currentPage === page && "btn-active"
            } outline-0 btn btn-md`}
          >
            {page}
          </button>
        ))}
        <select
          onChange={perPageItems}
          defaultValue={itemsPerPage}
          className="join-item outline-0 btn btn-md"
        >
          <option value="6">06</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
        <button
          onClick={() => {
            setCurrentPage(
              currentPage !== pagesCount ? currentPage + 1 : currentPage
            );
          }}
          className="join-item outline-0 btn btn-md"
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;