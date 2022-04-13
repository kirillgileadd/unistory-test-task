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
            display='flex'
            flexDirection='column'
            component='form'
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField
                fullWidth
                {...register("title", { required: true })}
                id="standard-search"
                label='Название'
                error={!!errors.title}
                helperText={errors.title?.message}
            />
            <TextField
                fullWidth
                rows={4}
                multiline
                {...register("body", { required: true })}
                id="standard-search"
                label="Текст"
                error={!!errors.body}
                helperText={errors.body?.message}
            />
            <Box alignSelf='flex-end'>
                <Button
                    onClick={onClose}
                    sx={{mr: 1}}
                    color='error'
                    type='button'
                    variant='contained'
                >
                    Отмена
                </Button>
                <Button
                    type='submit'
                    variant='contained'
                    disabled={loading}
                >
                    Сохранить
                </Button>
            </Box>
        </Box>
    );
};

export default AddPostForm;