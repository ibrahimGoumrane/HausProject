import { useEffect, useState } from 'react';
import { Image, Layer, Stage } from 'react-konva';
import { Hive, HiveSpace } from '../../Data/hiveSpace';
import HiveOverlay from './HiveOverlay';

interface HiveChartProps {
  hiveSpace: HiveSpace;
  activeHive?: Hive | null;
  onHiveSelection?: (hive_id: number) => void;
  configuration?: {
    radius: number;
    sides: number;
    rotation: number;
  };
}

export default function HiveChart({ hiveSpace, activeHive, onHiveSelection, configuration }: HiveChartProps) {
  const stageWidth = hiveSpace.width;
  const stageHeight = hiveSpace.height;
  const [bgImage, setBgImage] = useState<HTMLImageElement | null>(null);
  const [activeHiveState, setActiveHive] = useState<Hive | null>(activeHive ? activeHive : null);

  useEffect(() => {
    if (hiveSpace.bgImage) {
      const image = new window.Image();
      image.src = hiveSpace.bgImage;
      image.onload = () => setBgImage(image);
    }
  }, [hiveSpace.bgImage]);

  // Constrain dragging within the image bounds
  const dragBoundFunc = (pos: { x: number; y: number }) => {
    let newX = Math.min(0, pos.x);
    let newY = Math.min(0, pos.y);
    const { width } = document.querySelector('.konvajs-content')?.getBoundingClientRect() || { width: 0 };
    console.log(width);
    if (pos.x > 0 || pos.y > 40 || pos.y < -40) {
      newX = 0;
      newY = 0;
    } else if (width - pos.x > stageWidth + 30) {
      newX = width - stageWidth;
      newY = 0.5;
    }
    return { x: newX, y: newY };
  };
  const handleClick = (hive_id: number) => {
    const hive = hiveSpace.hives.find((hive) => hive.id === hive_id);
    if (hive) {
      setActiveHive(hive);
      if (onHiveSelection) {
        onHiveSelection(hive_id);
      }
    }
  };
  return (
    <>
      <Stage
        width={stageWidth}
        height={stageHeight}
        style={{ cursor: 'grab', maxHeight: '100vh', maxWidth: '100vw', overflow: 'hidden' }}
        className="cursor-grab flex items-center border-2 border-black-primary"
      >
        <Layer dragBoundFunc={dragBoundFunc} draggable>
          {/* Background Image */}
          {bgImage && <Image x={0} y={0} image={bgImage} width={stageWidth} height={stageHeight} />}
          {/* Hive overlays */}
          {hiveSpace.hives.map((hive) => (
            <HiveOverlay
              key={hive.id}
              hive={hive}
              configuration={configuration}
              active={hive.id === activeHiveState?.id}
              onClick={handleClick}
            />
          ))}
        </Layer>
      </Stage>
    </>
  );
}
