type StatsCardProps = {
    number: string;
    text: string;
  };

const StatsCard: React.FC<StatsCardProps> = ({ number, text }) => (
  <div className="flex flex-col items-right p-4 bg-white border rounded-xl shadow-sm">
    <span className="text-4xl font-bold text-primary text-right">{number}</span>
    <span className="text-sm text-gray-600 text-right mt-2">{text}</span>
  </div>
);

export default StatsCard;
