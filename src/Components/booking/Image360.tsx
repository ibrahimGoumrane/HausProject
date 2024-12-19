import React from 'react';
import ReactPannellum, { getConfig } from 'react-pannellum';

const Example: React.FC = () => {
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
    <div className="w-[530px] h-[300px] overflow-hidden">
      <ReactPannellum id="1" sceneId="firstScene" imageSource="assets/360Image.jpg" config={config} />
    </div>
  );
};

export default Example;
