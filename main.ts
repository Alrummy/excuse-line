const fs = require('fs');
const path = require('path');

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, 'entry.txt'),
  // A deadline gets lost in the noise of other deadlines.
  "My context window filled up with your other deadlines, so this one got summarized into 'later'.\n",
  'utf8'
);
