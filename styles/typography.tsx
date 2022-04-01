import styled, { css } from 'styled-components';

import { c_brand_d_almost_black, c_brand_d_grey, c_brand_p_gold, c_error } from './colors';

// export const t_font_family = "Catamaran, sans-serif";
export const t_font_family = 'Inter, sans-serif';
export const t_font_family_title = 'Lora';
export const t_font_alice = 'Alice';
export const t_letter_spacing = '0.5px';
export const t_letter_spacing_title = '1px';

const base = css`
  color: ${(props) => (props.color ? `${props.color} !important` : c_brand_d_almost_black)};
  color: ${(props) => props.danger && c_error};
  color: ${(props) => props.grey && c_brand_d_grey};
  color: ${(props) => props.yellow && c_brand_p_gold};
  cursor: ${(props) => props.clickable && 'pointer'};
  font-family: ${t_font_family};
  font-size: ${(props) => props.fontSize && `${props.fontSize}px !important`};
  font-style: ${(props) => props.italic && 'italic'};
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight} !important` : 400)};
  letter-spacing: ${(props) => props.letterSpacing && `${props.letterSpacing} !important`};
  margin: ${(props) => props.margin && props.margin};
  margin: ${(props) => props.noMargin && 0};
  max-width: ${(props) => props.maxWidth && props.maxWidth};
  text-align: ${(props) => props.centered && 'center'};
  white-space: ${(props) => props.noWrap && 'no-wrap'};
  width: ${(props) => props.fitWidth && 'fit-content'};

  &:hover {
    text-decoration: ${(props) => props.clickable && 'underline'};
  }
`;

/* Titles */
export const t_hero = css`
  ${base};
  font-family: ${t_font_family_title};
  font-size: 48px;
  letter-spacing: 0.25px;
  line-height: 62.4px;
`;
export const HeroHeadingTitleElement = styled.h1`
  ${t_hero};
`;
export const HeroHeadingTitle = (props) => (
  <HeroHeadingTitleElement
    {...(props || {})}
    className={`heading-h1-title ${props?.className ? props?.className : ''}`}
    noMargin={props?.noMargin}
  />
);

export const t_heading_title = css`
  ${base};
  font-family: ${t_font_family_title};
  font-size: 36px;
  letter-spacing: 0.25px;
  line-height: 130%;
`;
export const HeadingTitleElement = styled.h2`
  ${t_heading_title};
`;
export const HeadingTitle = (props) => (
  <HeadingTitleElement
    {...(props || {})}
    className={`heading-h2-title ${props?.className ? props?.className : ''}`}
    noMargin={props?.noMargin}
  />
);

export const t_heading_secondary_title = css`
  ${base};
  font-family: ${t_font_family_title};
  font-size: 24px;
  line-height: 135%;
`;
export const HeadingSecondaryTitleElement = styled.h2`
  ${t_heading_secondary_title};
`;
export const HeadingSecondaryTitle = (props) => (
  <HeadingSecondaryTitleElement
    {...(props || {})}
    className={`heading-h2-title ${props?.className ? props?.className : ''}`}
    noMargin={props?.noMargin}
  />
);

export const t_heading_section_title = css`
  ${base};
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0.15px;
  line-height: 27px;
`;
export const SectionTitleElement = styled.h3`
  ${t_heading_section_title};
`;
export const SectionTitle = (props) => (
  <SectionTitleElement
    {...(props || {})}
    className={`section-title ${props?.className ? props?.className : ''}`}
    noMargin={props?.noMargin}
  />
);

export const t_mobile_heading = css`
  ${base};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.15px;
  line-height: 135%;
`;
export const MobileHeading = styled.h3`
  ${t_mobile_heading};
`;

/* Body */
export const t_body_hero = css`
  ${base};
  font-family: ${t_font_family} !important;
  font-size: 22px;
  letter-spacing: 0.15px;
  line-height: 140%;
`;
export const BodyHero = styled.h4`
  ${t_body_hero};
`;

export const t_body_large = css`
  ${base};
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0.15px;
  line-height: 140%;
`;
export const BodyLargeElement = styled.p`
  ${t_body_large};
`;
export const BodyLarge = (props) => (
  <BodyLargeElement
    {...(props || {})}
    className={`body-text-large ${props?.className ? props?.className : ''}`}
    noMargin={props?.noMargin}
  />
);

export const t_body_medium = css`
  ${base};
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.15px;
  line-height: 140%;
`;
export const BodyMediumElement = styled.p`
  ${t_body_medium};
`;
export const BodyMedium = (props) => (
  <BodyMediumElement
    {...(props || {})}
    className={`body-medium ${props?.className ? props?.className : ''}`}
    noMargin={props?.noMargin}
  />
);

export const t_body_small_caption = css`
  ${base};
  font-size: 12px;
  letter-spacing: 0.15px;
  line-height: 16.8px;
`;
const BodySmallCaptionElement = styled.p`
  ${t_body_small_caption};
`;
export const BodySmallCaption = (props) => (
  <BodySmallCaptionElement
    {...(props || {})}
    className={`body-small-caption ${props?.className ? props?.className : ''}`}
    fitWidth={props?.fitWidth}
    noMargin={props?.noMargin}
  />
);

/* Special */
export const t_title_italic = css`
  ${base};
  font-family: ${t_font_family_title};
  font-size: 24px;
  font-style: italic;
  line-height: 34px;
`;
export const TitleItalic = styled.p`
  ${t_title_italic};
`;

export const t_small_highlight_italic = css`
  ${base};
  color: ${c_brand_p_gold};
  font-size: 14px;
  font-style: italic;
  font-weight: 500;
  line-height: 140%;
`;
export const SmallHighlightItalicElement = styled.span`
  ${t_small_highlight_italic};
`;
export const SmallHighlightItalic = (props) => (
  <SmallHighlightItalicElement
    {...(props || {})}
    className={`small-highlight-italic ${props?.className ? props?.className : ''}`}
    noMargin={props?.noMargin}
  />
);

export const t_eyebrow = css`
  ${base};
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 140%;
  text-transform: uppercase;
`;
export const EyebrowElement = styled.p`
  ${t_eyebrow};
`;
export const Eyebrow = (props) => (
  <EyebrowElement
    {...(props || {})}
    className={`eyebrow ${props?.className ? props?.className : ''}`}
    noMargin={props?.noMargin}
  />
);

export const t_price_text = css`
  ${base};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 140%;
  text-transform: uppercase;
`;
export const PriceTextElement = styled.span`
  ${t_price_text};
`;
export const PriceText = (props) => (
  <PriceTextElement
    {...(props || {})}
    className={`price-text ${props?.className ? props?.className : ''}`}
    noMargin={props?.noMargin}
  />
);
