import styled from 'styled-components';

import media from '../utils/media';

export const Container = styled.article`
  margin-top: 6rem;
  font-size: 1.8rem;

  ${media.phone`
    margin-top: 4rem;
    font-size: 1.6rem;
  `}

  p {
    line-height: 1.5;
  }

  ul,
  ol {
    padding-left: 1rem;
  }

  img {
    max-width: 100%;
  }

  blockquote {
    font-size: 2.2rem;
    font-style: italic;
    line-height: 44.4px;
    overflow-wrap: break-word;
    margin: 3rem 0 3rem 0;
    padding: 0 0 0 2rem;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    margin: 2rem 0 2rem;
  }

  h1 {
    position: relative;
    margin-bottom: 1.5rem;
    font-size: 3rem;
    font-weight: 400;
  }

  h2 {
    font-size: 2.6rem;
    font-weight: 700;
    padding: 0;
    margin: 5rem 0 0 -1.883px;
    text-align: left;
    line-height: 34.5px;
    letter-spacing: -0.45px;
  }

  h3 {
    margin: 5rem 0 2rem;
    font-size: 2.2rem;
  }

  p,
  i,
  a {
    margin-top: 21px;
    letter-spacing: -0.03px;
    line-height: 1.88;
    color: inherit;
  }

  a {
    word-break: break-all;
  }

  h1 > a,
  h2 > a,
  h3 > a,
  h4 > a,
  h5 > a,
  h6 > a {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-150%, -116%);
  }

  hr {
    border: 0;
    border-top: 0.1rem solid #ccc;
    display: block;
    height: 1rem;
    padding: 0;
  }

  figure {
    margin-left: -5rem;
    margin-right: -5rem;
    margin-top: 0;
  }

  ol {
    margin-left: 1rem;
  }

  ol li {
    line-height: 1.5;
    margin: 0.5rem 0;
  }

  ul li {
    line-height: 1.5;
    margin: 0.5rem 0;
    font-size: 1.8rem;
  }

  ol li > p {
    display: inline;
  }

  li[role='treeitem'] {
    margin: 0;
  }

  ol li::before {
    font-size: small;
    color: gray;
    margin-right: 0.6rem;
  }

  pre {
    overflow-x: auto;
    word-wrap: break-word;

    &[aria-hidden] {
      background-color: inherit;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: white;
    background: none;
    font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New,
      monospace;
    font-feature-settings: normal;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    margin-bottom: 0;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    overflow-x: auto;
    padding: 1.3125rem;
  }

  pre[aria-hidden='true'] {
    overflow-x: unset;
  }

  pre[class*='language-']::-moz-selection {
    /* Firefox */
    background: hsl(207, 4%, 16%);
  }

  pre[class*='language-']::selection {
    /* Safari */
    background: hsl(207, 4%, 16%);
  }

  /* Text Selection colour */
  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: hsla(0, 0%, 100%, 0.15);
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection {
    text-shadow: none;
    background: hsla(0, 0%, 100%, 0.15);
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    border-radius: 0.3em;
    background: rgba(255, 229, 100, 0.2);
    color: #1a1a1a;
    padding: 0.15em 0.2em 0.05em;
    white-space: normal;
  }
`;

export const Pre = styled.pre`
  text-align: left;
  margin: 0.5em 0;
  overflow-x: auto;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }

  &[class*='language-'] {
    border: 0;
    padding: 1.5rem;
    border-radius: 0;
  }
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

export const Header = styled.header`
  margin-bottom: 5rem;

  ${media.tablet`
    text-align: center;
  `};
`;

export const Title = styled.h1`
  margin-bottom: 1rem;

  && {
    font-size: 4.2rem;
  }

  ${media.phone`
    && {
      font-size: 2.8rem;
    }
    text-align: center;
  `}
`;

export const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0px;
  margin-bottom: 4rem;
`;
