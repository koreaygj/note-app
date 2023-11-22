import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="error__img">
        <img src={""} alt="pageNotFound" />
      </div>
      <div className="error__text">
        <h1>404</h1>
        <div>찾을 수 없는 페이지 또는 잘못된 경로입니다.</div>
        <button onClick={() => navigate("/")}>
          <span>메인 페이지로 돌아가기</span>
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
