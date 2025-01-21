import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // 导入 dark+ 主题

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

  // 判断是否为多行代码块
  const isMultiLineCodeBlock = !inline && String(children).includes('\n');

  // 如果是多行代码块，使用 SyntaxHighlighter 并显示复制按钮
  if (isMultiLineCodeBlock) {
    return (
      <div className="flex justify-center"> {/* 水平居中 */}
        <div className="relative w-full max-w-4xl min-w-[300px]"> {/* 设置最大宽度和最小宽度 */}
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
            language="text"
            PreTag="div"
            className="rounded-lg overflow-x-auto bg-gray-900 p-4" // 添加灰色背景、内边距和圆角
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  }

  // 如果是单行代码或内联代码，直接渲染为 <code>
  return <code className={className}>{children}</code>;
};

export default CodeRenderer;