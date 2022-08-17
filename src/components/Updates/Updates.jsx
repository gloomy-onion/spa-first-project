import React from 'react';
import Post from './Post/Post';
import styles from './Updates.module.css';
import cn from 'classnames';

const Updates = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };
    return (<div className={cn(styles.posts)}>
        <h3>Our Thoughts and Updates</h3>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Post</button>
        <button>Remove</button>
        <div className={styles.posts}>
            {props.postsData.map((data) => {
                return (<Post message={data.message} id={data.id} likesCount={data.likesCount}/>);
            })}
        </div>
    </div>);
};
export default Updates;