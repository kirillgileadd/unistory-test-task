import React, {FC, useEffect} from 'react';
import {useActions} from "../hooks/useAction";
import {useTypedSelector} from "../hooks/useTypeSelector";
import {Box, Button, Paper, Typography} from "@mui/material";
import styled from "@emotion/styled";
import BlogList from "../components/BlogList";

const BlogPageWrapper = styled(Paper)`
  padding: 3rem;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const BlogListWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`

const BlogPage: FC = () => {
    const {fetchPosts} = useActions()
    const {posts} = useTypedSelector(state => state.blog)
    console.log(posts);

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <Box>
            <BlogPageWrapper>
                <Typography variant='h3' textAlign='center' sx={{mb: 4}}>
                    Блог
                </Typography>
                <BlogListWrapper>
                    <BlogList posts={posts}/>
                </BlogListWrapper>
                <Button sx={{alignSelf: 'flex-end'}} variant='contained'>+ Добавить</Button>
            </BlogPageWrapper>
        </Box>
    );
};

export default BlogPage;