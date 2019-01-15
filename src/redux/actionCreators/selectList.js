export default function selectList(listId) {
  return {
    type: "CHANGE_ACTIVE_LIST",
    listId
  };
}