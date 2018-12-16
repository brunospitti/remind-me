export default function addList(newList, newColor) {
  return {
    type: "ADD_LIST",
    newList,
    newColor
  };
}
