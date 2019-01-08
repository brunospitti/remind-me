export default function editListName(listId, newName) {
  return {
    type: "EDIT_LIST_NAME",
    listId,
    newName
  };
}
