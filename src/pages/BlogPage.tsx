import React, {FC, useEffect, useState} from 'react';
import {useActions} from "../hooks/useAction";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {Box, Button, Paper, Typography} from "@mui/material";
import styled from "@emotion/styled";
import BlogList from "../components/BlogList";
import AddPostModal from "../components/modals/AddPostModal";
import Loader from "../components/Loader";

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
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 12px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`

const BlogPage: FC = () => {
    const [visibleAddModal, setVisibleAddModal] = useState<boolean>(false)
    const {fetchPosts} = useActions()
    const {posts, loading} = useTypeSelector(state => state.blog)
    console.log(loading);

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
                    {loading ? <Loader/> : <BlogList posts={posts}/>}
                </BlogListWrapper>
                <Button
                    onClick={() => setVisibleAddModal(true)}
                    sx={{alignSelf: 'flex-end'}}
                    variant='contained'
                >
                    + Добавить
                </Button>
                <AddPostModal
                    open={visibleAddModal}
                    onClose={() => setVisibleAddModal(false)}
                />
            </BlogPageWrapper>
        </Box>
    );
};

export default BlogPage;