import React from "react";

import "./Profile.sass";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  // Fn to define correct word after age
  const ageInfo = (n) => {
    return (
      n +
      " " +
      (n % 10 === 1 && n % 100 !== 11
        ? "год"
        : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
        ? "года"
        : "лет")
    );
  };

  const parentData =
    user.name === "" || user.age === ""
      ? "Информация отсутствует!"
      : `${user.name}, ${ageInfo(user.age)}`;

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
                {child.name}, {ageInfo(child.age)}
              </p>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Profile;
