import React, {FC} from 'react';
import {Box, Modal, Typography} from "@mui/material";
import BlogItemForm from "../BlogItemForm";
import {BackgroundPaper} from "../UI/BackgroundPaper";
import {SubmitHandler} from "react-hook-form";
import {IPost} from "../../models/IPost";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
};

interface AddPostModal {
    open: boolean,
    onClose: () => void;
    onAddSubmit: SubmitHandler<IPost>
    currentPost: IPost
}

const AddPostModal:FC<AddPostModal> = ({open, onClose, onAddSubmit, currentPost}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <BackgroundPaper sx={style}>
               <BlogItemForm onSubmit={onAddSubmit} currentPost={currentPost} onClose={onClose}/>
            </BackgroundPaper>
        </Modal>
    );
};

export default AddPostModal;