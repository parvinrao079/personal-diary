
const Grid = ({ entries, setDiaryEntry }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
      {entries.map((entry, index) => (
        <div key={index} className="card bg-dark-900 shadow-md p-4 rounded-lg" onClick={() => setDiaryEntry(entry) }>
          {entry.imgURL && (
            <img src={entry.imgURL} alt="Entry" className="rounded-t-lg w-full h-48 object-cover mb-4" />
          )}
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2 text-white">{entry.title} <span className="text-lg">😊</span></h3>
            <p className="text-gray-400 mb-4">{entry.date}</p>
            <p className="mb-4 text-white">{entry.text}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="flex items-center text-gray-300">
                <i className="far fa-calendar-alt mr-2"></i> {entry.date}
              </span>
              <span className="flex items-center text-gray-300">
                <i className="fas fa-map-marker-alt mr-2"></i> {entry.location || 'Unknown Location'}
              </span>
              <span className="flex items-center text-gray-300">
                <i className="fas fa-music mr-2"></i> {entry.music || 'Unknown Music'}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="badge bg-primary text-white">#nature</span>
              <span className="badge bg-primary text-white">#reflection</span>
            </div>
            <div className="flex items-center justify-between text-gray-300">
              <span>
                <i className="far fa-thumbs-up mr-2"></i>23
              </span>
              <div className="flex space-x-2">
                {entry.tags?.map((tag, i) => (
                  <span key={i} className="badge bg-secondary text-white">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
