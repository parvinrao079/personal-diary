import { useState, useEffect } from 'react';
import { Calendar, Heading, Image, MessageSquareText } from 'lucide-react';
import { moodEmojis } from '../../utils/moodEmojis';

export const EditEntryModal = ({diaryEntry, resetState, handleEdit}) => {
  // State to store input values
  const [title, setTitle] = useState(diaryEntry?.title || '');
  const [date, setDate] = useState(diaryEntry?.date || '');
  const [text, setText] = useState(diaryEntry?.text || '');
  const [imgURL, setImgURL] = useState(diaryEntry?.imgURL || '');
  const emojiOptionss = [];
  console.log(diaryEntry);
  for (const [key, value] of Object.entries(moodEmojis)) {
    emojiOptionss.push(value);
  }
  
  let index = emojiOptionss.indexOf(diaryEntry?.mood || '' );
  console.log(index);
  console.log(diaryEntry?.mood);
  if (index === -1) { index = 0; }
  

  const [selectedEmoji, setSelectedEmoji] = useState(index);
  const [isTextValid, setIsTextValid] = useState(true);
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isImgUrlValid, setIsImgUrlValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);

  useEffect(() => {
    console.log(title);
    console.log(date);
    console.log(text);
    console.log(imgURL);
  console.log(selectedEmoji);}
  , [title, date, text, imgURL, selectedEmoji]
    );

    useEffect(() => {
      setTitle(diaryEntry.title);
      setDate(diaryEntry.date);
      setText(diaryEntry.text);
      setImgURL(diaryEntry.imgURL);
      let index = emojiOptionss.indexOf(diaryEntry?.mood || '' );
    if (index === -1) { index = 0; }
    setSelectedEmoji(index);
    }, [diaryEntry]);

  // State to manage the success message visibility
  const [successMessage, setSuccessMessage] = useState('');

  // Function to handle the save action
  const handleSave = (event) => {
    event.preventDefault();
    // Validate input values
    let isFormValid = true;
    if (title.trim().length === 0) {
      setIsTitleValid(false);
      isFormValid = false;
    } else {
      setIsTitleValid(true);
    }
    if (text.trim().length === 0) {
      setIsTextValid(false);
      isFormValid = false;
    } else {
      setIsTextValid(true);
    }
    if (imgURL.trim().length === 0) {
      setIsImgUrlValid(false);
      isFormValid = false;
    } else {
      setIsImgUrlValid(true);
    }
    if (!isFormValid) {
      return;
    }
    // Updates entry object
    const updateEntry = {
      mood: emojiOptionss[selectedEmoji],
      title,
      date: diaryEntry.date,
      text,
      imgURL,
    };

    
    // Show success message
    setSuccessMessage('Entry saved successfully!');

    // Hide the success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
    handleEdit(updateEntry);

    // Optional: Reset the input fields after saving
    setSelectedEmoji(0);
    setTitle('');
    setDate('');
    setText('');
    setImgURL('');
    
    resetState();
    
  };

  return (
    <dialog id="editEntryModal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-base-100">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex flex-col gap-4 py-4 px-4">
          <h3 className="font-bold text-3xl">Edit your entry</h3>
          <p className="py-4">Change your data to edit your entry</p>
          <form className="flex flex-col gap-6">
            <div>
              <label className='label textneutral'>What is your mood today?</label>
              <input
                type="range"
                min={0}
                max={emojiOptionss.length - 1}
                value={selectedEmoji || 0}
                className="range range-lg"
                onChange={(e) => setSelectedEmoji(e.target.value)}
                required
              />
              <div className="flex w-full justify-between px-2">
                {emojiOptionss.map((emoji, index) => (
                  <span key={index}>{emoji}</span>
                ))}
              </div>
            </div>
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 text-primary ${isTitleValid ? '' : 'input-error'}`}
              >
                <Heading />
                <input
                  type="text"
                  className="grow placeholder-textneutral"
                  placeholder="Title"
                  value={title || ''}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              {!isTitleValid && (
                <div className="text-red-500 text-sm pt-2 pl-6">
                  * Please input a valid title.
                </div>
              )}
            </div>
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 text-primary ${isDateValid ? '' : 'input-error'}`}
              >
                <Calendar />
                <input
                  type="date"
                  className="grow placeholder-textneutral text-grey-500"
                  placeholder="Date (YYYY-MM-DD)"
                  defaultValue={date || ''}
                  readOnly
                />
              </label>
              {!isDateValid && (
                <div className="text-red-500 text-sm pt-2 pl-6">
                  * Please input a valid date.
                </div>
              )}
            </div>
            <div>
              <label
                className={`textarea textarea-bordered flex gap-2 text-primary ${isTextValid ? '' : 'textarea-error'}`}
              >
                <MessageSquareText className='mt-2' />
                <textarea
                  className="textarea textarea-md pl-0 pt-0 w-full"
                  placeholder="Text"
                  value={text || ''}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
              </label>
              {!isTextValid && (
                <div className="text-red-500 text-sm pt-2 pl-6">
                  * Please input a valid text.
                </div>
              )}
            </div>
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 text-primary ${isImgUrlValid ? '' : 'input-error'}`}
              >
                <Image />
                <input
                  type="url"
                  className="grow placeholder-textneutral"
                  placeholder="https://example.com/image.jpg"
                  value={imgURL || ''}
                  onChange={(e) => setImgURL(e.target.value)}
                />
              </label>
              {!isImgUrlValid && (
                <div className="text-red-500 text-sm pt-2 pl-6">
                  * Please input a valid url of an image.
                </div>
              )}
            </div>
            <div className="modal-action">
              <button
                type="submit"
                className="btn btn-outline"
                onClick={handleSave}
              >
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
