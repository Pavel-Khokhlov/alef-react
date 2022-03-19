import React from "react";
import { useDispatch } from "react-redux";
import { changeInput, removeChild } from "../../store/userSlice";
import Button from "../Button/Button";
import Input from "../Input/Input";

import "./Child.sass";

const Child = ({ child }) => {
  const dispatch = useDispatch();

  const handleDeleteChild = () => {
    dispatch(removeChild(child.id));
  };

  const handleInput = (target) => {
    const name = target.name.replace(`_${child.id}`, '');
    dispatch(changeInput({ id: child.id, name, value: target.value }));
  }

  return (
    <div className="form__child">
      <Input type="text" labelName="Имя" inputName={`name_${child.id}`} onChange={handleInput} value={child.name} />
      <Input type="number" labelName="Возраст" inputName={`age_${child.id}`} onChange={handleInput} value={child.age} />
      <Button
        type="button"
        className="button button__delete"
        onClick={handleDeleteChild}
      >
        Удалить
      </Button>
    </div>
  );
};

export default Child;
