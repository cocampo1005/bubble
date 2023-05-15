import "./ProfilePage.scss";
import bubbleAvatar from '../../assets/icons/bubble-avatar.png';
import PortfolioObject from "../../components/PortfolioObject/PortfolioObject";
import { ReactComponent as Sort } from '../../assets/icons/sort-24px.svg';
import Modal from "../../components/Modal/Modal";
import DropFileInput from "../../components/DropFileInput/DropFileInput";
import { motion } from "framer-motion";
import { useState } from "react";

function ProfilePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(bool => !bool);
  const close = () => setModalOpen(false);

  return (
    <div className="profile">
      <section className="profile-info">
        <img className="profile-info__avatar" src={bubbleAvatar} alt="profile avatar" />
        <h2 className="profile-info__username profile--padding">Username</h2>
        <div className="profile-info__follow profile--padding">
          <span className="profile-info__followers">2 Followers</span>
          <span className="profile-info__following">5 Following</span>
        </div>
        <p className="profile-info__about-label profile--label">ABOUT</p>
        <p className="profile-info__about-text profile--padding profile--text">
          Lorem ipsum dieorm kirfck ashula montegue windler
        </p>
        <p className="profile-info__skills-label profile--label">SKILLS</p>
        <p className="profile-info__skills-text profile--padding profile--text">
          Maya, Blender, ZBrush, Substance Painter
        </p>
      </section>
      <section className="profile-portfolio">
        <div className="profile-portfolio-header">
          <div className="profile-portfolio-header-sort">
            <h4 className="profile-portfolio-header-sort-text">Sort</h4>
            <Sort className="profile-portfolio-header-sort-icon" />
          </div>
          <motion.button
            className="profile-portfolio-header__upload-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => (modalOpen ? close() : toggleModal())}
          >
            U P L O A D
          </motion.button>
          <Modal open={modalOpen} handleClose={close}>
            <DropFileInput />
            <div className="modal__buttons">
              <motion.button
                className="modal__button-close"
                onClick={close}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
              >
                Close
              </motion.button>
              <motion.button
                className="modal__button-upload"
                onClick={close}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
              >
                Upload
              </motion.button>
            </div>


          </Modal>
        </div>
        <div className="profile-container">
          <PortfolioObject />
          <PortfolioObject />
          <PortfolioObject />
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
