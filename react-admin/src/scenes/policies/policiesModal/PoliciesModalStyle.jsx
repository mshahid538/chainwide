import { SxProps } from "@mui/system";

export const PoliciesModalStyle: SxProps = {
  ".modalBody": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "900px",
    width: "100%",
    height: "100vh",
    overflow: "scroll",
    bgcolor: "white",
    boxShadow: 24,
    p: 2,
    color: "black",
    background: "white",
  },
  ".modalInnerBody": {
    border: "1px solid grey",
    padding: "10px",
    borderRadius: "5px",
  },
  ".divider": {
    textTransform: "uppercase",
    "&::before, &::after": {
      borderTop: "thin solid grey",
    },
  },
  ".ruleNameWrapper": {
    marginTop: "20px",
  },
  ".innerIf": {
    border: "1px solid grey",
    padding: "10px",
    background: "#F9F3D9",
  },
  ".thenWrapper": {
    marginTop: "10px",
  },
  ".innerThen": {
    marginTop: "10px",
  },
  ".closeButton": {
    cursor: "pointer",
  },
  ".andWrapper": {
    marginTop: "10px",
  },
  ".singleAnd": {
    textAlign: "right",
    marginTop: "10px",
  },
};
