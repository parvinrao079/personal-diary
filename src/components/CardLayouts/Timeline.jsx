const Timeline = ({ entries, setDiaryEntry }) => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {entries.map((entry, index) => (
        <li key={index} onClick={() => setDiaryEntry(entry)}>
          <div className="timeline-middle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div
            className={`mb-10 bg-base-300 ${
              index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end'
            } timeline-box`}
          >
            <div className="flex flex-col gap-4 px-4 py-4 cursor-pointer">
              {entry.imgURL && (
                <img
                  src={entry.imgURL}
                  alt={entry.title}
                  className="rounded-xl h-48 w-full object-cover"
                />
              )}
              <time className="font-mono italic">{entry.date}</time>
              <div className="text-lg font-black">
                <span className="badge badge-secondary h-8 bg-accent text-xl mr-4">
                  {entry.mood}
                </span>
                {entry.title}{' '}
              </div>
              <p className="text-sm">{entry.text.slice(0, 200) + ' ...'}</p>
            </div>
          </div>
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
