import os
import json
from tqdm import tqdm

EDITOR_FILENAME = 'editor.txt'
TERMINAL_FILENAME = 'terminal.txt'
GUIDE_FILENAME = 'guide.html'
OUTPUT_FILENAME = 'stages.json'

def construct_highlighted_editor_obj(filename):
    with open(filename, 'r') as f:
        first_line = f.readline().strip()
        highlighted_lines = [int(n) for n in first_line.split(",")] if first_line else []
        file_contents = f.read()

    return {
        'highlightedLines': highlighted_lines,
        'text': file_contents
    }

def make_stage_json(dirname):
    assert EDITOR_FILENAME in os.listdir(dirname), f'{dirname} does not have editor.txt'
    assert TERMINAL_FILENAME in os.listdir(dirname), f'{dirname} does not have terminal.txt'
    assert GUIDE_FILENAME in os.listdir(dirname), f'{dirname} does not have guide.html'

    return {
        'guide': {
            'html': open(os.path.join(dirname, GUIDE_FILENAME)).read()
        },
        'editor': construct_highlighted_editor_obj(os.path.join(dirname, EDITOR_FILENAME)),
        'terminal': construct_highlighted_editor_obj(os.path.join(dirname, TERMINAL_FILENAME))
    }


def make_stages_json(output_filename):
    stages = []
    for entry in tqdm(sorted([
        f for f in os.listdir() if f.startswith("stage") and os.path.isdir(f)], 
        key=lambda s: int(s[5:])
    )):
        stages.append(make_stage_json(entry))
    json.dump(stages, open(output_filename, 'w'))

if __name__ == "__main__":
    make_stages_json(OUTPUT_FILENAME)