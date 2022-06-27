import Logo from "./extensions/logo.svg";
import LogoText from "./extensions/logo-text.svg";

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: LogoText,
    },
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: Logo,
    },
    // Replace the favicon
    head: {
      favicon: Logo,
    },
    locales: ["es"],
    // Disable video tutorials
    tutorials: false,
  },
  bootstrap() {},
};
