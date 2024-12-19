declare module 'react-pannellum' {
  import React from 'react';

  export interface PannellumConfig {
    autoRotate?: number;
  }

  export interface ReactPannellumProps {
    id: string;
    sceneId: string;
    imageSource: string;
    config?: PannellumConfig;
  }

  const ReactPannellum: React.FC<PannellumProps>;
  export default ReactPannellum;
  export function getConfig(): PannellumConfig;
}
