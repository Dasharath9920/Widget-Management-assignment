import { WidgetType } from '../../constants';

const WeatherWidget = ({widget}: {widget: WidgetType}) => {
  return (
    <div className='text-white'>
      <h2 className='text-[.9rem] md:text[1rem] lg:text-[1.2rem]'>{widget.data.location}</h2>
      <h1 className='text-[1.4rem] mb-1 md:text-[1.5rem] md:mb-2 lg:text-[1.8rem]'>{widget.data.temperature}</h1>
      <p>{widget.data.icon}</p>
      <p className='text-[.7rem] md:text-[.8rem] lg:text-[1rem]'>{widget.data.condition}</p>
    </div>
  )
}

export default WeatherWidget;