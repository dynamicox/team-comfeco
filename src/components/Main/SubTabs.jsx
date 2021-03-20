import React, {useState} from "react";
import { Container, Tabs, Tab, Fade} from "react-bootstrap";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { MainProfile } from "./Tabs/profile/MainProfile";
import { MainBadges } from "./Tabs/badge/MainBadges";
import { MainEvents } from "./Tabs/events/MainEvents";
import { MainGroups } from "./Tabs/groups/MainGroups";
import  {EditProfile}  from "./Tabs/profile/EditProfile";

export const SubTabs = () => {
  const [key, setKey] = useState('profile');
  return (
    <>
      <Navigation />
      <Container fluid className="px-0">
          <Tabs
            className="border-bottom justify-content-center py-2"
            variant="pills"
            id="controlled-tab-example"
            activeKey={key}
            unmountOnExit
            transition={Fade}
            onSelect={(k) => setKey(k)}
              >
                <Tab title={<div><i className={"fa fa-user mr-2"} />Mi Perfil</div>}
                  eventKey="profile"
                  variant="pills"
                >
                  <MainProfile setKey={setKey} />
                </Tab>
                <Tab title={<div><i className={"fa fa-lightbulb mr-2"}></i>Insignias</div>}
                  eventKey="badges"
                >
                  <MainBadges />
                </Tab>
                <Tab title={<div><i className={"fa fa-users mr-2"}></i>Grupos</div>}
                  eventKey="groups"

                >
                  <MainGroups />
                </Tab>
                <Tab title={<div><i className={"fa fa-calendar-day mr-2"}></i>Eventos</div>}
                  eventKey="events"
                >
                  <MainEvents />
                </Tab>
                <Tab 
                  eventKey="editProfile"
                >
                  <EditProfile setKey={setKey} />
                </Tab>
              </Tabs>
      <Footer />
      </Container>
    </>
  );
};
