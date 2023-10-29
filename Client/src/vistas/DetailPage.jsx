import Detail from "../Components/Detail";
import NavBar from "../Components/NavBar";
import style from "./style/DetailPage.module.css"

const DetailPage = () => {
  return (
    <div className={style.container}>
      <NavBar />
      <Detail />
    </div>
  );
};

export default DetailPage;
