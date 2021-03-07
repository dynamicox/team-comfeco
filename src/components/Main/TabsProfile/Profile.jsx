import React, {useEffect, useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProfileCard } from "./ProfileCard";
import { Insignias } from "./Insignias";
import { RecentActivity } from "./RecentActivity";
import { Eventos } from "./Eventos";
import { useAuth } from "../../../contexts/AuthContext";
import { useStorage } from "../../../contexts/StorageContext";

export const Profile = () => {
  const {currentUser} = useAuth()
  const { getProfileInfo } = useStorage()
  const [profile, setProfile] = useState({username: "", field: "", biography: ""});
  

  useEffect(async () => {
    const doc = await getProfileInfo(currentUser.uid)

    if(doc.exist){
      const { field, biography, username } = doc.data()
      setProfile(val => ({username, field, biography}) )
      //console.log(doc.data())
    }


  }, [])

  return (
    <>
      <Container fluid="lg" >
        <Row style={{minHeight: "100vh"}} >
              {/* ------------PROFILE CARD------------- */}
            <Col lg={3} md={12}>
              <section id="profile" >
                <ProfileCard username={currentUser.displayName} field={profile.field} biography={profile.biography}  />
              </section>
            </Col>
               {/* ------------INSIGNIAS-------------- */}
            <Col lg={6} md={12} >
              <section id="insiginias" style={{minHeight: "60vh"}}>
                <Insignias />
                <RecentActivity />
              </section>
            </Col>
               {/* ------------EVENTOS-------------- */}
            <Col lg={3} md={12}>
              <section id="eventos" >
                <Eventos />
              </section>
            </Col>
      </Row>
      </Container>
    </>
  );
};
