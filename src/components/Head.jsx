import { BsTelephone } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
export default function Head() {
  const Names = "Админ";
  const NumberTelephones = "89522208441";
  const ReturnNumberStyle = (num) => {
    const StringNum = String(num).split("");
    return `+7 (${StringNum.filter((n, i) => i >= 1 && i <= 3).join(
      ""
    )}) - ${StringNum.filter((n, i) => i >= 4 && i <= 6).join(
      ""
    )} - ${StringNum.filter((n, i) => i >= 7 && i <= 8).join(
      ""
    )} - ${StringNum.filter((n, i) => i >= 9 && i <= 10).join("")}`;
  };
  return (
    <header>
      <div className="logo">
        <div className="red">Profi</div>group
      </div>
      <div className="block__link">
        <div className="button__link active">Текущие заказы</div>
        <div className="button__link">Календарь</div>
        <div className="button__link">Статистика</div>
        <div className="button__link">Чаты</div>
        <div className="button__link">Настройки</div>
      </div>
      <div className="notification__button">
        <BsBell />
      </div>
      <div className="telephone__button">
        <BsTelephone />
      </div>
      <div className="user__block">
        <div className="naming">
          <div className="name">Привет, {Names}!</div>
          <div className="telephone">{ReturnNumberStyle(NumberTelephones)}</div>
        </div>
        <div className="img__user">
          <BsPerson />
        </div>
      </div>
    </header>
  );
}
