import { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { createBook, updateBook } from "../../container/Book/actions";

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
    background-color: #04aa6d;
    color: white;
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
    padding: 10px 18px;
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
    padding: 16px;
  }

  span.psw {
    float: right;
    padding-top: 16px;
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

const EditModal = ({ book, setOpen, isActive }) => {
  const dispatch = useDispatch();

  const [bookData, setBookData] = useState({
    title: {
      value: book?.title,
      isError: false,
    },
    author: {
      value: book?.author,
      isError: false,
    },
    parts: {
      value: book?.parts,
      isError: false,
    },
    category: {
      value: book?.category,
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
      dispatch(updateBook(book?.id, data));
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
              <b>Tiêu đề</b>
            </label>
            <input
              type="text"
              placeholder="Nhập tiêu đề"
              name="title"
              // required
              // onInvalid={(e)=>{e.target.setCustomValidity("error msg:  Please enter your first name")}}
              value={bookData.title.value}
              error={false}
              onChange={onChangeInputHandler}
              className={bookData.title.isError && "invalid"}
              onBlur={checkBookDataValid}
              onFocus={onFocusHandler}
            />

            <label for="author">
              <b>Tác giả</b>
            </label>
            <input
              type="text"
              placeholder="Nhập tên tác giả"
              name="author"
              onChange={onChangeInputHandler}
              value={bookData.author.value}
              className={bookData.author.isError && "invalid"}
              onBlur={checkBookDataValid}
              onFocus={onFocusHandler}
              // required
              // onInvalid={(e) =>
              //   e.target.setCustomValidity('Nhập tác giả')
              // }
            />

            <label for="parts">
              <b>Số chương</b>
            </label>
            <input
              placeholder="Nhập tên số chương"
              name="parts"
              type="number"
              onChange={onChangeInputHandler}
              value={bookData.parts.value}
              className={bookData.parts.isError && "invalid"}
              onBlur={checkBookDataValid}
              onFocus={onFocusHandler}
              // required
              // onInvalid={(e) =>
              //   e.target.setCustomValidity('Nhập số chương')
              // }
            />

            <label for="category">
              <b>Thể loại</b>
            </label>
            <input
              type="number"
              placeholder="Nhập tên thể loại"
              name="category"
              onChange={onChangeInputHandler}
              value={bookData.category.value}
              className={bookData.category.isError && "invalid"}
              onBlur={checkBookDataValid}
              onFocus={onFocusHandler}
              // required
              // onInvalid={(e) =>
              //   e.target.setCustomValidity('Nhập thể loại')
              // }
            />
            <button onClick={handlerSubmit}>Sửa</button>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default EditModal;
