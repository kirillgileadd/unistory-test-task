import React, {FC} from 'react';
import {Box, TextField, Button} from "@mui/material";
import {useTypeSelector} from '../hooks/useTypeSelector'
import {useActions} from "../hooks/useAction";
import {SubmitHandler, useForm} from "react-hook-form";
import {IPost} from "../models/IPost";
import {BackgroundPaper} from "./UI/BackgroundPaper";


interface AddPostFormProps {
    onClose: () => void;
}

const AddPostForm: FC<AddPostFormProps> = ({onClose}) => {
    const {loading} = useTypeSelector(state => state.blog)
    const {addPost} = useActions()

    const {register, handleSubmit, watch, formState: {errors}} = useForm<IPost>();

    const onSubmit: SubmitHandler<IPost> = (data) => {
        onClose()
        addPost(data)
    }
    return (
        <Box
            sx={{
                position: "relative",
                '& .MuiTextField-root': {mb: "12px", backgroundColor: '#fff'},
            }}
            component='form'
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField
                fullWidth
                {...register("title")}
                id="standard-search"
                label='Название'
                error={!!errors.title}
                helperText={errors.title?.message}
            />
            <TextField
                fullWidth
                rows={4}
                multiline
                {...register("body")}
                id="standard-search"
                label="Текст"
                error={!!errors.body}
                helperText={errors.body?.message}
            />
            <Button
                type='submit'
                variant='contained'
                fullWidth
                disabled={loading}
            >
                Сохранить
            </Button>
        </Box>
    );
};

export default AddPostForm;