import React from "react";
import Link from "next/link";
import Image from "next/image";

const SignIn = () => {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-gray-50"
      style={{
        backgroundImage: `url('/images/bg-full.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-6 md:p-10 rounded-md shadow-md w-full max-w-4xl mt-10 mb-5">
        <div className="w-full">
          <h2 className="text-3xl font-semibold mb-6">Sign in</h2>

          <form className="space-y-3">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@domain.com"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex justify-between items-center">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Sign in
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-500">Or</p>
            <button className="mt-2 flex items-center justify-center gap-4 w-full py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-100">
              <Image
                src="images/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
              Continue with LinkedIn
            </button>
          </div>

          <p className="mt-6 text-sm text-center text-gray-500">
            Don&apos;t have an account?{" "}
            <Link href="/Signup" className="text-blue-600 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <Image
            src="/images/signin-bg.jpg"
            alt="Pipeline Pharma"
            width={1000}
            height={1000}
            className="object-cover opacity-90"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
