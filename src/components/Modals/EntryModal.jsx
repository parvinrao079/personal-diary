

export const EntryModal = ({ diaryEntry, resetState }) => {
    return (
        <dialog id="entryModal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={resetState}>✕</button>
                </form>
                <figure>
                    <img
                        src={diaryEntry.image}
                        alt={diaryEntry.title}
                        className="rounded-xl h-48 w-full object-cover"
                    />
                </figure>
                <h3 className="font-bold text-lg">{diaryEntry.title}</h3>
                <p className="py-4">{diaryEntry.preview}</p>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn" onClick={resetState}>Close</button>
                </form>
                </div>
            </div>
            <form className="modal-backdrop" method="dialog">
                <button onClick={resetState}>Close</button>
            </form>
        </dialog>
    )
}
