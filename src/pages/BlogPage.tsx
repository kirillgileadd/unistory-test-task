import React, {FC, useEffect, useState} from 'react';
import {useActions} from "../hooks/useAction";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {Box, Button, Typography} from "@mui/material";
import styled from "@emotion/styled";
import BlogList from "../components/BlogList";
import AddPostModal from "../components/modals/AddPostModal";
import Loader from "../components/Loader";
import {BackgroundPaper} from "../components/UI/BackgroundPaper";
import {SubmitHandler} from "react-hook-form";
import {IPost} from "../models/IPost";

const BlogPageWrapper = styled(Box)`
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
  min-height: calc(100vh - 162px) 
`

const BlogPage: FC = () => {
    const [visibleAddModal, setVisibleAddModal] = useState<boolean>(false)
    const {fetchPosts, clearPosts, addPost} = useActions()
    const {posts, loading, currentPost} = useTypeSelector(state => state.blog)

    useEffect(() => {
        fetchPosts()
        return function clearPostState () {
            clearPosts()
        }
    }, [])

    const onAddSubmit: SubmitHandler<IPost> = (data) => {
        setVisibleAddModal(false)
        addPost(data)
    }

    return (
        <BackgroundPaper>
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
                    currentPost={currentPost}
                    onAddSubmit={onAddSubmit}
                    open={visibleAddModal}
                    onClose={() => setVisibleAddModal(false)}
                />
            </BlogPageWrapper>
        </BackgroundPaper>
    );
};

export default BlogPage;