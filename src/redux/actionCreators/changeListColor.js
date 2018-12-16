export default function changeListColor(listName, newColor) {
  return {
    type: "CHANGE_LIST_COLOR",
    listName,
    newColor
  };
}
