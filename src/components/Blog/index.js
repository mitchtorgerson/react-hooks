import React, {Fragment, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    getBlogData,
    setUser
} from '../../store/Blog/Actions';
import image from '../../images/user.png'
import List from '../List';
import './styles.css';

function Blog() {
    const {
        blog: {
            userId,
            userIdList,
            gettingBlogData,
            blogData,
        }
    } = useSelector(state => state);

    const dispatch = useDispatch();

    const [selectedPost, setSelectedPost] = useState();

    useEffect(() => {
        dispatch(getBlogData());
    }, []);

    // handle methods
    const handleSelectPost = (post) => {
        setSelectedPost(post);
    };

    const handleChangeUser = (e) => {
        const userId = parseInt(e.target.value);
        dispatch(setUser(userId));
        setSelectedPost(null);
    };

    // render methods
    const renderUserSelect = () =>{
        return (
            <Fragment>
                <span className={'user-label'}>Select User</span>
                <select onChange={handleChangeUser}>
                    { userIdList.map((id) => <option key={`${id}`} value={id}>User {id}</option>) }
                </select>
            </Fragment>
        )
    };

    const renderGettingBlogPosts = (e) => {
        return (
            <div className={'no-content-row'}>
                Getting blog posts... Please wait...
            </div>
        );
    };

    const renderContent = (e) => {
        return (
            <div>
                <div className={'user-row'}>
                    <div className={'user-icon'}>
                        <img src={image} height={30} alt='User Icon' />
                    </div>
                    <div className={'user-head'}>User {selectedPost.userId}</div>
                </div>
                <div className={'user-row'}>
                    <div className={'user-icon'}>
                        TITLE:
                    </div>
                    <div className={'user-label'}>{selectedPost.title}</div>
                </div>
                <div className={'user-row'}>
                    <div className={'user-icon'}>
                        BODY:
                    </div>
                    <div className={'user-label'}>{selectedPost.body}</div>
                </div>
            </div>
        );
    };

    const renderNoContent = (e) => {
        return (
            <div className={'no-content-row'}>
                Select a blog post from the left to view more details.
            </div>
        );
    };

    const renderBlogPosts = () =>{
        return (
            <Fragment>
                <div className={'blog-column'}>
                    <div className={'blog-header'}>User {userId} Blog Posts</div>
                    <List
                        data={blogData.filter((item) => item.userId === userId)}
                        action={handleSelectPost}
                    />
                </div>
                <div className={'blog-column'}>
                    <div className={'blog-header'}>Other User's Blog Posts</div>
                    <List
                        data={blogData.filter((item) => item.userId !== userId)}
                        action={handleSelectPost}
                    />
                </div>
                <div className={'blog-content'}>
                    {selectedPost && renderContent()}
                    {!selectedPost && renderNoContent()}
                </div>
            </Fragment>
        )
    };

    const renderBlogPostsError = () =>{
        return (
            <div className={'no-content-row'}>
                An error has occurred. No blog posts have been loaded.
            </div>
        )
    };

    return (
        <Fragment>
            <div className={'blog-toolbar'}>
                {userIdList.length > 0 && renderUserSelect()}
            </div>
            <div className={'blog-container'}>
                {!gettingBlogData && blogData.length > 0 && renderBlogPosts()}
                {!gettingBlogData && blogData.length === 0 && renderBlogPostsError()}
                {gettingBlogData && renderGettingBlogPosts()}
            </div>
        </Fragment>
    );
}

export default Blog;
