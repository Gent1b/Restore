import { Box, Button, Paper, Typography } from "@mui/material";
import Search from "./Search";
import RadioButtonGroup from "../../app/shared/components/RadioButtonGroup";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import { resetParams, setBrands, setOrderBy, setTypes } from "./catalogSlice";
import CheckBoxButtons from "../../app/shared/components/CheckBoxButtons";

const sortOptions = [
  { value: "name", label: "Alphabetical" },
  { value: "priceDesc", label: "Price: High to low" },
  { value: "price", label: "Price: Low to high" },
];

type Props = {
    filterData:{brands:string[];types:string[];}
}
export default function Filters({filterData:data}:Props) {
  const { orderBy, types, brands } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  if (!data?.brands || !data?.types) return <Typography>Loading...</Typography>;
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Paper>
        <Search />
      </Paper>
      <Paper sx={{ p: 3 }}>
        <RadioButtonGroup
          selectedValue={orderBy}
          options={sortOptions}
          onChange={(e) => dispatch(setOrderBy(e.target.value))}
        ></RadioButtonGroup>
      </Paper>
      <Paper sx={{ p: 3 }}>
        <CheckBoxButtons
          items={data.brands}
          checked={brands}
          onChange={(items: string[]) => dispatch(setBrands(items))}
        ></CheckBoxButtons>
      </Paper>
      <Paper sx={{ p: 3 }}>
        <CheckBoxButtons
          items={data.types}
          checked={types}
          onChange={(items: string[]) => dispatch(setTypes(items))}
        ></CheckBoxButtons>
      </Paper>
      <Button
        onClick={() => {
          dispatch(resetParams());
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Reset Filters
      </Button>
    </Box>
  );
}
