import { Link } from "react-router-dom";

import "./HeroSection.css";

import image from "../../../../images/start.gif";

const HeroSection = () => {
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
          <img src={image} className="only-mobile" />
        </div>
        <Link to="/signup">
          <div className="hero-button smart">
            <div className="hero-button-inner">
              <img src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/rocketlaunch@2x.svg" />
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
        <img src={image} className="not-mobile" />
      </div>
    </div>
  );
};

export default HeroSection;
