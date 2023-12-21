import PieChart from "../../components/PieChart";
import Header from "../../components/Header";
import { Box } from "@mui/material";




const Bar = () => {


    return <Box m="20px">
        <Header title="Pie Chart" subtitle="Simple Pie Chart"></Header>
        <Box height="75vh">
            <PieChart></PieChart>
        </Box>
    </Box>
}
export default Bar;