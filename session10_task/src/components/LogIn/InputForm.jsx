import React from "react";
import { FormControl, FormLabel, TextField } from "@mui/material";

export default function InputForm({ label, placeholder, type }) {
    return (
        <FormControl sx={{ mb: 2 }} variant="outlined">
            <FormLabel htmlFor="email">{label}</FormLabel>
            <TextField
                placeholder={placeholder}
                autoFocus
                required
                fullWidth
                variant="outlined"
                type={type}
            />
        </FormControl>
    );
}
