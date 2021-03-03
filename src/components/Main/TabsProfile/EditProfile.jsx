import React from "react";
import { Col, Container, Row, Image, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { EditProfileForm } from "../../Forms/EditProfileForm";

export const EditProfile = () => {
  const methods = useForm({ mode: "onChange" });
  return (
    <Container fluid style={{minHeight: "100vh"}}>
      <Row className={"border-bottom py-3"}>
        <Col lg={4} md={12} className={"text-center"}>
          <Link to={"/sub/profile"}>
            <i class="fas fa-arrow-left" style={{ fontSize: "25px" }}></i>
          </Link>
        </Col>
        <Col xl={8} lg={8} md={10} sm={12} xs={12}>
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
        <Col lg={6} md={12}>
          <EditProfileForm />
        </Col>
      </Row>
    </Container>
  );
};