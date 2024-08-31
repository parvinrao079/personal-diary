/* eslint-disable react/prop-types */
import { Calendar } from 'react-feather';

//Edit Button
const handleEdit = () => {
  document.getElementById('editEntryModal').showModal();
};

export const EntryModal = ({ diaryEntry, resetState, handleDelete }) => {
  return (
    <dialog id="entryModal" className="modal sm:modal-middle modal-bottom">
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
          <div className="flex flex-wrap gap-3 mt-2">
          <span className="badge badge-secondary h-8 bg-accent text-xl mr-4">
                  {diaryEntry.mood}
                </span>
            <div className="badge badge-outline rounded-md h-8">
              <Calendar className="mr-3" size={13} /> {diaryEntry.date}
            </div>
          </div>
          <p className="py-4">{diaryEntry.text}</p>

          
          
        </div>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <div className="flex gap-2">
              <button className="absolute left-12 btn btn-sm btn-error" onClick={() => handleDelete(diaryEntry.date)}>
                Delete
              </button>
              <button className="btn btn-sm btn-outline btn-accent" onClick={handleEdit}>
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
