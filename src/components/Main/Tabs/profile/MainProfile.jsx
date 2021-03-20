import React, {useEffect, useRef, useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProfileCard } from "./ProfileCard";
import { Insignias } from "./Insignias";
import { RecentActivity } from "./RecentActivity";
import { Eventos } from "./Eventos";
import { useAuth } from "../../../../contexts/AuthContext";
import { useStorage } from "../../../../contexts/StorageContext";

export const MainProfile = ({setKey}) => {
  const {currentUser} = useAuth()
  const { getProfileInfo, setLoading } = useStorage()
  const [profile, setProfile] = useState({username: "", field: "", biography: ""});
  const [userBadges, setUserBadges] = useState([]);
  const _isMounted = useRef(true);
  

  useEffect(() => {
    async function getData() {
      setLoading(true)
      const profile = await getProfileInfo()

      if(profile.exists){      
        const { field, biography, username, badges} = profile.data()
        _isMounted && setUserBadges(badges)
        _isMounted && setProfile({username, field, biography})
      }
      setLoading(false)
    }
    getData()

  }, [])

  return (
    <>
      <Container fluid style={{minHeight: "100vh"}} >
        <Row  >
              {/* ------------PROFILE CARD------------- */}
            <Col lg={{span: 3, order:1}} md={{span: 6, order:1}} xs={{span: 12, order:1}}>
              <section id="profile" >
                <ProfileCard username={currentUser.displayName} field={profile.field} biography={profile.biography}  
                  setKey={setKey}
                />
              </section>
            </Col>
               {/* ------------INSIGNIAS-------------- */}
            <Col lg={{span: 6, order:2}} md={{span: 12, order:3}} xs={{span: 12, order:3}} >
              <section id="insiginias" style={{minHeight: "60vh"}}>
                <Insignias userBadges={userBadges}/>
                <div>
                  <RecentActivity />
                </div>
              </section>
            </Col>
               {/* ------------EVENTOS-------------- */}
            <Col lg={{span: 3, order:3}} md={{span: 6, order:2}} xs={{span: 12, order:2}} >
              <section id="eventos" >
                <Eventos />
              </section>
            </Col>
      </Row>
      </Container>
    </>
  );
};
