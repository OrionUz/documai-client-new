import React, { CSSProperties } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {coldarkDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MarkdownProps {
  text: string;
  aStyle?: CSSProperties;
  pStyle?: CSSProperties;
  codeStyle?: {
    [key: string]: React.CSSProperties;
};
}

const CustomMarkdown: React.FC<MarkdownProps> = ({ text, aStyle, pStyle, codeStyle }) => {
  const renderers = {
    a: (props: any) => {
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      return <a {...props} target="_blank" rel="noopener noreferrer" style={aStyle ?? {textDecoration: 'underline', fontWeight: 'bold'}} />;
    },
    p: (props: any) => {
      return <p {...props} style={ pStyle ?? { fontSize: 15, letterSpacing: 1.1 }} />;
    },
    code: ({ inline, className, children }: any) => {
      const language = className && className.split('-')[1];
      if (inline) {
        return <code>{children}</code>;
      }

      return (
        <SyntaxHighlighter language={language} style={codeStyle ?? coldarkDark}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <ReactMarkdown
      components={renderers}
      remarkPlugins={[remarkGfm, remarkAutolinkHeadings as any]}
    >
      {text}
    </ReactMarkdown>
  );
};

export default CustomMarkdown;
