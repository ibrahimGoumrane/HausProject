import { KonvaEventObject } from 'konva/lib/Node';
import { Group, Line, RegularPolygon } from 'react-konva';
import { Hive } from '../../Data/hiveSpace';

interface HiveOverlayProps {
  hive: Hive;
  active?: boolean;
  configuration?: {
    radius: number;
    sides: number;
    rotation: number;
  };
  onMouseEnter?: (hive_id: number) => void;
  onMouseLeave?: (hive_id: number) => void;
  onClick?: (hive_id: number) => void;
}

const IDLE_OPACITY = 0.6;

export default function HiveOverlay({
  hive,
  configuration,
  onMouseEnter,
  onMouseLeave,
  onClick,
  active,
}: HiveOverlayProps) {
  const { radius, sides, rotation } = configuration || {};
  const RADIUS = radius || 15;
  const SIDES = sides || 100;
  const ROTATION = rotation || 0;

  const handleMouseEnter = (e: KonvaEventObject<MouseEvent>) => {
    const stage = e.target.getStage();
    if (stage) {
      stage.container().style.cursor = hive.status === 'Available' ? 'pointer' : 'not-allowed';
    }
    if (!active) {
      e.target.opacity(1);
    }
    if (onMouseEnter) {
      onMouseEnter(hive.id);
    }
  };

  const handleMouseLeave = (e: KonvaEventObject<MouseEvent>) => {
    const stage = e.target.getStage();
    if (stage) {
      stage.getStage().container().style.cursor = 'default';
    }
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
    <Group>
      <RegularPolygon
        sides={SIDES}
        x={hive.x}
        y={hive.y}
        rotation={ROTATION}
        radius={RADIUS}
        fill={hive.status === 'Available' ? '#F3F0E9' : '#5f5b5b'}
        opacity={active ? 1 : IDLE_OPACITY}
        stroke={'#292929'}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      />
      {hive.status !== 'Available' && (
        <>
          {/* "X" mark */}
          <Line
            points={[hive.x - RADIUS / 2, hive.y - RADIUS / 2, hive.x + RADIUS / 2, hive.y + RADIUS / 2]}
            stroke={'#292929'}
            strokeWidth={2}
          />
          <Line
            points={[hive.x + RADIUS / 2, hive.y - RADIUS / 2, hive.x - RADIUS / 2, hive.y + RADIUS / 2]}
            stroke={'#292929'}
            strokeWidth={2}
          />
        </>
      )}
    </Group>
  );
}
