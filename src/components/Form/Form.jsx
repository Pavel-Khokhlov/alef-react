import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addChild, changeInput, resetUser } from "../../store/userSlice";

import PlusPNG from "../../images/plus.png";
import Button from "../Button/Button";
import Input from "../Input/Input";


import "./Form.sass";
import ChildList from "../ChildList/ChildList";

const Form = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const valid = true;
  const submitButtonClassName = `button button__submit ${
    valid ? "button__submit_invalid" : "button__submit_valid"
  }`;
  const addButtonClassName = `button button__add ${
    user.children.length < 5 ? "" : "disabled"
  }`;

  const handleInput = (target) => {
    dispatch(changeInput({ name: target.name, value: target.value }));
  }

  const handleAddChild = () => {
    const dateId = Date.now();
    dispatch(addChild({ id: dateId, name: "", age: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem ("profile", JSON.stringify(user));
    dispatch(resetUser());
    history.push('/profile');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <fieldset className="form__area">
        <div className="form__legend">
          <h2 className="form__title">Персональные данные</h2>
        </div>
        <Input type="text" labelName="Имя" inputName="name" onChange={handleInput} value={user.name} />
        <Input type="number" labelName="Возраст" inputName="age" onChange={handleInput} value={user.age} />
      </fieldset>
      <fieldset className="form__area">
        <div className="form__legend">
          <h2 className="form__title">Дети (макс. 5)</h2>
          <Button type="button" className={addButtonClassName} onClick={handleAddChild}>
            <img src={PlusPNG} alt="иконка плюс кнопка добавить" />
            <span>Добавить ребенка</span>
          </Button>
        </div>
        {user.children.length ? <ChildList children={user.children} /> : ""}
      </fieldset>
      <Button type="submit" className={submitButtonClassName}>
        Сохранить
      </Button>
    </form>
  );
};

export default Form;
