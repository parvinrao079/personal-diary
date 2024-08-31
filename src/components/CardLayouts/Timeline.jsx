import { CheckCircle } from 'lucide-react'; // Assuming you're using lucide-react for icons

const Timeline = ({ entries, setDiaryEntry }) => {
  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-500"></div>
      {entries.map((entry, index) => {
        const isLeftSide = index % 2 === 0;

        return (
          <div
            key={index}
            className={`mb-12 flex w-full ${isLeftSide ? 'justify-end' : 'justify-start'} relative`} onClick={() => setDiaryEntry(entry) }
          >
            {/* Tick icon on the timeline line, aligned with the top of the card */}
            <div
              className="absolute transform -translate-x-1/2 bg-[#1f2937]"
              style={{
                top: 0, // Align with the top of the card
                left: '50%',
                height: '24px', // This should match the size of the tick icon
                width: '24px', // This should match the size of the tick icon
                zIndex: 10, // Ensure it is above the line
              }}
            >
              <CheckCircle size={24} className="text-[#0ea5e9]" />
            </div>
            <div
              className={`timeline-item w-5/12 bg-[#1f2937] shadow-lg p-6 rounded-lg ${
                isLeftSide ? 'mr-8' : 'ml-8'
              }`}
            >
              {entry.imgURL && (
                <img
                  src={entry.imgURL}
                  alt="Entry"
                  className="rounded-lg w-full h-56 object-cover mb-4"
                />
              )}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium text-gray-400">{entry.date}</h3>
                <h3 className="text-2xl font-bold text-white">
                  {entry.title} <span className="text-lg">😊</span>
                </h3>
              </div>
              <p className="text-gray-300 mb-4">{entry.text}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge bg-[#0ea5e9] text-white">#nature</span>
                <span className="badge bg-[#0ea5e9] text-white">#reflection</span>
              </div>
              <div className="flex items-center justify-between text-gray-400">
                <span>
                  <i className="far fa-thumbs-up mr-2"></i>23
                </span>
                <div className="flex space-x-2">
                  {entry.tags?.map((tag, i) => (
                    <span key={i} className="badge bg-[#14b8a6] text-white">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
