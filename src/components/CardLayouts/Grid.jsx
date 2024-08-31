import { Calendar } from 'react-feather';

const Grid = ({ entries, setDiaryEntry }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
      {entries.map((entry, index) => (
        <div
          key={index}
          className="card bg-base-300 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          onClick={() => setDiaryEntry(entry)}
        >
          {entry.imgURL && (
            <img
              src={entry.imgURL}
              alt="Entry"
              className="rounded-xl h-48 w-full object-cover"
            />
          )}
          <div className="card-body">
            <h2 className="card-title text-3xl">
              {entry.title}{' '}
              <span className="badge badge-secondary h-6 bg-accent ml-10">
                {entry.mood}
              </span>
            </h2>
            <p className="text-sm line-clamp-3 py-10">{entry.text}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <div className="badge badge-outline rounded-md h-8">
                <Calendar className="mr-2" size={13} /> {entry.date}
              </div>
              {/*               <div className="badge badge-outline rounded-md h-8">
                <MapPin className="mr-2" size={13} /> {entry.location}
              </div> */}
              {/*               <div className="badge badge-outline rounded-md h-8">
                <Music className="mr-2" size={13} /> {entry.music}
              </div> */}
            </div>

            {/*             <div className="flex items-center justify-between text-gray-300">
              <div className="flex space-x-2">
                {entry.tags?.map((tag, i) => (
                  <span key={i} className="badge bg-secondary text-white">
                    #{tag}
                  </span>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
