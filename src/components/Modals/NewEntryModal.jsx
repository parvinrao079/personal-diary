import { useState } from 'react';
import { Calendar, Heading, Image, MessageSquareText } from 'lucide-react';

export const NewEntryModal = () => {
  // State to store input values
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [text, setText] = useState('');
  const [imgURL, setImgURL] = useState('');

  // State to manage the success message visibility
  const [successMessage, setSuccessMessage] = useState('');

  // Function to handle the save action
  const handleSave = () => {
    // Create an entry object
    const newEntry = {
      title,
      date,
      text,
      imgURL,
    };

    // Get existing entries from local storage
    const existingEntries = JSON.parse(localStorage.getItem('entries')) || [];

    // Add the new entry to the existing entries
    existingEntries.push(newEntry);

    // Save the updated list back to local storage
    localStorage.setItem('entries', JSON.stringify(existingEntries));

    // Show success message
    setSuccessMessage('Entry saved successfully!');

    // Hide the success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);

    // Optional: Reset the input fields after saving
    setTitle('');
    setDate('');
    setText('');
    setImgURL('');
  };

  return (
    <dialog id="newEntryModal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-base-100">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex flex-col gap-4 py-4 px-4">
          <h3 className="font-bold text-3xl">Add new entry</h3>
          <p className="py-4 mb-8">Fill out the data to add a new entry</p>
          <form className="flex flex-col gap-6">
            <label className="input input-bordered flex items-center gap-2 text-primary">
              <Heading />
              <input
                type="text"
                className="grow placeholder-textneutral"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 text-primary">
              <Calendar />
              <input
                type="text"
                className="grow placeholder-textneutral"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 text-primary">
              <MessageSquareText />
              <input
                type="text"
                className="grow placeholder-textneutral"
                placeholder="Text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 text-primary">
              <Image />
              <input
                type="text"
                className="grow placeholder-textneutral"
                placeholder="ImgURL"
                value={imgURL}
                onChange={(e) => setImgURL(e.target.value)}
              />
            </label>
          </form>
          {successMessage && (
            <div className="text-success text-center mt-4">
              {successMessage}
            </div>
          )}
        </div>
        <div className="modal-action">
          <button className="btn btn-outline" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
      <form className="modal-backdrop" method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};
