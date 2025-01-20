import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ImageRenderer from './ImageRenderer';
import CodeRenderer from './CodeRenderer';

interface MarkdownRendererProps {
  content: string;
}

// 修改 CodeProps，确保 children 是可选的
interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode; // 将 children 设置为可选
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]} // 启用 GFM (如表格、任务列表)
      components={{
        img: ({ node, ...props }) => (
          // 定制 img 渲染
          <ImageRenderer {...props} />
        ),
        code: ({ inline, className, children, ...props }: CodeProps) => (
          // 定制代码渲染
          <CodeRenderer inline={inline} className={className} {...props}>
            {children}
          </CodeRenderer>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
