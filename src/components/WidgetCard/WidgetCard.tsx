import "./widgetCard.scss";

interface WidgetProp {
  title: string;
  value: string;
  bgColor: string;
}
const WidgetCard = ({ title, value, bgColor }: WidgetProp) => {
  return (
    <div className="widgetcard" style={{ backgroundColor: bgColor }}>
      <div className="widgetcard__left">
        <p>{title}</p>
      </div>
      <div className="widgetcard__right">
        <p>{value}</p>
      </div>
    </div>
  );
};

export { WidgetCard };
