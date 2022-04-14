import React, {FC} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import {IPost} from "../models/IPost";


interface AddPostFormProps {
    onClose?: () => void;
    onSubmit: SubmitHandler<IPost>
    currentPost?: IPost
    onDelete?: () => void;
}

const BlogItemForm: FC<AddPostFormProps> = ({onClose, onSubmit, currentPost, onDelete}) => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<IPost>({
        defaultValues: {
            title: currentPost?.title,
            body: currentPost?.body
        }
    });

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
                {...register("title", {required: true})}
                id="standard-search"
                label='Название'
                error={!!errors.title}
                helperText={errors.title?.message}
            />
            <TextField
                fullWidth
                rows={4}
                multiline
                {...register("body", {required: true})}
                id="standard-search"
                label="Текст"
                error={!!errors.body}
                helperText={errors.body?.message}
            />
            {
                currentPost?.title ?
                    <Box display='flex' justifyContent='space-between'>
                        <Button
                            onClick={onDelete}
                            sx={{mr: 1}}
                            color='error'
                            variant='contained'
                        >
                            Удалить
                        </Button>
                        <Button
                            type='submit'
                            variant='contained'
                        >
                            Сохранить
                        </Button>
                    </Box>
                    :
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
                        >
                            Сохранить
                        </Button>
                    </Box>
            }
        </Box>
    );
};

export default BlogItemForm;