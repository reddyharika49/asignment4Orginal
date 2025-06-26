import React from "react";
import {
  Box,
  ToggleButton,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { Formik, Form, FieldArray } from "formik";
import FeeItem from "./FeeItem";

const PaymentForm = ({
  paymentMode,
  term,
  setTerm,
  handleAmountChange,
  handleReceiptChange,
  handleChequeAmountChange,
  amountInWords,
  setShowModal,
  selectedDate,
  setSelectedDate,
  feeItems,
}) => {
  const termOptions = ["term1", "term2", "term3"];

  return (
    <>
      <Formik
        initialValues={{
          amount: "",
          description: "",
          feeItems: feeItems,
        }}
        enableReinitialize
        onSubmit={(values) => {
          console.log(values);
          handleAmountChange({ target: { value: values.amount } });
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form>
            <Box sx={{ position: "relative", mx: "1" }}>
              <Box
                value={term}
                exclusive
                onChange={(_, newTerm) => newTerm && setTerm(newTerm)}
                sx={{
                  position: "absolute",
                  display: "flex",
                  gap: 1,
                  top: 0,
                  left: 20,
                  transform: "translateY(-50%)",
                  borderRadius: 8,
                  zIndex: 1,
                }}
              >
                {termOptions.map((val, i) => (
                  <ToggleButton
                    key={val}
                    value={val}
                    selected={term === val}
                    onChange={() => setTerm(val)}
                    sx={{
                      color: "black",
                      borderRadius: "23px",
                      px: 2,
                      py: 0.5,
                      fontWeight: 400,
                      border: "1px solid #BFBFBF",
                      backgroundColor: "white",
                      textTransform: "capitalize",
                      "&:hover": { bgcolor: "white" },
                      "&.Mui-selected": {
                        bgcolor: "#1E1EFF",
                        color: "#fff",
                        "&:hover": { bgcolor: "#1E1EFF" },
                      },
                    }}
                  >
                    {`term fee ${i + 1}`}
                  </ToggleButton>
                ))}
              </Box>

              <Box
                sx={{
                  mt: 4,
                  border: "1px solid #E6E6E6",
                  borderRadius: "12px",
                  px: 2,
                  py: 4,
                  backgroundColor: "#FAFAFA",
                  height: "110px",
                }}
              >
                <Box display="flex" gap={2} flexWrap="wrap">
                  <TextField
                    name="amount"
                    label="Enter Amount"
                    variant="outlined"
                    value={values.amount}
                    onChange={(e) => {
                      handleChange(e);
                      handleAmountChange(e);
                    }}
                    onBlur={handleBlur}
                    type="number"
                    onKeyDown={(e) => {
                      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                        e.preventDefault();
                      }
                    }}
                    inputProps={{
                      onWheel: (e) => e.target.blur(),
                      inputMode: "numeric",
                      style: { MozAppearance: "textfield" },
                    }}
                    sx={{
                      width: "220px",
                      borderRadius: "6px",
                      backgroundColor: "#ffff",
                      "& .MuiInputLabel-root": {
                        color: "#404040 !important",
                        fontSize: "12px",
                        fontWeight: 400,
                        transform: "translate(14px, 12px)",
                        "&.MuiInputLabel-shrink": {
                          transform: "translate(14px, -7px) scale(0.75)",
                        },
                      },
                      "& .MuiOutlinedInput-root": {
                        height: "40px",
                        "& input": {
                          padding: "14px 14px",
                          "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
                            WebkitAppearance: "none",
                            margin: 0,
                          },
                          MozAppearance: "textfield",
                        },
                        "& fieldset": { borderColor: "#7D7D7D !important" },
                        "&:hover fieldset": { borderColor: "#7D7D7D !important" },
                        "&.Mui-focused fieldset": {
                          borderColor: "#7D7D7D !important",
                          borderWidth: "1px !important",
                        },
                      },
                    }}
                  />

                  <TextField
                    name="description"
                    label="Description"
                    variant="outlined"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={{
                      flex: 2,
                      borderRadius: "6px",
                      backgroundColor: "#ffff",
                      "& .MuiInputLabel-root": {
                        color: "#404040 !important",
                        fontSize: "12px",
                        fontWeight: 400,
                        transform: "translate(14px, 12px)",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        transform: "translate(14px, -7px) scale(0.75)",
                      },
                      "& .MuiInputLabel-root.MuiInputLabel-shrink": {
                        transform: "translate(14px, -7px) scale(0.75)",
                      },
                      "& .MuiOutlinedInput-root": {
                        height: "40px",
                        "& fieldset": { borderColor: "#7D7D7D !important" },
                        "&:hover fieldset": { borderColor: "#7D7D7D !important" },
                        "&.Mui-focused fieldset": {
                          borderColor: "#7D7D7D !important",
                          borderWidth: "1px !important",
                        },
                      },
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    mt: 1,
                    color: amountInWords ? "green" : "orangered",
                    fontSize: 13,
                  }}
                >
                  * {amountInWords ? `${amountInWords}` : "Amount in words will display here"}
                </Typography>
              </Box>
            </Box>

            {/* <Typography variant="h5" mt={4} mb={2}>Fee items</Typography> */}
            <FieldArray name="feeItems">
              {({ remove }) => (
                <>
                  {values.feeItems.map((item, index) => (
                    <FeeItem
                      key={index}
                      feeItem={item}
                      index={index}
                      remove={remove}
                    />
                  ))}
                </>
              )}
            </FieldArray>

            <div className="row d-flex m-1">
              {paymentMode !== "Cash" && (
                <div className="col-4">
                  <TextField
                  name="ChequeAmount"
                    label="Cheque Amount"
                    variant="outlined"
                    value={values.ChequeAmount}
                    onChange={(e)=>handleChequeAmountChange(e)}
                    sx={{
                      width: "80%",
                      borderRadius: "6px",
                      gap: "0px",
                      "& .MuiInputLabel-root": {
                        color: "#404040",
                        fontSize: "12px",
                        fontWeight: 400,
                        transform: "translate(14px, 12px)",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        transform: "translate(14px, -7px) scale(0.75)",
                      },
                      "& .MuiInputLabel-root.MuiInputLabel-shrink": {
                        transform: "translate(14px, -7px) scale(0.75)",
                      },
                      "& .MuiOutlinedInput-root": {
                        height: "40px",
                        "& fieldset": { borderColor: "#7D7D7D" },
                        "&:hover fieldset": { borderColor: "#7D7D7D" },
                        "&.Mui-focused fieldset": { borderColor: "#7D7D7D" },
                      },
                    }}
                  />
                </div>
              )}
              <div className="col-4">
                <TextField
                name="receiptNo"
                  label="Pre Print Receipt No"
                  variant="outlined"
                  value={values.receiptNo}
                  onChange={(e)=>{handleReceiptChange(e)}}
                  sx={{
                    width: "80%",
                    borderRadius: "6px",
                    gap: "0px",
                    "& .MuiInputLabel-root": {
                      color: "#404040",
                      fontSize: "12px",
                      fontWeight: 400,
                      transform: "translate(14px, 12px)",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      transform: "translate(14px, -7px) scale(0.75)",
                      color: "#404040",
                    },
                    "& .MuiInputLabel-root.MuiInputLabel-shrink": {
                      transform: "translate(14px, -7px) scale(0.75)",
                      color: "#404040",
                    },
                    "& .MuiOutlinedInput-root": {
                      height: "40px",
                      "& fieldset": { borderColor: "#7D7D7D" },
                      "&:hover fieldset": { borderColor: "#7D7D7D" },
                      "&.Mui-focused fieldset": { borderColor: "#7D7D7D" },
                    },
                  }}
                />
              </div>
              <div className="col-4">
                <TextField
                  label="Pay Date"
                  type="date"
                  variant="outlined"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    width: "80%",
                    borderRadius: "6px",
                    "& .MuiInputLabel-root": {
                      color: "#404040",
                      "&.Mui-focused": { color: "#404040" },
                    },
                    "& .MuiOutlinedInput-root": {
                      height: "40px",
                      "& fieldset": { borderColor: "#7D7D7D" },
                      "&:hover fieldset": { borderColor: "#7D7D7D" },
                      "&.Mui-focused fieldset": { borderColor: "#7D7D7D" },
                    },
                  }}
                />
              </div>
            </div>

            <Button
              variant="contained"
              size="large"
              onClick={() => setShowModal(true)}
              sx={{
                mt: 3,
                borderRadius: "5px",
                textTransform: "capitalize",
                marginLeft: "270px",
                width: "40%",
                textAlign: "center",
                backgroundColor: "#B6B1FF",
                fontSize: "12px",
                fontWeight: 400,
                boxShadow: "none",
                color: "black",
                "&:hover": {
                  boxShadow: "none",
                },
              }}
            >
              <Add sx={{ fontSize: 16, mr: 1 }} />
              Add Fee Head
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PaymentForm;
