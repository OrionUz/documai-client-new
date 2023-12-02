import React, { CSSProperties } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownProps {
  text: string;
  aStyle?: CSSProperties;
  pStyle?: CSSProperties;
}

const CustomMarkdown: React.FC<MarkdownProps> = ({ text, aStyle, pStyle }) => {
  const renderers = {
    a: (props: any) => {
      return <a {...props} target="_blank" rel="noopener noreferrer" style={aStyle ?? {textDecoration: 'underline', fontWeight: 'bold'}} />;
    },
    p: (props: any) => {
      return <p {...props} style={ pStyle ?? { fontSize: 15, letterSpacing: 1.1 }} />;
    },
  };

  return <ReactMarkdown components={renderers} remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>;
};

export default CustomMarkdown;
