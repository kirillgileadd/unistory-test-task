import React, {useEffect} from 'react';
import {BackgroundPaper} from "../components/UI/BackgroundPaper";
import {Box, Button, styled, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useAction";
import Loader from "../components/Loader";
import BlogItemForm from "../components/BlogItemForm";
import {SubmitHandler} from "react-hook-form";
import {IPost} from "../models/IPost";

const BlogItemDetailWrapper = styled(Box)`
  min-height: calc(100vh - 162px);
  @media (max-width: 768px) {
    min-height: calc(100vh - 68px);
  }
`

const BlogItemDetail = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {postLoading, currentPost} = useTypeSelector(state => state.blog)
    const {fetchCurrentPost, clearCurrentPost, changePost, deletePost} = useActions()

    useEffect(() => {
        fetchCurrentPost(Number(id))
        return function clearCurrentPostState() {
            clearCurrentPost()
        }
    }, []);

    const onPutSubmit: SubmitHandler<IPost> = (data) => {
        let newPost = {
            ...data,
            id: Number(id)
        }
        changePost(newPost, navigate)
    }

    const onDeletePost = () => {
        deletePost(Number(id), navigate)
    }

    return (
        <BackgroundPaper>
            <BlogItemDetailWrapper>
                <Button
                    onClick={() => navigate(-1)}
                    variant='contained'
                    sx={{mb: 2}}
                >
                    Назад</Button>
                {postLoading && !currentPost ? <Loader/>
                    :
                    <Box>
                        <Typography sx={{mb: 3}} variant='h6'>
                            Запись: {currentPost?.title}
                        </Typography>
                        <BlogItemForm
                            currentPost={currentPost}
                            onSubmit={onPutSubmit}
                            onDelete={onDeletePost}
                        />
                    </Box>
                }
            </BlogItemDetailWrapper>
        </BackgroundPaper>
    );
};

export default BlogItemDetail;