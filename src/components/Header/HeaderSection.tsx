import React from 'react';
import './Header.css'
import { HeaderSectionProps } from '../../types/types';

const HeaderSection: React.FC<HeaderSectionProps> = ({ description }) => (
  <div className="d-flex align-items-center slogan-section">
      <p className="slogan-description">👋{description}👋</p>
  </div>
);

export default HeaderSection;
