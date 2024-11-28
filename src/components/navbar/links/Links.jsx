const { default: Navlink } = require("./nav-links/navlink");

const Links = ({ links }) => {
  return links?.map((link) => {
    return <Navlink link={link} />;
  });
};

export default Links;
