import { Container } from "@mui/material";
import classes from "./Chart.module.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
ChartJs.register(Tooltip, Title, ArcElement, Legend);
const Chart = (props) => {
  const data = {
    datasets: [
      {
        data: [221, 123, 268, 348, 20],
        backgroundColor: ["gray", "#faa62f", "#85e82e", "#5852fa", "red"],
        hoverOffset: 4,
      },
    ],
    labels: ["pending", "processing", "ready", "delivered", "returned"],
  };
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "25rem",
        height: "30rem",
      }}
      className={classes.chart__container}
    >
      <div>
        <h3 className={classes.heading}>Overview</h3>
      </div>
      <div className={classes.chart}>
        <Doughnut
          options={{ responsive: true, maintainAspectRatio: false }}
          data={data}
        ></Doughnut>
      </div>
    </Container>
  );
};

export default Chart;
