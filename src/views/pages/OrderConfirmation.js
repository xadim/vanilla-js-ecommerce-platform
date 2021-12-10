import CartItems from "./../../services/CartItems.js";
import Currency from "./../../services/Currency.js";
import EmptyCart from "./../../services/EmptyCart.js";


const OrderConfirmation = {
  render: async () => {
    const products = await CartItems();
    const total = products.total;
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
        return `
            <div class="h-96 align-middle content-center bg-white rounded-3xl pb-4 max-w-md place-self-center m-auto">
                <div class="pt-8 pr-10 pl-10 text-center">
                    <h1 class="text-2xl font-bold mb-4 text-dark-blue">Order Summary</h1>
                    <p class="text-desaturated-blue">Thank you for your valued business. We value your trust and confidence in us and sincerely appreciate you!
                    </p>
                </div>
                <div class="bg-gray-50 p-6 m-6 mb-10 rounded-2xl flex justify-between">
                    <div class="flex">
                        <div class="mr-5">
                            ${date}
                        </div>
                        <div>
                            <h1 class="text-dark-blue font-bold">You Paid</h1>
                            <p class="text-desaturated-blue">$${Currency(
                              total
                            )}</p>
                        </div>
                    </div>
                    <div class="self-center">
                        <a href="#" class="text-bright-blue font-bold underline hover:no-underline hover:text-indigo-500">Change</a>
                    </div>
                </div>
            </div>
        `;
  },
  after_render: async () => {
      EmptyCart();
  },
};

export default OrderConfirmation;
