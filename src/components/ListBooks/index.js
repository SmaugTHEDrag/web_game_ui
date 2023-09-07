import { useState } from "react";
// import CustomPagination from "../CustomPagination";
import Book from "./Book";
import { styled } from "styled-components";
import { listBook } from "../../page/utils/data";
import Pagination from "../Pagination";
import CreateModal from "../modal/CreatModal";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../container/Book/actions";
import DeleteModal from "../modal/DeleteModal";
import EditModal from "../modal/EditModal";

const ListBookContainer = styled("div")`
  .block-header {
    color: #6b9876;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      padding: 5px 10px;
      background-color: var(--mainColor);
      border: none;
      border-radius: 6px;
      color: white;
      cursor: pointer;
    }
    .title {
      margin: 0;
      font-size: 24px;
      margin-bottom: 5px;
      line-height: 30px;
      text-transform: uppercase;
      font-weight: 500;
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .list-book {
    min-height: 500px;
  }
`;

const ListBooks = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [currentBook, setCurrentBook] = useState({});

  const { books, pages } = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();

  const changePageHandler = (value) => {
    dispatch(changePage(value));
  };

  const deleteBookHandler = (item) => {
    setCurrentBook(item);
    setOpenDelete(true);
  };

  const editBookHandler = (item) => {
    setCurrentBook(item);
    setOpenEdit(true);
  };

  return (
    <ListBookContainer>
      <div class="block-header">
        <h2 class="title">Your meme</h2>
        <div>
          <button variant="text" onClick={() => setOpenCreate(true)}>
            ADD NEW
          </button>
        </div>
      </div>
      <div className="list-book">
        {books.map((item) => (
          <Book
            data={item}
            onDelete={deleteBookHandler}
            onEdit={editBookHandler}
          />
        ))}
      </div>

      <div className="pagination">
        <Pagination
          // className="pagination-bar"
          currentPage={pages.current}
          totalCount={pages.total * 5}
          pageSize={5}
          onPageChange={(page) => changePageHandler(page)}
        />
      </div>
      {openCreate && (
        <CreateModal isActive={openCreate} setOpen={setOpenCreate} />
      )}
      <DeleteModal
        isActive={openDelete}
        setOpen={(value) => {
          setOpenDelete(value);
          setCurrentBook(null);
        }}
        book={currentBook}
      />
      {currentBook && (
        <EditModal
          isActive={openEdit}
          setOpen={(value) => {
            setOpenEdit(value);
            setCurrentBook(null);
          }}
          book={currentBook}
        />
      )}
    </ListBookContainer>
  );
};

export default ListBooks;
