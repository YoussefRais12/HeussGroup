import React from "react";
import styled from "styled-components";
// Assets
import LayoutIcon from "../../assets/svg/Services/LayoutIcon";
import NoDrillIcon from "../../assets/svg/Services/NoDrillIcon";
import LightbulbIcon from "../../assets/svg/Services/LightbulbIcon";
import PlayButtonIcon from "../../assets/svg/Services/PlayButtonIcon";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "layout":
      getIcon = <LayoutIcon />;
      break;
    case "no-drill":
      getIcon = <NoDrillIcon />;
      break;
    case "lightbulb":
      getIcon = <LightbulbIcon />;
      break;
    case "play-button":
      getIcon = <PlayButtonIcon />;
      break;
    default:
      getIcon = <LayoutIcon />;
      break;
  }

  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
