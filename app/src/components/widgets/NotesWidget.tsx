import { WidgetType } from '../../constants';

const NotesWidget = ({ widget }: { widget: WidgetType }) => {
  return (
    <div className="text-white">
      <h2 className="text-[.9rem] md:text[1rem] lg:text-[1.2rem]">{widget.title}</h2>
      <div className="mt-1 space-y-2 text-[.7rem] md:text-[.8rem] lg:text-[1rem]">
        {widget.data.notes.map((note: { title: string; content: string }, index: number) => (
          <div key={index} className="p-2 rounded-lg bg-white/10">
            <h3 className="font-bold">{note.title}</h3>
            <p className="text-gray-300">{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesWidget;
