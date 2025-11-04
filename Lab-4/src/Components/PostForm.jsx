//Author: Rebekah Driver
//4. PostForm is a presentational component that displays a form containing two text inputs, 
// one for the title and one for the body.

export default function PostForm({
    handleOnSubmit,
    handleOnChange,
    newPost,
}){
    //Form for user submission
    return (
        <div className="PostFormContainer">
            <h2>Post Form</h2>
            <form action="" onSubmit={handleOnSubmit}>
                <label htmlFor="title">Title: </label>
                <input
                type="text" 
                name="title" 
                id="title" 
                value={newPost.title} 
                onChange={handleOnChange} 
                />
                <br />
                <label htmlFor="body">Body: </label>
                <input
                type="text"
                name="body"
                id="body"
                value={newPost.body}
                onChange={handleOnChange}
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}