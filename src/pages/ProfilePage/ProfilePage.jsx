import "./ProfilePage.scss";
import bubbleAvatar from '../../assets/icons/bubble-avatar.png';
import ModelObject from "../../components/ModelObject/ModelObject";
import models from '../../data/modelsData.json';
import { ReactComponent as Sort } from '../../assets/icons/sort-24px.svg';
import Modal from "../../components/Modal/Modal";
import DropFileInput from "../../components/DropFileInput/DropFileInput";
import { motion } from "framer-motion";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [filteredModels, setFilteredModels] = useState(models);

  const toggleModal = () => setModalOpen(bool => !bool);
  const close = () => setModalOpen(false);

  const { currentUser } = useContext(AuthContext);


  useEffect(() => {
    setFilteredModels(
      models.filter(model => model.creator === 'cocampo1005')
    );
  }, [models, currentUser]);


  return (
    <div className="profile">
      <section className="profile-info">
        <img className="profile-info__avatar" src={currentUser?.photoURL || bubbleAvatar} alt="profile avatar" />
        <h2 className="profile-info__username profile--padding">cocampo1005</h2>
        <div className="profile-info__follow profile--padding">
          <span className="profile-info__followers">2 Followers</span>
          <span className="profile-info__following">5 Following</span>
        </div>
        <p className="profile-info__about-label profile--label">ABOUT</p>
        <p className="profile-info__about-text profile--padding profile--text">
          Stylistic Character Artist that loves to game
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

            <DropFileInput closeModal={close} />

            <div className="modal__buttons">
              <motion.button
                className="modal__button-close"
                onClick={close}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
              >
                Close
              </motion.button>
            </div>
          </Modal>
        </div>
        <div className="profile-container">
          {filteredModels.map(model => (
            <ModelObject key={model.id} model={model} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
