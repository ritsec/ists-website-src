import React, { useState, useEffect } from "react";

import "./gallery.scss";
import HeroBg from "../../res/diagonal-lines.svg";

import Img1 from "../../res/gallery/_24U0303.jpg";
import Img2 from "../../res/gallery/_24U0317.jpg";
import Img4 from "../../res/gallery/_24U0332.jpg";
import Img12 from "../../res/gallery/_24U0341.jpg";
import Img11 from "../../res/gallery/_24U0488.jpg";
import Img25 from "../../res/gallery/_24U1457.jpg";
import Img3 from "../../res/gallery/_24U1630.jpg";
import Img28 from "../../res/gallery/20200301_WJI_02385_Web.jpg";
import Img6 from "../../res/gallery/all_serious.jpg";
import Img10 from "../../res/gallery/CheeversBrownR_030622_0024.jpg";
import Img9 from "../../res/gallery/CheeversBrownR_030622_0091.jpg";
import Img8 from "../../res/gallery/IMG_3748.jpg";
import Img15 from "../../res/gallery/IMG_3840.jpg";
import Img18 from "../../res/gallery/IMG_3851.jpg";
import Img14 from "../../res/gallery/IMG_7056.jpg";
import Img16 from "../../res/gallery/jrc_20220305_0092.jpeg";
import Img13 from "../../res/gallery/jrc_20220305_0094.jpeg";
import Img17 from "../../res/gallery/Sarch_202235_0210.jpg";
import Img23 from "../../res/gallery/Sarch_202236_0461.jpg";
import Img20 from "../../res/gallery/1345425044079251466_02_20250301_104252.jpg";
import Img21 from "../../res/gallery/IMG_2806.jpg";
import Img22 from "../../res/gallery/20200229_WJI_00350_Web.jpg";
import Img26 from "../../res/gallery/_24U0438.jpg";
import Img24 from "../../res/gallery/IMG_3739.jpg";
import Img5 from "../../res/gallery/_24U1486.jpg";
import Img29 from "../../res/gallery/PXL_20250301_215723285.NIGHT.jpg";
import Img27 from "../../res/gallery/20200228_WJI_00196_Web.jpg";
import Img19 from "../../res/gallery/_24U0360.jpg";
import Img7 from "../../res/gallery/20200301_WJI_01696_Web.jpg";
import Img30 from "../../res/gallery/_24U0288.jpg";

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20, Img21, Img22, Img23, Img24, Img25, Img26, Img27, Img28, Img29, Img30];

const Gallery: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="gallery">
        <div
        className="hero mini-hero" style={{ backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 1), rgba(0, 0, 0, 0)), url(${HeroBg})` }}>
        <h1 className="gallery-title">ISTS Over the Years</h1>
        </div>
      <div className="gallery-content">
        <div className="masonry">
          {images.map((src, idx) => (
            <img
              src={src}
              alt={`Gallery item ${idx + 1}`}
              key={idx}
              onClick={() => setSelected(src)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <img src={selected} alt="Expanded view" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
