const PRELOADED_IMAGES = [];

export const preLoadImages = (images) => {
  images.forEach((el) => {
    const img = new Image();
    img.src = el;
    img.onload = () => {
      PRELOADED_IMAGES.push(img);
    };
  });
};
