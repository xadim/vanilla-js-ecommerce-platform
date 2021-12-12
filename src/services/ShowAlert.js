const ShowAlert = (message, className, position = "relative") => {
  const productWrapper = document.querySelector(".productWrapper");
  const successDiv = document.createElement("div");
  successDiv.classList.add("alert", "m-t-4", "text-center", "py-2", position);

  successDiv.innerHTML = `
        <div class="bg-${className}-100 border border-${className}-400 text-${className}-700 px-4 py-2 rounded relative" role="alert">
            <strong class="font-bold">Yay!</strong>
            <span class="block sm:inline">${message}</span>
        </div>
        `;
  productWrapper.after(successDiv);
  setTimeout(() => document.querySelector(".alert").remove(), 3000);
};

export default ShowAlert;