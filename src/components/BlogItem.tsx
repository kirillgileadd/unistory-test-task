import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import {Box, Button, Paper, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import styled from "@emotion/styled";

const BodyText = styled(Typography)`
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  -ms-line-clamp: 5;
  -webkit-line-clamp: 7;
  line-clamp: 5;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  font-size: 15px;
  line-height: 19px;`

const BlogItemInner = styled(Box)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const BlogItem: FC<IPost> = ({body, title, id}) => {
    return (
        <BlogItemInner>
            <Box
                sx={{width: "100%", height: '100%'}}
                display='flex'
                justifyContent='center'
                alignItems='center'
            >
                <Typography sx={{mb: 1, overflowWrap: "anywhere"}} variant='h6' noWrap>
                    {title}
                </Typography>
            </Box>
            <Paper
                sx={{width: "100%", height: "250px", p: 1, mb: 1}}
            >
                <Box
                    sx={{width: "100%", height: '100%'}}
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                >
                    <BodyText variant='body1'>
                        {body}
                    </BodyText>
                </Box>
            </Paper>
            <Link to={`/${id}`} style={{textDecoration: 'none', color: 'inherit', width: '100%'}}>
                <Button fullWidth variant='contained'>Перейти</Button>
            </Link>
        </BlogItemInner>
    );
};

export default BlogItem;