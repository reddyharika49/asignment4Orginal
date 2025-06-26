import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
 
const DDDetails = ({ onBack, onPrint }) => {
    const [age, setAge] = React.useState('');
 
    const handleChange = (event) => {
        setAge(event.target.value);
    };
 
    return (
        <div className="container mt-4">
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
            }}>
                <p style={{
                    color: '#82808F',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: 'normal',
                    margin: 0,
                }}>
                    Bank Information
                </p>
                <div style={{
                    flex: 1,
                    height: '1px',
                    width: '40%',
                    background: 'linear-gradient(to right, transparent 0%, #82808F 0%, transparent 60%)'
                }}></div>
            </div>
            <div className="root mt-3">
                <div className="col-5">
                    <Box sx={{
                        borderRadius: "6px",
                        backgroundColor: "#ffff",
                        '& .MuiInputLabel-root': {
                            color: '#404040',
                            fontSize: "12px",
                            fontWeight: 400,
                            transform: 'translate(14px, 12px)', // Downward position when unfocused
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            transform: 'translate(14px, -7px) scale(0.75)', // Upward position when focused
                            color: '#404040', // Remove blue color when focused
                        },
                        '& .MuiInputLabel-root.MuiInputLabel-shrink': {
                            transform: 'translate(14px, -7px) scale(0.75)', // Upward position when shrunk
                            color: '#404040', // Remove blue color when shrunk
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: '#7D7D7D !important' },
                            '&:hover fieldset': { borderColor: '#7D7D7D !important' },
                            '&.Mui-focused fieldset': { borderColor: '#7D7D7D !important', borderWidth: '1px !important' },
                        },
                    }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" style={{
                                color: "#000",
                                fontFamily: "Segoe UI",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "normal",
                                letterSpacing: "-0.084px"
                            }}>Select Organization</InputLabel>
                            <Select
                                sx={{ width: "140%" }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Select Organization"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Management</MenuItem>
                                <MenuItem value={20}>Student</MenuItem>
                                <MenuItem value={30}>Employee</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div className='col-7 mt-3 d-flex justify-content-between' style={{
                    gap: "10px",
                    color: '#404040',
                    textAlign: 'center',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    letterSpacing: '-0.072px'
                }}>
                    <TextField sx={{
                        width: "75%",
                        '& .MuiInputLabel-root': {
                            color: '#404040 !important',
                            fontSize: "12px",
                            fontWeight: 400,
                            transform: 'translate(14px, 12px)', // Downward position when unfocused
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            transform: 'translate(14px, -7px) scale(0.75)', // Upward position when focused
                            color: '#404040', // Remove blue color when focused
                        },
                        '& .MuiInputLabel-root.MuiInputLabel-shrink': {
                            transform: 'translate(14px, -7px) scale(0.75)', // Upward position when shrunk
                            color: '#404040', // Remove blue color when shrunk
                        },
                        '& .MuiOutlinedInput-root': {
                            height: '40px',
                            '& fieldset': { borderColor: '#7D7D7D !important' },
                            '&:hover fieldset': { borderColor: '#7D7D7D !important' },
                            '&.Mui-focused fieldset': { borderColor: '#7D7D7D !important', borderWidth: '1px !important' },
                        }
                    }} id="outlined-basic" label="Cheque/DD no" variant="outlined" />
                    <TextField sx={{
                        width: "75%",
                        '& .MuiInputLabel-root': {
                            color: '#404040 !important',
                            fontSize: "12px",
                            fontWeight: 400,
                            transform: 'translate(14px, 12px)', // Downward position when unfocused
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            transform: 'translate(14px, -7px) scale(0.75)', // Upward position when focused
                            color: '#404040', // Remove blue color when focused
                        },
                        '& .MuiInputLabel-root.MuiInputLabel-shrink': {
                            transform: 'translate(14px, -7px) scale(0.75)', // Upward position when shrunk
                            color: '#404040', // Remove blue color when shrunk
                        },
                        '& .MuiOutlinedInput-root': {
                            height: '40px',
                            '& fieldset': { borderColor: '#7D7D7D !important' },
                            '&:hover fieldset': { borderColor: '#7D7D7D !important' },
                            '&.Mui-focused fieldset': { borderColor: '#7D7D7D !important', borderWidth: '1px !important' },
                        }
                    }} id="outlined-basic" label="Cheque/DD Date" variant="outlined" />
                </div>
                <div className='col-7 mt-3 d-flex justify-content-between' style={{ gap: "10px" }}>
                    <TextField sx={{
                        width: "75%",
                        '& .MuiInputLabel-root': {
                            color: '#404040 !important',
                            fontSize: "12px",
                            fontWeight: 400,
                            transform: 'translate(14px, 12px)', // Downward position when unfocused
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            transform: 'translate(14px, -7px) scale(0.75)', // Upward position when focused
                            color: '#404040', // Remove blue color when focused
                        },
                        '& .MuiInputLabel-root.MuiInputLabel-shrink': {
                            transform: 'translate(14px, -7px) scale(0.75)', // Upward position when shrunk
                            color: '#404040', // Remove blue color when shrunk
                        },
                        '& .MuiOutlinedInput-root': {
                            height: '40px',
                            '& fieldset': { borderColor: '#7D7D7D !important' },
                            '&:hover fieldset': { borderColor: '#7D7D7D !important' },
                            '&.Mui-focused fieldset': { borderColor: '#7D7D7D !important', borderWidth: '1px !important' },
                        }
                    }} id="outlined-basic" label="Bank" variant="outlined" />
                    <TextField sx={{
                        width: "75%",
                        '& .MuiInputLabel-root': {
                            color: '#404040 !important',
                            fontSize: "12px",
                            fontWeight: 400,
                            transform: 'translate(14px, 12px)', // Downward position when unfocused
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            transform: 'translate(14px, -7px) scale(0.75)', // Upward position when focused
                            color: '#404040', // Remove blue color when focused
                        },
                        '& .MuiInputLabel-root.MuiInputLabel-shrink': {
                            transform: 'translate(14px, -7px) scale(0.75)', // Upward position when shrunk
                            color: '#404040', // Remove blue color when shrunk
                        },
                        '& .MuiOutlinedInput-root': {
                            height: '40px',
                            '& fieldset': { borderColor: '#7D7D7D !important' },
                            '&:hover fieldset': { borderColor: '#7D7D7D !important' },
                            '&.Mui-focused fieldset': { borderColor: '#7D7D7D !important', borderWidth: '1px !important' },
                        }
                    }} id="outlined-basic" label="Branch" variant="outlined" />
                </div>
                <div className='col-7 mt-3 mb-5 d-flex justify-content-between' style={{ gap: "10px" }}>
                    <TextField sx={{
                        width: "75%",
                        '& .MuiInputLabel-root': {
                            color: '#404040 !important',
                            fontSize: "12px",
                            fontWeight: 400,
                            transform: 'translate(14px, 12px)', // Downward position when unfocused
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            transform: 'translate(14px, -7px) scale(0.75)', // Upward position when focused
                            color: '#404040', // Remove blue color when focused
                        },
                        '& .MuiInputLabel-root.MuiInputLabel-shrink': {
                            transform: 'translate(14px, -7px) scale(0.75)', // Upward position when shrunk
                            color: '#404040', // Remove blue color when shrunk
                        },
                        '& .MuiOutlinedInput-root': {
                            height: '40px',
                            '& fieldset': { borderColor: '#7D7D7D !important' },
                            '&:hover fieldset': { borderColor: '#7D7D7D !important' },
                            '&.Mui-focused fieldset': { borderColor: '#7D7D7D !important', borderWidth: '1px !important' },
                        }
                    }} id="outlined-basic" label="City Name" variant="outlined" />
                    <TextField sx={{
                        width: "75%",
                        '& .MuiInputLabel-root': {
                            color: '#404040 !important',
                            fontSize: "12px",
                            fontWeight: 400,
                            transform: 'translate(14px, 12px)', // Downward position when unfocused
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            transform: 'translate(14px, -7px) scale(0.75)', // Upward position when focused
                            color: '#404040', // Remove blue color when focused
                        },
                        '& .MuiInputLabel-root.MuiInputLabel-shrink': {
                            transform: 'translate(14px, -7px) scale(0.75)', // Upward position when shrunk
                            color: '#404040', // Remove blue color when shrunk
                        },
                        '& .MuiOutlinedInput-root': {
                            height: '40px',
                            '& fieldset': { borderColor: '#7D7D7D !important' },
                            '&:hover fieldset': { borderColor: '#7D7D7D !important' },
                            '&.Mui-focused fieldset': { borderColor: '#7D7D7D !important', borderWidth: '1px !important' },
                        }
                    }} id="outlined-basic" label="IFSC Code" variant="outlined" />
                </div>
            </div>
            <Box mt={4} display="flex" justifyContent="center">
                <Button variant="contained" sx={{backgroundColor:"#3425FF"}} endIcon={<ArrowForward />} onClick={onPrint}>
                    Print Receipt
                </Button>
            </Box>
        </div>
    );
};
 
export default DDDetails;