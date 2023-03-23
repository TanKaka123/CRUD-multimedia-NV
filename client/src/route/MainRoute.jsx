import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../page/Home';
import Login from '../page/Login';
import IntroAdmin from '../page/IntroAdmin';
import SingleBlog from '../page/SingleBlog';
import WriteBlog from '../page/WriteBlog';
import ListBlog from '../page/ListBlog';
import ListVlog from "../page/ListVlog";
import ContactAdmin from '../page/ContactAdmin';
import WriteVlog from '../page/WriteVlog';
import SingleVlog from '../page/SingleVlog';
import Register from '../page/Register';
import Profile from '../page/Profile';
import Reccommend from '../page/Reccommend';
import WriteReview from '../page/WriteReview';

const MainRoute = () => {
    return (
        <div>
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/intro" element={<IntroAdmin />} />
            <Route path="/write-blog" element={<WriteBlog/>}/>
            <Route path="/write-vlog" element={<WriteVlog/>}/>
            <Route path="/list-blog" element={<ListBlog/>}/>
            <Route path="/list-blog/:id_log" element={<SingleBlog/>}/>
            <Route path="/list-vlog" element={<ListVlog/>}/>
            <Route path="/list-vlog/watch/:id_log" element={<SingleVlog/>}/>
            <Route path="/contact" element={<ContactAdmin/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/write-review" element={<WriteReview/>}/>
            <Route path="/review" element={<Reccommend/>}/>
        </Routes>
        </div>
    );
};

export default MainRoute;