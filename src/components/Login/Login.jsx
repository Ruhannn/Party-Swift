const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200 dark:bg-[#282a36] dark:text-[#ffffffc6] ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 px-6">
            Join the Fun! Discover exciting moments and connect with like-minded
            people. Explore and enjoy a vibrant community. Your next
            unforgettable experience awaits!
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  dark:bg-[#282a36] bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label ">
                <span className="label-text dark:text-[#ffffffc6]">Email</span>
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
  );
};

export default Login;
