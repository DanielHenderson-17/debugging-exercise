const { execSync } = require("child_process");

function showHeadCommit() {
  try {
    const result = execSync(
      'git log -1 --pretty=format:"%h %ad %s" --date=short',
      { encoding: "utf-8" }
    );
    console.log("HEAD is at:", result);
  } catch (err) {
    console.error("Error checking commit:", err.message);
  }
}

showHeadCommit();
