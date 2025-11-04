//Author: Rebekah Driver
// 3. PostCard, this is a presentational component that will show one post and contains a title and a body of the post

export default function PostCard({ title, body }) {
    return (
        <div className="PostsContainer">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}