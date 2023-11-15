import Link from "next/link";

export default function Login() {
  return (
    <div className="flex h-screen">
      <div
        style={{
          backgroundImage: "url('/images/login-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "32%",
          height: "100%",
        }}
        className="hidden sm:flex  items-center justify-center border-r-4 border-theme-green"
      >
        <span className="-rotate-90 text-[64px] font-bold leading-normal text-white">
          Login
        </span>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="space-y-9 px-8 sm:px-0 w-full sm:w-fit">
          <div className="sm:text-left text-center">
            <h1 className=" font-serif text-5xl font-normal leading-normal text-white ">
              Welcome
            </h1>
            <p className="text-2xl font-light leading-normal text-text">
              Let’s log you in quickly
            </p>
          </div>
          <div className="flex flex-col items-start gap-[22px]">
            <input
              className="ui-input w-full sm:w-[600px]"
              placeholder="Enter your email"
            />
            <input
              className="ui-input w-full sm:w-[600px]"
              placeholder="Enter your password"
              type="password"
            />
            <div className="flex flex-col sm:flex-row w-full items-start justify-between gap-[51px] sm:gap-0">
              <button className="ui-btn-primary w-[160px] sm:w-[180px] text-xl font-semibold leading-normal uppercase">
                LOGIN
              </button>

              <div className="text-xl font-normal leading-normal">
                <Link href="/register" className="text-white">
                  don’t have an account
                  <span className="text-theme-green">?</span>
                  <br />
                  <span className="text-theme-green">sign up</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
