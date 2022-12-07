import { FC } from 'react';
import Styles from '../auth.module.css';

interface PageProps {}

const page: FC<PageProps> = () => {
  return (
    <>
      <div className={Styles.Auth_form_container}>
        <form className={Styles.Auth_form}>
          <div className={Styles.Auth_form_content}>
            <h3 className={Styles.Auth_form_title}>Sign In</h3>
            <div className="form-group mt-3">
              <label className={Styles.label}>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label className={Styles.label}>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
