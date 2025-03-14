import { createContext, useContext, useState, ReactNode } from 'react';
import { Campus, Hostel } from '@/types';

interface HostelContextType {
  selectedCampus: Campus;
  selectedHostel: string | null;
  setSelectedCampus: (campus: Campus) => void;
  setSelectedHostel: (hostelId: string | null) => void;
}

const HostelContext = createContext<HostelContextType | undefined>(undefined);

export function HostelProvider({ children }: { children: ReactNode }) {
  const [selectedCampus, setSelectedCampus] = useState<Campus>('Main');
  const [selectedHostel, setSelectedHostel] = useState<string | null>('nabagereka'); // Default hostel

  return (
    <HostelContext.Provider
      value={{
        selectedCampus,
        selectedHostel,
        setSelectedCampus,
        setSelectedHostel,
      }}
    >
      {children}
    </HostelContext.Provider>
  );
}

export function useHostel() {
  const context = useContext(HostelContext);
  if (context === undefined) {
    throw new Error('useHostel must be used within a HostelProvider');
  }
  return context;
}