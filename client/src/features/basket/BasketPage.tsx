import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useFetchBasketQuery } from "./basketApi"
import BasketItem from "./BasketItem";
import OrderSummary from "../../app/shared/components/OrderSummary";

export default function BasketPage() {

    const {data,isLoading} = useFetchBasketQuery();
    if (isLoading) return <div><Typography>Loading basket...</Typography></div>

    if (!data) return <Typography variant="h3">Your Basket is empty</Typography>
  return (
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          {data.items.map(i => (
            <BasketItem item={i} key={i.productId} />
          ))}
        </Grid>
        <Grid size={4}>
            <OrderSummary/>
        </Grid>
      </Grid>

  )
}