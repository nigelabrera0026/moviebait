
interface ControlBarProps {
    filter: string;
    handleFilterClick: (filter: string) => void;
    limit: number;
    setLimit: (limit: number) => void;
    viewMode: string;
    setViewMode: (viewMode: string) => void;
  }

exoport {}