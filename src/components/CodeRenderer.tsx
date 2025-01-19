import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeRendererProps {
  inline?: boolean; // 允许 inline 属性
  className?: string;
  children: React.ReactNode;
}

const CodeRenderer: React.FC<CodeRendererProps> = ({ inline, className, children }) => {
  const match = /language-(\w+)/.exec(className || '');

  // 如果是代码块（非内联），使用 SyntaxHighlighter
  if (!inline && match) {
    return (
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        PreTag="div"
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    );
  }

  // 如果是内联代码，直接渲染为 <code>
  return (
    <code className={className}>
      {children}
    </code>
  );
};

export default CodeRenderer;
