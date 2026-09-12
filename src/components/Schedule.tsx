import { useState, useMemo, useRef, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  schedule,
  scheduleDays,
  scheduleFilters,
  classes,
  type ScheduleSlot,
} from '@/data/brand';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Clock, User, Users, Gauge } from 'lucide-react';

const dayAbbrevs: Record<string, string> = {
  Monday: 'Mon',
  Tuesday: 'Tue',
  Wednesday: 'Wed',
  Thursday: 'Thu',
  Friday: 'Fri',
  Saturday: 'Sat',
  Sunday: 'Sun',
};

type TooltipData = {
  slot: ScheduleSlot;
  x: number;
  y: number;
};

export function Schedule() {
  const reduced = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeDay, setActiveDay] = useState('Monday');
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const getClassInfo = (classId: string) => classes.find((c) => c.id === classId);

  const filterClass = (slot: ScheduleSlot): boolean => {
    if (activeFilter === 'All') return true;
    const cls = getClassInfo(slot.classId);
    if (!cls) return false;
    const filterMap: Record<string, string[]> = {
      Pilates: ['Body & Movement'],
      Fitness: ['Fitness'],
      Yoga: ['Group Classes'],
      Functional: ['Fitness'],
      Cardio: ['Fitness'],
      'Personal Training': ['Performance'],
    };
    const categories = filterMap[activeFilter];
    if (!categories) return false;
    const name = cls.name.toLowerCase();
    if (activeFilter === 'Pilates') return name.includes('pilates');
    if (activeFilter === 'Yoga') return name.includes('yoga');
    if (activeFilter === 'Functional') return name.includes('functional') || name.includes('cross') || name.includes('circuit');
    if (activeFilter === 'Cardio') return name.includes('cardio') || name.includes('cycling') || name.includes('hiit');
    if (activeFilter === 'Personal Training') return name.includes('personal');
    return categories.includes(cls.category);
  };

  const filteredSchedule = useMemo(
    () => schedule.filter(filterClass),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeFilter]
  );

  const allTimes = useMemo(() => {
    const times = new Set<string>();
    schedule.forEach((s) => times.add(s.time));
    return Array.from(times).sort();
  }, []);

  const getSlotForCell = (day: string, time: string) =>
    filteredSchedule.find((s) => s.day === day && s.time === time);

  const handleSlotHover = (e: MouseEvent, slot: ScheduleSlot) => {
    if (!gridRef.current) return;
    const rect = gridRef.current.getBoundingClientRect();
    const cellRect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = cellRect.left - rect.left + cellRect.width / 2;
    const y = cellRect.top - rect.top + cellRect.height / 2;
    setTooltip({ slot, x, y });
  };

  // Mobile: get slots for selected day
  const mobileDaySlots = useMemo(
    () =>
      filteredSchedule
        .filter((s) => s.day === activeDay)
        .sort((a, b) => a.time.localeCompare(b.time)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeDay, activeFilter]
  );

  return (
    <section id="schedule" className="relative bg-charcoal py-24 md:py-40">
      <div className="container-edge">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500 font-medium mb-4">
            04 — Schedule
          </p>
          <h2 className="font-display text-ivory text-display-sm font-light">
            The week ahead.
          </h2>
        </div>

        {/* Filter row — fixed separate control, never overlaps grid */}
        <div className="relative z-20 mb-8 flex flex-wrap gap-2">
          {scheduleFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-sage-400 text-ivory'
                  : 'bg-stone-800 text-stone-400 hover:text-ivory hover:bg-stone-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Desktop: grid */}
        <div
          ref={gridRef}
          className="hidden lg:block relative"
          onMouseLeave={() => setTooltip(null)}
        >
          {/* Day headers */}
          <div className="grid grid-cols-8 gap-px mb-px">
            <div className="bg-charcoal" />
            {scheduleDays.map((day) => (
              <div
                key={day}
                className="bg-charcoal py-3 text-center text-xs uppercase tracking-[0.2em] text-stone-400 font-medium"
              >
                {dayAbbrevs[day]}
              </div>
            ))}
          </div>

          {/* Time rows */}
          {allTimes.map((time) => (
            <div key={time} className="grid grid-cols-8 gap-px">
              <div className="bg-charcoal py-6 text-right pr-3 text-xs text-stone-500 font-light tabular-nums">
                {time}
              </div>
              {scheduleDays.map((day) => {
                const slot = getSlotForCell(day, time);
                const cls = slot ? getClassInfo(slot.classId) : null;
                if (!slot || !cls) {
                  return <div key={day} className="bg-stone-900/40 min-h-[68px]" />;
                }
                const isFull = slot.filled >= slot.capacity;
                return (
                  <div
                    key={day}
                    onMouseEnter={(e) => handleSlotHover(e, slot)}
                    className={`relative min-h-[68px] p-3 cursor-pointer transition-all duration-300 group ${
                      isFull
                        ? 'bg-stone-800/60 hover:bg-stone-800'
                        : 'bg-stone-800 hover:bg-stone-700'
                    }`}
                  >
                    <p className="text-[10px] uppercase tracking-wider text-sage-300 mb-1 font-medium">
                      {cls.name}
                    </p>
                    <p className="text-[10px] text-stone-400 font-light">
                      {slot.instructor.split(' ')[0]}
                    </p>
                    {!isFull && (
                      <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-sage-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                );
              })}
            </div>
          ))}

          {/* Tooltip — single bounded popover, never clipped */}
          <AnimatePresence>
            {tooltip && (
              <ScheduleTooltip
                tooltip={tooltip}
                classInfo={getClassInfo(tooltip.slot.classId)!}
                gridRef={gridRef}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Mobile: day selector + vertical timeline */}
        <div className="lg:hidden">
          {/* Swipeable day selector */}
          <div className="flex gap-2 overflow-x-auto pb-3 -mx-6 px-6 mb-6 scrollbar-hide">
            {scheduleDays.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  activeDay === day
                    ? 'bg-sage-400 text-ivory'
                    : 'bg-stone-800 text-stone-400'
                }`}
              >
                {dayAbbrevs[day]}
              </button>
            ))}
          </div>

          {/* Vertical timeline */}
          <div className="space-y-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay + activeFilter}
                initial={reduced ? { opacity: 0 } : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-3"
              >
                {mobileDaySlots.length === 0 && (
                  <p className="text-stone-500 text-sm text-center py-8">No classes scheduled.</p>
                )}
                {mobileDaySlots.map((slot) => {
                  const cls = getClassInfo(slot.classId);
                  if (!cls) return null;
                  const isFull = slot.filled >= slot.capacity;
                  return (
                    <div
                      key={`${slot.day}-${slot.time}-${slot.classId}`}
                      className="flex gap-4 bg-stone-800/60 rounded-sm p-4"
                    >
                      <div className="text-sage-300 text-sm font-medium tabular-nums pt-1 min-w-[48px]">
                        {slot.time}
                      </div>
                      <div className="flex-1">
                        <p className="text-ivory text-sm font-medium mb-1">{cls.name}</p>
                        <p className="text-stone-400 text-xs font-light mb-2">{slot.instructor}</p>
                        <div className="flex flex-wrap gap-3 text-[10px] text-stone-400">
                          <span className="flex items-center gap-1">
                            <Clock size={10} /> {cls.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Gauge size={10} /> {cls.intensity}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users size={10} /> {slot.filled}/{slot.capacity}
                          </span>
                        </div>
                      </div>
                      {isFull && (
                        <span className="text-[10px] text-terracotta-400 self-start">Full</span>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScheduleTooltip({
  tooltip,
  classInfo,
  gridRef,
}: {
  tooltip: TooltipData;
  classInfo: NonNullable<ReturnType<typeof classes.find>>;
  gridRef: React.RefObject<HTMLDivElement>;
}) {
  if (!gridRef.current) return null;
  const gridRect = gridRef.current.getBoundingClientRect();

  const tooltipWidth = 280;
  const tooltipHeight = 180;

  let left = tooltip.x - tooltipWidth / 2;
  let top = tooltip.y - tooltipHeight - 10;

  // Clamp within grid bounds
  if (left < 8) left = 8;
  if (left + tooltipWidth > gridRect.width - 8) left = gridRect.width - tooltipWidth - 8;
  if (top < 8) top = tooltip.y + 10;

  const isFull = tooltip.slot.filled >= tooltip.slot.capacity;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      style={{ left, top, width: tooltipWidth }}
      className="absolute z-30 bg-ivory rounded-sm shadow-2xl p-5 pointer-events-none"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-sage-500 font-medium mb-2">
        {classInfo.category}
      </p>
      <h4 className="font-display text-charcoal text-lg font-medium mb-3">
        {classInfo.name}
      </h4>
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="flex items-center gap-1.5 text-stone-500">
          <User size={12} /> {tooltip.slot.instructor}
        </div>
        <div className="flex items-center gap-1.5 text-stone-500">
          <Clock size={12} /> {classInfo.duration}
        </div>
        <div className="flex items-center gap-1.5 text-stone-500">
          <Gauge size={12} /> {classInfo.level}
        </div>
        <div className="flex items-center gap-1.5 text-stone-500">
          <Users size={12} /> {tooltip.slot.filled}/{tooltip.slot.capacity}
        </div>
      </div>
      {isFull && (
        <p className="text-terracotta-400 text-[10px] mt-3 font-medium">Class is full</p>
      )}
    </motion.div>
  );
}
