import React, {FC} from 'react';
import {Route, Routes} from 'react-router-dom'
import BlogPage from "../pages/BlogPage";
import BlogItemDetail from "../pages/BlogItemDetail";

const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<BlogPage/>}/>
            <Route path={'/:id'} element={<BlogItemDetail/>}/>
        </Routes>
    );
};

export default AppRouter;