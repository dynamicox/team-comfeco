import React from "react";
import register_img from "../../assets/images/register_img.svg";
import google_icon from "../../assets/images/google_icon.png";
import facebook_icon from "../../assets/images/facebook_icon.png";
import { Image } from "react-bootstrap";
export const Register = () => {
  return (
    <>
      <div className="row m-0 d-flex align-items-center">
        <div className="col-lg-4">
          <div className="row d-none d-lg-block">
            <div className="col-lg-10">
              <Image src={register_img} fluid />
            </div>
            <div className="col-lg-12 pt-4 text-center">
              <p className="text_label m-0">¿Ya estas registrado?</p>
            </div>
            <div className="col-lg-12 text-center">
              <button className="register_button">Ingresar</button>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-xl-8 col-md-12 col-sm-12 col-12 border-left no-border">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-9">
              <form className="form_login">
                <h1 className="text_label">SignUp</h1>
                <label className="text_label">Nick:</label>
                <div class="inputWithIcon">
                  <input type="text" />
                  <i class="fas fa-user fa-lg fa-fw" aria-hidden="true"></i>
                </div>
                <label className="text_label">Correo:</label>
                <div class="inputWithIcon">
                  <input type="text" />
                  <i class="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
                </div>
                <label className="text_label">Contraseña:</label>
                <div class="inputWithIcon">
                  <input type="password" />
                  <i class="fas fa-lock fa-lg fa-fw" aria-hidden="true"></i>
                </div>
                <label className="text_label">Confirmar Contraseña:</label>
                <div class="inputWithIcon">
                  <input type="password" />
                  <i class="fas fa-lock fa-lg fa-fw" aria-hidden="true"></i>
                </div>
                <button>Crear Cuenta</button>
                <div className="row d-block d-lg-none d-xl-block">
                  <div className="col-lg-12 pt-4 text-center mb-2">
                    <p className="text_label m-0">¿Ya estas registrado?</p>
                  </div>
                  <div className="col-lg-12 text-center">
                    <button className="register_button">Ingresar</button>
                  </div>
                </div>
                <div className="login_with_container border-top pt-3 mt-2">
                  <img src={facebook_icon} alt="" />
                  <img src={google_icon} alt="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="login_left_side">
        <img src={register_img} alt="login_img" />
        <span>¿Ya estas registrado?</span>
        <button>Ingresar</button>
      </div>
      <div className="login_right_side">
        <form className="form_login">
          <h1>SignUp</h1>
          <label>Nick:</label>
          <div class="inputWithIcon">
            <input type="text" />
            <i class="fas fa-user fa-lg fa-fw" aria-hidden="true"></i>
          </div>
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
          <label>Confirmar Contraseña:</label>
          <div class="inputWithIcon">
            <input type="password" />
            <i class="fas fa-lock fa-lg fa-fw" aria-hidden="true"></i>
          </div>
          <button>Crear Cuenta</button>
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
