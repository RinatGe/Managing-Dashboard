import { Box, Button, TextField} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";



const initialValues = {
    firstName:"",
    lastName:"",
    email:"",
    contact:"",
    address1:"",
    address2:"",
};

//Regex - javascript tool where you can check what the values are,based on the string
const phoneRegExp = /^\+?([87](?!95[5-7]|99[08]|907|94[^09]|336)([348]\d|9[0-6789]|7[01247])\d{8}|[1246]\d{9,13}|68\d{7}|5[1-46-9]\d{8,12}|55[1-9]\d{9}|55[138]\d{10}|55[1256][14679]9\d{8}|554399\d{7}|500[56]\d{4}|5016\d{6}|5068\d{7}|502[345]\d{7}|5037\d{7}|50[4567]\d{8}|50855\d{4}|509[34]\d{7}|376\d{6}|855\d{8,9}|856\d{10}|85[0-4789]\d{8,10}|8[68]\d{10,11}|8[14]\d{10}|82\d{9,10}|852\d{8}|90\d{10}|96(0[79]|17[0189]|181|13)\d{6}|96[23]\d{9}|964\d{10}|96(5[569]|89)\d{7}|96(65|77)\d{8}|92[023]\d{9}|91[1879]\d{9}|9[34]7\d{8}|959\d{7,9}|989\d{9}|971\d{8,9}|97[02-9]\d{7,11}|99[^4568]\d{7,11}|994\d{9}|9955\d{8}|996[2579]\d{8}|998[3789]\d{8}|380[345679]\d{8}|381\d{9}|38[57]\d{8,9}|375[234]\d{8}|372\d{7,8}|37[0-4]\d{8}|37[6-9]\d{7,11}|30[69]\d{9}|34[679]\d{8}|3459\d{11}|3[12359]\d{8,12}|36\d{9}|38[169]\d{8}|382\d{8,9}|46719\d{10})$/

const userSchema = yup.object().shape({
    firstName: yup.string().required("please insert first name"),
    lastName: yup.string().required("please insert last Name"),
    email: yup.string().email("Invalid Email").required("please insert email"),
    contact: yup.string().matches(phoneRegExp, "phone number is not valid").required("please insert phone number"),
    address1: yup.string().required("please insert address1"),
    address2: yup.string().required("please insert address2"),
});

const Form = () => {

const isNonMobile = useMediaQuery("(min-width:600px)"); //if we hit a min width of 600px-we are triggering isNonMobile(boolean)

const handleFormSubmit = (values) => {
    console.log(values);
}

    return <Box m="20px">
        <Header title="CREATE USER" subtitle="Create a New User Profile"></Header>

        <Formik 
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
        >
            {
                ({ values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <Box display="grid" gap="30px" 
                        gridAutoColumns="repeat(4,minmax(0,1fr))"
                        sx={{
                            "& > div": { gridColumn: isNonMobile ? undefined : "span 4"}
                        }}>
                            <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="First Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.firstName}
                            name="firstName"
                            error={!!touched.firstName && !!errors.firstName}
                            helperText={touched.firstName && errors.firstName}
                            sx={{gridColumn:"span 2"}}>

                            </TextField>

                            <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Last Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.lastName}
                            name="lastName"
                            error={!!touched.lastName && !!errors.lastName}
                            helperText={touched.lastName && errors.lastName}
                            sx={{gridColumn:"span 2"}}>

                            </TextField>

                            <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            error={!!touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                            sx={{gridColumn:"span 4"}}>

                            </TextField>

                            <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Contact Number"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.contact}
                            name="contact"
                            error={!!touched.contact && !!errors.contact}
                            helperText={touched.contact && errors.contact}
                            sx={{gridColumn:"span 4"}}>

                            </TextField>

                            <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Address1"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address1}
                            name="address1"
                            error={!!touched.address1 && !!errors.address1}
                            helperText={touched.address1 && errors.address1}
                            sx={{gridColumn:"span 4"}}>

                            </TextField>

                            <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Address2"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address2}
                            name="address2"
                            error={!!touched.address2 && !!errors.address2}
                            helperText={touched.address2 && errors.address2}
                            sx={{gridColumn:"span 4"}}>

                            </TextField>

                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Create New User
                            </Button>
                        </Box>

                    </form>
                )}
        </Formik>
    </Box>;
}

export default Form;