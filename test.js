const loginUserMessage = (username) => {
  if (!username) {
    console.log(`please Enter userName`);
    return;
  }
  return `${username} just logged in`;
};

console.log(loginUserMessage("Ved"));