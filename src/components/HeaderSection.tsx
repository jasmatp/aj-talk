import React from 'react';
import './Header.css'
import { HeaderSectionProps } from '../types/types';

const HeaderSection: React.FC<HeaderSectionProps> = ({ description, descriptionGuj }) => (
  <div className="d-flex align-items-center slogan-section">
      <p className="slogan-description">{description}</p>
      <p className="slogan-description">{descriptionGuj}</p>
  </div>
);

export default HeaderSection;
