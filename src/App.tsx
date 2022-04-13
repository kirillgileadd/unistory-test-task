import React from 'react';
import AppRouter from "./components/AppRouter";
import {Box} from "@mui/material";
import styled from "@emotion/styled";

const AppWrapper = styled(Box)`
  padding: 3rem;
  max-width: 1300px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 0
  }
`

function App() {
    return (
        <AppWrapper>
            <AppRouter/>
        </AppWrapper>
    );
}

export default App;
