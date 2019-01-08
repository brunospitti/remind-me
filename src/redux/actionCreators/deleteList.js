export default function deleteList(listId, nextListId) {
  return {
    type: "DELETE_LIST",
    listId,
    nextListId
  };
}
