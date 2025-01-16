// src/__tests__/App.test.tsx
import { render, screen ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App Component', () => {
    // 测试渲染
    test('renders Vite and React logos', () => {
      render(<App />);
  
      // 检查 Vite Logo 是否渲染
      const viteLogo = screen.getByAltText('Vite logo');
      expect(viteLogo).toBeInTheDocument();
  
      // 检查 React Logo 是否渲染
      const reactLogo = screen.getByAltText('React logo');
      expect(reactLogo).toBeInTheDocument();
    });
  
    test('renders the title "Vite + React"', () => {
      render(<App />);
  
      // 检查标题是否正确显示
      const titleElement = screen.getByText(/Vite \+ React/i);
      expect(titleElement).toBeInTheDocument();
    });
  
    test('renders the initial count as 0', () => {
      render(<App />);
  
      // 检查按钮是否显示初始计数 0
      const buttonElement = screen.getByText(/Count is 0/i);
      expect(buttonElement).toBeInTheDocument();
    });
  
    // 测试交互
    test('increments count when button is clicked', () => {
      render(<App />);
  
      // 找到按钮并点击
      const buttonElement = screen.getByText(/Count is 0/i);
      fireEvent.click(buttonElement);
  
      // 检查计数是否增加到 1
      expect(buttonElement.textContent).toBe('Count is 1');
    });
  
    // 快照测试
    test('matches snapshot', () => {
      const { asFragment } = render(<App />);
      expect(asFragment()).toMatchSnapshot();
    });
  });