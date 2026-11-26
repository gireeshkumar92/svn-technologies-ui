import {
  Plane, Shield, Cog, Layers, Wrench, ClipboardCheck, Crosshair, PenTool, CalendarClock, Truck,
  Ruler, Users, Clock, Handshake,
} from 'lucide-react';

const map = {
  plane: Plane, shield: Shield, cog: Cog, layers: Layers, wrench: Wrench, clipboard: ClipboardCheck,
  crosshair: Crosshair, pen: PenTool, calendar: CalendarClock, truck: Truck, ruler: Ruler,
  users: Users, clock: Clock, handshake: Handshake,
};

export function Icon({ name, size = 24, ...rest }) {
  const C = map[name] || Cog;
  return <C size={size} aria-hidden="true" {...rest} />;
}
