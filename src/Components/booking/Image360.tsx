import React from 'react';
import ReactPannellum from 'react-pannellum';
import { Hive } from '../../Data/hiveSpace';
interface Image360Props {
  activeHive: Hive | null;
}
const Image360: React.FC<Image360Props> = ({ activeHive }) => {
  const config = {
    autoRotate: -2,
    autoLoad: true,
  };

  return (
    <div className="border-[2px] border-black-primary w-full h-full overflow-hidden">
      {activeHive ? (
        <ReactPannellum
          key={activeHive.id}
          id={activeHive.id.toString()}
          sceneId="firstScene"
          imageSource={activeHive.panImage}
          config={config}
          style={{
            width: '100%',
            height: '100%',
            background: '#FFFFFF',
          }}
        />
      ) : (
        <h3 className="text-paragraph-secondary font-medium w-full h-full flex items-center justify-center">
          Select a seat to book
        </h3>
      )}
    </div>
  );
};

export default Image360;
