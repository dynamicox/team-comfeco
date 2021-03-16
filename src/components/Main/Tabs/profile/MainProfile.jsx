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
  const [userBadges, setUserBadges] = useState([]);
  const _isMounted = useRef(true);
  

  useEffect(() => {
    async function getData() {
      const profile = await getProfileInfo()

      if(profile.exists){      
        const { field, biography, username, badges} = profile.data()
        _isMounted && setUserBadges(badges)
        _isMounted && setProfile({username, field, biography})
      }
    }
    getData()

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
                <Insignias userBadges={userBadges}/>
                <div>
                  <RecentActivity />
                </div>
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
