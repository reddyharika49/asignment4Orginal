import React, { useState } from 'react';
import { Box, Button, LinearProgress, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import DDDetails from './DDDetails';
import PaymentForm from './PaymentForm';
import { toWords } from 'number-to-words';

const Payments = () => {
    const [paymentMode, setPaymentMode] = useState('Cash');
    const [term, setTerm] = useState('term1');
    const [amount, setAmount] = useState('');
    const [amountInWords, setAmountInWords] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [showDDDetails, setShowDDDetails] = useState(false);
    const [progress, setProgress] = useState(0);
    const [step, setStep] = useState('Step 1');

    const handlePaymentModeChange = (mode) => {
        setPaymentMode(mode);
        if (mode !== 'DD') {
            setShowDDDetails(false);
            setProgress(0);
            setStep('Step 1');
        } else {
            setShowDDDetails(false);
            setProgress(50);
            setStep('Step 1');
        }
    };

    const handleAmountChange = (e) => {
        const value = e.target.value;
        setAmount(value);
        const number = parseInt(value.replace(/[^0-9]/g, ''), 10);
        setAmountInWords(!isNaN(number) ? toWords(number) : '');
    };

    return (
        <div
            className="payment"
            style={{
                height: '49vh',
                overflowY: 'auto',
                scrollbarWidth: 'none',
                padding: '20px',
                position: 'relative',
                paddingTop: "0px"
            }}
        >
            {showModal && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '1080px',
                        height: '100%',
                        flexShrink: 0,
                        background: 'rgba(0, 0, 0, 0.42)',
                        backdropFilter: 'blur(21.5px)',
                        borderRadius: 1,
                        zIndex: 10,
                    }}
                />
            )}
            <div className="payments_top d-flex justify-content-between">
                <div className="payments_top_left d-flex flex-column">
                    <div style={{ marginBottom: "0px",fontSize:'12px',fontWeight:'400' }}>Due Amount</div>
                    <div style={{
                        backgroundColor: "#E9E9E9",
                        marginTop:'2px',
                        marginBottom: "0px",
                        padding: "3px 13px",
                        borderRadius: "5px",
                        fontSize:'18px',
                        fontWeight:'600'
                    }}>46,000</div>
                </div>
                <div className="border rounded-5 p-1 " style={{
                    display:'flex',
                    alignItems:"center",
                    backgroundColor: "#F7F7F7",
                    border: "1px solid #D2D2D2",
                    borderRadius:"110px"
                }}>
                    <div className="btn-group rounded-3 gap-2  " role="group" style={{height:'90%',borderRadius:'110px'}}>
                        {['Cash', 'DD', 'Cheque', 'Credit/Debit Card'].map(mode => (
                            <button
                                key={mode}
                                type="button"
                                className={`btn ${paymentMode === mode ? 'btn-primary' : ''}`}
                                onClick={() => handlePaymentModeChange(mode)}
                                style={{
                                    padding: "7px 20px",
                                    borderRadius: "110px",
                                    border: "none"
                                }}
                            >
                                {mode}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    {paymentMode === 'DD' && (
                        <Box sx={{ width: '100px', textAlign: 'center' }}>
                            <Typography variant="caption" sx={{ fontSize: 12, color: '#333' }}>
                                {step}
                            </Typography>
                            <LinearProgress
                                variant="determinate"
                                value={progress}
                                sx={{
                                    height: '10px',
                                    borderRadius: 5,
                                    backgroundColor: '#e0e0e0',
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: '#1E90FF',
                                    },
                                }}
                            />
                        </Box>
                    )}
                </div>
            </div>
            {!showDDDetails && (
                <PaymentForm
                    paymentMode={paymentMode}
                    term={term}
                    setTerm={setTerm}
                    amount={amount}
                    handleAmountChange={handleAmountChange}
                    amountInWords={amountInWords}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
            )}
            {showDDDetails ? (
                <DDDetails onBack={() => {
                    setShowDDDetails(false);
                    setProgress(50);
                    setStep('Step 1');
                }} onPrint={() => setProgress(100)} />
            ) : (
                paymentMode === 'DD' && (
                    <Box textAlign="center" mt={5}>
                        <Button
                            variant="contained"
                            endIcon={<ArrowForward />}
                            onClick={() => {
                                setShowDDDetails(true);
                                setProgress(100);
                                setStep('Step 2');
                            }}
                        >
                            Next
                        </Button>
                    </Box>
                )
            )}
            {paymentMode !== 'DD' && !showDDDetails && (
                <Box textAlign="center" mt={5}>
                    <Button variant="contained" endIcon={<ArrowForward />}
                sx={{borderRadius: "6px",
background: "#3425FF",
textTransform:"capitalize",fontSize:"12px",fontWeight:600,                     boxShadow: "none", // 👈 No shadow
    '&:hover': {
      boxShadow: "none", }}}>
                        Print Receipt
                    </Button>
                </Box>
            )}
        </div>
    );
};

export default Payments;