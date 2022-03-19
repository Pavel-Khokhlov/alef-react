import React from "react";

import "./Profile.sass";

const Profile = () => {
  const user = JSON.parse (localStorage.getItem ("profile"));

  const parentData =
    user.name === "" || user.age === ""
      ? "Информация отсутствует!"
      : `${user.name}, ${user.age} лет`;

  return (
    <section className="main profile">
      <div className="profile__block">
        <h3 className="profile__title">Персональные данные</h3>
        <p className="profile__text">{parentData}</p>
      </div>
      <div className="profile__block">
        <h3 className="profile__title">Дети</h3>
        {user.children.length === 0 ? (
          <p className="profile__text">Информация о детях отсутствует!</p>
        ) : (
          user.children.map((child, index) => {
            return (
              <p key={index} className="profile__text child">
                {child.name}, {child.age} лет
              </p>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Profile;
