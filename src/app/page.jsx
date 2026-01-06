"use client";

import { useState } from "react";
import { usePrivy } from "@privy-io/react-auth";

const background = "/assets/backgrounds/view-car-running-high-speed%20%282%29.jpg";
const logo = "/assets/icons/logo2.png";
const googleIcon = "/assets/icons/google.png";
const facebookIcon = "/assets/icons/facebook.svg";
const eyeOpen = "/assets/icons/view.png";
const eyeClosed = "/assets/icons/hide.png";

export default function Home() {
  const { ready, login } = usePrivy();
  const [stage, setStage] = useState("start");
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showSignupConfirm, setShowSignupConfirm] = useState(false);

  const isLogin = stage === "login";
  const isSignup = stage === "signup";
  const isForm = isLogin || isSignup;

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
            isForm ? "scale-105 blur-[2px] brightness-110" : ""
          }`}
          style={{ backgroundImage: `url('${background}')` }}
        />
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            isForm
              ? "bg-gradient-to-b from-black/25 via-black/55 to-black/85"
              : "bg-gradient-to-b from-black/20 via-black/10 to-black/70"
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-6 py-8">
        <div className="relative flex flex-1 items-center justify-center">
          <section
            className={`absolute inset-0 flex flex-col items-center justify-between pt-8 pb-12 text-center transition-all duration-700 ${
              isForm ? "pointer-events-none opacity-0 translate-y-6" : "opacity-100"
            }`}
          >
            <div className="flex flex-col items-center gap-3">
              <img
                src={logo}
                alt="Base Wheels"
                className="w-64 drop-shadow-[0_12px_35px_rgba(0,0,0,0.7)]"
              />
            </div>

            <div className="flex flex-col items-center gap-4">
              <p className="hotwheels-tagline text-[11px] uppercase tracking-[0.4em]">
                Collect. Build. Own Real toy car.
              </p>
              <button
                type="button"
                onClick={() => setStage("login")}
                className="group relative flex w-72 items-center justify-center"
              >
                <img
                  src="/assets/images/1.png"
                  alt="Login"
                  className="w-full drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)] transition group-hover:translate-y-[-2px]"
                />
                <span className="hotwheels-cta-label absolute left-[29%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg uppercase tracking-[0.35em] drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
                  Login
                </span>
              </button>
              <div className="hotwheels-stripes h-1 w-36 rounded-full opacity-80" />
            </div>
          </section>

          <section
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
              isLogin ? "opacity-100" : "pointer-events-none opacity-0 translate-y-6"
            }`}
          >
            <div className="w-full max-w-sm">
              <button
                type="button"
                onClick={() => setStage("start")}
                className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-white/40 hover:text-white"
                aria-label="Back"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div className="hotwheels-panel relative rounded-[34px] px-6 pb-7 pt-16">
                <img
                  src={logo}
                  alt="Base Wheels"
                  className="hotwheels-logo absolute left-1/2 top-0 w-64 -translate-x-1/2 -translate-y-1/2"
                />
                <div className="flex flex-col items-center gap-2 text-center">
                  <p className="hotwheels-form-title uppercase tracking-[0.45em]">Login</p>
                </div>

                <div className="mt-6 grid gap-4">
                  <label htmlFor="username" className="sr-only">
                    Username or email
                  </label>
                  <div className="hotwheels-input flex items-center gap-3 rounded-full px-4 py-3">
                    <input
                      id="username"
                      type="text"
                      placeholder="Username/email"
                      autoComplete="username"
                      className="w-full bg-transparent text-sm text-amber-50 placeholder:text-amber-100/70 focus:outline-none"
                    />
                  </div>

                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <div className="hotwheels-input flex items-center gap-3 rounded-full px-4 py-3">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      autoComplete="current-password"
                      className="w-full bg-transparent text-sm text-amber-50 placeholder:text-amber-100/70 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      className="shrink-0"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      <img src={showPassword ? eyeClosed : eyeOpen} alt="" className="h-4 w-4 opacity-80" />
                    </button>
                  </div>

                  <div className="flex items-center justify-end pr-3 text-[11px] text-amber-100/80">
                    <button type="button">Forgot Password ?</button>
                  </div>

                  <button
                    type="button"
                    onClick={login}
                    disabled={!ready}
                    className="hotwheels-cta mt-2 w-full rounded-full px-6 py-3 text-sm font-extrabold uppercase tracking-[0.35em] text-amber-950 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    masuk
                  </button>

                  <div className="flex items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={login}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/90"
                      aria-label="Continue with Google"
                    >
                      <img src={googleIcon} alt="Google" className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={login}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/90"
                      aria-label="Continue with Facebook"
                    >
                      <img src={facebookIcon} alt="Facebook" className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center">
                    <img src="/assets/images/7.png" alt="" className="w-56" />
                  </div>

                  <label className="flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.3em] text-amber-100/80">
                    <input type="checkbox" className="h-3 w-3 accent-amber-400" />
                    Remember Me
                  </label>

                  <button
                    type="button"
                    onClick={() => setStage("signup")}
                    className="text-center text-[11px] text-amber-100/70"
                  >
                    Don&apos;t have an account? <span className="text-amber-200">Sign up</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
              isSignup ? "opacity-100" : "pointer-events-none opacity-0 translate-y-6"
            }`}
          >
            <div className="w-full max-w-sm">
              <button
                type="button"
                onClick={() => setStage("start")}
                className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-white/40 hover:text-white"
                aria-label="Back"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div className="hotwheels-panel relative rounded-[34px] px-6 pb-7 pt-16">
                <img
                  src={logo}
                  alt="Base Wheels"
                  className="hotwheels-logo absolute left-1/2 top-0 w-64 -translate-x-1/2 -translate-y-1/2"
                />
                <div className="flex flex-col items-center gap-2 text-center">
                  <p className="hotwheels-form-title uppercase tracking-[0.45em]">Sign up</p>
                </div>

                <div className="mt-6 grid gap-4">
                  <label htmlFor="signup-username" className="sr-only">
                    Username
                  </label>
                  <div className="hotwheels-input flex items-center gap-3 rounded-full px-4 py-3">
                    <input
                      id="signup-username"
                      type="text"
                      placeholder="username"
                      autoComplete="username"
                      className="w-full bg-transparent text-sm text-amber-50 placeholder:text-amber-100/70 focus:outline-none"
                    />
                  </div>

                  <label htmlFor="signup-email" className="sr-only">
                    Email
                  </label>
                  <div className="hotwheels-input flex items-center gap-3 rounded-full px-4 py-3">
                    <input
                      id="signup-email"
                      type="email"
                      placeholder="email"
                      autoComplete="email"
                      className="w-full bg-transparent text-sm text-amber-50 placeholder:text-amber-100/70 focus:outline-none"
                    />
                  </div>

                  <label htmlFor="signup-password" className="sr-only">
                    Enter password
                  </label>
                  <div className="hotwheels-input flex items-center gap-3 rounded-full px-4 py-3">
                    <input
                      id="signup-password"
                      type={showSignupPassword ? "text" : "password"}
                      placeholder="enter password"
                      autoComplete="new-password"
                      className="w-full bg-transparent text-sm text-amber-50 placeholder:text-amber-100/70 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowSignupPassword((value) => !value)}
                      className="shrink-0"
                      aria-label={showSignupPassword ? "Hide password" : "Show password"}
                    >
                      <img src={showSignupPassword ? eyeClosed : eyeOpen} alt="" className="h-4 w-4 opacity-80" />
                    </button>
                  </div>

                  <label htmlFor="signup-confirm" className="sr-only">
                    Re-enter password
                  </label>
                  <div className="hotwheels-input flex items-center gap-3 rounded-full px-4 py-3">
                    <input
                      id="signup-confirm"
                      type={showSignupConfirm ? "text" : "password"}
                      placeholder="Re-enter password"
                      autoComplete="new-password"
                      className="w-full bg-transparent text-sm text-amber-50 placeholder:text-amber-100/70 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowSignupConfirm((value) => !value)}
                      className="shrink-0"
                      aria-label={showSignupConfirm ? "Hide password" : "Show password"}
                    >
                      <img src={showSignupConfirm ? eyeClosed : eyeOpen} alt="" className="h-4 w-4 opacity-80" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={login}
                    disabled={!ready}
                    className="hotwheels-cta mt-2 w-full rounded-full px-6 py-3 text-sm font-extrabold uppercase tracking-[0.35em] text-amber-950 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Daftar
                  </button>

                  <div className="flex items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={login}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/90"
                      aria-label="Continue with Google"
                    >
                      <img src={googleIcon} alt="Google" className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={login}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/90"
                      aria-label="Continue with Facebook"
                    >
                      <img src={facebookIcon} alt="Facebook" className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center">
                    <img src="/assets/images/7.png" alt="" className="w-56" />
                  </div>

                  <button
                    type="button"
                    onClick={() => setStage("login")}
                    className="text-center text-[11px] text-amber-100/70"
                  >
                    already have an account. try <span className="text-amber-200">Login</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
