import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Chart from "../Chart/Chart";
import SideNav from "../NavBars/SideNav";
import TopNav from "../NavBars/TopNav";
import OrdersData from "../OrdersData/OrdersData";
import TodaysDelivery from "../TodaysDelivery/TodaysDelivery";
import { styled } from '@mui/material/styles';


const Main = (props) => {
  const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.between('xs', 'lg')]: {
      margin : '2rem 0',
    },
    
  }));
  let expanded = false;
  const hamClickHandler = (isExpanded) => {
    expanded = isExpanded;
    console.log(expanded);
  };

  return (
    <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center" }}>
      <SideNav expanded={expanded} />
      <Grid container>
        <TopNav onHamClick={hamClickHandler} />
        <OrdersData />
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item lg={8}>
          <Root>
          <TodaysDelivery />
          </Root>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Chart />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
