import json

notebook = "network_visualization"
with open(f"{notebook}.ipynb", mode='r', encoding="utf-8") as f:
    file = json.loads(f.read())

with open(f"{notebook}.json", "w") as f:
    json.dump(file, f)