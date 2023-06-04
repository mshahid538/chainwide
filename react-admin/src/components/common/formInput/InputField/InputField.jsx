import { FormControl, InputLabel, TextField } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const BootstrapInput = styled(TextField)(({ theme }) => ({
  "label + &": { marginTop: theme.spacing(3) },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "white",
    border: "1px solid grey",
    fontSize: 16,
    width: "100%",
    padding: "7px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const BootstrapInputLabel = styled(InputLabel)(({ theme }) => ({
  "&.MuiInputLabel-root": {
    fontSize: "18px",
    color: "black",
  },
}));

export const FormInputLabel = ({ children, required, ...otherProps }) => {
  return (
    <BootstrapInputLabel shrink {...otherProps}>
      {children}
      {required === true ? (
        <span style={{ color: "#e70000", fontSize: "18px" }}> *</span>
      ) : (
        ""
      )}
    </BootstrapInputLabel>
  );
};

const FormInputBootstrap = ({ name, type, ...otherProps }) => {
  return (
    <FormControl variant="standard" fullWidth>
      <BootstrapInput
        type={type ? type : "text"}
        name={name}
        {...otherProps}
        fullWidth
      />
    </FormControl>
  );
};

export default FormInputBootstrap;
