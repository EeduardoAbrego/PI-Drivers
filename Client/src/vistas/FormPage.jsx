import Form from "../Components/Form";
import NavBar from "../Components/NavBar";
import style from "./style/FormPage.module.css"

const FormPage = () => {
  return (
    <div className={style.container} >
      <NavBar />
      <Form />
    </div>
  );
};

export default FormPage;
