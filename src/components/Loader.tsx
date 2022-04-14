import React, {FC} from 'react';
import {Box, CircularProgress} from "@mui/material";

const Loader: FC = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <CircularProgress/>
        </Box>
    );
};

export default Loader;