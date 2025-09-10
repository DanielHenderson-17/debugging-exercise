import subprocess

def show_head_commit():
    result = subprocess.run(
        ["git", "log", "-1", "--pretty=format:%h %ad %s", "--date=short"],
        capture_output=True, text=True
    )
    print("HEAD is at:", result.stdout)

    test