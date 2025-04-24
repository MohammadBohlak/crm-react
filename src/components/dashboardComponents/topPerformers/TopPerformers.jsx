import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Earnings,
  PerformerCard,
  PerformerDetails,
  PerformerName,
  Rank,
  StyledProgressBar,
  StyledTopPerformers,
} from "./topPerformers.styles";

const topPerformersData = [
  {
    id: 1,
    rank: "1",
    name: "Jessica Wolf",
    earnings: "$152k / $220k",
    percentage: 70,
  },
  {
    id: 2,
    rank: "2",
    name: "Hui Snyder",
    earnings: "$152k / $220k",
    percentage: 85,
  },
  {
    id: 3,
    rank: "3",
    name: "Lisa Melendez",
    earnings: "$152k / $220k",
    percentage: 88,
  },
  {
    id: 4,
    rank: "4",
    name: "Henry Arnold",
    earnings: "$152k / $220k",
    percentage: 50,
  },
];

const annualData = [
  { title: "Annual Revenue",rank: "1", earnings: "$1.2M / $1.5M", progress: 80 },
  { title: "Yearly Growth Rate",rank: "2", earnings: "15%", progress: 75 },
  { title: "Annual Completion Rate",rank: "3", earnings: "92%", progress: 92 },
  { title: "Customer Satisfaction",rank: "4", earnings: "89%", progress: 89 },
];
const TopPerformers = () => {
  // حالة التبويب النشط
  const [activeTab, setActiveTab] = React.useState("monthly");

  return (
    <StyledTopPerformers>
      <Tabs
        id="dashboard-tabs"
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-4"
      >
        <Tab eventKey="monthly" title="Monthly">
          {topPerformersData.map((performer) => (
            <PerformerCard key={performer.id}>
              <Rank>{performer.rank}</Rank>
              <PerformerDetails>
                <PerformerName>{performer.name}</PerformerName>
                <Earnings>{performer.earnings}</Earnings>
                <StyledProgressBar
                  now={performer.percentage}
                  label={`${performer.percentage}%`}
                  //   variant="success"
                />
              </PerformerDetails>
            </PerformerCard>
          ))}
        </Tab>
        <Tab eventKey="annual" title="Annual">
          {annualData.map((stat, index) => (
            <PerformerCard key={index}>
              <Rank>{stat.rank}</Rank>
              <PerformerDetails>
                <PerformerName>{stat.title}</PerformerName>
                <Earnings>{stat.earnings}</Earnings>
                <StyledProgressBar 
                now={stat.progress}
                label={`${stat.progress}%`}
                 />
              </PerformerDetails>
            </PerformerCard>
          ))}
        </Tab>
      </Tabs>
    </StyledTopPerformers>
  );
};

export default TopPerformers;
