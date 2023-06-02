import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, Grid } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { FormInputLabel } from "../../../components/common/formInput/InputField/InputField";
import Dropdown from "../../../components/common/formInput/dropdown/Dropdown";
import InputCheckbox from "../../../components/common/formInput/inputCheckbox/InputCheckbox";
import NewInputField from "../../../components/common/formInput/newInputField/NewInputField";
import ToggleButton from "../../../components/common/formInput/toggleButton/ToggleButton";
import { PoliciesModalStyle } from "./PoliciesModalStyle";

function PoliciesModal({ open, handleClose }) {
  const [add, setAnd] = React.useState([]);

  const handleAddAnd = () => {
    setAnd([0]);
  };

  const handleSingleAddClose = (andItem) => {
    const data = [...add];
    const selectedIndex = data.indexOf(Number(andItem));
    if (selectedIndex > -1) {
      data.splice(Number(selectedIndex), 1);
    }
    setAnd(data);
  };

  const handleSingleAdd = (index) => {
    setAnd([...add, Math.max(...add) + 1]);
  };

  return (
    <Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={{ ...PoliciesModalStyle }}>
            <Box component="form" autoComplete="off">
              <Box className="modalBody">
                <Box>
                  <Grid
                    container
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    mb={2}
                  >
                    <Grid>
                      <b>Create a Rule</b>
                    </Grid>
                    <Grid>
                      <b onClick={handleClose} className="closeButton">
                        <CloseIcon />
                      </b>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="modalInnerBody">
                  {/* general start */}
                  <Box>
                    <Divider className="divider" textAlign="left">
                      general
                    </Divider>
                    <Box className="ruleNameWrapper">
                      <Grid container>
                        <Grid item sx={2} sm={2} md={2} lg={2}></Grid>
                        <Grid item sx={1.2} sm={1.2} md={1.2} lg={1.2}>
                          Rule Name
                        </Grid>
                        <Grid item sx={6} sm={6} md={6} lg={6}>
                          <NewInputField />
                          <ToggleButton
                            firstTile="enabled"
                            secondTile="disabled"
                          />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item sx={2} sm={2} md={2} lg={2}></Grid>
                        <Grid item sx={2} sm={2} md={2} lg={10}>
                          <InputCheckbox label="Always on" />
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                  {/* genaral end */}

                  {/* if start */}
                  <Box>
                    <Divider className="divider" textAlign="left">
                      if
                    </Divider>
                    <Box className="innerIf">
                      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Box>
                          <b className="closeButton">
                            <CloseIcon />
                          </b>
                          {!add?.length > 0 && (
                            <b onClick={handleAddAnd} className="closeButton">
                              <AddIcon />
                            </b>
                          )}
                        </Box>
                      </Box>
                      <Grid container spacing={2}>
                        <Grid item sx={12} sm={12} md={4} lg={4}>
                          <Dropdown
                            data={[
                              { id: 1, title: "test1" },
                              { id: 2, title: "test2" },
                              { id: 3, title: "test3" },
                            ]}
                            label="first"
                          />
                        </Grid>
                        <Grid item sx={12} sm={12} md={4} lg={4}>
                          <Dropdown
                            data={[
                              { id: 4, title: "test4" },
                              { id: 5, title: "test5" },
                              { id: 6, title: "test6" },
                            ]}
                            label="second"
                          />
                        </Grid>
                        <Grid item sx={12} sm={12} md={4} lg={4}>
                          <Dropdown
                            data={[
                              { id: 7, title: "test7" },
                              { id: 8, title: "test8" },
                              { id: 9, title: "test9" },
                            ]}
                            label="third"
                          />
                        </Grid>

                        <Grid item sx={12} sm={12} md={4} lg={4}>
                          <Dropdown
                            data={[
                              { id: 7, title: "test7" },
                              { id: 8, title: "test8" },
                              { id: 9, title: "test9" },
                            ]}
                            label="value"
                            multiple="true"
                          />
                        </Grid>
                      </Grid>
                      {add?.length > 0 &&
                        add?.map((andItem, index) => (
                          <Box className="andWrapper">
                            <Divider className="divider" textAlign="left">
                              and
                            </Divider>
                            <Grid
                              container
                              justifyContent={"space-between"}
                              alignItems={"center"}
                            >
                              <Grid item sx={6} sm={6} md={6} lg={6}>
                                <Dropdown
                                  data={[
                                    { id: 7, title: "test7" },
                                    { id: 8, title: "test8" },
                                    { id: 9, title: "test9" },
                                  ]}
                                />
                              </Grid>
                              <Grid item sx={6} sm={6} md={6} lg={6}>
                                <Box className="singleAnd">
                                  <b
                                    className="closeButton"
                                    onClick={() =>
                                      handleSingleAddClose(andItem)
                                    }
                                  >
                                    <CloseIcon />
                                  </b>
                                  <b
                                    className="closeButton"
                                    onClick={() => handleSingleAdd(index)}
                                  >
                                    <AddIcon />
                                  </b>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        ))}
                    </Box>
                  </Box>
                  {/* if end */}

                  {/* then start */}
                  <Box className="thenWrapper">
                    <Divider className="divider" textAlign="left">
                      then
                    </Divider>
                    <Box className="innerThen">
                      <Grid container alignItems={"center"}>
                        <Grid item sx={12} sm={12} md={4} lg={4}>
                          <FormInputLabel>
                            Redirect Path (required)
                          </FormInputLabel>
                        </Grid>
                        <Grid item sx={12} sm={12} md={8} lg={8}>
                          <NewInputField />
                        </Grid>

                        <Grid item sx={12} sm={12} md={4} lg={4}>
                          <FormInputLabel>
                            Redirect Type (required)
                          </FormInputLabel>
                        </Grid>
                        <Grid item sx={12} sm={12} md={8} lg={8}>
                          <Dropdown
                            data={[
                              { id: 7, title: "test7" },
                              { id: 8, title: "test8" },
                              { id: 9, title: "test9" },
                            ]}
                          />
                        </Grid>

                        <Grid item sx={12} sm={12} md={4} lg={4}>
                          <FormInputLabel>
                            Relative Redirection Options
                          </FormInputLabel>
                        </Grid>
                        <Grid item sx={12} sm={12} md={8} lg={8}>
                          <Dropdown
                            data={[
                              { id: 7, title: "test7" },
                              { id: 8, title: "test8" },
                              { id: 9, title: "test9" },
                            ]}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                  {/* then end */}
                </Box>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

export default PoliciesModal;
