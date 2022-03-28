import NavbarBrowse from "../../NavbarBrowse";
import { useState, useEffect } from "react";
import CallApi from "../../../../api/postApi";
import styles from "./espisodesInformation.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IntroduceFooter from "./../../../pages/introduce/introduceFooter";

function EspisodesInformation() {
  const [film, setFilm] = useState([]);
  const id = JSON.parse(window.localStorage.getItem("idMovie"));
  useEffect(() => {
    CallApi("films", "GET", null).then((res) => {
      if (res) {
        const film = res.data.find((el) => el._id === id);
        setFilm(film);
      }
    });
  }, [id]);
  const handleClick=(id)=>{
    window.localStorage.setItem("idEspisodes", JSON.stringify(id));
  }
  return (
    <div>
      <NavbarBrowse />
      <div className={styles.informationEspisodes}>
        <div className={styles.center}>
          <div className={styles.image}>
           {film!==undefined&& <img className={styles.src} src={film.imageInfor} alt="" />}
            <div className={styles.row}>
              <div className={styles.col1}>
                <div>
                  <strong>{film.year}</strong>
                  <p>{film.age}+</p>
                  <strong>1 Mùa</strong>
                  <p>HD</p>
                </div>
                <h3>M1:T1 "Tập 1"</h3>
                {film.espisodes !== undefined && (
                  <p>{film.espisodes[0].content}</p>
                )}
              </div>
              <div className={styles.col2}>
                <p>
                  <span>Diễn viên:</span>
                  {film.performer}...
                </p>
                <p>
                  <span>Thể loại:</span>
                  {film.category}
                </p>
              </div>
            </div>

            <div className={styles.list}>
              <div className={styles.listEspisode}>
                <h2>Tập</h2>
                <p>Mùa 1</p>
              </div>
              {film.espisodes !== undefined &&
                film.espisodes.map((el, index) => (
                  <Link
                    to="/browse/watchMovie"
                    key={index}
                    className={clsx(styles.listCol, {
                      [styles.listActive]: parseInt(el.espisode) === 1,
                    })}
                    onClick={()=>handleClick(el._id)}
                  >
                    <h2>{el.espisode}</h2>
                    <div className={styles.image}>
                      <img
                        src={el.urlImage}
                        alt=""
                        width="130px"
                        height="73px"
                      />
                      <div className={styles.hover}>
                        <PlayArrowIcon />
                      </div>
                    </div>
                    <div className={styles.title}>
                      <div className={styles.titleEspisodes}>
                        <p>Tập {el.espisode}</p>
                        <p>{el.time}</p>
                      </div>
                      <p className={styles.titleMsp}>{el.content}</p>
                    </div>
                  </Link>
                ))}

              <IntroduceFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EspisodesInformation;
