import React, { useState } from "react";

type Props = { source: string };

const ImageWithFallback: React.FC<Props> = ({ source }) => {
  let [imgSrc, updateImage] = useState(source);
  return (
    <img
      src={imgSrc}
      className="img-thumbnail"
      alt="some image data"
      onError={() =>
        updateImage(
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"
        )
      }
    />
  );
};
export default ImageWithFallback;
