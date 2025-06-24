import React from 'react';
import { Box, TextField, Typography, Button, IconButton, Grid, InputAdornment } from '@mui/material';
import { Search, FolderOpen, Close } from '@mui/icons-material';

const FeeHeadModal = ({ showModal, setShowModal, feeHeads, addFeeItem }) => {
    const modalStyle = {
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: 500,
        height: '35vh',
        bgcolor: 'background.paper',
        borderRadius: 8,
        boxShadow: '0px 0px 7.1px 0px #0000006B',
        p: 2,
        zIndex: 10
    };

    return (
        showModal && (
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
                        sx: { borderRadius: 2, backgroundColor: '#f2f2f2' }
                    }}
                />
                <Typography
                    variant="subtitle2"
                    mt={3}
                    mb={1}
                    sx={{ color: 'gray', fontWeight: 500 }}
                >
                    Recent Search
                </Typography>
                <Grid container spacing={2}>
                    {feeHeads.map((fee) => (
                        <Grid item xs={6} key={fee.id}>
                            <Button
                                variant="outlined"
                                fullWidth
                                startIcon={<FolderOpen />}
                                sx={{
                                    borderRadius: 2,
                                    justifyContent: 'flex-start',
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    color: '#222',
                                    borderColor: '#ccc',
                                    padding: '8px 12px',
                                    backgroundColor: '#fff',
                                    '&:hover': { backgroundColor: '#f5f5f5' }
                                }}
                                onClick={() => addFeeItem(fee)}
                            >
                                {fee.name}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={4} textAlign="center">
                    <IconButton
                        onClick={() => setShowModal(false)}
                        sx={{
                            border: '2px solid #000',
                            borderRadius: '50%',
                            padding: 1,
                            backgroundColor: '#fff'
                        }}
                    >
                        <Close />
                    </IconButton>
                </Box>
            </Box>
        )
    );
};

export default FeeHeadModal;