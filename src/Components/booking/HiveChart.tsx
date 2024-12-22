import { useEffect, useState } from 'react';
import { Layer, Stage, Image } from 'react-konva';
import HiveOverlay from './HiveOverlay';
import { Hive, HiveSpace } from '../../Data/hiveSpace';

interface HiveChartProps {
  hiveSpace: HiveSpace;
  activeHive?: Hive | null;
  onHiveSelection?: (hive_id: number) => void;
}

export default function HiveChart({ hiveSpace, activeHive, onHiveSelection }: HiveChartProps) {
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
    const newX = Math.min(0, pos.x);
    const newY = Math.min(0, pos.y);

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
        <Layer dragBoundFunc={dragBoundFunc}>
          {/* Background Image */}
          {bgImage && <Image x={0} y={0} image={bgImage} width={hiveSpace.width} height={hiveSpace.height} />}
          {/* Hive overlays */}
          {hiveSpace.hives.map((hive) => (
            <HiveOverlay key={hive.id} hive={hive} active={hive.id === activeHiveState?.id} onClick={handleClick} />
          ))}
        </Layer>
      </Stage>
    </>
  );
}
