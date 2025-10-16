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
import Img6 from "../../res/gallery/all_serious.jpeg";
import Img18 from "../../res/gallery/CheeversBrownR_030622_0024.jpeg";
import Img9 from "../../res/gallery/CheeversBrownR_030622_0091.jpeg";
import Img8 from "../../res/gallery/IMG_3748.jpg";
import Img15 from "../../res/gallery/IMG_3840.jpg";
import Img10 from "../../res/gallery/IMG_3851.jpg";
import Img14 from "../../res/gallery/IMG_7056.jpeg";
import Img16 from "../../res/gallery/jrc_20220305_0092.jpeg";
import Img13 from "../../res/gallery/jrc_20220305_0094.jpeg";
import Img17 from "../../res/gallery/Sarch_202235_0210.jpeg";
import Img23 from "../../res/gallery/Sarch_202236_0461.jpeg";
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
import Img31 from "../../res/gallery/518244286_10161219247206156_666556348930597803_n.jpg";
import Img32 from "../../res/gallery/518172691_10161212787616156_3294805328396553001_n.jpg";
import Img33 from "../../res/gallery/518616351_10161219246301156_1502258140536353911_n.jpg";
import Img47 from "../../res/gallery/555467568_10161518672721156_7161718351387653425_n.jpg";
import Img52 from "../../res/gallery/467703099_10160239962816156_2246062530052549023_n.jpg";
import Img34 from "../../res/gallery/467676571_10160241178996156_8747304149012608706_n.jpg";
import Img42 from "../../res/gallery/467691783_10160241194851156_3973664882798082834_n.jpg";
import Img38 from "../../res/gallery/468440149_10160334949511156_8297439230958248530_n.jpg";
import Img40 from "../../res/gallery/468395275_10160334949496156_2853359747668647553_n.jpg";
import Img50 from "../../res/gallery/468041458_10160273584696156_5774410401766923500_n.jpg";
import Img41 from "../../res/gallery/468358821_10160335119086156_6492443953000657229_n.jpg";
import Img37 from "../../res/gallery/471280043_10160515733701156_6485290627540120638_n.jpg";
import Img43 from "../../res/gallery/471409816_10160519750881156_3489915783166906629_n.jpg";
import Img44 from "../../res/gallery/467977388_10160261341806156_1803306767239738817_n.jpg";
import Img45 from "../../res/gallery/468040040_10160261387811156_1908683396011662852_n.jpg";
import Img46 from "../../res/gallery/468006952_10160261398276156_4490932628350974124_n.jpg";
import Img36 from "../../res/gallery/467829730_10160261402716156_1695163987275440087_n.jpg";
import Img48 from "../../res/gallery/468395444_10160296880796156_7332920703432815264_n.jpg";
import Img49 from "../../res/gallery/468234376_10160296877716156_2605767506771626446_n.jpg";
import Img39 from "../../res/gallery/468281982_10160296871776156_6595612256768302516_n.jpg";
import Img51 from "../../res/gallery/468297667_10160296866996156_1523091497024015224_n.jpg";
import Img35 from "../../res/gallery/468234960_10160296865981156_5025526721252152204_n.jpg";
import Img53 from "../../res/gallery/468319294_10160296865096156_1286523205233275433_n.jpg";
import Img54 from "../../res/gallery/468307406_10160296862921156_4059275945315311288_n.jpg";
import Img55 from "../../res/gallery/468192433_10160296859266156_1365440475313908446_n.jpg";

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20, Img21, Img22, Img23, Img24, Img25, Img26, Img27, Img28, Img29, Img30, Img31, Img32, Img33, Img34, Img35, Img36, Img37, Img38, Img39, Img40, Img41, Img42, Img43, Img44, Img45, Img46, Img47, Img48, Img49, Img50, Img51, Img52, Img53, Img54, Img55];

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
