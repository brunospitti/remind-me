export default function changeItemPriorityColor(listId, taskId, newPriority) {
  return {
    type: "CHANGE_ITEM_PRIORITY_COLOR",
    listId,
    taskId,
    newPriority
  };
}
