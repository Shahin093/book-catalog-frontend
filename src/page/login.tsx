import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { useLoginMutation } from "../redux/features/users/usersApi";
import MainLayout from "../components/layout/MainLayout";
import Loading from "../components/shared/loading";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cookies = new Cookies();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();

  const [login, { data, isError, isLoading, isSuccess }] = useLoginMutation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmitHandler = (data: any) => {
    console.log(data);
    login(data);
    // if (data) {
    //
    // }
    // props.login(data);
  };

  if (data) {
    cookies.set("token", data?.data?.accessToken, { path: "/" });
    toast(data?.message);
    navigate("/");
  }
  console.log(data?.data?.accessToken, isError, isLoading, isSuccess);

  return isLoading ? (
    <div>
      <Loading></Loading>
    </div>
  ) : (
    <MainLayout>
      <div>
        <h2 className="flex mx-auto justify-center items-center mt-5 text-3xl font-bold text-green-400">
          Login User
        </h2>
        <div className="mt-5">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="grid  md:grid-cols-1">
              <div className="mx-auto">
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email")}
                  className="mt-5 px-10 py-3 sm:w-full lg:w-[40vw] border text-lg text-black rounded-md shadow-sm border-dark focus:border-primary outline-none leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="mx-auto">
                <input
                  type="Password"
                  placeholder="Password"
                  {...register("password")}
                  className="mt-5 px-10 py-3 sm:w-full lg:w-[40vw] border text-lg text-black rounded-md shadow-sm border-dark focus:border-primary outline-none leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="mx-auto">
                <button
                  type="submit"
                  className="bg-primary sm:w-full lg:w-[40vw] mx-auto  bg-green-500 text-white font-bold font-medium py-4 px-5  mt-5 rounded-md"
                >
                  Login
                </button>
                <h4 className="mx-auto mt-2 mb-10 font-bold hover:underline decoration-red">
                  <Link to="/password/forgot">Forget Password</Link>
                </h4>
                <h3 className="mx-auto mt-10 font-bold">
                  You Don't Have a Account?{" "}
                  <span style={{ color: "#04d98c" }}>
                    <Link to="/signup">Register</Link>
                  </span>
                </h3>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </MainLayout>
  );
};

export default Login;
