import "./Modal.css";

function Modal({ message, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>{message}</p>

        <button onClick={onConfirm}>Sí</button>
        <button onClick={onCancel}>Cancelar</button>
      </div>
    </div>
  );
}

export default Modal;