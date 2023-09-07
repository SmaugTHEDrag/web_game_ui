import { styled } from "styled-components";

const LoadingContainer = styled("div")`
  .wrap-page-loader {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100002;
    background-color: var(--overlay);
  }

  .WRAP-LOADER {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .animation-rotating {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: block;
      font-size: 10px;
      position: relative;
      text-indent: -9999em;
      border-top: 4px solid var(--txt5);
      border-right: 4px solid var(--txt5);
      border-bottom: 4px solid var(--txt5);
      border-left: 4px solid var(--primary);
      -webkit-transform: translateZ(0);
      -ms-transform: translateZ(0);
      transform: translateZ(0);
    }
    .loading-spinner {
      width: 30px;
      height: 30px;
      border: 2px solid indigo;
      border-radius: 50%;
      border-top-color: #0001;
      display: inline-block;
      animation: loadingspinner 0.7s linear infinite;
    }
    &.small {
      .animation-rotating {
        width: 20px;
        height: 20px;
        border-width: 2px;
      }
    }
  }
  @keyframes loadingspinner{
  0%{
    transform:rotate(0deg)
  }
  100%{
    transform:rotate(360deg)
  }
}
`;

const Loading = (props) => {
  return (
    <LoadingContainer>
      <div className="wrap-page-loader">
        <div className={"WRAP-LOADER" + (props.small ? " small" : "")}>
          <div class="loading-spinner mb-2"></div>
        </div>
      </div>
    </LoadingContainer>
  );
};

export default Loading;
