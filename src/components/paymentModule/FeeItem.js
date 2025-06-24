import React from 'react';
import { Box, TextField, Typography, IconButton, Grid } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useFormikContext } from 'formik';
import { toWords } from 'number-to-words';

// Debug check for useContext
if (!React.useContext) {
  console.error('React.useContext is not available. Check React import and version.');
}

const FeeItem = ({ feeItem, index, remove }) => {
  // Call useFormikContext at the top level
  const formikContext = useFormikContext();

  // Check if context is valid
  if (!formikContext) {
    console.error('Formik context is not available. Ensure FeeItem is rendered within a Formik component.');
    return <div>Error: Formik context not found.</div>;
  }

  const { values, handleChange, handleBlur } = formikContext;
  const feeHeadName = feeItem?.name || 'Fee Head';
  const amount = values.feeItems?.[index]?.amount || '';


  return (
    <Box
      sx={{
        p: 2,
        border: '1px solid #E6E6E6',
        borderRadius: "12px",
        mb: 2,
        bgcolor: '#ffff',
        position: 'relative',
         minHeight: '110px'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -12,
          left: 20,
          bgcolor: '#3425FF',
          color: '#fff',
          px: 2,
          py: 0.5,
          borderRadius: '23px',
          border: "1px solid #BFBFBF",
          fontSize: 12,
          fontWeight: 400,
          zIndex: 1,
        }}
      >
        {feeHeadName}
      </Box>
      <IconButton
        onClick={() => remove(index)}
        sx={{
          position: 'absolute',
          top: 0,
          right: 30,
          transform: 'translateY(-50%)',
          bgcolor: '#F88',
          borderRadius: '50%',
          width: 25,
          height: 25,
          zIndex: 2
        }}
      >
        <Close sx={{ fontSize: 18 }} />
      </IconButton>
    <Grid container spacing={2}>
  <Grid item xs={3} sx={{ mt: 2,width:"26%" }}>
    <TextField
      sx={{
        borderRadius: "6px",
        '& .MuiInputLabel-root': {
          color: '#404040 !important',
          fontSize: "12px",
          fontWeight: 400,
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': { borderColor: '#7D7D7D !important' },
          '&:hover fieldset': { borderColor: '#7D7D7D !important' },
          '&.Mui-focused fieldset': {
            borderColor: '#7D7D7D !important',
            borderWidth: '1px !important',
          },
        },
      }}
      label="Enter Amount"
      fullWidth
      variant="outlined"
      size="small"
      type="number"
      name={`feeItems[${index}].amount`}
      value={amount}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <Typography
      variant="caption"
      sx={{ mt: 1, display: 'block', color: amount ? 'green' : 'orangered' }}
    >
      * {amount && !isNaN(amount)
        ? toWords(Number(amount))
        : 'Amount in words will display here'}
    </Typography>
  </Grid>

 <Grid item xs={9} sx={{ mt: 2 ,width:"71.9%"}}>
  <TextField
    sx={{
      borderRadius: "6px",
      '& .MuiInputLabel-root': {
        color: '#404040 !important',
        fontSize: "12px",
        fontWeight: 400,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': { borderColor: '#7D7D7D !important' },
        '&:hover fieldset': { borderColor: '#7D7D7D !important' },
        '&.Mui-focused fieldset': {
          borderColor: '#7D7D7D !important',
          borderWidth: '1px !important',
        },
      },
    }}
    label="Description"
    fullWidth
    variant="outlined"
    size="small"
    name={`feeItems[${index}].description`}
    value={""}
    onChange={handleChange}
    onBlur={handleBlur}
  />
</Grid>

</Grid>
    </Box>
  );
};

export default FeeItem;