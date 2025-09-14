const fs = require("fs");

// Caminhos dos arquivos
const txtPath = "Ritual_de_Aprendiz_Rito_Schroder_GLMERGS_2007.txt";
const jsonPath = "ritual_indice_conteudo_limpo.json";
const outputPath = "ritual_indice_conteudo_final.json";

// Carregar JSON limpo
const rawJson = fs.readFileSync(jsonPath, "utf8");

// Corrigir caracteres de controle que quebram o JSON
const safeJson = rawJson.replace(/[\u0000-\u001F]+/g, " ");

const ritualJson = JSON.parse(safeJson);

// Carregar texto integral
const ritualText = fs.readFileSync(txtPath, "utf8");

// Função para extrair seções entre títulos
function extractSectionsExact(text, titles) {
  const sections = {};
  for (let i = 0; i < titles.length; i++) {
    const title = titles[i];
    const nextTitles = titles.slice(i + 1);

    let pattern;
    if (nextTitles.length > 0) {
      pattern = new RegExp(
        title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
          "(.*?)(" +
          nextTitles.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") +
          "|$)",
        "si"
      );
    } else {
      pattern = new RegExp(
        title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(.*)$",
        "si"
      );
    }

    const match = ritualText.match(pattern);
    sections[title] = match ? match[1].trim() : "";
  }
  return sections;
}

// ---- CAPÍTULOS PRINCIPAIS ----
const titlesMain = ritualJson.map(item => item.titulo);
const sectionsMain = extractSectionsExact(ritualText, titlesMain);

const capitulos = titlesMain.map((title, i) => ({
  id: i + 1,
  titulo: title,
  conteudo: sectionsMain[title] || ""
}));

// ---- APÊNDICE ----
// Localizar o bloco do Apêndice
const apMatch = ritualText.match(/APÊNDICE(.*)/si);
const apendiceText = apMatch ? apMatch[1].trim() : "";

// Separar linhas
const apendiceLines = apendiceText.split("\n").map(l => l.trim()).filter(l => l);

// Definir títulos do apêndice (aqui: linhas em MAIÚSCULAS)
const titlesApendice = apendiceLines.filter(line => line === line.toUpperCase());

const sectionsApendice = extractSectionsExact(apendiceText, titlesApendice);

const apendice = titlesApendice.map((title, i) => ({
  id: i + 1,
  titulo: title,
  conteudo: sectionsApendice[title] || ""
}));

// ---- JSON FINAL ----
const jsonFinal = {
  capitulos,
  apendice
};

// Salvar resultado
fs.writeFileSync(outputPath, JSON.stringify(jsonFinal, null, 4), "utf8");
console.log("✅ Arquivo salvo em:", outputPath);
