import React from "react";
import "../About/about.scss";

export const AboutComponent = () => {
  return (
    <section className="about">
      <div className="about__container">
        <div>
          <h2 className="about__title">ABOUT</h2>
          <p className="about__text">
            Градиенты могут быть использованы везде, где может быть использован
            тип например в качестве фона. Так как градиенты генерируются
            динамически, они могут избавить от необходимости использовать файлы
            растровых изображений, которые ранее использовались для достижения
            похожих эффектов. В дополнение к этому, так как градиенты
            генерируются браузером, они выглядят лучше, чем растровые
            изображения в случае увеличения масштаба, и их
          </p>
          <div className="about__offer">
            Visit OR Book, <strong>NOW</strong>
          </div>
        </div>
      </div>
    </section>
  );
};
