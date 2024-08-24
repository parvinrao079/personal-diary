import { addNewEntry } from '../../utils/localStorage';
import { Heading } from 'lucide-react';

export const NewEntryModal = () => {
    return (
        <dialog id="newEntryModal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Add new entry</h3>
                <p className="py-4">Fill out the data to add a new entry</p>
                <form>
                    <label className="input input-bordered flex items-center gap-2">
                        <Heading />
                        <input type="text" className="grow" placeholder="Title" />
                    </label>
                </form>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn" onClick={addNewEntry}>Save</button>
                </form>
                </div>
            </div>
            <form className="modal-backdrop" method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}
