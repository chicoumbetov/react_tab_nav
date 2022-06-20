import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import "../../App.css";
import ListCompanies from "../list_company/ListCompanies";
import WorkUnitForm from "../WorkUnitForm/WorkUnitForm";

/**
export enum Page {
    COMPANIES,
    ACTIVITIES,
    DECLARATIONS,
}
*/

const BSTabs = () => {
  const [key, setKey] = useState("declarations");

  return (
    <div className="container">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        defaultActiveKey={"declarations"}
        onSelect={(k) => {
          if (k) setKey(k);
        }}
        className="bloc-tabs"
      >
        <Tab
          eventKey="companies"
          title="Companies"
          tabClassName={key === "companies" ? "tabs active-tabs" : "tabs"}
          className={
            key === "companies" ? "content  active-content" : "content"
          }
        >
          <ListCompanies />
        </Tab>
        <Tab
          eventKey="activities"
          title="Activities"
          tabClassName={key === "activities" ? "tabs active-tabs" : "tabs"}
          className={
            key === "activities" ? "content  active-content" : "content"
          }
        >
          Content 2
        </Tab>
        <Tab
          eventKey="declarations"
          title="Declarations"
          tabClassName={key === "declarations" ? "tabs active-tabs" : "tabs"}
          className={
            key === "declarations" ? "content  active-content" : "content"
          }
        >
          <WorkUnitForm />
        </Tab>
      </Tabs>
    </div>
  );
};

export default BSTabs;
