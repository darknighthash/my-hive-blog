import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ImageRenderer from './ImageRenderer';
import CodeRenderer from './CodeRenderer';

interface MarkdownRendererProps {
  content: string;
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
        code: ({ node, inline, className, children, ...props }) => (
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
