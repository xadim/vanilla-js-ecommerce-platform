import CartItems from "./../../services/CartItems.js";
import getUser from "../../api/getUser.js";

let Checkout = {
  render: async () => {
    const products = await CartItems();
    const total = products.total;
    
    return /*html*/ `
        <div class="flex justify-center items-center min-height-70">
            <div class="py-12">
                <div class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl">
                    <div class="md:flex ">
                        <div class="w-full p-4 px-5 py-5">
                            <div class="md:grid md:grid-cols-3 gap-2 ">
                                <div class="col-span-2 p-5">
                                    <h1 class="text-xl font-medium ">Shopping Cart</h1>
                                    ${products
                                      .map(
                                        (product) => `
                                        <div class="flex justify-between items-center mt-6 pt-6">
                                            <div class="flex items-center"> <img src="${product.image}" width="60" class="rounded-full ">
                                                <div class="flex flex-col ml-3"> <span class="md:text-md font-medium">${product.title}</span> <span class="text-xs font-light text-gray-400">#${product.category}</span> </div>
                                            </div>
                                            <div class="flex justify-center items-center">
                                                <div class="pr-8 flex "> <span class="font-semibold">-</span> <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="${product.qty}"> <span class="font-semibold">+</span> </div>
                                                <div class="pr-8 "> <span class="text-xs font-medium">$${product.price}</span> </div>
                                                <div> <i class="fa fa-close text-xs font-medium"></i> </div>
                                            </div>
                                        </div>`
                                      )
                                      .join("\n ")}
                                    
                                    <div class="flex justify-between items-center mt-6 pt-6 border-t">
                                        <a href="/"><div class="flex items-center"> <i class="fa fa-arrow-left text-lg pr-2"></i> <span class="text-md font-medium text-green-500">Continue Shopping</span></div></a>
                                        <div class="flex justify-center items-end"> <span class="text-sm font-medium text-gray-400 mr-1">Subtotal:</span> <span class="text-lg leading-7	 font-bold text-gray-800 "> $${total}</span> </div>
                                    </div>
                                </div>
                                <div class=" p-5 bg-gray-800 rounded overflow-visible"> <span class="text-xl font-medium text-gray-100 block pb-3">Card Details</span> <span class="text-xs text-gray-400 ">Card Type</span>
                                    <div class="overflow-visible flex justify-between items-center mt-2">
                                        <div class="rounded w-52 h-28 bg-gray-500 py-2 px-4 relative right-10"> <span class="italic text-lg font-medium text-gray-200 underline">VISA</span>
                                            <div class="flex justify-between items-center pt-4 "> <span class="text-xs text-gray-200 font-medium">****</span> <span class="text-xs text-gray-200 font-medium">****</span> <span class="text-xs text-gray-200 font-medium">****</span> <span class="text-xs text-gray-200 font-medium">****</span> </div>
                                            <div class="flex justify-between items-center mt-3"> <span class="text-xs text-gray-200">Hadim Jahate</span> <span class="text-xs text-gray-200">12/28</span> </div>
                                        </div>
                                        <div class="flex justify-center items-center flex-col"> <img src="https://img.icons8.com/color/96/000000/mastercard-logo.png" width="40" class="relative right-5" /> <span class="text-xs font-medium text-gray-200 bottom-2 relative right-5">mastercard.</span> </div>
                                    </div>
                                    <div class="flex justify-center flex-col pt-3"> <label class="text-xs text-gray-400 ">Name on Card</label> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="Hadim jahate"> </div>
                                    <div class="flex justify-center flex-col pt-3"> <label class="text-xs text-gray-400 ">Card Number</label> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="**** **** **** ****"> </div>
                                    <div class="grid grid-cols-3 gap-2 pt-2 mb-3">
                                        <div class="col-span-2 "> <label class="text-xs text-gray-400">Expiration Date</label>
                                            <div class="grid grid-cols-2 gap-2"> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="mm"> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="yyyy"> </div>
                                        </div>
                                        <div class=""> <label class="text-xs text-gray-400">CVV</label> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="XXX"> </div>
                                    </div><a href="" id="place-order"><button class="h-12 w-full bg-green-500 rounded focus:outline-none text-white hover:bg-green-600">Check Out</button></a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  },
  after_render: async () => {
      const placeOrder = document.querySelector("#place-order");
      placeOrder.addEventListener("click", (event) => {
        event.preventDefault();
        const user = getUser() !== null ? getUser() : [];
        if (typeof user.id !== "undefined") {
          window.location.href = "/#/order-confirmation";
        } else {
          window.location.href = "/#/register";
        }
      });
  },
};

export default Checkout;
