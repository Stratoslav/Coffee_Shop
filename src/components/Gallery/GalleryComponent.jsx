import React from "react";
import "../Gallery/gallery.scss";
import s from "../../img/gallery/gallery.png";
export const GalleryComponent = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery__container">
        <img className="gallery__img" loading="lazy" src={s} alt="" />
      </div>
    </section>
  );
};
