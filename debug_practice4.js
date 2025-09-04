function randomDebugCheck() {
  const num = Math.floor(Math.random() * 100); // random 0–99
  if (num % 2 === 0) {
    console.log(`Debug: ${num} is even`);
  } else {
    console.log(`Debug: ${num} is odd`);
  }
  return num;
}

// Run it once
randomDebugCheck();
