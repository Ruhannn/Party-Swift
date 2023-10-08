const SignUp = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <div className="card flex-shrink-0 w-full lg:w-[600px] max-w-sm shadow-2xl dark:bg-[#282a36] bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-textdark:text-[#ffffffc6] ">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered dark:bg-[#44475a]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-[#ffffffc6]">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered dark:bg-[#44475a]"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link dark:text-[#ffffffc6] dark:hover:text-[#ffffffc6]">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
