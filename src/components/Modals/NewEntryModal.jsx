import { Database } from 'react-feather';
import { addNewEntry } from '../../utils/localStorage';
import { Calendar, Heading, Image, MessageSquareText } from 'lucide-react';

export const NewEntryModal = () => {
    return (
        <dialog id="newEntryModal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-base-100">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className='flex flex-col gap-4 py-4 px-4'>

                    <h3 className="font-bold text-3xl">Add new entry</h3>
                    <p className="py-4 mb-8">Fill out the data to add a new entry</p>
                    <form className='flex flex-col gap-6'>
                        <label className="input input-bordered flex items-center gap-2 text-primary">
                            <Heading />
                            <input type="text" className="grow placeholder-textneutral" placeholder="Title" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 text-primary">
                            <Calendar />
                            <input type="text" className="grow placeholder-textneutral" placeholder="Date" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 text-primary">
                            <MessageSquareText />
                            <input type="text" className="grow placeholder-textneutral" placeholder="Text" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 text-primary">
                            <Image />
                            <input type="text" className="grow placeholder-textneutral" placeholder="ImgURL" />
                        </label>

                    </form>
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-outline" onClick={addNewEntry}>Save</button>
                    </form>
                </div>
            </div>
            <form className="modal-backdrop" method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}
