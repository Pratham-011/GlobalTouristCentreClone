import en from "./content/en.json";
import fr from "./content/fr.json";
import it from "./content/it.json";
import de from "./content/de.json";
import ru from "./content/ru.json";

export type Block = { p?: string; h3?: string; ul?: string[] };
export type Section = { title?: string; blocks?: Block[]; img?: string; alt?: string };
export type PackingContent = {
  ui: { title: string; description: string; date: string; category: string; team: string };
  sections: Section[];
};

const contents: Record<string, PackingContent> = { en, fr, it, de, ru };

export const FAQ_COUNT = 7;

export function getContent(locale: string = "en"): PackingContent {
  return contents[locale] ?? contents.en;
}

export function getFaqs(locale: string = "en") {
  return getContent(locale)
    .sections.slice(-FAQ_COUNT)
    .map((s) => ({ question: s.title as string, answer: s.blocks?.[0]?.p as string }));
}
