import React from "react";
import "../assets/Login.css";
import { Formik, Field, Form } from "formik";
import validation from "../validation/LoginYup";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="log-body">
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={validation}
        onSubmit={(values) => {
          const lsdata = JSON.parse(localStorage.getItem("currentData"));

          if (
            values.username == lsdata.username &&
            values.password == lsdata.password
          ) {
            navigate("/layout");
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="log">
              <h2>Gamboo Login</h2>
              <div className="input-cont">
                <Field type="text" name="username" placeholder="Username" />
                {errors.username && touched.username ? (
                  <div>{errors.username}</div>
                ) : null}
                <div className="border1"></div>
              </div>
              <div className="input-cont">
                <Field type="password" name="password" placeholder="Password" />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <div className="border2"></div>
              </div>
              <div className="clear"></div>
              <input type="submit" className="btn-sub" value="Sign In" />
              <p className="p-clr-0">Don't have any account?</p>
              <div className="p-clr-1">
                <Link className="reg-link" to="/register">
                  Create an Account
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
