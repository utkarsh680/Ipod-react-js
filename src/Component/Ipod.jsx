import React from "react";
import { FaBars, FaBackward, FaForward, FaPlay, FaPause } from "react-icons/fa";
import style from "../style/ipod.module.scss";
export default function Ipod() {
  return (
    <div>
      <div className={style.ipod}>
        <div className={style.mainBox}>
          <div className={style.screen}>{/* <Menu/> */}</div>

          <div className={style.buttonContainer}>
            <button className={style.centerCirle}></button>
            <button className={style.menuButton}>
              <FaBars className={style.actionButton} />
            </button>
            <button className={style.leftButton}>
              <FaBackward className={style.actionButton} />
            </button>
            <button className={style.rightButton}>
              <FaForward className={style.actionButton} />
            </button>
            <button className={style.playPause}>
              <FaPlay className={style.iconColor} />
              <FaPause className={style.iconColor} />
            </button>
          </div>
          <img
            className={style.appleIcon}
            src="https://cdn-icons-png.flaticon.com/512/731/731985.png"
            style={{ marginBottom: 20 }}
          />
        </div>
      </div>
    </div>
  );
}
