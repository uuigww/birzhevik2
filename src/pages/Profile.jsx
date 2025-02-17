import { Link } from "react-router-dom";
import React, { useState } from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import User from "../components/User";
import SubsList from "../components/SubsList";


const subscriptions = [
  {
    id: 1,
    title: "Клуб Трейдеров",
    description: "<b>Клуб Трейдеров</b> — это тот самый закрытый канал Михалыча, где он публикует свои сделки и торгует в прямом эфире. <br /><br />Если ваш депозит начинается от 50.000 рублей и вы хотите стабильно увеличивать свой капитал и зарабатывать на фондовом рынке — добро пожаловать в наш клуб, где эти мечты становятся реальностью.",
    img: "",
    price: {
      m1: "4 000",
      m3: "10 000",
      m6: "20 000",
    },
  },
  {
    id: 2,
    title: "Клуб Инвесторов",
    description: "<b>Клуб Инвесторов</b> — это закрытый канал, где Михалыч публикует свои долгосрочные и среднесрочные сделки, а также все манипуляции со своим долгосрочным портфелем. <br /><br />Закрытый клуб инвесторов подходит для участников рынка с долгосрочными целями и депозитом от 500.000₽ .",
    img: "",
    price: {
      m1: "3 000",
      m3: "8 000",
      m6: "15 000",
    },
  },
  {
    id: 0,
    title: "Premium-чат",
    description: "<b>Premium-чат</b> создан для <b>успешных трейдеров и инвесторов</b>, которые уже добились значительных успехов на рынке и готовы поднять свой уровень ещё выше.<br /><br />В нашем сообществе <b>каждый вносит вклад</b> в развитие и процветание чата: делятся своими сделками и виденьем, как это делает Михалыч. Вы можете <b>учиться у лучших из лучших!</b>",
    img: "",
    price: {
      m1: "3 000",
      m3: "8 000",
      m6: "15 000",
    },
  },
];

const Profile = () => {
  
  return (
    <>
        <Header title = {"Личный Кабинет"}/>
        <Navbar />
        <User />
        <SubsList subscriptions={subscriptions} />
    </>
  );
}

export default Profile;
