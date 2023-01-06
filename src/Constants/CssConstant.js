export const GameCardCss = (image) => {
  return {
    backgroundImage: `url(http://localhost:80/uploads/${image})`,
    backgroundPosition: 'center',
    backgroundSize: '100px',
    backgroundRepeat: 'no-repeat'
  };
};
