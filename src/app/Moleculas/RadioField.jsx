import React from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

export default function RadioField({ label, options, value, onChange }) {
    return (
        <FormControl className="formLabel">
            <FormLabel id={`radio-buttons-group-label-${label}`}>{label}</FormLabel>
            <RadioGroup
                row
                aria-labelledby={`radio-buttons-group-label-${label}`}
                name={`row-radio-buttons-group-${label}`}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            >
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
}
