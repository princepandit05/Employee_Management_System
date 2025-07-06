import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [Email, setEmail] = useState("");
  const [passwoard, setpasswoard] = useState("");

  const submithandler = (e) => {
    e.preventDefault();

    handleLogin(Email,passwoard)
    setEmail("")
    setpasswoard("")
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submithandler(e);
          }}
          className="flex flex-col  items-center justify-center "
        >
          <input
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400"
            type="Email"
            placeholder="Enter your Email"
          />
          <input
            value={passwoard}
            onChange={(e) => {
              setpasswoard(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full mt-3 placeholder:text-gray-400"
            type="Password"
            placeholder="Enter your passwoard"
            name=""
            id=""
          />
          <button className="outline-none  border-none bg-emerald-600 py-3 px-24 rounded-full mt-5 placeholder:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
