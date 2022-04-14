import React, {FC} from 'react';
import {Modal} from "@mui/material";
import BlogItemForm from "../BlogItemForm";
import {BackgroundPaper} from "../UI/BackgroundPaper";
import {SubmitHandler} from "react-hook-form";
import {IPost} from "../../models/IPost";
import styled from "@emotion/styled";

const AddModalBox = styled(BackgroundPaper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  @media (max-width: 500px) {
    width: 300px
  }
`

interface AddPostModal {
    open: boolean;
    onClose: () => void;
    onAddSubmit: SubmitHandler<IPost>
    currentPost: null | IPost
}

const AddPostModal: FC<AddPostModal> = ({open, onClose, onAddSubmit, currentPost}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <AddModalBox>
                <BlogItemForm onSubmit={onAddSubmit} currentPost={currentPost} onClose={onClose}/>
            </AddModalBox>
        </Modal>
    );
};

export default AddPostModal;