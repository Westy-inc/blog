import { useState } from "react";
import {useNavigate} from "react-router-dom"

const Create = () => {
    const [title , setTitle] = useState('')
    const [body , setBody] = useState('')
    const [author , setAuthor] = useState('Guest')
    const [isSaving , setIsSaving] = useState(false)
    const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body , author};
    setIsSaving(true)
    //console.log(blog)
    fetch('http://localhost:8000/blogs/' , {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(blog)
    }).then(() => {
        console.log("added")
        setIsSaving(false)
        navigate('/')
    })

    
}


    return (  
        <div className="create">
            <h2>Create</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input 
                    type="text"  
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body: </label>
                <textarea required
                value={body}
                onChange={(e) => setBody(e.target.value)}></textarea>
                
                <label>Blog author:</label>

                <select value={author}
                onChange={(e)=> setAuthor(e.target.value)}> 
                    <option value="crofty">crofty</option>
                    <option value="Guest">Guest</option>
                </select>

                {!isSaving && <button>Add blog</button>}
                {isSaving && <button disabled>Saving blog ...</button>}
               
                <div className="blog-details">
                <h2 >{title}</h2>
                <p>written by {author}</p>
                <div>{body}</div>
                </div>
            </form>
        </div>
    );
}

export default Create;
