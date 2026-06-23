import { describe, expect, it } from "vitest";
import { poems } from "@/data/poems";
import { questions } from "@/data/questions";
import { aggregateScores, calculateDistance, createEmptyScores, findBestPoem } from "@/lib/diagnosis";
import type { Poem } from "@/types/diagnosis";

describe("diagnosis data", () => {
  it("contains 10 questions with exactly 4 options each", () => {
    expect(questions).toHaveLength(10);
    questions.forEach((question) => expect(question.options).toHaveLength(4));
  });

  it("contains all 100 complete poems in order", () => {
    expect(poems).toHaveLength(100);
    expect(poems.map((poem) => poem.id)).toEqual(
      Array.from({ length: 100 }, (_, index) => String(index + 1).padStart(3, "0")),
    );
    poems.forEach((poem) => {
      expect(poem.id).toMatch(/^\d{3}$/);
      expect(poem.kamiNoKu).toBeTruthy();
      expect(poem.shimoNoKu).toBeTruthy();
      expect(poem.poet).toBeTruthy();
      expect(poem.translation).toBeTruthy();
      expect(Object.keys(poem.tags).length).toBeGreaterThan(0);
      expect(poem.comment).toBeTruthy();
      expect(poem.message).toBeTruthy();
      expect(poem.action).toBeTruthy();
      expect(Object.values(poem.tags).every((score) => score > 0)).toBe(true);
    });
  });
});

describe("diagnosis logic", () => {
  it("aggregates all score tags", () => {
    const scores = aggregateScores([
      { id: "a", text: "", scores: { love: 2, calm: 1 } },
      { id: "b", text: "", scores: { love: 1, effort: 2 } },
    ]);
    expect(scores.love).toBe(3);
    expect(scores.calm).toBe(1);
    expect(scores.effort).toBe(2);
    expect(scores.confusion).toBe(0);
  });

  it("calculates Manhattan distance", () => {
    const scores = createEmptyScores();
    scores.love = 3;
    scores.calm = 1;
    expect(calculateDistance(scores, { love: 2, calm: 1 })).toBe(1);
  });

  it("uses primary-tag match and then lowest id for ties", () => {
    const scores = createEmptyScores();
    scores.love = 2;
    const base = {
      kamiNoKu: "上", shimoNoKu: "下", poet: "歌人", translation: "訳",
      comment: "診断", message: "一言", action: "行動",
    };
    const candidates: Poem[] = [
      { ...base, id: "020", tags: { calm: 2 } },
      { ...base, id: "010", tags: { love: 1, calm: 1 } },
      { ...base, id: "005", tags: { love: 1, calm: 1 } },
    ];
    expect(findBestPoem(scores, candidates)?.id).toBe("005");
  });

  it("returns a deterministic result for ten answers", () => {
    const scores = aggregateScores(questions.map((question) => question.options[0]));
    const first = findBestPoem(scores, poems);
    const second = findBestPoem(scores, poems);
    expect(first).toBeDefined();
    expect(first?.id).toBe(second?.id);
  });
});
