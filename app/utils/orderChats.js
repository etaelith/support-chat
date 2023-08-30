export function sortChatsByLastMessageTimestamp(chatsArray) {
  return [...chatsArray].sort(
    (a, b) =>
      new Date(b.lastMessageTimestamp).getTime() - new Date(a.lastMessageTimestamp).getTime(),
  );
}
