import {  Badge } from "flowbite-react";
import { BellIcon } from "@heroicons/react/24/outline";
import Profile from "../Pages/Profile"

export default function MyPage() {
  return (
      <nav class="bg-white  dark:bg-gray-900  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex items-center mx-auto p-2">
          <div className="w-[80%] flex flex-wrap justify-between mx-auto">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="https://png.pngtree.com/png-vector/20221207/ourmid/pngtree-letter-s-r-beauty-monogram-serif-logo-design-png-image_6514468.png"
                className="h-12"
                alt="logo"
              />
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                data-collapse-toggle="#navbar-sticky"
                type="button"
                class="inline-flex my-auto items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="#navbar-sticky"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>

              <div
                className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky"
              >
                <div
                  class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                  id="navbar-sticky"
                >
                  <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <a
                        href="/"
                        class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      >
                        Dashbord
                      </a>
                    </li>
                    <li>
                      <a
                        href="about"
                        class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="services"
                        class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="contact"
                        class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-5 flex w-[20%]">
            <group className=" hidden md:w-auto sm:flex">
              <button className="relative mx-2">
                <Badge
                  color="primar"
                  className="sm bottom-5 w-fit font-bold px-1 text-white bg-red-500 border-2 border-white rounded-full absolute inline-flex rounded-full px-1 "
                >
                  0
                </Badge>
                <BellIcon
                  stroke="white"
                  className="h-8 w-8  flex mx-2 mt-auto"
                />
              </button>
            </group>
           
            <Profile />
          </div>
        </div>
      </nav>
  );
}
