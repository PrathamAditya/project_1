import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes["main"]}>
      <ul className={classes["nav-list"]}>
        <li className={classes["nav-item"]}>
          <label for={classes["input-1"]}>
            <input
              type="radio"
              id={classes["input-1"]}
              name={classes["group"]}
              checked
            />
            <span className={classes["btn"]}>
              <i className={classes["btn-icon fa-solid fa-house"]}></i>
              <span className={classes["btn-text"]}>Hotel</span>
            </span>
          </label>
        </li>
        <li className={classes["nav-item"]}>
          <label for={classes["input-2"]}>
            <input type="radio" id={classes["input-2"]} name="group" />
            <span className={classes["btn"]}>
              <i className={classes["btn-icon fa-solid fa-map"]}></i>
              <span className={classes["btn-text"]}>Map</span>
            </span>
          </label>
        </li>
        <li className={classes["nav-item"]}>
          <label for={classes["input-3"]}>
            <input type="radio" id="input-3" name="group" />
            <span className={classes["btn"]}>
              <i className={classes["btn-icon fa-solid fa-burger"]}></i>
              <span className={classes["btn-text"]}>Food</span>
            </span>
          </label>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
