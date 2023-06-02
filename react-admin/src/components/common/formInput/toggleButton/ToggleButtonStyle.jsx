import { SxProps } from "@mui/system";

export const ToggleButtonStyle: SxProps = {
  ".mask-box": {
    marginTop: "10px",
    borderRadius: "10px",
    position: "relative",
    background: "#e5cfff",
    boxShadow: "1px 1px 2px rgb(165, 165, 165) inset",
  },
  ".mask-box .mask": {
    width: "100px",
    height: "30px",
    borderRadius: "10px",
    background: "#8400ed",
    position: "absolute",
    boxShadow: "1px 0 2px #b473ff",
    transition: "all 0.5s ease",
  },
  ".mask-box .MuiButton-root": {
    borderRadius: "10px",
    width: "100px",
    height: "30px",
    fontWeight: "bold",
    transition: "all 0.2s 0.1s ease",
  },
  ".mask-box .MuiButton-root:hover": {
    opacity: 0.8,
  },
};
