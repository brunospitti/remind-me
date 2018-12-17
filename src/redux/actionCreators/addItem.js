export default function addItem(itemToAdd, listId) {
  return {
    type: "ADD_ITEM_TO_LIST",
    itemToAdd,
    listId
  };
}
