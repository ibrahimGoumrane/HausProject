import { useEffect, useState } from 'react';
import { Layer, Stage, Image } from 'react-konva';
import HiveOverlay from './HiveOverlay';
import { HiveSpace } from '../../Data/hiveSpace';

interface HiveChartProps {
  hiveSpace: HiveSpace;
}

export default function HiveChart({ hiveSpace }: HiveChartProps) {
  const stageWidth = hiveSpace.width;
  const stageHeight = hiveSpace.height;
  const [bgImage, setBgImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    if (hiveSpace.bgImage) {
      const image = new window.Image();
      image.src = hiveSpace.bgImage; // Load the image from hiveSpace.bgImage
      image.onload = () => setBgImage(image); // Update state when the image is loaded
    }
  }, [hiveSpace.bgImage]);

  // Constrain dragging within the image bounds
  const dragBoundFunc = (pos: { x: number; y: number }) => {
    const newX = Math.min(0, pos.x);
    const newY = Math.min(0, pos.y);

    return { x: newX, y: newY };
  };

  return (
    <>
      <Stage
        width={stageWidth}
        height={stageHeight}
        style={{ cursor: 'grab', maxHeight: '100vh', maxWidth: '100vw', overflow: 'hidden' }}
      >
        <Layer draggable={true} dragBoundFunc={dragBoundFunc}>
          {/* Background Image */}
          {bgImage && (
            <Image
              x={0}
              y={0}
              image={bgImage} // Set the loaded image
              width={hiveSpace.width} // Match the dimensions of the background
              height={hiveSpace.height}
            />
          )}
          {/* Hive overlays */}
          {hiveSpace.hives.map((seat) => (
            <HiveOverlay key={seat.id} hive={seat} />
          ))}
        </Layer>
      </Stage>
    </>
  );
}
