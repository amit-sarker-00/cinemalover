import React from "react";

const ContactMe = () => {
  return (
    <div>
      <div className="md:px-20 sm:px-10 px-5 py-8 sm:py-20 grid grid-cols-1 md:grid-cols-2 items-center justify-center ">
        <div className="flex justify-center items-center">
          <img
            className="w-96 "
            src="https://i.ibb.co/6JgSMcN/output-onlinegiftools.gif"
            alt=""
          />
        </div>

        <div className="mb-5">
          <div className=" text-white mb-20 sm:py-10">
            <div className="shadow-2xl border border-white  py-12 w-96 mx-auto mt-10">
              <form
                action="https://formsubmit.co/7c49516f9b535e0508058b9b3970eaf6"
                method="POST"
                className=" flex flex-col gap-4 items-center justify-center "
              >
                <input
                  className="border border-white bg-gray-700 p-2 w-80"
                  placeholder="name"
                  name="name"
                />

                <input
                  className="border border-white bg-gray-700 p-2 w-80 "
                  placeholder="email"
                  name="email"
                />
                <textarea
                  className="border border-white bg-gray-700 text-white  p-2 w-80"
                  placeholder="message"
                  name="message"
                ></textarea>

                <button className="btn rounded-md p-2 w-80  bg-green-500 text-black font-bold hover:bg-green-400">
                  Submit
                </button>
              </form>
              <div className="divider">OR</div>
              <div className="flex items-center justify-center gap-4 mt-4">
                <a href="https://www.linkedin.com/in/amitsarker0/">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-linkedin hover:text-green-500"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://github.com/amit-sarker-00">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github hover:text-green-500"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="https://www.facebook.com/amit.sarker.581187">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-facebook hover:text-green-500"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
