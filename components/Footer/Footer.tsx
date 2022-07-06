import PropTypes from 'prop-types';
import React from 'react';
import {
  faDiscord,
  faMedium,
  faTelegram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type FooterProps = {
  //
};

const Footer: React.FC<FooterProps> = () => {
  return <>
    <svg xmlns="http://www.w3.org/2000/svg" className="-mt-24" viewBox="0 0 1440 320"><path fill="#fca311" fillOpacity="1" d="M0,96L48,133.3C96,171,192,245,288,256C384,267,480,213,576,208C672,203,768,245,864,234.7C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    <footer className="flex flex-col gap-2 items-center justify-center flex-1 py-4 bg-primary-500 text-dark-500">
      <span>
        Made with ❤️ by <strong>weetrax</strong> - Build on <a className="font-semibold" rel="noreferrer" target={"_blank"} href="https://elrond.com/">Elrond</a>
      </span>
      <div className="flex gap-4">
        <a rel="noreferrer" title="Twitter" target={"_blank"} href="https://twitter.com/5ElementsElrond">
          <i>
            <FontAwesomeIcon size="1x" className="w-4 h-4" icon={faTwitter} />
          </i>
        </a>
        <a rel="noreferrer" title="Discord" target={"_blank"} href="https://discord.gg/6YT9rPKn4P">
          <i>
            <FontAwesomeIcon size="1x" className="w-4 h-4" icon={faDiscord} />
          </i>
        </a>
      </div>
    </footer>
  </>
};

Footer.propTypes = {
  //
};

export default Footer;
