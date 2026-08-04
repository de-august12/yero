import subprocess
import time
import threading
import os

# Base directory
base_repo = os.path.dirname(os.path.abspath(__file__))
web_dir = os.path.join(base_repo, "Web")


def start_server(port, directory):
    subprocess.run(["python3", "-m", "http.server", port, "--directory", directory])

def git_manager():
    # Runs the git pull every 30 seconds
    while True:
        try:
            subprocess.run(["git", "pull"], capture_output=True)
            time.sleep(30)
        except Exception:
            time.sleep(30)

# Start Git Thread
threading.Thread(target=git_manager, daemon=True).start()

# Start Server Threads (Raw output)
threading.Thread(target=start_server, args=("8074", web_dir), daemon=True).start()

print("Yero is running.")

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    print("\nShutting down Yero...")
