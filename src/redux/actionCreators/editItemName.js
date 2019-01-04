export default function editItemName(listId, taskId, newName) {
  return {
    type: "EDIT_ITEM_NAME",
    listId,
    taskId,
    newName
  };
}
