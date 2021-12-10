const ShowAlert = (message, className) => {
  const productWrapper = document.querySelector(".productWrapper");
  const successDiv = document.createElement("div");
  successDiv.classList.add("alert", "m-t-4", "text-center", "py-4", "lg:px-4");

  successDiv.innerHTML = `
        <div class="bg-${className}-100 border border-${className}-400 text-${className}-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Yay!</strong>
            <span class="block sm:inline">${message}</span>
        </div>
        `;
  productWrapper.after(successDiv);
  setTimeout(() => document.querySelector(".alert").remove(), 3000);
};

export default ShowAlert;