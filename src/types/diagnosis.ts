export const diagnosisTags = [
  "love",
  "loneliness",
  "passion",
  "calm",
  "effort",
  "nostalgia",
  "change",
  "confidence",
  "sensitivity",
  "confusion",
] as const;

export type DiagnosisTag = (typeof diagnosisTags)[number];
export type ScoreMap = Record<DiagnosisTag, number>;

export type QuestionOption = {
  id: string;
  text: string;
  scores: Partial<ScoreMap>;
};

export type Question = {
  id: string;
  text: string;
  options: QuestionOption[];
};

export type Poem = {
  id: string;
  kamiNoKu: string;
  shimoNoKu: string;
  poet: string;
  translation: string;
  tags: Partial<ScoreMap>;
  comment: string;
  message: string;
  action: string;
};
