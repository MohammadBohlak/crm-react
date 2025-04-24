import React from "react";
import BoxChart from "../components/dashboardComponents/charts/boxChart/BoxChart";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import LineChart from "../components/dashboardComponents/charts/LineChart";
import ReportTable from "../components/dashboardComponents/reportsTable/ReportsTable";
import TopPerformers from "../components/dashboardComponents/topPerformers/TopPerformers";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../styles/themes";

const metrics2 = [
  {
    title: "KPI (Done)",
    subtitle: "KPI Monthly",
    value: "72%",
    subvalue: "$52%/$22.0%",
    isKpi: true,
  },
  {
    title: "KPI Annual",
    value: "60%",
    subvalue: "$82%/$27.0%",
    isKpi: true,
  },
];
const data = [
  {
    "contractCode": "623-561-7355",
    "orderDate": "2022-10-20T00:00:00.000Z",
    "salePerson": "Oritz",
    "amount": 200,
    "tax": 20,
    "total": 220
  },
  {
    "contractCode": "214-549-9069",
    "orderDate": "2022-10-20T00:00:00.000Z",
    "salePerson": "Johnson",
    "amount": 1200,
    "tax": 120,
    "total": 1320
  },
  {
    "contractCode": "909-877-2594",
    "orderDate": "2022-10-20T00:00:00.000Z",
    "salePerson": "Young",
    "amount": 2300,
    "tax": 230,
    "total": 2530
  },
  {
    "contractCode": "936-535-0978",
    "orderDate": "2022-10-20T00:00:00.000Z",
    "salePerson": "Allen",
    "amount": 200,
    "tax": 20,
    "total": 220
  },
  {
    "contractCode": "210-541-5415",
    "orderDate": "2022-10-20T00:00:00.000Z",
    "salePerson": "Nelson",
    "amount": 1800,
    "tax": 180,
    "total": 1980
  }
]

function Dashboard(props) {
  const theme = useSelector(state => state.theme);
  const isLight = theme === "light";
  const colors = isLight ? lightTheme.colors : darkTheme.colors;
  
  const metrics = [
    {
      title: "Exposites",
      value: "$72,000",
      change: "1.39%",
      trend: "up",
      chartColor: colors.chartPink,
      backColor: colors.backChartPink,
      isKpi: false,
    },
    { 
      title: "Claims",
      value: "600",
      change: "1.5%",
      trend: "down",
      chartColor: colors.chartBlue,
      backColor: colors.backChartBlue,
      isKpi: false,
    },
    {
      title: "New details",
      value: "100",
      change: "1.2%",
      trend: "up",
      chartColor: colors.chartOrange,
      backColor: colors.backChartOrange,
      isKpi: false,
    },
  ];
  
  return (
    <>
    <Row>
      <Col xs={12} sm={12} md={4}>
        <BoxChart metrics={metrics} />
      </Col>
      <RightDashboard xs={12} md={8}>
        <LineChart />
      </RightDashboard>
    </Row>
    <Row style={{display: "block"}}>
    <BoxChart metrics={metrics2} />
    </Row>
    <Row>
      <TopPerformers/>
    </Row>
    <Row>
      <ReportTable data= {data}/>
    </Row>
    </>
  );
}

const RightDashboard = styled(Col)`
  canvas,
  .chart {
    width: 100% !important;
    @media screen and (min-width:578px){
      height: 100% !important ; 
    }
  }
`;
export default Dashboard;
