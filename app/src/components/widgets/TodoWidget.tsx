import { WidgetType } from '../../constants';
import { useState } from 'react';

const ToDoWidget = ({ widget }: { widget: WidgetType }) => {
  const [tasks, setTasks] = useState(widget.data.tasks);

  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="text-white">
      <h2 className="text-[.9rem] md:text[1rem] lg:text-[1.2rem]">{widget.title}</h2>
      <ul className="mt-1 text-[.7rem] md:text-[.8rem] lg:text-[1rem]">
        {tasks.map((task: { task: string; completed: boolean }, index: number) => (
          <li
            key={index}
            className="flex items-center gap-2 py-1 border-b border-white/30 cursor-pointer"
            onClick={() => toggleTaskCompletion(index)}
          >
            <input
              type="checkbox"
              checked={task.completed}
              className="accent-blue-400 cursor-pointer"
              readOnly
            />
            <span className={task.completed ? 'line-through text-gray-400' : ''}>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoWidget;
