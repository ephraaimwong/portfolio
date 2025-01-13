const images = import.meta.glob('../assets/HeadShot-Collage/*.{png,jpg,jpeg,svg}', { eager: true });

const imagePaths = Object.values(images).map((image) => image.default);

export default imagePaths;