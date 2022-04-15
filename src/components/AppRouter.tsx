import React, {FC} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import BlogPage from "../pages/BlogPage";
import BlogItemDetail from "../pages/BlogItemDetail";

const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<BlogPage/>}/>
            <Route path={'/:id'} element={<BlogItemDetail/>}/>
            <Route path={'*'} element={<Navigate to={'/'}/>}/>
        </Routes>
    );
};

export default AppRouter;