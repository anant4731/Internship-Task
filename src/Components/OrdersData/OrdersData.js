import OrderCard from "../Cards/OrderCard";
import { Container, Grid } from "@mui/material";
const OrdersData = (props) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "0",
      }}
      maxWidth="xl"
    >
      <Grid
        spacing={1}
        container
        sx={{ alignItems: "center", display: "flex", justifyContent: "center" }}
      >
        <Grid
          item
          md={6}
          lg={4}
          xl={3}
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <OrderCard bgCol="gray" status="PENDING ORDERS" amount="221" />
        </Grid>
        <Grid
          item
          md={6}
          lg={4}
          xl={3}
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <OrderCard bgCol="#faa62f" status="PROCESSING ORDERS" amount="123" />
        </Grid>
        <Grid
          item
          md={6}
          lg={4}
          xl={3}
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <OrderCard bgCol="#85e82e" status="READY TO DELIVER" amount="268" />
        </Grid>
        <Grid
          item
          md={6}
          lg={4}
          xl={3}
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <OrderCard bgCol="#5852fa" status="DELIVERED ORDERS" amount="348" />
        </Grid>
      </Grid>
    </Container>
  );
};
export default OrdersData;
