import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksBodyarticle extends Schema.Component {
  collectionName: 'components_blocks_bodyarticles';
  info: {
    displayName: 'Bodyarticle';
  };
  attributes: {
    bodycontent: Attribute.Component<'section.richtext'>;
    faqcontent: Attribute.Component<'section.faqtext'>;
    footercontent: Attribute.Component<'section.subtext'>;
  };
}

export interface BlocksButton extends Schema.Component {
  collectionName: 'components_blocks_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    button: Attribute.Component<'section.button'>;
  };
}

export interface BlocksFooter extends Schema.Component {
  collectionName: 'components_blocks_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    footer: Attribute.Component<'section.footer'>;
  };
}

export interface BlocksHeader extends Schema.Component {
  collectionName: 'components_blocks_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logo: Attribute.Component<'section.logo'>;
    runningtext: Attribute.Component<'section.runtext'>;
    slide: Attribute.Component<'section.slide'>;
  };
}

export interface SectionButton extends Schema.Component {
  collectionName: 'components_section_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    Daftar: Attribute.Component<'shared.link'>;
    Login: Attribute.Component<'shared.link'>;
    Alternatif: Attribute.Component<'shared.link', true> &
      Attribute.SetMinMax<{
        min: 2;
        max: 5;
      }>;
  };
}

export interface SectionFaqtext extends Schema.Component {
  collectionName: 'components_section_faqtexts';
  info: {
    displayName: 'faqtext';
  };
  attributes: {
    title: Attribute.String;
    headline: Attribute.Text;
    faqcontext: Attribute.Component<'shared.faq', true>;
  };
}

export interface SectionFooter extends Schema.Component {
  collectionName: 'components_section_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    footerlink: Attribute.Component<'shared.link', true>;
  };
}

export interface SectionLogo extends Schema.Component {
  collectionName: 'components_section_logos';
  info: {
    displayName: 'logo';
    icon: '';
  };
  attributes: {
    logoBrand: Attribute.Media;
  };
}

export interface SectionRichtext extends Schema.Component {
  collectionName: 'components_section_richtexts';
  info: {
    displayName: 'richtext';
  };
  attributes: {
    linetext: Attribute.Blocks;
  };
}

export interface SectionRuntext extends Schema.Component {
  collectionName: 'components_section_runtexts';
  info: {
    displayName: 'runtext';
  };
  attributes: {
    marquee: Attribute.Text;
  };
}

export interface SectionSlide extends Schema.Component {
  collectionName: 'components_section_slides';
  info: {
    displayName: 'slide';
  };
  attributes: {
    slideImage: Attribute.Media;
  };
}

export interface SectionSubtext extends Schema.Component {
  collectionName: 'components_section_subtexts';
  info: {
    displayName: 'subtext';
  };
  attributes: {
    copyright: Attribute.Text;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
    description: '';
  };
  attributes: {
    canonicalUrl: Attribute.String;
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaKeyword: Attribute.Text;
    favicon: Attribute.Media;
  };
}

export interface SharedFaq extends Schema.Component {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Text;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.bodyarticle': BlocksBodyarticle;
      'blocks.button': BlocksButton;
      'blocks.footer': BlocksFooter;
      'blocks.header': BlocksHeader;
      'section.button': SectionButton;
      'section.faqtext': SectionFaqtext;
      'section.footer': SectionFooter;
      'section.logo': SectionLogo;
      'section.richtext': SectionRichtext;
      'section.runtext': SectionRuntext;
      'section.slide': SectionSlide;
      'section.subtext': SectionSubtext;
      'seo.meta-data': SeoMetaData;
      'shared.faq': SharedFaq;
      'shared.link': SharedLink;
    }
  }
}
