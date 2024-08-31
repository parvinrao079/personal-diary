{
  /*
import { useEffect, useState } from 'react';
import { Calendar, MapPin, Music, ThumbsUp } from 'react-feather';
import { moodEmojis } from '../../utils/moodEmojis';
import mockEntries from '../../utils/mockEntries';
import { AlreadyAddedModal } from '../Modals/AlreadyAddedModal';
import { NewEntryModal } from '../Modals/NewEntryModal';
import { EntryModal } from '../Modals/EntryModal';

const Journal = () => {
  const [activeView, setActiveView] = useState('grid');
  const [diaryEntry, setDiaryEntry] = useState({
    title: '',
    image: '',
    created_at: '',
    body: '',
  });

  useEffect(() => {
    if (diaryEntry.title) {
      document.getElementById('entryModal').showModal();
    }
  }, [diaryEntry]);

  function getTodayDate() {
    const today = new Date();
    return today.toISOString().slice(0, 10);
  }
  const todayDate = getTodayDate();

  const hasTodayEntry = mockEntries.some((entry) => entry.date === todayDate);

  // function to show the modal based on the condition of there being an entry for today
  function choosingModal() {
    if (hasTodayEntry === true) {
      document.getElementById('alreadyAddedModal').showModal();
    } else if (hasTodayEntry === false) {
      document.getElementById('newEntryModal').showModal();
    }
  }

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Journal</h1>
        <button
          onClick={() => choosingModal()}
          id="addEntryBtn"
          className="btn btn-primary"
        >
          Add Entry
        </button>
        <div className="btn-group">
          <button
            className={`btn ${activeView === 'grid' ? 'btn-active hover:bg-primary bg-primary text-base-100' : ''}`}
            onClick={() => setActiveView('grid')}
          >
            Grid
          </button>

          <button
            className={`btn ${activeView === 'timeline' ? 'btn-active hover:bg-primary bg-primary text-base-100' : ''}`}
            onClick={() => setActiveView('timeline')}
          >
            Timeline
          </button>
        </div>
      </div>

      {activeView === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {mockEntries.map((entry) => (
            <div
              key={entry.id}
              className="card bg-base-300 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => setDiaryEntry(entry)}
              // onClick={() => document.getElementById('newEntryModal').showModal()}
              // onClick={() => document.getElementById('alreadyAddedModal').showModal()}
            >
              <figure className="px-4 pt-4">
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {entry.title}
                  <div className="badge badge-secondary h-6 bg-accent">
                    {moodEmojis[entry.mood]}
                  </div>
                </h2>
                <p className="text-sm line-clamp-3">{entry.preview}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <div className="badge badge-outline rounded-md h-8">
                    <Calendar className="mr-2" size={13} /> {entry.date}
                  </div>
                  <div className="badge badge-outline rounded-md h-8">
                    <MapPin className="mr-2" size={13} /> {entry.location}
                  </div>
                  <div className="badge badge-outline rounded-md h-8">
                    <Music className="mr-2" size={13} /> {entry.music}
                  </div>
                </div>
                <div className="card-actions justify-between items-center mt-4">
                  <div className="flex gap-2">
                    <button className="btn btn-ghost btn-xs">
                      <ThumbsUp className="mb-1" size={22} /> {entry.likes}
                    </button>
                  </div>
                  <div>
                    {entry.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="badge badge-primary mx-1 px-2 rounded-md"
                      >
                        # {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeView === 'timeline' && (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {mockEntries.map((entry, index) => (
            <li
              key={entry.id}
              onClick={() => setDiaryEntry(entry)}
            >
              <div className="timeline-middle">
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
                  index % 2 === 0
                    ? 'timeline-box timeline-start md:text-end'
                    : 'timeline-end timeline-box'
                }`}
              >
                <div className="flex flex-col gap-4 px-4 py-4">
                  <figure className="px-4 pt-4">
                    <img
                      src={entry.image}
                      alt={entry.title}
                      className="rounded-xl h-48 w-full object-cover"
                    />
                  </figure>
                  <time className="font-mono italic">{entry.date}</time>
                  <div className="text-lg font-black">{entry.title}</div>
                  {entry.preview}
                </div>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      )}
      <AlreadyAddedModal />
      <NewEntryModal />
      <EntryModal
        resetState={() => setDiaryEntry({})}
        diaryEntry={diaryEntry}
      />
    </main>
  );
};

export default Journal;
*/
}

import React, { useState, useEffect } from 'react';
import Grid from '../CardLayouts/Grid';
import Timeline from '../CardLayouts/Timeline';
import { AlreadyAddedModal } from '../Modals/AlreadyAddedModal';
import { NewEntryModal } from '../Modals/NewEntryModal';
import { EntryModal } from '../Modals/EntryModal';
import { EditEntryModal } from '../Modals/EditEntryModal';


const Journal = () => {
  const [view, setView] = useState('grid');
  const [entries, setEntries] = useState([]);
  const [diaryEntry, setDiaryEntry] = useState({
    title: '',
    imgURL: '',
    date: '',
    text: '',
    mood:'😌',
  });

  const updateEntries = () => {
    const storedEntries = JSON.parse(localStorage.getItem('entries')) || [];
    setEntries(storedEntries);
  }

  useEffect(() => {updateEntries()}, []);
    

  useEffect(() => {
    if (diaryEntry.title) {
      document.getElementById('entryModal').showModal();
    }
  }, [diaryEntry]);

  function getTodayDate() {
    const today = new Date();
    return today.toISOString().slice(0, 10);
  }

  const todayDate = getTodayDate();

  const hasTodayEntry = entries.some((entry) => entry.date === todayDate);

  function choosingModal() {
    if (hasTodayEntry === true) {
      document.getElementById('alreadyAddedModal').showModal();
    } else {
      document.getElementById('newEntryModal').showModal();
    }
  }

//Delete Button
  const handleDelete = (date) => {
    const updatedEntries = entries.filter((entry) => entry.date !== date);
    setEntries(updatedEntries);
    localStorage.setItem('entries', JSON.stringify(updatedEntries));
  };

  //Edit Button
  const handleEdit = (updatedEntry) => {
    const updatedEntries = entries.map((entry) =>
      entry.date === updatedEntry.date ? updatedEntry : entry
    );
    setEntries(updatedEntries);
    localStorage.setItem('entries', JSON.stringify(updatedEntries));
    document.getElementById('editEntryModal').close();
  };
 


  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Journal</h1>
        <button onClick={() => choosingModal()} className="btn btn-primary">
          Add Entry
        </button>
        <div className="btn-group">
          <button
            className={`btn ${view === 'grid' ? 'btn-active hover:bg-primary bg-primary text-base-100' : ''}`}
            onClick={() => setView('grid')}
          >
            Grid
          </button>
          <button
            className={`btn ${view === 'timeline' ? 'btn-active hover:bg-primary bg-primary text-base-100' : ''}`}
            onClick={() => setView('timeline')}
          >
            Timeline
          </button>
        </div>
      </div>
      {view === 'grid' ? (
        <Grid entries={entries} setDiaryEntry={setDiaryEntry} />
      ) : (
        <Timeline entries={entries} setDiaryEntry={setDiaryEntry} />
      )}
      <AlreadyAddedModal />
      <NewEntryModal updateEntries={updateEntries} />
      <EntryModal
        resetState={() => setDiaryEntry({})}
        diaryEntry={diaryEntry}
        handleDelete={handleDelete}
      />
      <EditEntryModal diaryEntry={diaryEntry} resetState={() => setDiaryEntry({})} handleEdit={handleEdit}/>
    </main>
  );
};

export default Journal;
