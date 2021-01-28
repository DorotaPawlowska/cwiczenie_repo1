import { useState } from "react";

const Create = () => {
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');
  const [ author, setAuthor ] = useState('mario');
  const [ isPending, setIsPending ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);
    
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
    })
  }

  return ( 
    <div className="create">
      <h2>add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>blog title: </label>
        <input 
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>blog body: </label>
        <textarea 
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>blog author: </label>
        <select 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        { !isPending && <button>add blog</button> }
        { isPending && <button disabled>adding blog ...</button> }
      </form>
    </div>
  );
}

export default Create;