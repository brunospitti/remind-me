export default function deleteItem(itemToDelete, listId) {
  return {
    type: "DELETE_ITEM_FROM_LIST",
    itemToDelete,
    listId
  };
}
