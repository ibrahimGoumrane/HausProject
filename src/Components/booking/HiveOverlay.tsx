import { RegularPolygon } from 'react-konva';
import { Hive } from '../../Data/hiveSpace';

interface HiveOverlayProps {
  // Add the props for the SeatOverlay component
  hive: Hive;
  onMouseEnter?: (hive_id?: number) => void;
  onMouseLeave?: (hive_id?: number) => void;
  onClick?: (hive_id?: number) => void;
}

const RADIUS = 18;

export default function HiveOverlay({ hive, onMouseEnter }: HiveOverlayProps) {
  const handleMouseEnter = (e: any) => {
    e.target.getStage().container().style.cursor = hive.status === 'Available' ? 'pointer' : 'not-allowed';
    e.target.opacity(1);
    if (onMouseEnter) {
      onMouseEnter(hive.id);
    }
  };

  const handleMouseLeave = (e: any) => {
    e.target.getStage().container().style.cursor = 'default';
    e.target.opacity(0.7);
    if (onMouseEnter) {
      onMouseEnter();
    }
  };
  return (
    <RegularPolygon
      sides={6}
      x={hive.x}
      y={hive.y}
      radius={RADIUS}
      fill={'#F3F0E9'}
      opacity={0.7}
      stroke={'#292929'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ></RegularPolygon>
  );
}
