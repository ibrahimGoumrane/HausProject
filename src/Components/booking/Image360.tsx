import React from 'react';
import ReactPannellum, { getConfig } from 'react-pannellum';
interface Image360Props {
  activeSeatId: number | null;
}
const Image360: React.FC<Image360Props> = ({ activeSeatId }) => {
  const config = {
    autoRotate: -2,
    autoLoad: true,
    style: {
      width: '520px',
      height: '300px',
      background: '#000000',
    },
  };
  console.log(getConfig());

  return (
    <div className="border-[2px] border-black-primary w-[525px] h-[300px] overflow-hidden">
      {activeSeatId ? (
        <ReactPannellum id="1" sceneId="firstScene" imageSource="assets/360Image.jpg" config={config} />
      ) : (
        <h3 className="text-paragraph-secondary font-medium w-full h-full flex items-center justify-center">
          Select a seat to book
        </h3>
      )}
    </div>
  );
};

export default Image360;
