import React, { FC } from "react";
import SignInImg from "../../assets/siginIn.svg";
import "./SignIn.styles.scss";

const SignIn: FC = () => {
  return (
    <div>
      <div className="">
        <div className="flex justify-between items-stretch">
          <div className="w-2/5	col-left">
            <img src={SignInImg} alt="sig in" />
          </div>
          <div className=" w-3/6	col-right">
            <form className="form-item">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Войти в аккаунт
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-80 mail-inp bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Введите ваш логин или емайл"
                  autoComplete="off"
                  // required
                />
              </div>
              <div className="mb-6">
                {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your password
                </label> */}
                <input
                  type="password"
                  id="password"
                  className="w-96 password-inp bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // required
                  placeholder="Введите пароль"
                  autoComplete="off"
                />
              </div>
              {/* <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    placeholder="password"
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Remember me
                </label>
              </div> */}
              <button
                type="submit"
                className="submitBtn  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
