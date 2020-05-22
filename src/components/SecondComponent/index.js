import React from 'react';
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

import imageGif from '../../assets/cachoeira_cunha.gif';
import imageGallery1 from '../../assets/gallery-item-1.jpeg';
import imageGallery2 from '../../assets/gallery-item-2.jpeg';
import imageGallery3 from '../../assets/gallery-item-3.jpeg';
import imageGallery4 from '../../assets/gallery-item-4.jpeg';

import "lightgallery.js/dist/css/lightgallery.css";
import './styles.css';

const GALLERY = [
  imageGallery1,
  imageGallery2,
  imageGallery3,
  imageGallery4
];

const PhotoItem = ({ image, group, index }) => (
  <div className={"gallery-item gallery-item-" + index}>
    <LightgalleryItem group={group} src={image}>
    {
      (index <= 1) && <div className="gallery-item-shadow"></div>
    }
    {
      (index === 1) && <p>+2 fotos</p>
    }
      <img src={image} className="image bg-cover" style={{ height: "100%", width: "100%" }} alt="" />
    </LightgalleryItem>
  </div>
);

export default () => {
  return (
    <div className="component second-component">
      <div className="component__content container">
        <h2 className="component__title animate__animated animate__fadeIn">
          Eu amo a natureza..
        </h2>
        <div className="component__text animate__animated animate__fadeIn">
          <p>
            além de livros, filmes e música.<br/>Sempre quando posso faço trilhas, <br/>curto ir a cachoeiras ou praias 😎
          </p>
        </div>
        <div className="component__gallery animate__animated animate__fadeIn">
          <LightgalleryProvider
            onAfterSlide={() => {
              console.log("onAfterSlide");
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {GALLERY.map((p, idx) => (
                <PhotoItem key={idx} image={p} group="respirar-natureza" index={idx} />
              ))}
              <p className="gallery-text">Gosto de tirar fotos<br/>das paisagens</p>
            </div>
          </LightgalleryProvider>
        </div>
        <div className="component__image no-mobile">
          <div className="image-shadow animate__animated animate__fadeInUp animate__delay-1s"></div>
          <img src={imageGif} className="image animate__animated animate__fadeIn animate__delay-2s" alt="Cachoeira, Cunha - SP"/>
          <div className="image-overlay bg-cover"></div>
        </div>
      </div>
    </div>
  );
};
