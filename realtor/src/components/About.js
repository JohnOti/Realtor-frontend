import React from "react";

export default function About() {
  return (
    <div>
      <h1 className="about_us">About Us</h1>
      <div>
        <section className="mission_vision">
          <div className="mission_container">
            <p className="mission">MISSION</p>
            <p>
              We aim in making finding a house easy for you to find and also to
              make selling your house much easier. Minimize our clients' risk,
              expense and time in acquiring an appropriate property.
            </p>
          </div>
          <div className="mission_container">
            <p className="mission">VISION</p>
            <p>
              Our vision is strive to make positive contribution towards
              developing a robust systems of real estate which is paramount in
              assisting the relevant authorities cope with population growth,
              rapid urbanization and rising expectations from the clientele. OUR
              CLIENTS We offer a one-stop shop, whereby we provide a network of
              experts to cover most aspects of real estate.
            </p>
          </div>
        </section>
        <section className="image_values">
          <div>
            <img
              src={
                "https://cdn.nar.realtor/sites/default/files/images/logos/NAR/web_R_blk.jpg"
              }
              alt="Web Logo"
              default
              height={300}
              width={360}
            />
          </div>
          <div className="vision_container">
            <p className="vision">
              INCASE YOU FIND A HOUUSE THAT IS NOT OUR PAGE!
            </p>
            <ul>
              <li> Call 07947854 to inform our team. </li>
              <li>Report to the nearest outlet .</li>
              <li>Get the house most recent photo.</li>
              <li>Login to REALTOR application.</li>
              <li>Provide the neccessary deatails.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
