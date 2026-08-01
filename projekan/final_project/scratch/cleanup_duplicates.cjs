const fs = require('fs');
let code = fs.readFileSync('c:/Users/ASUS TUF A15/Downloads/KCI-PROJEKAN/projekan/final_project/src/AdminApp.tsx', 'utf8');

// Find and remove the duplicate block starting at line 3750
const duplicateMarker = `type PengujianRequestRow = {\n  noRequest: string;\n  namaPengujian: string;\n  tanggalRequest: string;\n  pemohon: string;\n  kategori: string;\n  status: string;\n};`;

const firstIdx = code.indexOf(duplicateMarker);
const secondIdx = code.indexOf(duplicateMarker, firstIdx + 1);

if (secondIdx !== -1) {
  // Find where the duplicate block ends (after the second PengujianPage)
  const endMarker = `function PengujianPage({ subDoc }: { subDoc: PengujianDoc }) {`;
  const firstPageIdx = code.indexOf(endMarker);
  const secondPageIdx = code.indexOf(endMarker, firstPageIdx + 1);

  // We cut out from secondIdx up to the end of second PengujianPage component
  const endOfSecondPage = code.indexOf('}\n\n// ─── Pembayaran Page', secondPageIdx);
  if (endOfSecondPage !== -1) {
    code = code.substring(0, secondIdx - 3) + code.substring(endOfSecondPage);
    console.log('Removed duplicate block successfully!');
  } else {
    console.log('Could not find end of second page');
  }
} else {
  console.log('No duplicate marker found');
}

fs.writeFileSync('c:/Users/ASUS TUF A15/Downloads/KCI-PROJEKAN/projekan/final_project/src/AdminApp.tsx', code);
