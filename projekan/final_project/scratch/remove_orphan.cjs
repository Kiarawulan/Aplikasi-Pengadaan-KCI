const fs = require('fs');
let code = fs.readFileSync('c:/Users/ASUS TUF A15/Downloads/KCI-PROJEKAN/projekan/final_project/src/AdminApp.tsx', 'utf8');

const orphanBlock = `  idNpp: string;\n  idRup: string;\n  noCont: string;\n  divisi: string;\n  opexCapex: string;\n  kategori: string;\n  tahun: string;\n  sp3Final: string;\n  status: string;\n  statusHps: string;\n  namaPaket: string;\n  nilaiKontrak: string;\n  vendor: string;\n};`;

if (code.includes(orphanBlock)) {
  code = code.replace(orphanBlock, "");
  console.log("Successfully removed orphan block!");
} else {
  console.log("Orphan block not found");
}

fs.writeFileSync('c:/Users/ASUS TUF A15/Downloads/KCI-PROJEKAN/projekan/final_project/src/AdminApp.tsx', code);
