import React, {useEffect, useRef, useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProfileCard } from "./ProfileCard";
import { Insignias } from "./Insignias";
import { RecentActivity } from "./RecentActivity";
import { Eventos } from "./Eventos";
import { useAuth } from "../../../../contexts/AuthContext";
import { useStorage } from "../../../../contexts/StorageContext";

export const MainProfile = () => {
  const {currentUser} = useAuth()
  const { getProfileInfo } = useStorage()
  const [profile, setProfile] = useState({username: "", field: "", biography: ""});
  const _isMounted = useRef(true);
  

  useEffect(async () => {
    const profile = await getProfileInfo(currentUser.uid)

    if(profile.exists){      
      const { field, biography, username} = profile.data()
      _isMounted && setProfile({username, field, biography})
    }
    return () => {
			_isMounted.current = false;
		};

  }, [])

  return (
    <>
      <Container fluid style={{minHeight: "100vh"}} >
        <Row  >
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
                <Eventos currentUser={currentUser} />
              </section>
            </Col>
      </Row>
      </Container>
    </>
  );
};
