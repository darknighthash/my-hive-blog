export default {
  testEnvironment: 'jsdom', // 使用 JSDOM 环境
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '@swc/jest', // 使用 @swc/jest 转换
    '^.+\\.(css|scss|sass|less|png|jpg|jpeg|gif|svg)$': 'jest-transform-stub', // 处理静态资源
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // 如果有路径别名配置
    '^/vite.svg$': '<rootDir>/public/vite.svg', // 将 /vite.svg 映射到 public/vite.svg
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // 初始化文件
};