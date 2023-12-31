import React, { useContext, useEffect, useState } from "react";

import { FaPlusCircle } from "react-icons/fa";
import { DashArrow } from "@/components/iconsvg";
import CategoryForm from "../../addCategoryForm";

import RecordIcons from "./RecordIcons";
import { TransactionContext } from "@/context/TransactionContext";
import axios from "axios";

const FormLeft = ({ closeForm }) => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const { transactionData, changeTransactionData, addTransaction } =
    useContext(TransactionContext);

  // const closeForm = () => {
  //   setOpen(false);
  // };

  const addRecord = async () => {
    await addTransaction();
    console.log("CLOSE");
    closeForm();
  };

  const getCategories = async () => {
    const {
      data: { categories },
    } = await axios.get("http://localhost:8008/categories");
    console.log("RES", categories);
    setCategory(categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <div className="flex my-3 rounded-full bg-[#F3F4F6] w-full gap-5 ">
        <button
          className={`flex-1 btn-md rounded-3xl border-none  ${
            transactionData.transaction_type === "EXP" &&
            "bg-[#0166FF] text-white"
          }`}
          onClick={() => {
            changeTransactionData("transaction_type", "EXP");
          }}
        >
          Expense
        </button>
        <button
          className={`flex-1 btn-md rounded-3xl border-none ${
            transactionData.transaction_type === "INC" &&
            "bg-[#228822] text-white"
          }`}
          onClick={() => {
            changeTransactionData("transaction_type", "INC");
          }}
        >
          Income
        </button>
      </div>
      <form>
        <div className="border-[1px] p-3 bg-[#F9FAFB] rounded-lg">
          <h1>Amount</h1>
          <input
            type="number"
            className="bg-[#F9FAFB] border-none"
            placeholder="$ 000,0"
            value={transactionData.amount}
            name="amount"
            onChange={(e) => {
              console.log(e.target.name, e.target.value);
              changeTransactionData(e.target.name, e.target.value);
            }}
          />
        </div>
        <h1 className="mt-4 mb-2 font-semibold">Category</h1>
        <details className="dropdown w-full">
          <summary className="m-1 flex items-center bg-[#F9FAFB] justify-between btn ">
            Find or Choose category
            <DashArrow />
          </summary>

          <ul className="shadow menu w-full dropdown-content z-[1] bg-base-100 rounded-box">
            <li className="w-full border-b-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(true);
                }}
                className="flex w-full items-center gap-2 font-normal py-3"
              >
                <FaPlusCircle size={24} color="blue" />
                Add Category
              </button>
            </li>
            <RecordIcons
              changeTransactionData={changeTransactionData}
              category={category}
            />
          </ul>
        </details>
        <div className="flex">
          <div className="flex-1">
            <label className="label">
              <span className="text-base label-text">Date</span>
            </label>
            <input
              type="datetime-local"
              placeholder="Oct 30,2023"
              className="w-full input input-bordered bg-[#F9FAFB]"
              name="updated_at"
              onChange={(e) => {
                console.log("first", e.target.value);
                changeTransactionData(e.target.name, e.target.value);
              }}
            />
          </div>
          {/* <div className="flex-1">
            <label className="label">
              <span className="text-base label-text">Time</span>
            </label>
            <input
              type="time"
              placeholder="4:15 PM"
              className="w-full input input-bordered bg-[#F9FAFB]"
            />
          </div> */}
        </div>
      </form>
      <button
        onClick={addRecord}
        className={`px-2 py-3 modal-backdrop w-full font-normal my-4 text-white rounded-full hover:cursor-pointer hover:opacity-70 ${
          transactionData.transaction_type === "INC"
            ? "bg-[#228822]"
            : "bg-[#0166FF]"
        }`}
      >
        Add Record
      </button>
      {open && <CategoryForm open={open} closeForm={closeForm} />}
    </div>
  );
};

export default FormLeft;
