import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
//import ExpandMoreIcon from "@mui/icons-material/ExpandMoreIcon";
import { tokens } from "../../theme";


const FAQ = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);



    return <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page"></Header>

        <Accordion defaultExpanded>
            {/* <AccordionSummary expandIcon={<ExpandMoreIcon />}> */}
            <AccordionSummary >
            <Typography color={colors.greenAccent[500]} variant="h5">
                An important question</Typography>
            </AccordionSummary>

           <AccordionDetails>
            <Typography>
                jbcfcwqfufh.qefewfefef2wefeffwrf nbty jfergh rgvgejei
                weklhfewrifgr erkheoigrh ipvhherpbg fvnedb.
            </Typography>
           </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary >
            <Typography color={colors.greenAccent[500]} variant="h5">
                An important question</Typography>
            </AccordionSummary>

           <AccordionDetails>
            <Typography>
                jbcfcwqfufh.qefewfefef2wefeffwrf nbty jfergh rgvgejei
                weklhfewrifgr erkheoigrh ipvhherpbg fvnedb.
            </Typography>
           </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary >
            <Typography color={colors.greenAccent[500]} variant="h5">
                An important question</Typography>
            </AccordionSummary>

           <AccordionDetails>
            <Typography>
                jbcfcwqfufh.qefewfefef2wefeffwrf nbty jfergh rgvgejei
                weklhfewrifgr erkheoigrh ipvhherpbg fvnedb.
            </Typography>
           </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary >
            <Typography color={colors.greenAccent[500]} variant="h5">
                A random  question</Typography>
            </AccordionSummary>

           <AccordionDetails>
            <Typography>
                jbcfcwqfufh.qefewfefef2wefeffwrf nbty jfergh rgvgejei
                weklhfewrifgr erkheoigrh ipvhherpbg fvnedb.
            </Typography>
           </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary >
            <Typography color={colors.greenAccent[500]} variant="h5">
                Another important question</Typography>
            </AccordionSummary>

           <AccordionDetails>
            <Typography>
                jbcfcwqfufh.qefewfefef2wefeffwrf nbty jfergh rgvgejei
                weklhfewrifgr erkheoigrh ipvhherpbg fvnedb.
            </Typography>
           </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary >
            <Typography color={colors.greenAccent[500]} variant="h5">
                important question</Typography>
            </AccordionSummary>

           <AccordionDetails>
            <Typography>
                jbcfcwqfufh.qefewfefef2wefeffwrf nbty jfergh rgvgejei
                weklhfewrifgr erkheoigrh ipvhherpbg fvnedb.
            </Typography>
           </AccordionDetails>
        </Accordion>
    </Box>

}
export default FAQ;