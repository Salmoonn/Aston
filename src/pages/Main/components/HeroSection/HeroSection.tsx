import "./HeroSection.css";

import { Link } from "react-router-dom";

import image from "../../../../images/start.gif";
import rocket from "../../../../images/rocketLaunch2.svg";

const HeroSection = (): JSX.Element => {
  return (
    <div className="hero wrapper">
      <div className="hero-info column">
        <div className="hero-headline column">
          <h1 className="work-sans">Discover Digital Art & Collect NFTs</h1>
          <div className="work-sans hero-headline-text">
            NFT Marketplace UI Created With Anima For Figma. Collect, Buy And
            Sell Art From More Than 20k NFT Artists.
          </div>
        </div>
        <div className="hero-nft-card only-mobile">
          <img src={image} className="only-mobile" alt="start" />
        </div>
        <Link to="/signup">
          <div className="hero-button smart">
            <div className="hero-button-inner">
              <img src={rocket} alt="rocket" />
              <div className="button-text">Get Started</div>
            </div>
          </div>
        </Link>
        <div className="additional-info">
          <div>
            <h4 className="space-mono">240k+</h4>
            <div className="work-sans additional-info-text">Total Sale</div>
          </div>
          <div>
            <h4 className="space-mono">100k+</h4>
            <div className="work-sans additional-info-text">Auctions</div>
          </div>
          <div>
            <h4 className="space-mono">240k+</h4>
            <div className="work-sans additional-info-text">Artists</div>
          </div>
        </div>
      </div>
      <div className="hero-nft-card not-mobile">
        <img src={image} className="not-mobile" alt="start" />
      </div>
    </div>
  );
};

export default HeroSection;
