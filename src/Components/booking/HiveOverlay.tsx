import { RegularPolygon } from 'react-konva';
import { Hive } from '../../Data/hiveSpace';

interface HiveOverlayProps {
  // Add the props for the SeatOverlay component
  hive: Hive;
  active?: boolean;
  onMouseEnter?: (hive_id: number) => void;
  onMouseLeave?: (hive_id: number) => void;
  onClick?: (hive_id: number) => void;
}

const RADIUS = 20;
const IDLE_OPACITY = 0.8;
export default function HiveOverlay({ hive, onMouseEnter, onMouseLeave, onClick, active }: HiveOverlayProps) {
  const handleMouseEnter = (e: any) => {
    e.target.getStage().container().style.cursor = hive.status === 'Available' ? 'pointer' : 'not-allowed';
    if (!active) {
      e.target.opacity(1);
    }
    if (onMouseEnter) {
      onMouseEnter(hive.id);
    }
  };

  const handleMouseLeave = (e: any) => {
    e.target.getStage().container().style.cursor = 'default';
    if (!active) {
      e.target.opacity(IDLE_OPACITY);
    }
    if (onMouseLeave) {
      onMouseLeave(hive.id);
    }
  };

  const handleClick = () => {
    if (hive.status === 'Available') {
      if (onClick) {
        onClick(hive.id);
      }
    }
  };
  return (
    <RegularPolygon
      sides={6}
      x={hive.x}
      y={hive.y}
      radius={RADIUS}
      fill={'#F3F0E9'}
      opacity={active ? 1 : IDLE_OPACITY}
      stroke={'#292929'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    ></RegularPolygon>
  );
}
