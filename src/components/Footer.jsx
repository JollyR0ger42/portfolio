import SVG from 'react-inlinesvg';

import { styles } from "../styles";
import { contacts, links } from "../constants";

const Link = ({ img, text, url, target, download }) => {
  return (
    <a
      href={url}
      target={target ?? "_blank"}
      className="flex items-center gap-3"
      download={!!download}
    >
      <div className='bg-white-100 w-8 h-8 rounded-full flex justify-center items-center'>
        <SVG
          alt="phone"
          src={img}
          className="w-2/3 h-2/3 object-contain"
        />
      </div>
      <p>{text}</p>
    </a>
  )
}

const Footer = () => {
  return (
    <footer className={`${styles.paddingX} w-full flex items-center py-5 bg-primary`}>
      <p className="p-anchor" id="contact">&nbsp;</p>
      <div className='w-full flex flex-wrap gap-5 justify-around items-center max-w-7xl mx-auto'>
        <div className="flex flex-col gap-2">
          <h4 className="text-[18px] font-bold">Contacts:</h4>
          {contacts.map((contact, idx) => <Link key={idx} {...contact} />)}
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-[18px] font-bold">Links:</h4>
          {links.map((contact, idx) => <Link key={idx} {...contact} />)}
        </div>
      </div>
    </footer>
  )
};

export default Footer;