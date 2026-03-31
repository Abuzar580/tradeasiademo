export const routes = {
  homePage: "/",

  products: {
    list: "/products",
  },

  industries: {
    list: "/industries",
    detail: (industriesId: string) => `/industries/${industriesId}`,
  },
};
