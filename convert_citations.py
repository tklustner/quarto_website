import re
import sys

def convert_to_footnotes(text):
    footnotes = []
    counter = [0]
    
    # Track URLs we've seen to deduplicate
    url_to_index = {}
    
    def replace_link(match):
        link_text = match.group(1)
        url = match.group(2)
        
        # Skip internal links (relative paths, notion links used as anchors)
        if not url.startswith('http'):
            return link_text
        
        # Deduplicate URLs
        if url in url_to_index:
            idx = url_to_index[url]
        else:
            counter[0] += 1
            idx = counter[0]
            url_to_index[url] = idx
            footnotes.append((idx, url))
        
        return f"{link_text}[^{idx}]"
    
    # Replace all markdown links
    converted = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', replace_link, text)
    
    # Build footnote block
    footnote_block = "\n\n---\n\n## Notes\n\n"
    for idx, url in footnotes:
        footnote_block += f"[^{idx}]: {url}\n\n"
    
    return converted + footnote_block

with open(sys.argv[1], 'r') as f:
    text = f.read()

result = convert_to_footnotes(text)

with open(sys.argv[1].replace('.md', '_footnotes.md'), 'w') as f:
    f.write(result)

print("Done.")
