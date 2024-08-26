export const AlreadyAddedModal = () => {
  return (
    <dialog
      id="alreadyAddedModal"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Already added for today</h3>
        <p className="py-4">You can only add one entry per day</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
      <form className="modal-backdrop" method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};
