import React, {FC, useEffect} from 'react';
import {useActions} from "../hooks/useAction";
import {useTypedSelector} from "../hooks/useTypeSelector";

const BlogPage:FC = () => {
    const {fetchPosts} = useActions()
    const {posts} = useTypedSelector(state => state.blog)
    console.log(posts);

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
            Blog
        </div>
    );
};

export default BlogPage;