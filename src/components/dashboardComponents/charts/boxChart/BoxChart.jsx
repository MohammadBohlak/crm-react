import React from "react";
import SmallChart from "../SmallChart";
import { Card, CardLeft, CardsContainer, Change, Subtitle, Subvalue, Title, Value } from "./boxChart.styles";

const BoxChart = ({ metrics }) => {
  return (
    <CardsContainer className={metrics[0].isKpi ? "kpi" : " "}>
      {metrics.map((metric, index) => (
        <Card
          style={{ background: `${!metric.isKpi? metric.backColor : "white"}`} }
          key={index}
          $isKpi={metric.isKpi}
        >
          <CardLeft>
            <Title>{metric.title}</Title>
            {metric.subtitle && <Subtitle>{metric.subtitle}</Subtitle>}
            <Value>{metric.value}</Value>
            {metric.trend && (
              <Change $trend={metric.trend}>
                {metric.trend === "up" ? "↑" : "↓"} {metric.change}
              </Change>
            )}
            {metric.subvalue && <Subvalue>{metric.subvalue}</Subvalue>}
          </CardLeft>
          <SmallChart chartColor={metric.chartColor} />
        </Card>
      ))}
    </CardsContainer>
  );
};


export default BoxChart;
