import { styled } from "styled-components";
import { timeSince } from "../../../page/utils/timeSince";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const BookContainer = styled("div")`
  margin-bottom: 20px;
  margin-top: 0 !important;

  padding: 10px;
  border-radius: 5px;

  // display: flex;
  // justify-content: space-between;
  display: grid;
  grid-template-columns: 100px auto 100px 150px 100px;
  gap: 10px;
  padding: 10px;


  &:hover {
    background: #f8f8f8;
  }
  .grid-item {
    padding 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .img-box {
    height: 50px;
    width: 50px;
    overflow: hidden;

    img {
      height: 50px;
      width: 50px;
      object-fit: cover;
    }
  }

  .book-title {
    font-weight: 600;
    margin: 0;
    font-size: 14px;
  }

  .author-text {
    color: #999;
    display: block;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: break-spaces;
    line-height: 25px;
  }

  .part-number {
    color: #999;
    display: block;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: break-spaces;
    line-height: 25px;
    text-align: center;
  }

  .time {
    text-align: right;
    color: #999;
    display: block;
    padding: 0 5px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: break-spaces;
    line-height: 25px;
    float: left;
    width: 100%;
  }

  .text-right {
    text-align: right;
  }

  .btn {
    padding: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    // color: var(--textColor);
    // visibility: hidden;
    // opacity: 0;
    font-size: 1.8rem;
  }
`;

const Book = (props) => {
  const { data, onDelete, onEdit } = props;
  const thumb =
    "https://truyenaudiocv.org/uploads/manga/nguoi-tai-dau-pha-viet-nhat-ky-nu-chinh-toan-bo-mong/cover/cover_thumb.jpg";
  return (
    <BookContainer container spacing={2} onClick={() => {}}>
      <div className="grid-item">
        <div className="img-box">
          <img src={thumb} alt={data.title} />
        </div>
      </div>
      <div className="grid-item">
        <h2 className="book-title">{data.title}</h2>
        <p className="author-text">Tác giả: {data.author}</p>
      </div>
      <div className="grid-item">
        <p className="part-number">{data.parts} tập</p>
      </div>
      <div className="grid-item text-right">
        <p className="time">{timeSince(data.updated_at)}</p>
      </div>
      <div className="text-right" style={{
        display: 'flex',
        justifyContent: "space-around"
      }}>
        <button
          className="btn"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          onClick={() => onDelete(data)}
        >
          <AiFillDelete />
        </button>
        <button
          className="btn"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          onClick={() => onEdit(data)}
        >
          <AiFillEdit />
        </button>
      </div>
    </BookContainer>
  );
};

export default Book;
