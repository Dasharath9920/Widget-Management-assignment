import { WidgetType } from '../constants';

const NewsWidget = ({ widget }: { widget: WidgetType }) => {
  return (
    <div className="text-white">
      <h2 className="text-[.9rem] md:text[1rem] lg:text-[1.2rem]">{widget.title}</h2>
      <ul className="mt-1 text-[.7rem] md:text-[.8rem] lg:text-[1rem] overflow-y-scroll">
        {widget.data.articles.slice(0, 3).map((article: { headline: string; source: string }, index: number) => (
          <li key={index} className="border-b border-white/30 py-1">
            <span className="font-semibold">{article.headline}</span> <br />
            <span className="text-white/60 text-[0.6rem]">{article.source}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsWidget;
