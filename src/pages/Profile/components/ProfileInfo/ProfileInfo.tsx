import "./ProfileInfo.css";

import { Link } from "react-router-dom";

import globe from "../../../../images/globe.svg";
import discord from "../../../../images/discord.svg";
import youtube from "../../../../images/youtube.svg";
import twitter from "../../../../images/twitter.svg";
import instagram from "../../../../images/instagram.svg";
import copy from "../../../../images/copy.svg";
import plus from "../../../../images/plus.svg";

import { User } from "../../../../types/Types";

interface ProfileInfoProps {
  user: User;
}

const ProfileInfo = ({ user }: ProfileInfoProps): JSX.Element => {
  return (
    <div className="artist-info wrapper">
      <div className="artist-info-body column">
        <div className="artis-name h2 work-sans">{user.name}</div>
        <div className="not-desktop">
          <div className="artist-info-button">
            <button className="artist-but-link smart">
              <img src={copy} alt="copy" />
              <div className="work-sans">0xc0E3...B79C</div>
            </button>
            <button className="artist-but-follow smart">
              <img src={plus} alt="plus" />
              <div className="work-sans">Follow</div>
            </button>
          </div>
        </div>
        <div className="artist-stats">
          <div className="astist-volume">
            <div className="h4 space-mono">{user.volume}</div>
            <div className="text work-sans">Volume</div>
          </div>
          <div className="astist-sold">
            <div className="h4 space-mono">{user.sold}</div>
            <div className="text work-sans">NFTs Sold</div>
          </div>
          <div className="astist-follow">
            <div className="h4 space-mono">{user.followers}</div>
            <div className="text work-sans">Followers</div>
          </div>
        </div>

        <div className="artist-bio column">
          <div className="h5 space-mono">Bio</div>
          <div className="text work-sans">{user.bio}</div>
        </div>

        <div className="artist-links column">
          <div className="h5 space-mono">Links</div>
          <div className="artist-links-icons row">
            <Link to="/">
              <img src={globe} alt="link globe" />
            </Link>
            <Link to="/">
              <img src={discord} alt="link discord" />
            </Link>
            <Link to="/">
              <img src={youtube} alt="link youtube" />
            </Link>
            <Link to="/">
              <img src={twitter} alt="link twitter" />
            </Link>
            <Link to="/">
              <img src={instagram} alt="link instagram" />
            </Link>
          </div>
        </div>
      </div>
      <div className="only-desktop">
        <div className="artist-info-button ">
          <button className="artist-but-link smart">
            <img src={copy} alt="copy" />
            <div className="work-sans">0xc0E3...B79C</div>
          </button>
          <button className="artist-but-follow smart">
            <img src={plus} alt="plus" />
            <div className="work-sans">Follow</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
