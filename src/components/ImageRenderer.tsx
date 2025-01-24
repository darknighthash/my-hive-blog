import React from 'react';

interface ImageRendererProps {
  src?: string; // 允许 src 为 undefined
  alt?: string;
}

const ImageRenderer: React.FC<ImageRendererProps> = ({ src, alt }) => {
  // 如果 src 为 undefined，渲染一个占位符或直接返回 null
  if (!src) {
    return null; // 或者渲染一个占位符图片
  }

  return (
    <span className="flex justify-center items-center mx-auto max-w-full h-full">
      <img
        src={src}
        alt={alt || ''}
        className="max-w-full h-auto max-h-[50vh]"
      />
    </span>
  );
};

export default ImageRenderer;