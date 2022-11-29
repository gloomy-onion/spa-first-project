import React from "react";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  const RenderContacts = (profile) => {
    const contactWebsites = Object.entries(props.profile.contacts).map(
      ([name, link]) => (
        <div>
          {name[0].toUpperCase() + name.slice(1)}:
          {link != null ? link : "not defined"}
        </div>
      )
    );
    return <div> {contactWebsites} </div>;
  };

  return (
    <div>
      <img src={props.profile.photos.large} alt={""} />
      <div>{props.profile.aboutMe}</div>
      <div>Contacts:</div>
      <RenderContacts />
    </div>
  );
};
export default ProfileInfo;
