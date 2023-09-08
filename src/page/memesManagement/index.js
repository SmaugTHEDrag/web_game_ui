import { styled } from "styled-components";
import ListBooks from "../../components/ListBooks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBook } from "../../container/Book/actions";
import { Link } from 'react-router-dom';

const BooksContainer = styled("div")`
  // display: flex;
  margin-top: 20px;
  padding: 0 40px;
  min-height: 750px;
`;

const MemesManagement = () => {
  const dispatch = useDispatch();
  const { pages } = useSelector((state) => state.bookReducer);

  useEffect(() => {
    dispatch(getBook(pages?.current));
  }, [pages?.current]);

  return <BooksContainer>
    <ListBooks />
  </BooksContainer>;
};

export default MemesManagement;
