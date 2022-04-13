import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import {Box, Button, Paper, Typography} from "@mui/material";
import styled from "@emotion/styled";

const BlogItemInner = styled(Box)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const BlogItem: FC<IPost> = ({body, title, id}) => {
    return (
        <BlogItemInner>
            <Typography sx={{mb: 1}} variant='h6'>
                {title}
            </Typography>
            <Paper sx={{width: "100%", height: "250px", mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography variant='body1'>
                    {body}
                </Typography>
            </Paper>
            <Button fullWidth variant='contained'>Перейти</Button>
        </BlogItemInner>
    );
};

export default BlogItem;