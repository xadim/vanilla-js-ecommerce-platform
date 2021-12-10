import ShowAlert from "../../services/ShowAlert.js";

const Register = {
  render: async () => {
    return `
            <div class="bg-gray-lighter min-h-screen flex flex-col">
              <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                  <div class="bg-green-600 px-6 py-8 rounded shadow-md text-gray-900 w-full productWrapper">
                      <h1 class="mb-8 text-3xl text-center text-white">Sign up</h1>
                      <input 
                          type="text"
                          class="block border border-grey-light w-full p-3 rounded mb-4"
                          name="fullname"
                          id="fullname"
                          placeholder="Full Name" />

                      <input 
                          type="text"
                          class="block border border-grey-light w-full p-3 rounded mb-4"
                          name="email"
                          id="email"
                          placeholder="Email" />

                      <input 
                          type="password"
                          class="block border border-grey-light w-full p-3 rounded mb-4"
                          name="password"
                          id="password"
                          placeholder="Password" />
                      <input 
                          type="password"
                          class="block border border-grey-light w-full p-3 rounded mb-4"
                          name="confirm_password"
                          id="confirm_password"
                          placeholder="Confirm Password" />

                      <button
                          type="submit"
                          id="register_submit_btn"
                          class="w-full text-center py-3 rounded bg-gray-400 text-white hover:bg-green-dark focus:outline-none my-1"
                      >Create Account</button>

                      <div class="text-center text-sm  text-white mt-4">
                          By signing up, you agree to the 
                          <a class="no-underline border-b border-grey-dark  text-white" href="#">
                              Terms of Service
                          </a> and 
                          <a class="no-underline border-b border-grey-dark  text-white" href="#">
                              Privacy Policy
                          </a>
                      </div>
                  </div>

                  <div class="text-grey-dark mt-6">
                      Already have an account? 
                      <a class="no-underline border-b border-blue text-blue" href="../login/">
                          Log in
                      </a>.
                  </div>
              </div>
          </div>
        `;
  },
  after_render: async () => {
    document
      .getElementById("register_submit_btn")
      .addEventListener("click", () => {
        let fullname = document.getElementById("fullname");
        let email = document.getElementById("email");
        let pass = document.getElementById("password");
        let repeatPass = document.getElementById("confirm_password");
        if (pass.value != repeatPass.value) {
          ShowAlert(`The passwords dont match`, "red");
        } else if (
          (fullname.value == "") |
          (email.value == "") |
          (pass.value == "") |
          (repeatPass == "")
        ) {
          ShowAlert(`The fields cannot be empty`, "red");
        } else {
          ShowAlert(
            `User with email ${email.value} was successfully submitted!`,
            "green"
          );
        }
      });
  },
};

export default Register;
