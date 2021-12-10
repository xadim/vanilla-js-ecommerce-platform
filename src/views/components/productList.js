const productList = (products, request) => {
    const productsDiv = /*html*/ `
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">Get 19% Off<br> site-wide when you<br> spend $40 with<br> code: sntu</h1>
                <h1 class="text-1xl font-extrabold tracking-tight text-green-700 underline capitalize py-6">${decodeURI(
                  request
                )}</h1>
                <div class="mt-6 grid grid-cols-4 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    ${products
                      .map(
                        (product) => /*html*/ `
                    <div class="group relative">
                    <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img src="${product.image}" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                    <a href="#/product-details-page/${product.id}">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        ${product.title}
                                    </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">${product.category}</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">$${product.price}</p>
                            </div>
                      </div>`
                      )
                      .join("\n ")}
                </div>
            </div>
        `;
    return productsDiv;
};

export default productList;
