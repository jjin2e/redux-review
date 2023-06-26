import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import shortid from "shortid";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);

  const todo = todos.filter((todo) => todo.id === id)[0];

  const [contents, setContents] = useState("");
  const reviews = useSelector((state) => state.reviews);

  const review = reviews.filter((review) => review.id === id)[0];

  const dispatch = useDispatch();

  return (
    <>
      <div>
        {todo.id}
        <br />
        {todo.title}
        <br />
        {todo.body}
        <br />
        {todo.isDone.toString()}
        <br />
        <button onClick={() => navigate("/")}>이전 화면으로</button>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch({
            type: "ADD_REVIEW",
            payload: {
              id: shortid.generate(),
              contents,
            },
          });
          setContents("");
        }}
      >
        <label>댓글달기</label>
        <input
          type="text"
          value={contents}
          onChange={(event) => {
            setContents(event.target.value);
          }}
        />
        <button>등록</button>
      </form>
    </>
  );
};

export default Detail;
