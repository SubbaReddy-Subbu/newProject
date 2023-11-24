import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {  Avatar } from "flowbite-react";

function Profile() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
const getData = () => {
  let DobInput = document.getElementById("Dob").value;
 
  document.getElementById(
    "get"
  ).innerHTML = `My Name is :${DobInput} `;
  
};
  return (
    <div className="my-auto flex">
      <button
        onClick={() => setOpen(true)}
      >
        <Avatar
          className="realtive"
          img="https://png.pngtree.com/png-vector/20221207/ourmid/pngtree-letter-s-r-beauty-monogram-serif-logo-design-png-image_6514468.png"
          bordered
        />
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
              <div className="inline-block   align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle md:max-w-[800px] sm:w-full ">
                <div className="relative flex h-10  bg-blue-700 justify-between">
                  <div className="mx-auto flex justify-center text-2xl text-white">
                    Profile Detaile's
                  </div>
                  <div>
                    <XMarkIcon
                      type="button"
                      className=" w-full h-10 absolute right-0  flex align-top justify-right hover:text-black border-gray-300 shadow-sm px-4 py-2 bg-white rounded text-2xl font-large text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    ></XMarkIcon>
                  </div>
                </div>
                <div className="w-100 md:flex">
                  <div className=" md:w-1/2">
                    <img src="https://png.pngtree.com/png-vector/20221207/ourmid/pngtree-letter-s-r-beauty-monogram-serif-logo-design-png-image_6514468.png" alt="profile" className="w-1/2 flex mx-auto max-w-[150px]"/>
                    <div className="flex justify-between w-[80%] mx-auto"><h2 className="flex my-auto text-lg">Profile name : </h2><p className="text-2xl flex text-black border-b-3">Subba reddy</p>
                    </div>
                    </div>
                  <div className="md:w-1/2">
                  <p>This is the profile section</p>
                  <p>Date of Birth : <input type="date" id="Dob" /></p>
                  <button onClick={getData}>get</button>
                  <p className="get"></p>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default Profile;
