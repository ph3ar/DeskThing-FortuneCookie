import { useEffect, useState } from 'react';
import { SettingsStore } from '../../stores/settingsStore';
import './header.css';

const settingsStore = SettingsStore.getInstance();

interface HeaderProps {
  lastUpdated?: string;
}

const Header = ({ lastUpdated }: HeaderProps) => {
  const [time, setTime] = useState(() => {
    return settingsStore.getTime().trim();
  });

  useEffect(() => {
    const handleTime = async (newTime: string) => {
      setTime(newTime.trim());
    };

    const removeTimeListener = settingsStore.onTime(handleTime);

    return () => {
      removeTimeListener();
    };
  }, []);

  return (
    <div className='header'>
      <span className='header--title'>
        🥠 Fortune Cookie
      </span>
      <span className='header--time'>{time}</span>
      {lastUpdated && (
        <span className='header--updated'>
          Updated: {lastUpdated}
        </span>
      )}
    </div>
  );
};

export default Header;
