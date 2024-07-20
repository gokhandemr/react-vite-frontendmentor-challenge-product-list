import React from "react";
// Style
import style from "./style.module.css";
// Image
import aboutImage from "../../images/about-image.webp";

function AboutPage() {
  return (
    <div className={style.aboutPageWrapper}>
      <img className={style.aboutPageImg} src={aboutImage} alt="about us" />
      <div className={style.aboutPageDetails}>
        <h2>About Us</h2>
        <p>
          Esse eiusmod quis voluptate pariatur reprehenderit duis id laborum. Eiusmod nulla exercitation anim incididunt adipisicing.Sunt officia duis amet ea.Aliqua magna qui minim non quis laboris qui. Lorem do anim in adipisicing commodo ea
          reprehenderit ullamco. Ad qui deserunt reprehenderit anim laborum elit fugiat id elit aliqua cillum aliquip. Voluptate aliqua qui nostrud dolore adipisicing dolore. Enim sint ipsum adipisicing duis duis ad. Minim duis consectetur elit
          veniam nulla Lorem culpa. Aliquip ullamco reprehenderit reprehenderit reprehenderit sunt duis et culpa nostrud aute officia cillum.
        </p>
        <p>
          Esse eiusmod quis voluptate pariatur reprehenderit duis id laborum. Eiusmod nulla exercitation anim incididunt adipisicing.Sunt officia duis amet ea.Aliqua magna qui minim non quis laboris qui. Lorem do anim in adipisicing commodo ea
          reprehenderit ullamco. Ad qui deserunt reprehenderit anim laborum elit fugiat id elit aliqua cillum aliquip. Voluptate aliqua qui nostrud dolore adipisicing dolore. Enim sint ipsum adipisicing duis duis ad. Minim duis consectetur elit
          veniam nulla Lorem culpa. Aliquip ullamco reprehenderit reprehenderit reprehenderit sunt duis et culpa nostrud aute officia cillum.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
