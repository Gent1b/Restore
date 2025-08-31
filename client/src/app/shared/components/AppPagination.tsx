import { Box, Pagination, Typography } from "@mui/material";
import type { Pagination as PaginationType } from "../../models/pagination";

type Props = {
    metadata: PaginationType
    onPagechange: (page:number)=>void
}
export default function AppPagination({metadata,onPagechange}:Props) {
    const {currentPage,totalPages,pageSize,totalCount} = metadata;

    const startItem = (currentPage-1) * pageSize +1;
    const endItem = Math.min(currentPage * pageSize,totalCount)
  return (
    <Box display="flex" justifyContent="space-between" alignItems='center' marginTop={3}>
        <Typography>
            Displaying {startItem} - {endItem} out of {totalPages} items
        </Typography>
      <Pagination
        color="secondary"
        size="large"
        count={totalPages}
        page={currentPage}
        onChange={(_,page)=>onPagechange(page)}
      />
    </Box>
  );
}
