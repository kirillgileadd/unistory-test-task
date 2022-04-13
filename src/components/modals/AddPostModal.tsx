import React, {FC} from 'react';
import {Box, Modal, Typography} from "@mui/material";
import AddPostForm from "../AddPostForm";
import {BackgroundPaper} from "../UI/BackgroundPaper";

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
}

const AddPostModal:FC<AddPostModal> = ({open, onClose}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}

        >
            <BackgroundPaper sx={style}>
               <AddPostForm onClose={onClose}/>
            </BackgroundPaper>
        </Modal>
    );
};

export default AddPostModal;