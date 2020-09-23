import React from 'react';
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
} from '../components/Bloomd';
import { Section5 as NovaLinkFooter } from '../components/Bryant';

const Bloomd = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <NovaLinkFooter />
    </div>
  );
};

export default Bloomd;
