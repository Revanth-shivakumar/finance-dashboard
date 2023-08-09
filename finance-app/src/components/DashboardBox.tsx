import { Box } from "@mui/material";
import {styled} from "@mui/system";

const DashBoardBox = styled(Box)(({ theme })=>({
backgroundColor:theme.palette.background.light,
borderRadius:"1rem",
boxShadow:"0.15rem 0.2rem 0.15rem 0.1rem rgba(240, 240, 243, 0.5)"

}))

export default DashBoardBox;