import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
  const { signIn, setLoading, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        toast.success("Login successful!");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password should contain at least one capital letter");
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      toast.error("Password should contain at least one special character");
      return;
    }
    signIn(email, password)
      .then(() => {
        toast.success("Login successful!");
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error) {
          toast.error("Incorrect password. Please try again.");
        }
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 dark:bg-[#282a36] dark:text-[#ffffffc6] ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Misplaced your joy? No worries, we'll find it for you.
          </h1>
          <p className="py-6 px-6">
            Join the Fun! Discover exciting moments and connect with like-minded
            people. Explore and enjoy a vibrant community. Your next
            unforgettable experience awaits!
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  dark:bg-[#282a36] bg-base-100">
          <form className="card-body" onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label ">
                <span className="label-text dark:text-[#ffffffc6]">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered dark:bg-[#44475a]"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-[#ffffffc6]">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered dark:bg-[#44475a]"
              />
              <p>
                Welcome! If you're new,
                <Link to="/signup" className="btn px-1 p-0 btn-link">
                  sign up here
                </Link>
                .
              </p>
              <label className="label"></label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary mb-6">
                Login
              </button>
            </div>
          </form>
          <div className=" flex justify-center items-center mb-6">
          <BsGoogle onClick={handleGoogle} className="text-2xl cursor-pointer" type="submit">
          </BsGoogle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
