/* eslint-disable react/prop-types */
import { Calendar, MapPin, Music } from 'react-feather';

export const EntryModal = ({ diaryEntry, resetState }) => {
  return (
    <dialog id="entryModal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 p-1"
            onClick={resetState}
          >
            ✕
          </button>
        </form>
        <div className="flex flex-col px-6 py-6 gap-6">
          <figure className="">
            <img
              src={diaryEntry.imgURL}
              alt={diaryEntry.title}
              className="rounded-xl h-48 w-full object-cover"
            />
          </figure>
          <h3 className="font-bold text-3xl">{diaryEntry.title}</h3>
          <p className="py-4">{diaryEntry.preview}</p>

          <div className="flex flex-wrap gap-3 mt-2">
            <div className="badge badge-outline rounded-md h-8">
              <Calendar className="mr-3" size={13} /> {diaryEntry.date}
            </div>
            <div className="badge badge-outline rounded-md h-8">
              <MapPin className="mr-3" size={13} /> {diaryEntry.location}
            </div>
            <div className="badge badge-outline rounded-md h-8">
              <Music className="mr-3" size={13} /> {diaryEntry.music}
            </div>
          </div>
          <div className="badge badge-outline text-primary h-auto cursor-pointer">
            # {[diaryEntry.mood]}
          </div>
        </div>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <div className="flex gap-2">
              <button className="absolute left-12 btn btn-sm btn-error">
                Delete
              </button>
              <button className="btn btn-sm btn-outline btn-accent">
                Edit
              </button>
              <button className="btn btn-sm btn-outline" onClick={resetState}>
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
      <form className="modal-backdrop" method="dialog">
        <button onClick={resetState}>Close</button>
      </form>
    </dialog>
  );
};
