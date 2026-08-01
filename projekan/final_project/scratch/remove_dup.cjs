const fs = require('fs');
let code = fs.readFileSync('c:/Users/ASUS TUF A15/Downloads/KCI-PROJEKAN/projekan/final_project/src/AdminApp.tsx', 'utf8');

const targetStr = `;\n\ntype PengujianRequestRow = {`;
const idx = code.indexOf(targetStr);

if (idx !== -1) {
  const nextSection = `// ─── Pembayaran Page ─────────────────────────────────────────────────────────`;
  const endIdx = code.indexOf(nextSection, idx);
  if (endIdx !== -1) {
    code = code.substring(0, idx + 1) + "\n\n" + code.substring(endIdx);
    console.log('Successfully removed duplicate block!');
  } else {
    console.log('Could not find nextSection marker');
  }
} else {
  console.log('Could not find targetStr');
}

fs.writeFileSync('c:/Users/ASUS TUF A15/Downloads/KCI-PROJEKAN/projekan/final_project/src/AdminApp.tsx', code);
