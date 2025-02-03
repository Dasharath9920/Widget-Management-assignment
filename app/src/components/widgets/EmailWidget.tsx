import { WidgetType } from '../../constants';

const EmailWidget = ({ widget }: { widget: WidgetType }) => {
  return (
    <div className="text-white flex flex-col items-center text-center">
      <h2 className="text-[.9rem] md:text-[1rem] lg:text-[1.2rem]">{widget.title}</h2>
      <div className="mt-2 text-[.8rem] md:text-[.9rem] lg:text-[1rem]">
        <p className="font-semibold text-red-400">📩 {widget.data.unreadEmails} Unread</p>
        <p className="mt-2 text-gray-300 text-[.7rem] md:text-[.8rem]">Latest: <span className="font-semibold">{widget.data.latestEmail.subject}</span></p>
        <p className="text-gray-400 text-[.7rem] md:text-[.8rem]">From: {widget.data.latestEmail.sender}</p>
      </div>
    </div>
  );
};

export default EmailWidget;
