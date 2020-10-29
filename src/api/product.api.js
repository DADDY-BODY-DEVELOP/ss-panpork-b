export const getProduct = async () => {
  return await (
    await fetch(process.env.REACT_APP_SIXTY_SIX_BBQ + "product")
  ).json();
};
