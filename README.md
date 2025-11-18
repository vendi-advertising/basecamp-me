# Basecamp Todo Highlighter

A browser extension that automatically highlights todos assigned to you in Basecamp projects, making it easier to scan
long lists and focus on your responsibilities.

## Features

- **Automatic highlighting** - Detects and highlights your assigned todos
- **Seamless navigation** - Works as you navigate between projects without page refresh
- **Theme-aware** - Respects Basecamp's color schemes and themes
- **Light & dark mode** - Compatible with both light and dark mode
- **Lightweight** - Minimal performance impact, runs entirely in your browser
- **Privacy-focused** - No data collection, storage, or transmission

## Installation

Download the extension from the
[Add-ons for Firefox](https://addons.mozilla.org/en-US/firefox/addon/basecamp-todo-highlighter/) or
[Chrome Web Store](https://chromewebstore.google.com/detail/basecamp-todo-highlighter/jnmoeckmedpikpafhblphfngpbfodfog).

## Privacy

This extension runs entirely in your browser and does not:

- Collect any personal information
- Store any data
- Transmit any information to external servers
- Require any special permissions beyond accessing Basecamp pages

It simply reads your Basecamp username from the page and applies CSS highlighting to matching todos.

## Development

### Building from Source

```bash
# Clone the repository
git clone https://github.com/vendi-advertising/basecamp-me.git
cd basecamp-me

# Create a ZIP package
zip -r basecamp-highlighter.zip manifest.json content.js
```

### File Structure

```
basecamp-me/
├── manifest.json    # Extension configuration
├── content.js       # Main highlighting logic
└── README.md        # This file
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Support

If you encounter any issues or have suggestions,
please [open an issue](https://github.com/vendi-advertising/basecamp-me/issues) on GitHub.