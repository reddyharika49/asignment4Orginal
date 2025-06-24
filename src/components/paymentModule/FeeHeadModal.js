// import React from "react";
import {
    Box,
    TextField,
    Typography,
    Button,
    Grid,
    InputAdornment,
    IconButton,
} from "@mui/material";
import { Search, Close } from "@mui/icons-material";

const FeeHeadModal = ({ showModal, setShowModal, feeHeads, addFeeItem }) => {
    const modalStyle = {
        position: "absolute",
        top: "43%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "85%",
        maxWidth: 499,
        height: "35vh" ,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: "0px 0px 7.1px 0px #0000006B",
        p: 2,
        zIndex: 11,
    };

    if (!showModal) return null;

    return (
        <div className="parent d-flex flex-column justify-content-end align-items-center "style={{height:"100%",width:"100%",background:" linear-gradient(46deg, rgba(33, 33, 33, 0.84) 0%, rgba(66, 66, 66, 0.24) 178.98%)"}} >
            {/* Close button positioned outside the modal */}

            <div className="Form" style={{marginTop:'-'}}>
                {/* Main modal content */}
                <Box sx={modalStyle}>
                    <TextField
                        fullWidth
                        placeholder="Search Fee Head"
                        variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Search />
                                </InputAdornment>
                            ),
                            sx: {
                                borderRadius: 1,
                                backgroundColor: "#f2f2f2",
                                height: 40,
                                "& .MuiOutlinedInput-input": {
                                    padding: "10px 14px",
                                    height: "auto",
                                },
                            },
                        }}
                    />
                    <Typography
                        variant="subtitle2"
                        mt={3}
                        mb={1}
                        sx={{ color: "gray", fontWeight: 500 }}
                    >
                        Recent Search
                    </Typography>
                    <Grid container spacing={2}>
                        {feeHeads.map((fee) => (
                            <Grid item xs={6} key={fee.id}>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        borderRadius: 2,
                                        justifyContent: "flex-start",
                                        textTransform: "none",
                                        fontWeight: 500,
                                        color: "#222",
                                        borderColor: "#ccc",
                                        padding: "8px 12px",
                                        backgroundColor: "#fff",
                                        "&:hover": { backgroundColor: "#f5f5f5" },
                                    }}
                                    onClick={() => addFeeItem(fee)}
                                >
                                    <div
                                        className="d-flex align-items-center"
                                        style={{
                                            gap: "8px",
                                            alignItems: "center",
                                            display: "flex",
                                        }}
                                    >
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 18 18"
                                                fill="none"
                                            >
                                                <g clipPath="url(#clip0_1342_3515)">
                                                    <path
                                                        d="M6.74316 4.48837L11.9193 1.5L13.6488 4.49588L6.74316 4.48837Z"
                                                        stroke="black"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M1.5 5.25C1.5 5.05109 1.57902 4.86032 1.71967 4.71967C1.86032 4.57902 2.05109 4.5 2.25 4.5H15.75C15.9489 4.5 16.1397 4.57902 16.2803 4.71967C16.421 4.86032 16.5 5.05109 16.5 5.25V15.75C16.5 15.9489 16.421 16.1397 16.2803 16.2803C16.1397 16.421 15.9489 16.5 15.75 16.5H2.25C2.05109 16.5 1.86032 16.421 1.71967 16.2803C1.57902 16.1397 1.5 15.9489 1.5 15.75V5.25Z"
                                                        stroke="black"
                                                        strokeWidth="1.5"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M13.2188 12.375H16.5V8.625H13.2188C12.1312 8.625 11.25 9.46463 11.25 10.5C11.25 11.5354 12.1312 12.375 13.2188 12.375Z"
                                                        stroke="black"
                                                        strokeWidth="1.5"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M16.5 6.1875V15.1875"
                                                        stroke="black"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1342_3515">
                                                        <rect width="18" height="18" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div>{fee.name}</div>
                                    </div>
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
            <div className="close" style={{ zIndex:'999'}}>
                <Box
                    sx={{

                        top: "calc(50% - 180px)", // Adjust to position above the modal
                        right: "calc(50% - 270px)", // Adjust to position to the right of the modal
                        zIndex: 12, // Higher than modal to ensure visibility
                    }}
                >
                    <IconButton
                        onClick={() => setShowModal(false)}
                        sx={{
                            border: "2px solid #000",
                            borderRadius: "50%",
                            padding: 1,
                            backgroundColor: "#fff",
                        }}
                    >
                        <Close sx={{ transform: "rotate(90deg)" }} />
                    </IconButton>
                </Box>
            </div>
        </div>
        
    );
};

export default FeeHeadModal;