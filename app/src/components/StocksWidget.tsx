import { WidgetType } from '../constants';

const StocksWidget = ({ widget }: { widget: WidgetType }) => {
  return (
    <div className="text-white">
      <h2 className="text-[.9rem] md:text[1rem] lg:text-[1.2rem]">{widget.title}</h2>
      <ul className="mt-1 text-[.7rem] md:text-[.8rem] lg:text-[1rem]">
        {widget.data.stocks.map((stock: { symbol: string; price: string; change: string }, index: number) => (
          <li key={index} className="flex justify-between py-1 border-b border-white/30">
            <span className="font-semibold">{stock.symbol}</span>
            <span>{stock.price}</span>
            <span className={stock.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
              {stock.change}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StocksWidget;