import React, { useEffect } from "react";
import "./styles/globals.css";
import styled from "styled-components";
import Logo1 from "./assets/logo-1.svg";
import GMImg1 from "./assets/gm-1.svg";
import Logo2 from "./assets/logo-2.svg";
import GMImg2 from "./assets/gm-2.svg";
import StarsBgImg from "./assets/stars-bg.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linear, Back } from "gsap/dist/gsap";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const GMAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".fake-container-anim",
        start: "top 0%",
        end: "bottom 100%",
        scrub: 0,
        ease: Linear.easeInOut,
      },
    });
    GMAnim.fromTo(
      ".hero-section-1-anim",
      {
        height: "100vh",
      },
      {
        height: "0",
        ease: Linear.easeInOut,
      }
    ).fromTo(
      ".scrollbox-anim",
      {
        transform: "translate(-50%, 0)",
      },
      {
        transform: "translate(-50%, 4rem)",
        ease: Back.easeInOut,
      },
      0
    );
    gsap.fromTo(
      ".stars-bg-anim",
      {
        scale: 2,
        rotate: 30,
      },
      {
        scale: 1,
        rotate: 0,
        duration: 15,
        yoyo: true,
        repeat: -1,
        ease: Linear.easeInOut,
      }
    );

    const GMSection2Anim = gsap.timeline({
      scrollTrigger: {
        trigger: ".fake-container-anim",
        start: "bottom 120%",
        ease: Linear.easeInOut,
      },
    });
    GMSection2Anim.to(
      ".hero-section-2-img",

      {
        transform: "translate(-50%, -65%)",
        opacity: 0,
        duration: 1,
      }
    ).fromTo(
      ".hero-section-2-fade-box",
      {
        transform: "translate(-50%, -35%)",
        opacity: 0,
      },
      {
        transform: "translate(-50%, -50%)",
        opacity: 1,
        duration: 1,
      }
    );
  }, []);

  return (
    <MainContainer>
      <HeroSection1 className="hero-section-1-anim">
        <WhiteBottom>
          <div className="scrollbox-anim">☀️ Scroll ☀️</div>
        </WhiteBottom>
        <StarsBg className="stars-bg-anim" src={StarsBgImg} />
        <MaxWidthBox>
          <HeroSectionContent>
            <Header1>
              <img src={Logo1} alt="Logo1" />
              <button>Download GM</button>
            </Header1>
            <img src={GMImg1} alt="GMImg1" />
            <Footer1>
              <div>
                <a href="#">FAQs</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
              </div>
              <p>© 2023 GM</p>
            </Footer1>
          </HeroSectionContent>
        </MaxWidthBox>
      </HeroSection1>
      <HeroSection2>
        <MaxWidthBox>
          <HeroSectionContent>
            <Header2>
              <img src={Logo2} alt="Logo1" />
              <button>Download GM</button>
            </Header2>
            <img className="hero-section-2-img" src={GMImg2} alt="GMImg1" />
            <HeroSection2FadeBox className="hero-section-2-fade-box">
              <h2>Download GM By Clicking Below</h2>
              <button>Download GM</button>
            </HeroSection2FadeBox>
            <Footer2>
              <div>
                <a href="#">FAQs</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
              </div>
              <p>© 2023 GM</p>
            </Footer2>
          </HeroSectionContent>
        </MaxWidthBox>
      </HeroSection2>
      <FakeContainer className="fake-container-anim"></FakeContainer>
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.main`
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
`;
const MaxWidthBox = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1500px;
  padding: 0 5rem;
  margin: 0 auto;
`;

const HeroSection1 = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: #061828;
  overflow: hidden;
`;
const StarsBg = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;
const WhiteBottom = styled.div`
  width: 100%;
  height: 4rem;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 250;
  & div {
    width: 1300vw;
    height: 1300vw;
    border-radius: 50%;
    background-color: #e4f0fa;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 1.65rem;
    color: #061828;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    padding: 0.75rem 0 0 0;
  }
`;
const HeroSectionContent = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 5rem 0 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & > img {
    width: max-content;
    height: 27.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const HeroSection2FadeBox = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  & h2 {
    font-size: 5rem;
    color: #061828;
    margin: 0 0 1.5rem 0;
    font-weight: 600;
  }
  & button {
    padding: 1.5rem 3.5rem;
    font-size: 1.75rem;
    background-color: #f7931b;
    outline: 0;
    color: #fff;
    border-radius: 1000px;
    transition: 0.5s;
    border: 0;
    &:hover {
      background-color: #061828;
    }
  }
`;

const Header1 = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & img {
    width: max-content;
    height: 5.5rem;
    object-fit: contain;
  }
  & button {
    padding: 1.75rem 5rem;
    font-size: 2rem;
    background-color: transparent;
    outline: 0;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 1000px;
    transition: 0.5s;
    &:hover {
      color: #061828;
      background-color: #fff;
    }
  }
`;
const Footer1 = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    width: max-content;
    display: flex;
    align-items: center;
    & > a {
      font-size: 1.65rem;
      color: #fff;
      transition: 0.35s;
      margin: 0 3.5rem 0 0;
      &:hover {
        color: #9af4b4;
      }
    }
  }
  & > p {
    font-size: 1.65rem;
    color: #fff;
  }
`;

const HeroSection2 = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 00;
  background-color: #e4f0fa;
`;
const Header2 = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & img {
    width: max-content;
    height: 5.5rem;
    object-fit: contain;
  }
  & button {
    padding: 1.75rem 5rem;
    font-size: 2rem;
    background-color: transparent;
    outline: 0;
    border: 2px solid #061828;
    color: #061828;
    border-radius: 1000px;
    transition: 0.5s;
    &:hover {
      color: #e4f0fa;
      background-color: #061828;
    }
  }
`;
const Footer2 = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    width: max-content;
    display: flex;
    align-items: center;
    & > a {
      font-size: 1.65rem;
      color: #061828;
      transition: 0.35s;
      margin: 0 3.5rem 0 0;
      &:hover {
        color: #9af4b4;
      }
    }
  }
  & > p {
    font-size: 1.65rem;
    color: #061828;
  }
`;
const FakeContainer = styled.section`
  width: 100%;
  height: 200vh;
`;
