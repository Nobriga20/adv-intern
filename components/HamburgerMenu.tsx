"use client";
import {
  CiHome,
  CiBookmark,
  CiEdit,
  CiSearch,
  CiSettings,
  CiLogout,
  CiLogin,
  CiCircleQuestion,
} from "react-icons/ci";
import "./componentStyles/HamburgerMenu.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../lib/store";
import { logout, openModal } from "../store/authSlice";
import Modal from "./AuthModal";

const HamburgerMenu = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.loggedIn);
  const isModalOpen = useSelector((state: RootState) => state.auth.modalOpen);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleLogin = () => {
    dispatch(openModal());
  };

  const handleCloseMenu = () => {
    // Close menu functionality - implement based on your menu state management
  };

  return (
    <>
      <div className="overlay" onClick={handleCloseMenu}></div>
      <div className="menu">
        <div className="menu__logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className="menu__wrapper">
          <div className="menu__top">
            <a className="menu__link--wrapper" href="/for-you">
              <div className="menu__icon">
                <CiHome />
              </div>
              <div className="menu__link--text">For you</div>
            </a>
            <div className="menu__link--wrapper not-allowed">
              <div className="menu__icon">
                <CiBookmark />
              </div>
              <div className="menu__link--text">My Library</div>
            </div>
            <div className="menu__link--wrapper not-allowed">
              <div className="menu__icon">
                <CiEdit />
              </div>
              <div className="menu__link--text">Highlights</div>
            </div>
            <div className="menu__link--wrapper not-allowed">
              <div className="menu__icon">
                <CiSearch />
              </div>
              <div className="menu__link--text">Search</div>
            </div>
          </div>
          <div className="menu__bottom">
            <a className="menu__link--wrapper" href="/settings">
              <div className="menu__icon">
                <CiSettings />
              </div>
              <div className="menu__link--text">Settings</div>
            </a>
            <div className="menu__link--wrapper not-allowed">
              <div className="menu__icon">
                <CiCircleQuestion />
              </div>
              <div className="menu__link--text">Help & Support</div>
            </div>
            <div className="menu__link--wrapper">
              {isLoggedIn ? (
                <button className="menu__button" onClick={handleLogout}>
                  <div className="menu__icon">
                    <CiLogout />
                  </div>
                  <div className="menu__link--text">Logout</div>
                </button>
              ) : (
                <button className="menu__button" onClick={handleLogin}>
                  <div className="menu__icon">
                    <CiLogin />
                  </div>
                  <div className="menu__link--text">Login</div>
                </button>
              )}
            </div>
          </div>
        </div>
        {isModalOpen && <Modal />}
      </div>
    </>
  );
};

export default HamburgerMenu;
