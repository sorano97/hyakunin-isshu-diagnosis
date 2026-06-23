import { diagnosisTags, type Poem, type QuestionOption, type ScoreMap } from "@/types/diagnosis";

export function createEmptyScores(): ScoreMap {
  return Object.fromEntries(diagnosisTags.map((tag) => [tag, 0])) as ScoreMap;
}

export function aggregateScores(options: QuestionOption[]): ScoreMap {
  return options.reduce((total, option) => {
    diagnosisTags.forEach((tag) => {
      total[tag] += option.scores[tag] ?? 0;
    });
    return total;
  }, createEmptyScores());
}

export function calculateDistance(userScores: ScoreMap, poemScores: Poem["tags"]): number {
  return diagnosisTags.reduce(
    (sum, tag) => sum + Math.abs(userScores[tag] - (poemScores[tag] ?? 0)),
    0,
  );
}

function countPrimaryTagMatches(userScores: ScoreMap, poem: Poem): number {
  const highestScore = Math.max(...Object.values(userScores));
  if (highestScore <= 0) return 0;

  return diagnosisTags.filter(
    (tag) => userScores[tag] === highestScore && (poem.tags[tag] ?? 0) > 0,
  ).length;
}

export function findBestPoem(userScores: ScoreMap, candidates: Poem[]): Poem | undefined {
  return [...candidates].sort((a, b) => {
    const distanceDifference =
      calculateDistance(userScores, a.tags) - calculateDistance(userScores, b.tags);
    if (distanceDifference !== 0) return distanceDifference;

    const primaryTagDifference =
      countPrimaryTagMatches(userScores, b) - countPrimaryTagMatches(userScores, a);
    if (primaryTagDifference !== 0) return primaryTagDifference;

    return a.id.localeCompare(b.id, "en", { numeric: true });
  })[0];
}
