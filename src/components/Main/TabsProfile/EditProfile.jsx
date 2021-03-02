import React from "react";
import { Col, Container, Row, Image, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const EditProfile = () => {
  const methods = useForm({ mode: "onChange" });
  return (
    <Container fluid>
      <Row className={"border-bottom py-3"}>
        <Col xl={4} lg={4} md={12} sm={12} xs={12} className={"text-center"}>
          <Link to={"sub/profile"}>
            <i class="fas fa-arrow-left" style={{ fontSize: "25px" }}></i>
          </Link>
        </Col>
        <Col xl={8} lg={8} md={12} sm={12} xs={12}>
          <p className={"text-edit"}>Editar perfil</p>
        </Col>
      </Row>
      <Row className={"d-flex justify-content-center"}>
        <Col xl={12} lg={12} md={12} sm={12} xs={12} className={"my-3"}>
          <div className={"d-flex justify-content-center"}>
            <div
              id={"image-profile"}
              className={
                "rounded-circle position-relative pointer overflow-hidden"
              }
              style={{ width: "120px" }}
            >
              <Image
                src={
                  "https://i.pinimg.com/736x/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg"
                }
                width={"120"}
              />
              <span className={"camera text-center py-1"}>
                <i class="fas fa-camera-retro"></i>
              </span>
            </div>
          </div>
        </Col>
        <Col xl={6} lg={6} md={12} sm={12} xs={12}>
          <Form>
            <Form.Row className="inputWithIcon">
              {/* -------------NICK------------- */}
              <Col
                xl={6}
                lg={6}
                md={12}
                sm={12}
                xs={12}
                className="inputWithIcon"
              >
                <Form.Label className="text_label">Nick:</Form.Label>
                <i className="fa fa-user fa-lg fa-fw" aria-hidden="true" />
                <Form.Control
                  type="text"
                  name="nick"
                  ref={methods.register({
                    required: "Porfavor complete este campo",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      message: "Porfavor introduzca un email valido.",
                    },
                  })}
                />
                {methods.errors.email && (
                  <li className="text_label text-danger">
                    {" "}
                    {methods.errors.email.message}{" "}
                  </li>
                )}
              </Col>
              {/* -----------EMAIL------------ */}
              <Col
                xl={6}
                lg={6}
                md={12}
                sm={12}
                xs={12}
                className="inputWithIcon"
              >
                <Form.Label className="text_label">Contraseña:</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  ref={methods.register({
                    required: "Porfavor complete este campo",
                    minLength: {
                      value: 8,
                      message: "La contraseña debe tener al menos 8 caracteres",
                    },
                  })}
                />
                <i className="fas fa-envelope fa-lg fa-fw" aria-hidden="true" />
                {methods.errors.password && (
                  <li className="text_label text-danger">
                    {" "}
                    {methods.errors.password.message}{" "}
                  </li>
                )}
              </Col>
              {/* -----------GENERO------------ */}
              <Col
                xl={4}
                lg={4}
                md={12}
                sm={12}
                xs={12}
                className="inputWithIcon"
              >
                <Form.Label className="text_label">Genero:</Form.Label>
                <Form.Control
                  type="text"
                  name="genero"
                  ref={methods.register({
                    required: "Porfavor complete este campo",
                    minLength: {
                      value: 8,
                      message: "La contraseña debe tener al menos 8 caracteres",
                    },
                  })}
                />
                <i
                  className="fas fa-venus-mars fa-lg fa-fw"
                  aria-hidden="true"
                />
                {methods.errors.password && (
                  <li className="text_label text-danger">
                    {" "}
                    {methods.errors.password.message}{" "}
                  </li>
                )}
              </Col>
              {/* -----------FECHA NACIMIENTO------------ */}
              <Col
                xl={4}
                lg={4}
                md={12}
                sm={12}
                xs={12}
                className="inputWithIcon"
              >
                <Form.Label className="text_label">
                  Fecha nacimiento:
                </Form.Label>
                <Form.Control
                  type="date"
                  name="fecha_nacimiento"
                  ref={methods.register({
                    required: "Porfavor complete este campo",
                    minLength: {
                      value: 8,
                      message: "La contraseña debe tener al menos 8 caracteres",
                    },
                  })}
                />
                {/* <i
                  className="fas fa-calendar-week fa-lg fa-fw"
                  aria-hidden="true"
                /> */}
                {methods.errors.password && (
                  <li className="text_label text-danger">
                    {" "}
                    {methods.errors.password.message}{" "}
                  </li>
                )}
              </Col>
              {/* -----------PAIS------------ */}
              <Col
                xl={4}
                lg={4}
                md={12}
                sm={12}
                xs={12}
                className="inputWithIcon"
              >
                <Form.Label className="text_label">País:</Form.Label>
                <Form.Control
                  type="text"
                  name="pais"
                  ref={methods.register({
                    required: "Porfavor complete este campo",
                    minLength: {
                      value: 8,
                      message: "La contraseña debe tener al menos 8 caracteres",
                    },
                  })}
                />
                <i className="fas fa-flag fa-lg fa-fw" aria-hidden="true" />
                {methods.errors.password && (
                  <li className="text_label text-danger">
                    {" "}
                    {methods.errors.password.message}{" "}
                  </li>
                )}
              </Col>
              {/* -----------Area de conocimiento------------ */}
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className="inputWithIcon"
              >
                <Form.Label className="text_label">
                  Area de conocimiento:
                </Form.Label>
                <Form.Control
                  as="select"
                  name="pais"
                  ref={methods.register({
                    required: "Porfavor complete este campo",
                    minLength: {
                      value: 8,
                      message: "La contraseña debe tener al menos 8 caracteres",
                    },
                  })}
                >
                  <option>Default select</option>
                </Form.Control>
              </Col>
              {/* -----------CONTRSAEÑA------------ */}
              <Col
                xl={6}
                lg={6}
                md={12}
                sm={12}
                xs={12}
                className="inputWithIcon"
              >
                <Form.Label className="text_label">Contraseña:</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  ref={methods.register({
                    required: "Porfavor complete este campo",
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g,
                      message: `La contraseña debe tener al menos 8 caracteres, e incluir un numero `,
                    },
                  })}
                />
                <i className="fas fa-lock fa-lg fa-fw" aria-hidden="true" />
                {methods.errors.password && (
                  <li className="text_label text-danger">
                    {" "}
                    {methods.errors.password.message}{" "}
                  </li>
                )}
              </Col>
              <Col
                xl={6}
                lg={6}
                md={12}
                sm={12}
                xs={12}
                className="inputWithIcon"
              >
                <Form.Label className="text_label">
                  Confirmar Contraseña:
                </Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPass"
                  ref={methods.register({
                    required: "Porfavor complete este campo",
                    validate: () => {
                      if (
                        methods.getValues("password") ===
                        methods.getValues("confirmPass")
                      )
                        return true;
                      else return "Las contraseñas no concuerdan";
                    },
                  })}
                />
                {methods.errors.confirmPass && (
                  <li className="text_label text-danger">
                    {" "}
                    {methods.errors.confirmPass.message}{" "}
                  </li>
                )}
                <i className="fas fa-lock fa-lg fa-fw" aria-hidden="true" />
              </Col>
              {/* -----------REDESSOCIALES------------ */}
              <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="6" className={"px-0 text-right"}>
                    <label>
                      <i
                        class="fab fa-facebook-square position-relative"
                        style={{
                          left: 0,
                          top: 0,
                          padding: 0,
                          paddingRight: 5,
                          fontSize: "25px",
                          color: "#0f8cf0",
                        }}
                      ></i>
                      facebook.com/
                    </label>
                  </Form.Label>
                  <Col sm="6" className={"py-0"}>
                    <Form.Control />
                  </Col>
                </Form.Group>
              </Col>
              <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="6" className={"px-0 text-right"}>
                    <label>
                      <i
                        class="fab fa-github position-relative"
                        style={{
                          left: 0,
                          top: 0,
                          padding: 0,
                          paddingRight: 5,
                          fontSize: "25px",
                          color: "#000",
                        }}
                      ></i>
                      github.com/
                    </label>
                  </Form.Label>
                  <Col sm="6" className={"py-0"}>
                    <Form.Control />
                  </Col>
                </Form.Group>
              </Col>
              <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="6" className={"px-0 text-right"}>
                    <label>
                      <i
                        class="fab fa-linkedin position-relative"
                        style={{
                          left: 0,
                          top: 0,
                          padding: 0,
                          paddingRight: 5,
                          fontSize: "25px",
                          color: "#0c65c2",
                        }}
                      ></i>
                      likendin.com/in/
                    </label>
                  </Form.Label>
                  <Col sm="6" className={"py-0"}>
                    <Form.Control />
                  </Col>
                </Form.Group>
              </Col>
              <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="6" className={"px-0 text-right"}>
                    <label>
                      <i
                        class="fab fa-twitter-square position-relative"
                        style={{
                          left: 0,
                          top: 0,
                          padding: 0,
                          paddingRight: 5,
                          fontSize: "25px",
                          color: "#00a3f2",
                        }}
                      ></i>
                      twitter.com/
                    </label>
                  </Form.Label>
                  <Col sm="6" className={"py-0"}>
                    <Form.Control />
                  </Col>
                </Form.Group>
              </Col>
              {/* -----------BIOGRAFIA------------ */}
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <Form.Label className="text_label">Biografia:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  ref={methods.register({
                    required: "Porfavor complete este campo",
                    validate: () => {
                      if (
                        methods.getValues("password") ===
                        methods.getValues("confirmPass")
                      )
                        return true;
                      else return "Las contraseñas no concuerdan";
                    },
                  })}
                />
                {methods.errors.confirmPass && (
                  <li className="text_label text-danger">
                    {" "}
                    {methods.errors.confirmPass.message}{" "}
                  </li>
                )}
              </Col>
            </Form.Row>
            <div className="text-right ">
              <Button
                type="submit"
                disabled={methods.formState.isSubmitting}
                className="login_button  ml-3"
              >
                Guardar cambios
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
