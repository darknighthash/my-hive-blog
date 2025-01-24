import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeRendererProps {
  inline?: boolean;
  className?: string;
  children: React.ReactNode;
}

const CodeRenderer: React.FC<CodeRendererProps> = ({ inline, className, children }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (children) {
      const codeString = React.Children.toArray(children).join('').replace(/\n$/, '');
      navigator.clipboard.writeText(codeString);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  // 动态提取语言类型
  const language = className?.startsWith('language-')
    ? className.replace('language-', '')
    : 'text';

  // 将子组件内容转为纯字符串
  const codeString = React.Children.toArray(children).join('').replace(/\n$/, '');

  // 判断是否为多行代码块（存在换行符）
  const isMultiLineCodeBlock = codeString.includes('\n');

  if (!inline && isMultiLineCodeBlock) {
    return (
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl min-w-[300px]">
          <button
            onClick={handleCopy}
            className={`absolute top-2 right-2 px-2 py-1 text-xs ${
              isCopied ? 'bg-green-500' : 'bg-gray-700'
            } text-white border-none rounded cursor-pointer z-10 hover:bg-gray-600 transition-colors`}
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
          <SyntaxHighlighter
            style={vscDarkPlus}
            language={language}
            className="rounded-lg overflow-x-auto bg-gray-900 p-4 text-white"
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  }

  // 如果是单行代码，直接渲染为 <code>
  return (
    <code className={className}>
      {children}
    </code>
  );
};

export default CodeRenderer;
