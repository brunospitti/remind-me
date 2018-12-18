export default function checkItem(itemToCheck, listId) {
  return {
    type: "CHECK_ITEM",
    itemToCheck,
    listId
  };
}
