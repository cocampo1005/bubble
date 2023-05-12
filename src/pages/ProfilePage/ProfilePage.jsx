import "./ProfilePage.scss";
import PortfolioObject from "../../components/PortfolioObject/PortfolioObject";
import { ReactComponent as Sort } from '../../assets/icons/sort-24px.svg';

function ProfilePage() {
  return (
    <div className="profile">
      <section className="profile-info">
        <div className="profile-info__avatar"></div>
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

          <button className="profile-portfolio-header__upload-button">U P L O A D</button>
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
