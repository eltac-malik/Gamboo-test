import React from "react";
import "../assets/Register.css";
import { Formik, Field, Form } from "formik";
import validation from "../validation/RegisterYup";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setAuth } from "../redux/userSlice";

function Register() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.user.auth);
  const dispatch = useDispatch();

  console.log(auth);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          username: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validation}
        onSubmit={(values) => {
          const lsUsr = localStorage.setItem(
            "currentData",
            JSON.stringify(values)
          );
          dispatch(setUser(lsUsr));
          dispatch(setAuth(localStorage.setItem("bool", true)));
          navigate("/layout");
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="log">
              <h2>Gamboo Register</h2>
              <div className="input-cont">
                <Field type="text" name="name" placeholder="Name" />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <div className="border1"></div>
              </div>
              <div className="input-cont">
                <Field type="text" name="username" placeholder="Username" />
                {errors.username && touched.username ? (
                  <div>{errors.username}</div>
                ) : null}
                <div className="border2"></div>
              </div>
              <div className="input-cont">
                <Field type="password" name="password" placeholder="Password" />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <div className="border2"></div>
              </div>
              <div className="input-cont">
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div>{errors.confirmPassword}</div>
                ) : null}
                <div className="border2"></div>
              </div>
              <div className="clear"></div>
              <input type="submit" className="btn-sub" value={`Submit`} />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Register;
