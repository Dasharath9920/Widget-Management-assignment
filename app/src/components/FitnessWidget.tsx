import { WidgetType } from '../constants';

const FitnessWidget = ({ widget }: { widget: WidgetType }) => {
  const progress = Math.min((widget.data.steps / widget.data.goal) * 100, 100); // Ensures max 100%

  return (
    <div className="text-white">
      <h2 className="text-[.9rem] md:text[1rem] lg:text-[1.2rem]">{widget.title}</h2>
      <div className="mt-1 space-y-2 text-[.8rem] md:text-[.9rem] lg:text-[1rem]">
        <p>Steps: {widget.data.steps} / {widget.data.goal}</p>
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-green-400 transition-all duration-300" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="font-semibold text-yellow-400">Calories Burned: {widget.data.caloriesBurned} kcal</p>
      </div>
    </div>
  );
};

export default FitnessWidget;
