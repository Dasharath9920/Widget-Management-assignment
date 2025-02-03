import { WidgetType } from '../../constants';

const CalendarWidget = ({ widget }: { widget: WidgetType }) => {
  return (
    <div className="text-white">
      <h2 className="text-[.9rem] md:text[1rem] lg:text-[1.2rem]">{widget.title}</h2>
      <ul className="mt-1 text-[.7rem] md:text-[.8rem] lg:text-[1rem]">
        {widget.data.events.slice(0, 3).map((event: { date: string; title: string }, index: number) => (
          <li key={index} className="border-b border-white/30 py-1">
            <span className="font-semibold">{event.date}:</span> {event.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarWidget;