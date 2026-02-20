'use client';

import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { store } from '../store/store';


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#4a69e2',
            colorSuccess: '#52c41a',
            colorWarning: '#ffa52f',
            colorError: '#ff4d4f',
            borderRadius: 8,
            fontFamily: 'var(--font-open-sans)',
          },
        }}
      >
        {children}
      </ConfigProvider>
    </Provider>
  );
}
