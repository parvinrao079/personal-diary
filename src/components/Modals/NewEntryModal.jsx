import { useState } from 'react';
import { Calendar, Heading, Image, MessageSquareText } from 'lucide-react';
import { moodEmojis } from '../../utils/moodEmojis';

export const NewEntryModal = () => {
  // State to store input values
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [text, setText] = useState('');
  const [imgURL, setImgURL] = useState('');
  const emojiOptionss = [];
  const [selectedEmoji, setSelectedEmoji] = useState(0);

  for (const [key, value] of Object.entries(moodEmojis)) {
    emojiOptionss.push(value);
  }

  // State to manage the success message visibility
  const [successMessage, setSuccessMessage] = useState('');

  // Function to handle the save action
  const handleSave = () => {
    // Create an entry object
    const newEntry = {
      mood: emojiOptionss[selectedEmoji],
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
    setSelectedEmoji(0);
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
          <form className="flex flex-col gap-6" action={handleSave}>
            <input
              type="range"
              min={0}
              max={emojiOptionss.length - 1}
              value={selectedEmoji}
              className="range range-lg"
              onChange={(e) => setSelectedEmoji(e.target.value)}
              required
            />
            <div className="flex w-full justify-between px-2">
              {emojiOptionss.map((emoji, index) => (
                <span key={index}>{emoji}</span>
              ))}
            </div>

            <label className="input input-bordered flex items-center gap-2 text-primary">
              <Heading />

              <input
                type="text"
                className="grow placeholder-textneutral"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 text-primary">
              <Calendar />
              <input
                type="date"
                className="grow placeholder-textneutral text-grey-500"
                placeholder="Date (YYYY-MM-DD)"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </label>
            <label className="textarea textarea-bordered flex items-center gap-2 text-primary">
              <MessageSquareText />
              <textarea
                className="textarea textarea-lg w-full"
                placeholder="Text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              ></textarea>
            </label>
            <label className="input input-bordered flex items-center gap-2 text-primary">
              <Image />
              <input
                type="url"
                className="grow placeholder-textneutral"
                placeholder="https://example.com/image.jpg"
                value={imgURL}
                onChange={(e) => setImgURL(e.target.value)}
                required
              />
            </label>
            <div className="modal-action">
              <button type="submit" className="btn btn-outline">
                Save
              </button>
            </div>
          </form>
          {successMessage && (
            <div className="text-success text-center mt-4">
              {successMessage}
            </div>
          )}
        </div>
      </div>
      <form className="modal-backdrop" method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};
