import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ImageRenderer from './ImageRenderer';
import CodeRenderer from './CodeRenderer';
import { H2, H3, H4 } from './Headings'; // 导入标题组件

interface MarkdownRendererProps {
  content: string;
}

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // 自定义图片渲染
        img: ({ node, ...props }) => <ImageRenderer {...props} />,

        // 自定义代码渲染
        code: ({ inline, className, children, ...props }: CodeProps) => (
          <CodeRenderer inline={inline} className={className} {...props}>
            {children}
          </CodeRenderer>
        ),

        // 自定义标题渲染
        h2: ({ node, ...props }) => <H2 {...props} />, // 使用 H2 组件
        h3: ({ node, ...props }) => <H3 {...props} />, // 使用 H3 组件
        h4: ({ node, ...props }) => <H4 {...props} />, // 使用 H4 组件
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;