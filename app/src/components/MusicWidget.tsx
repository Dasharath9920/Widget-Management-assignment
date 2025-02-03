import { WidgetType } from '../constants';

const MusicWidget = ({ widget }: { widget: WidgetType }) => {
  return (
    <div className="text-white flex flex-col items-center text-center">
      <h2 className="text-[.9rem] md:text-[1rem] lg:text-[1.2rem]">{widget.title}</h2>
      <div className="mt-2 text-[.8rem] md:text-[.9rem] lg:text-[1rem]">
        <p className="font-semibold text-blue-300">{widget.data.song}</p>
        <p className="text-gray-300 text-[.7rem] md:text-[.8rem]">{widget.data.artist}</p>
      </div>
      <div className="mt-2 animate-pulse text-2xl">🎵</div>
    </div>
  );
};

export default MusicWidget;
