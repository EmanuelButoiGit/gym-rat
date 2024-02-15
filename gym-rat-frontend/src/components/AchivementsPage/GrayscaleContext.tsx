import { createContext, useContext, useState } from 'react';

// Context value type with a map of achievements
type GrayscaleContextType = {
  achievements: { [key: string]: boolean };
  unlockAchievement: (achievementName: string) => void;
};

const GrayscaleContext = createContext<GrayscaleContextType>({
  achievements: {},
  unlockAchievement: () => {},
});

export const useGrayscale = () => useContext(GrayscaleContext);

export const GrayscaleProvider = (props: any) => {
  const [achievements, setAchievements] = useState<{ [key: string]: boolean }>({});

  const unlockAchievement = (achievementName: string) => {
    setAchievements((prevAchievements) => ({
      ...prevAchievements,
      [achievementName]: true,
    }));
  };

  return (
    <GrayscaleContext.Provider value={{ achievements, unlockAchievement }}>
      {props.children}
    </GrayscaleContext.Provider>
  );
};
