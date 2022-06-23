import { Container, Grid, TextField, Typography } from "@mui/material";
import DeliveryCard from "../Cards/DeliveryCard";

const TodaysDelivery = (props) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 0px 15px rgba(0, 0, 0, 0.347)",
        padding: "2rem",
        
      }}
    >
      <Grid spacing={1} container >
        <Grid item xs={4}>
          <Typography variant="h5">Today's Delivery</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            sx={{ width: "90%" }}
            id="outlined-search"
            label="Search here"
            type="search"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            sx={{ width: "90%" }}
            id="outlined-search"
            label="All orders"
            type="search"
          />
        </Grid>
        <Grid item xs={12} sx={{ width: "40px" }}></Grid>
        <Grid item xs={12} sx={{ width: "40px" }}></Grid>
        <Grid item xs={12} sx={{ width: "40px" }}></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          xl={4}
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <DeliveryCard number={"46155"} orderNumber={"ORD-2552"} c="red" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          xl={4}
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <DeliveryCard number={"95145"} orderNumber={"ORD-8851"} c="black" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          xl={4}
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <DeliveryCard number={"84423"} orderNumber={"ORD-9451"} c="hotpink" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          xl={4}
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <DeliveryCard number={"54544"} orderNumber={"ORD-5545"} c="gray" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          xl={4}
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <DeliveryCard number={"79532"} orderNumber={"ORD-2276"} c="skyblue" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          xl={4}
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <DeliveryCard number={"64812"} orderNumber={"ORD-1148"} c="green" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TodaysDelivery;
