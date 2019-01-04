export default function editItemNotes(listId, taskId, newNotes) {
  return {
    type: "EDIT_ITEM_NOTES",
    listId,
    taskId,
    newNotes
  };
}
