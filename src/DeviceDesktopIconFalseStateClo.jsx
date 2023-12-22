import React from 'react';

import Line1Image from 'src/assets/images/Accordion_Line_1.png';

import Line2Image from 'src/assets/images/Accordion_Line_2.png';

import {
  styled
} from '@mui/material/styles';

import CaratDownn from 'src/components/CaratDown/CaratDown';

const DeviceDesktopIconFal = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `400px`,
  height: `68px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Line1 = styled("img")({
  height: `0px`,
  width: `400px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const AccordionName = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 0.85)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `32px`,
  top: `22px`,
});

const Line2 = styled("img")({
  height: `0px`,
  width: `400px`,
  position: `absolute`,
  left: `0px`,
  top: `68px`,
});

const Frame132 = styled("div")({
  borderRadius: `29px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `32px`,
  height: `32px`,
  left: `336px`,
  top: `18px`,
  overflow: `hidden`,
});

const CaratDown = styled(CaratDown)({
  width: `20px`,
  height: `20px`,
  position: `absolute`,
  left: `6px`,
  top: `6px`,
});


function DeviceDesktopIconFalseStateClo() {
  return (
    <DeviceDesktopIconFal>
      <Line1 src={Line1Image} loading='lazy' alt={"Line 1"}/>
      <AccordionName>
        {`Accordion name`}
      </AccordionName>
      <Line2 src={Line2Image} loading='lazy' alt={"Line 2"}/>
      <Frame132>
        <CaratDown/>
      </Frame132>
    </DeviceDesktopIconFal>);

  }

export default DeviceDesktopIconFalseStateClo;

  