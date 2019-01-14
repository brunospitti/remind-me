export default function changeListColor(listId, newColor) {
  return {
    type: "CHANGE_LIST_COLOR",
    listId,
    newColor
  };
}
