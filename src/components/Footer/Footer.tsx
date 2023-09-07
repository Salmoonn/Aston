import "./Footer.css";
import logo from "../../images/logo.svg";
import logoName from "../../images/logoName.svg";
import discord from "../../images/discord.svg";
import youtube from "../../images/youtube.svg";
import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";
import { Link } from "react-router-dom";
import { SubForm, SubForm2 } from "../SubForm";

export const Footer = (): JSX.Element => {
  return (
    <div className="footer-bg">
      <div className="footer wrapper">
        <div className="footer-info">
          <div className="footer-info-info">
            <div className="footer-logo">
              <img src={logo} alt="logo" />
              <img src={logoName} alt="logo name" />
            </div>
            <div className="footer-additional-info">
              <div className="base-body-work">
                NFT marketplace UI created with Anima from Figma
              </div>
              <div className="footer-community">
                <div className="base-body-work">Join our community</div>
                <div className="footer-icons">
                  <div style={{ cursor: "not-allowed" }}>
                    <img src={discord} alt="discord" />
                  </div>
                  <div style={{ cursor: "not-allowed" }}>
                    <img src={youtube} alt="youtube" />
                  </div>
                  <div style={{ cursor: "not-allowed" }}>
                    <img src={twitter} alt="twitter" />
                  </div>
                  <div style={{ cursor: "not-allowed" }}>
                    <img src={instagram} alt="instagram" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-explore">
            <div className="space-mono h5">Explore</div>
            <div className="footer-explore-body">
              <Link to="/marketplace">
                <div className="base-body-work">Marketplace</div>
              </Link>
              <div style={{ cursor: "not-allowed" }}>
                <div style={{ color: "#ccc" }} className="base-body-work">
                  Ranking
                </div>
              </div>
              <div style={{ cursor: "not-allowed" }}>
                <div style={{ color: "#ccc" }} className="base-body-work">
                  Connect a wallet
                </div>
              </div>
            </div>
          </div>
          <div className="footer-sub">
            <div className="space-mono h5">Join Our Weekly Digest</div>
            <div className="footer-sub-body">
              <div className="base-body-work footer-sub-body-text">
                Get exclusive promotions & updates straight to your inbox.
              </div>
              <div className="footer-subForm not-mobile">
                <SubForm />
              </div>
              <div className="only-mobile">
                <SubForm2 />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copy caption-work">
          Ⓒ NFT Market. Use this template freely
        </div>
      </div>
    </div>
  );
};
