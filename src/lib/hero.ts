import { heroConfig } from "@/config/Hero";

/**
 * parseTemplate
 * ---------------------
 * Fungsi ini digunakan untuk mem-parse template string kompleks yang bisa mengandung:
 * - Placeholder skill dalam format {skills:X}
 * - Teks yang dibungkus dengan <b>...</b> (bold)
 * - Teks biasa
 *
 * Fungsi ini akan mengembalikan array berisi objek yang memiliki:
 * - type: 'skill' | 'bold' | 'text'
 * - key: unik untuk keperluan React rendering
 *
 * Contoh input:
 * "Saya menggunakan {skills:0} dan suka <b>design</b>"
 *
 * Cocok digunakan untuk rendering bagian Hero yang mencampur icon skill dan teks styled.
 */
export const parseTemplate = (
  template: string,
  skills: typeof heroConfig.skills
) => {
  const parts = template.split(/(\{skills:\d+\})/);

  return parts
    .map((part, index) => {
      const skillMatch = part.match(/\{skills:(\d+)\}/);
      if (skillMatch) {
        const skillIndex = parseInt(skillMatch[1]);
        const skill = skills[skillIndex];
        if (skill) {
          return {
            type: "skill",
            skill: skill,
            key: index,
          };
        }
      }

      const boldParts = part.split(/(<b>.*?<\/b>)/);
      return boldParts.map((boldPart, boldIndex) => {
        if (boldPart.startsWith("<b>") && boldPart.endsWith("</b>")) {
          return {
            type: "bold",
            text: boldPart.slice(3, -4),
            key: `${index}.${boldIndex}`,
          };
        }
        return {
          type: "text",
          text: boldPart,
          key: index + "." + boldIndex,
        };
      });
    })
    .flat();
};

/**
 * parseBoldText
 * ---------------------
 * Fungsi ini lebih sederhana dibanding parseTemplate.
 * Digunakan untuk mem-parse string yang hanya berisi:
 * - Teks biasa
 * - Teks bold (<b>...</b>)
 *
 * Tidak mengenali atau memproses placeholder skill seperti {skills:0}.
 *
 * Cocok untuk textarea, input dari user, atau teks statis yang hanya ingin diberi efek bold.
 *
 * Contoh input:
 * "Saya suka <b>ngoding</b> di malam hari"
 *
 * Outputnya berupa array objek:
 * - text: isi teks
 * - bold: true/false
 * - key: unik
 */
export const parseBoldText = (text: string) => {
  const parts = text.split(/(<b>.*?<\/b>)/);
  return parts.map((part, index) => {
    if (part.startsWith("<b>") && part.endsWith("</b>")) {
      return {
        text: part.slice(3, -4),
        bold: true,
        key: index,
      };
    }
    return {
      text: part,
      bold: false,
      key: index,
    };
  });
};
