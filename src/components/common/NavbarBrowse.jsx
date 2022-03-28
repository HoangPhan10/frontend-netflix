import { logo } from "../../assets/images/introduceNetflix";
import styles from "./common.module.scss";
import { Link } from "react-router-dom";
import { account } from "../../assets/images/banner";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from '@mui/icons-material/Search';
import CallApi from "../../api/postApi";
import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNotis } from "../../redux/slices/mainSlice";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
function NavbarBrowse() {
  const dispatch = useDispatch();
  const noti = useSelector((state) => state.main.noti);
  const handleLogout = () => {
    const choice = window.confirm("Bạn có chắc chắn muốn đăng xuất ?");
    if (choice) {
      window.localStorage.setItem("id", JSON.stringify(0));
      window.location.href = "/";
    }
  };
  useEffect(() => {
    CallApi("notifications", "GET", null).then((res) => {
      if (res) {
        const action = getNotis(res.data);
        dispatch(action);
      }
    });
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className={styles.navbarBrowse}>
      <div className={styles.Div1}>
        <img src={logo} alt="" />
        <div className={styles.List}>
          <Link to="/browse" className={styles.Link}>
            Trang chủ
          </Link>
          <Link to="/browse/series" className={styles.Link}>
            Phim T.hình
          </Link>
          <Link to="/browse/movie" className={styles.Link}>
            Phim
          </Link>
          <Link to="/browse/popular" className={styles.Link}>
            Mới & Phổ biến
          </Link>
          <Link to="/browse/list" className={styles.Link}>
            Danh sách của tôi
          </Link>
        </div>
        <div classNamme={styles.dropDown}>
        <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={styles.dropDownButton}
      >
        Duyệt phim
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
       
      >
        <MenuItem onClick={handleClose}  className={styles.dropDownMenu}>
        <Link to="/browse" style={{color:"black",textDecoration:"none"}}>
            Trang chủ
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}  className={styles.dropDownMenu}>
        <Link to="/browse/series" style={{color:"black",textDecoration:"none"}}>
            Phim T.hình
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}  className={styles.dropDownMenu}>
        <Link to="/browse/movie" style={{color:"black",textDecoration:"none"}}>
            Phim
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}  className={styles.dropDownMenu}>
        <Link to="/browse/popular" style={{color:"black",textDecoration:"none"}}>
            Mới & Phổ biến
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}  className={styles.dropDownMenu}>
        <Link to="/browse/list" style={{color:"black",textDecoration:"none"}}>
            Danh sách của tôi
          </Link>
        </MenuItem>
      </Menu>
        </div>
      </div>
      <div className={styles.Div2}>
        <div className={styles.search}>
          <SearchIcon className={styles.iconSearch}/>
          <div className={styles.hoverSearch}>
          <input type="text" placeholder="Phim,diễn viên,thể loại..."/>
          </div>
        </div>
        <div className={styles.notification}>
          <NotificationsIcon className={styles.iconNoti} />
          <div className={styles.hoverNoti}>
            {noti.map((el, index) => (
              <Link key={index} to="/browse" className={styles.notiContent}>
                <img alt="" src={el.image} />
                <div>
                  <p>{el.title}</p>
                  <strong>{el.date}</strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.account}>
          <img src={account} alt="" />
          <div className={styles.hover}>
            <div>
              <AccountCircleIcon className={styles.icon} />
              <Link to="/account" className={styles.link}>
                Tài khoản
              </Link>
            </div>
            <div>
              <HelpOutlineIcon className={styles.icon} />
              <Link
                to="/helpCenter"
                className={styles.link}
                style={{ marginLeft: 0 }}
              >
                Trung tâm trợ giúp
              </Link>
            </div>
            <p onClick={handleLogout}>Đăng xuất khỏi Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarBrowse;




  
 
