export function ConfirmModal({
  isOpen,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "Delete",
  cancelText = "Cancel",
  isLoading = false,
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <div className="confirm-backdrop" role="dialog" aria-modal="true" aria-labelledby="confirm-modal-title">
      <div className="confirm-modal">
        <h3 id="confirm-modal-title">{title}</h3>
        <p>{message}</p>
        <div className="confirm-actions">
          <button type="button" disabled={isLoading} className="btn-secondary" onClick={onCancel}>
            {cancelText}
          </button>
          <button type="button" disabled={isLoading} className="btn-danger" onClick={onConfirm}>
            {isLoading ? "Deleting..." : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
