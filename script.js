const htmlCode = document.getElementById('htmlCode');
const cssCode = document.getElementById('cssCode');
const jsCode = document.getElementById('jsCode');
const saveBtn = document.getElementById('saveBtn');
const output = document.getElementById('output');

function updateOutput() {
    const html = htmlCode.value;
    const css = `<style>${cssCode.value}</style>`;
    const js = `<script>${jsCode.value}<\/script>`;
    output.srcdoc = html + css + js;
}

// Actualizare live la fiecare modificare
htmlCode.addEventListener('input', updateOutput);
cssCode.addEventListener('input', updateOutput);
jsCode.addEventListener('input', updateOutput);

// Salvează proiectul
saveBtn.addEventListener('click', () => {
    const fullHtml = `
<!DOCTYPE html>
<html lang="ro">
<head>
<meta charset="UTF-8">
<title>Proiect Salvat</title>
<style>
${cssCode.value}
</style>
</head>
<body>
${htmlCode.value}
<script>
${jsCode.value}
</script>
</body>
</html>
    `;
    const blob = new Blob([fullHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "proiect.html";
    a.click();
    URL.revokeObjectURL(url);
});

// Initial update
updateOutput();