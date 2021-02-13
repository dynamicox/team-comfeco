import React from "react";
import login_img from "../../assets/images/login_img.svg";
import google_icon from "../../assets/images/google_icon.png";
import facebook_icon from "../../assets/images/facebook_icon.png";
import { Image } from "react-bootstrap";
export const Login = () => {
  return (
    <>
      <div className="row m-0 d-flex align-items-center">
        <div className="col-lg-4 d-none d-lg-block">
          <div className="row">
            <div className="col-lg-10">
              <Image src={login_img} fluid />
            </div>
            <div className="col-lg-12 pt-4 text-center">
              <span className="text_label ">¿Todavia no tienes cuenta?</span>
            </div>
            <div className="col-lg-12 text-center">
              <button className="register_button">Registrarse</button>
            </div>
          </div>
        </div>
        <div className="col-lg-8 border-left no-border">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-9">
              <form>
                <h1 className="text_label text-center">SignIn</h1>
                <label className="m-0 text_label">Correo:</label>
                <div class="inputWithIcon">
                  <input type="text" />
                  <i class="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
                </div>
                <label className="m-0 text_label">Contraseña:</label>
                <div class="inputWithIcon">
                  <input type="password" />
                  <i class="fas fa-lock fa-lg fa-fw" aria-hidden="true"></i>
                </div>
                <div className="login_options">
                  <div className="login_options_message">
                    <p className="text_label">¿Olvidaste tu contraseña?</p>
                  </div>
                  <div className="login_options_checkbox">
                    <input type="checkbox" name="" id="" />
                    <p className="text_label">Recordarme</p>
                  </div>
                </div>
                <div className="text-center my-3">
                  <button className="login_button">Ingresar</button>
                </div>
                <div className="row d-block d-lg-none d-xl-none mb-3">
                  <div className="col-lg-12 pt-2 text-center">
                    <span className="text_label">
                      ¿Todavia no tienes cuenta?
                    </span>
                  </div>
                  <div className="col-lg-12 text-center">
                    <button className="register_button">Registrarse</button>
                  </div>
                </div>
                <div className="login_with_container border-top pt-4">
                  <img src={facebook_icon} alt="" />
                  <img src={google_icon} alt="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="login_left_side">
        <img src={login_img} alt="login_img" />
        <span>¿Todavia no tienes cuenta?</span>
        <button>Registrarse</button>
      </div>
      <div className="login_right_side">
        <form className="form_login">
          <h1>SignIn</h1>
          <label>Correo:</label>
          <div class="inputWithIcon">
            <input type="text" />
            <i class="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
          </div>
          <label>Contraseña:</label>
          <div class="inputWithIcon">
            <input type="password" />
            <i class="fas fa-lock fa-lg fa-fw" aria-hidden="true"></i>
          </div>

          <div className="login_options">
            <div className="login_options_message">
              <p>¿Olvidaste tu contraseña?</p>
            </div>
            <div className="login_options_checkbox">
              <input type="checkbox" name="" id="" />
              <p>Recordarme</p>
            </div>
          </div>
          <button>Ingresar</button>
          <div className="line_login "></div>
          <div className="login_with_container">
            <img src={facebook_icon} alt="" />
            <img src={google_icon} alt="" />
          </div>
        </form>
      </div> */}
    </>
  );
};
