import React from "react";
import style from "./BreadCrumbs.module.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const BreadCrumbs = () => {
  const breadCrumbsLink = useParams();
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    for (let value in breadCrumbsLink) {
      let countValue = [];
      setCounter([...countValue, value].length);
    }
  }, []);
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Link to={`/`} className={style.link}>
          {breadCrumbsLink.home.toUpperCase()}
        </Link>
        <span className={style.separator}> / </span>
        <Link
          to={`/${breadCrumbsLink.home}/${breadCrumbsLink.shop}`}
          className={counter === 1 ? style.active : "" + '' + style.link}
        >
          {breadCrumbsLink.shop.toUpperCase()}
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default BreadCrumbs;
