import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import BlogItem from "./BlogItem";
import {Grid} from "@mui/material";

interface BlogListProps {
    posts: IPost[]
}

const BlogList: FC<BlogListProps> = ({posts}) => {
    return (
        <Grid container spacing={15}>
            {posts.map(post =>
                <Grid item xs={4} justifyContent='center'>
                    <BlogItem key={post.id} {...post}/>
                </Grid>
            )}
        </Grid>
    );
};

export default BlogList;