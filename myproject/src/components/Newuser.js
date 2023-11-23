import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Example = () => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const getData = () => {
    let fName = document.getElementById("FName").value;
    let lName = document.getElementById("LName").value;
    let currentDate = new Date();
    document.getElementById(
      "MyName"
    ).innerHTML = `My Name is :${fName} ${lName}`;
    document.getElementById(
      "Date"
    ).innerHTML = `Created in :${currentDate.getFullYear()}`;
  };

  return (
    <div className=" flex items-center justify-center">
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        New User
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={() => setOpen(false)}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block   align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="relative flex h-10  bg-teal-700 justify-between">
                  <div>fgsdhsa</div>
                  <div>
                    <XMarkIcon
                      type="button"
                      className=" w-full h-10 absolute right-0  flex align-top justify-right hover:text-black border-gray-300 shadow-sm px-4 py-2 bg-white rounded text-2xl font-large text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    ></XMarkIcon>
                  </div>
                </div>

                <div>
                  <div className="">
                    <div className="">
                      <label htmlFor="FName">First Name :</label>
                      <input type="text" id="FName" required />
                      <br />
                      <label htmlFor="LName">Last Name :</label>
                      <input type="text" id="LName" required /> <br />
                    </div>
                    <p id="MyName" className="mx-4 my-2"></p>
                    <p id="Date" className="mx-4 my-2"></p>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    className="bg-blue-400 p-2 px-4 hover:bg-blue-500 hover:text-white m-auto rounded-md text-black text-2xl"
                    onClick={getData}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Example;
