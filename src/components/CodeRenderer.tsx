import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeRendererProps {
  inline?: boolean;
  className?: string;
  children: React.ReactNode;
}

const CodeRenderer: React.FC<CodeRendererProps> = ({ inline, className, children }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (children) {
      navigator.clipboard.writeText(String(children).replace(/\n$/, ''));
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // 2秒后恢复按钮状态
    }
  };

  const match = /language-(\w+)/.exec(className || '');

  // 如果是代码块（非内联），使用 SyntaxHighlighter 并显示复制按钮
  if (!inline && match) {
    return (
      <div style={{ position: 'relative' }}>
        <button
          onClick={handleCopy}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            padding: '4px 8px',
            fontSize: '12px',
            background: isCopied ? '#4caf50' : '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
        <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div">
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </div>
    );
  }

  // 如果是内联代码，直接渲染为 <code>
  return <code className={className}>{children}</code>;
};

export default CodeRenderer;
