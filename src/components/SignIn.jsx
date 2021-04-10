import React from "react";
import homeSvg from "../../static/home.svg";
import * as db from "../firestore";


function SignIn() {

  return (
    <div>
      <section>
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded">
          <svg x="0px" y="0px" viewBox="0 0 553.21 553.21">
                    <circle fill="#12727B" cx="276.6" cy="276.6" r="276.6"/>
                    <path fill="#F79C5A" d="M312.7,494.61l5.56-4.18c-2.28-3.03-1.67-7.33,1.36-9.61c3.03-2.28,7.33-1.67,9.61,1.36l5.01-3.77
                      c-2.28-3.03-1.67-7.33,1.36-9.61c3.03-2.28,7.33-1.67,9.61,1.36l5.81-4.37c-2.28-3.03-1.67-7.33,1.36-9.61s7.33-1.67,9.61,1.36
                      l8.71-6.55c-9.48-12.6-6.96-30.5,5.64-39.98c12.6-9.48,30.5-6.96,39.98,5.64l9-6.78c-2.28-3.03-1.67-7.33,1.36-9.61
                      c3.03-2.28,7.33-1.67,9.61,1.36l5.01-3.77c-2.28-3.03-1.67-7.33,1.36-9.61s7.33-1.67,9.61,1.36l5.81-4.37
                      c-2.28-3.03-1.67-7.33,1.36-9.61s7.33-1.67,9.61,1.36l5.85-4.4L243.04,64.48l-5.85,4.4c2.28,3.03,1.67,7.33-1.36,9.61
                      c-3.03,2.28-7.33,1.67-9.61-1.36l-5.81,4.37c2.28,3.03,1.67,7.33-1.36,9.61c-3.03,2.28-7.33,1.67-9.61-1.36l-5.01,3.77
                      c2.28,3.03,1.67,7.33-1.36,9.61c-3.03,2.28-7.33,1.67-9.61-1.36l-9,6.78c9.48,12.6,6.96,30.5-5.64,39.98s-30.5,6.96-39.98-5.64
                      l-8.71,6.55c2.28,3.03,1.67,7.33-1.36,9.61s-7.33,1.67-9.61-1.36l-5.81,4.37c2.28,3.03,1.67,7.33-1.36,9.61
                      c-3.03,2.28-7.33,1.67-9.61-1.36l-5.01,3.77c2.28,3.03,1.67,7.33-1.36,9.61s-7.33,1.67-9.61-1.36l-5.56,4.18L312.7,494.61z"/>
                      <rect x="159.37" y="212.03" transform="matrix(0.6014 0.799 -0.799 0.6014 334.6277 -110.4147)" fill="none" stroke="#F66950" width="237.19" height="136.21"/>
                    <circle fill="#E0DA86" cx="280.18" cy="285.12" r="42.2"/>
                    <polygon fill="#E74240" points="311.06,238.69 306.9,274.65 334.15,298.46 298.67,305.61 284.44,338.9 266.68,307.36 230.63,304.11 
                      255.13,277.47 247.08,242.18 279.99,257.26 	"/>
                  </svg>
            </div>



          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium italic text-white primary-font">
              My Movie Club
            </h1>
            <p className="leading-relaxed mb-8 secondary-font">
              Create and share Movie Clubs
            </p>
            <div className="flex justify-center">
              <button
                onClick={db.signInWithGoogle}
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Sign In With Google
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
