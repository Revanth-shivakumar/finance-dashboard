import { useState } from "react";
import { Link } from "react-router-dom";
import { Box ,Typography,useTheme} from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import ApiIcon from '@mui/icons-material/Api';


const Navbar = () => {
    const [selected,setSelected] = useState("dashboard");
    const {palette} = useTheme();
    return <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
        <FlexBetween gap="0.75rem">
            <ApiIcon sx={{fontSize:"28px"}}></ApiIcon>
            <Typography variant="h4" fontSize="16px">FinBoard</Typography>       
        </FlexBetween>
        <FlexBetween gap="2rem">
            <Box sx={{"&:hover":{color:palette.primary[100]}}}>
                <Link to='/' 
                onClick={()=>setSelected("dashboard")}
                style={{
                    color:selected==="dashboard" ? "inherit" : palette.grey[700],
                    textDecoration:"inherit"
                }}
                >
                 dashboard   
                </Link>
            </Box>
           
        </FlexBetween>
        </FlexBetween>
};

export default Navbar