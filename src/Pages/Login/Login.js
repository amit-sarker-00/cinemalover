import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../AuthContext/AuthContext";

const Login = () => {
  const { login, googleLogin } = useContext(AuthProvider);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handelRegister = (data) => {
    login(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      toast.success("Login Successfully!");
      navigate(from, { replace: true });
      reset();
    });
  };
  const handelGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className=" bg-white rounded-md shadow-2xl py-12 w-96 mx-auto mt-10 ">
      <form
        className=" flex flex-col gap-4 items-center justify-center "
        onSubmit={handleSubmit(handelRegister)}
      >
        <input
          className="border bg-white text-gray-600  border-green-400 p-2 w-80"
          {...register("email", { required: "Email is Required" })}
          placeholder="email"
        />

        <input
          className="border bg-white text-gray-600 border-green-400 p-2 w-80 "
          {...register("password", { required: "Password is Required" })}
          placeholder="password"
        />

        <button className="btn rounded-md p-2 w-80  bg-green-500 text-white font-bold hover:bg-green-400">
          Login
        </button>
        <p className="text-gray-500 text-sm font-bold">
          Don't Have an Account ?
          <Link className="link" to="/register">
            Register
          </Link>
        </p>
      </form>
      <div className="divider text-gray-600">OR</div>
      <div className="text-center">
        <button
          onClick={handelGoogleLogin}
          className="btn rounded-md p-2 w-80 bg-green-500 text-white font-bold hover:bg-green-400"
        >
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
