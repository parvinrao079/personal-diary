import React from 'react';

const Login = () => {
  return (
    <div>
      <div className="hero bg-base-300 min-h-screen"
        style={{
          backgroundImage: "url(https://images.pexels.com/photos/7578218/pexels-photo-7578218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}>
            <div className="hero-overlay bg-opacity-65"></div>
        <div className="hero-content flex-col lg:flex-row-reverse pb-60">
          <div className="pl-10 text-center lg:text-left">
            <h1 className="text-5xl font-bold">Welcome to {' '}
            <span>
              <a className="text-9xl cursor-pointer text-gradient bg-gradient-to-b from-primary to-secondary">
                dear<span className="font-bold">Diary</span>
              </a>
            </span>{' '}</h1>
            <p className="py-6 ">
            We are thrilled to present you with a phenomenal website designed especially for you to pour your heart out in your journal.  <br /> <br />Start journaling today and embark on a journey of self-discovery and reflection.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
