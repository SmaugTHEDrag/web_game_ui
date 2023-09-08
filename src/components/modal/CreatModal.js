import { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { createBook } from "../../container/Book/actions";

const ModalContainer = styled("div")`
  /* Full-width input fields */
  input[type="text"],
  input[type="number"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  .invalid {
    background-color: ivory;
    border: none;
    outline: 2px solid red;
    border-radius: 5px;
  }

  /* Set a style for all buttons */
  button {
    background-color: blue;
    color: white;
    padding: 14px 10px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  button:hover {
    opacity: 0.8;
  }

  /* Extra styles for the cancel button */
  .cancelbtn {
    width: auto;
    padding: 10px 10px;
    background-color: #f44336;
  }

  /* Center the image and position the close button */
  .imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
    position: relative;
  }

  img.avatar {
    width: 40%;
    border-radius: 50%;
  }

  .container {
    padding: 10px;
  }

  span.psw {
    float: right;
    padding-top: 10px;
  }

  /* The Modal (background) */
  .modal {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    padding-top: 60px;
  }

  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }

  /* The Close Button (x) */
  .close {
    position: absolute;
    right: 25px;
    top: 0;
    color: #000;
    font-size: 35px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: red;
    cursor: pointer;
  }

  /* Add Zoom Animation */
  .animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s;
  }

  @-webkit-keyframes animatezoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }

  @keyframes animatezoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  /* Change styles for span and cancel button on extra small screens */
  @media screen and (max-width: 300px) {
    span.psw {
      display: block;
      float: none;
    }
    .cancelbtn {
      width: 100%;
    }
  }
`;

const CreateModal = ({ isOpen, setOpen, isActive }) => {
  const dispatch = useDispatch();

  const [bookData, setBookData] = useState({
    title: {
      value: "",
      isError: false,
    },
    author: {
      value: "",
      isError: false,
    },
    parts: {
      value: "",
      isError: false,
    },
    category: {
      value: "",
      isError: false,
    },
  });

  const handleClose = (event) => {
    if (event.target === event.currentTarget) {
      setOpen(false);
    }
  };

  const handlerSubmit = (event) => {
    const data = {
      title: bookData.title.value,
      author: bookData.author.value,
      parts: bookData.parts.value,
      category: bookData.category.value,
    };
    if (data.title !== "" && data.author !== "" && data.parts && data.author) {
      dispatch(createBook(data));
      setOpen(false);
    }
  };

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    const newBookData = {
      ...bookData,
      [name]: {
        ...bookData[name],
        value: value,
      },
    };
    setBookData(newBookData);
  };

  const checkBookDataValid = (event) => {
    const { name, value } = event.target;

    if (value === "") {
      const newBookData = {
        ...bookData,
        [name]: {
          ...bookData[name],
          isError: true,
        },
      };
      setBookData(newBookData);
    }
  };

  const onFocusHandler = (event) => {
    const { name } = event.target;
    const newBookData = {
      ...bookData,
      [name]: {
        ...bookData[name],
        isError: false,
      },
    };
    setBookData(newBookData);
  };

  return (
    <ModalContainer>
      <div
        id="id01"
        class="modal"
        style={{ display: isActive ? "block" : "none" }}
        onClick={handleClose}
      >
        <div class="modal-content animate">
          <div class="container">
            <label for="title">
              <b>Name</b>
            </label>
            <input
              className={bookData.title.isError && "invalid"}
              type="text"
              placeholder="Enter title"
              name="title"
              required
              value={bookData.title.value}
              error={false}
              onChange={onChangeInputHandler}
              onBlur={checkBookDataValid}
              onFocus={onFocusHandler}
            />

            <label for="author">
              <b className="create">Author</b>
            </label>
            <input
              className={bookData.author.isError && "invalid"}
              type="text"
              placeholder="Enter author"
              name="author"
              onChange={onChangeInputHandler}
              required
              error={true}
              onBlur={checkBookDataValid}
              onFocus={onFocusHandler}
            />

            <label for="parts">
              <b className="create">Top rank</b>
            </label>
            <input
              className={bookData.parts.isError && "invalid"}
              placeholder="Top rank"
              name="parts"
              type="number"
              onChange={onChangeInputHandler}
              onBlur={checkBookDataValid}
              onFocus={onFocusHandler}
            />

            <label for="category">
              <b className="create">Category</b>
            </label>
            <input
              className={bookData.category.isError && "invalid"}
              type="number"
              placeholder="Enter category"
              name="category"
              onChange={onChangeInputHandler}
              onBlur={checkBookDataValid}
              onFocus={onFocusHandler}
            />
            <button onClick={handlerSubmit} className="create">CREATE NEW</button>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default CreateModal;
