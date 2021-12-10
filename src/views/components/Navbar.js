import getCategories from "../../api/getCategories.js";
import getCartItems from "./../../services/CartItems.js";

let Navbar = {
  render: async () => {
    const categories = await getCategories();
    const cartItems = await getCartItems();
    let view = /*html*/ `
             <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                <span class="sr-only">Workflow</span>
                <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="">
                </a>
            </div>
            <div class="-mr-2 -my-2 md:hidden">
                <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500" aria-expanded="false">
                <span class="sr-only">Open menu</span>
                <!-- Heroicon name: outline/menu -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
            </div>
            <nav class="hidden md:flex space-x-10">
            ${categories
              .map(
                (category) => /*html*/ `
                        <a href="#/category/${category}" class="text-base capitalize font-medium text-gray-500 hover:text-gray-900">
                            <span>${category}</span>
                        </a>`
              )
              .join("\n ")}
            </nav>
            <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0 text-base capitalize font-medium text-gray-500 hover:text-gray-900">
                <li class="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-gray hover:text-gray-700">
                  <a href="/#/Checkout" role="button" class="relative flex">
                    <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
                      <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
                      </svg>
                      <span class="absolute right-0 top-0 rounded-full bg-green-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm leading-tight text-center cartLength">${
                        cartItems.length
                      }
                    </span>
                  </a>
                </li>
                <a href="/#/register" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700">
                Sign Up
                </a>
            </div>
            </div>
        </div>
        `;
    return view;
  },
  after_render: async () => {},
};

export default Navbar;
