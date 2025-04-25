import React from "react";
import {
    Box,
    Link,
    Checkbox,
    Typography,
    Button,
    Divider,
    FormControlLabel,
} from "@mui/material";
import LoginContainer from "./components/LogIn/LoginContainer";
import InputForm from "./components/LogIn/InputForm";
import {
    GoogleIcon,
    FacebookIcon,
    SitemarkIcon,
} from "./components/LogIn/CustomIcons";
import { blue } from "@mui/material/colors";

export default function App() {
    return (
        <>
            <LoginContainer>
                <SitemarkIcon />
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{
                        width: "100%",
                        fontSize: "clamp(2rem, 10vw, 2.15rem)",
                        fontWeight: 700,
                        mb: 2,
                    }}
                >
                    Sign in
                </Typography>
                <InputForm
                    label="Email"
                    placeholder="example@gmail.com"
                    type="email"
                />
                <InputForm
                    label="Password"
                    placeholder="••••••••"
                    type="password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    variant="outlined"
                    sx={{ bgcolor: "black", color: "white", borderRadius: 1 }}
                >
                    Sign in
                </Button>
                <Link
                    component="button"
                    type="button"
                    sx={{ color: "black", mt: 1 }}
                >
                    Forgot your password?
                </Link>
                <Divider sx={{ width: "100%", my: 2 }}>or</Divider>

                <Button
                    startIcon={<GoogleIcon />}
                    variant="outlined"
                    sx={{
                        marginBottom: 1,
                        borderColor: "black",
                        color: "black",
                    }}
                >
                    Sign in with Google
                </Button>
                <Button
                    startIcon={<FacebookIcon />}
                    variant="outlined"
                    sx={{
                        marginBottom: 1,
                        borderColor: "black",
                        color: "black",
                    }}
                >
                    Sign in with Facebook
                </Button>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    Don't have an account?{" "}
                    <Link sx={{ color: "black" }}>Sign up</Link>
                </Box>
            </LoginContainer>
            ;
        </>
    );
}
