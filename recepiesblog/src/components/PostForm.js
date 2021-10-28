import React from "react";

const PostForm = ({ onSubmit, onChange, userInput, onClear }) => {
  return (
    <fieldset>
      <legend>Input for new Article</legend>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={userInput.title}
          onChange={onChange}
        />
        <br/>
        <label htmlFor="headline">Headline</label>
        <input
          type="text"
          name="headline"
          value={userInput.headline}
          onChange={onChange}
        />
        <br/>
        <label htmlFor="picture">Picture</label>
        <input
          type="text"
          name="picture"
          value={userInput.picture}
          onChange={onChange}
        />
        <br/>
        <label htmlFor="text">Article</label>
        <textarea
          name="text"
          rows="4"
          cols="50"
          value={userInput.text}
          onChange={onChange}
        ></textarea>
        <br/>
        <button type="submit">Submit to Server</button>
        <button type="reset" onClick={e => onClear(e)}>Clear Input</button>
      </form>
    </fieldset>
  );
};

export default PostForm;
