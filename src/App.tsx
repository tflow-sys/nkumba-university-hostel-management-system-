import { ConfigProvider, theme } from 'antd';
import { HostelProvider } from '@/contexts/HostelContext';
import MainLayout from '@/components/layout/MainLayout';
import Dashboard from '@/components/Dashboard';

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#1677ff',
          borderRadius: 6,
        },
      }}
    >
      <HostelProvider>
        <MainLayout>
          <Dashboard />
        </MainLayout>
      </HostelProvider>
    </ConfigProvider>
  );
}

export default App;