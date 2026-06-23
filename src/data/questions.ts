import type { Question } from "@/types/diagnosis";

export const questions: Question[] = [
  { id: "q1", text: "今の気分に一番近いものは？", options: [
    { id: "a", text: "落ち着いている", scores: { calm: 2 } },
    { id: "b", text: "少し迷っている", scores: { confusion: 2 } },
    { id: "c", text: "前向きな気持ち", scores: { confidence: 2 } },
    { id: "d", text: "少しさみしい", scores: { loneliness: 2 } },
  ]},
  { id: "q2", text: "人との関わり方で近いものは？", options: [
    { id: "a", text: "深く狭く関わりたい", scores: { love: 1, calm: 1 } },
    { id: "b", text: "一人の時間も大切", scores: { loneliness: 1, calm: 1 } },
    { id: "c", text: "みんなと楽しく過ごしたい", scores: { confidence: 1, passion: 1 } },
    { id: "d", text: "相手の気持ちを考えすぎる", scores: { sensitivity: 1, confusion: 1 } },
  ]},
  { id: "q3", text: "今、心に引っかかっていることは？", options: [
    { id: "a", text: "これからの変化", scores: { change: 2 } },
    { id: "b", text: "誰かとの関係", scores: { love: 2 } },
    { id: "c", text: "過去の思い出", scores: { nostalgia: 2 } },
    { id: "d", text: "努力が報われるか", scores: { effort: 2 } },
  ]},
  { id: "q4", text: "好きな時間帯は？", options: [
    { id: "a", text: "朝", scores: { confidence: 1, change: 1 } },
    { id: "b", text: "昼", scores: { passion: 1, effort: 1 } },
    { id: "c", text: "夕方", scores: { nostalgia: 1, sensitivity: 1 } },
    { id: "d", text: "夜", scores: { loneliness: 1, calm: 1 } },
  ]},
  { id: "q5", text: "困ったときのあなたは？", options: [
    { id: "a", text: "まず一人で考える", scores: { calm: 2 } },
    { id: "b", text: "誰かに相談する", scores: { love: 1, confidence: 1 } },
    { id: "c", text: "とにかく動いてみる", scores: { passion: 1, effort: 1 } },
    { id: "d", text: "しばらく悩んでしまう", scores: { confusion: 2 } },
  ]},
  { id: "q6", text: "美しいと感じるものは？", options: [
    { id: "a", text: "桜や紅葉", scores: { sensitivity: 2 } },
    { id: "b", text: "月や夜空", scores: { calm: 1, loneliness: 1 } },
    { id: "c", text: "海や川", scores: { change: 1, sensitivity: 1 } },
    { id: "d", text: "昔の手紙や写真", scores: { nostalgia: 2 } },
  ]},
  { id: "q7", text: "今のあなたに必要そうなものは？", options: [
    { id: "a", text: "勇気", scores: { confidence: 2 } },
    { id: "b", text: "休息", scores: { calm: 2 } },
    { id: "c", text: "誰かとのつながり", scores: { love: 1, loneliness: 1 } },
    { id: "d", text: "続ける力", scores: { effort: 2 } },
  ]},
  { id: "q8", text: "恋や友情で大切にしたいことは？", options: [
    { id: "a", text: "まっすぐ伝えること", scores: { passion: 1, love: 1 } },
    { id: "b", text: "相手を静かに思いやること", scores: { calm: 1, love: 1 } },
    { id: "c", text: "距離感を大切にすること", scores: { calm: 1, loneliness: 1 } },
    { id: "d", text: "変化を受け入れること", scores: { change: 2 } },
  ]},
  { id: "q9", text: "あなたの強みに近いものは？", options: [
    { id: "a", text: "感じ取る力", scores: { sensitivity: 2 } },
    { id: "b", text: "続ける力", scores: { effort: 2 } },
    { id: "c", text: "落ち着いて考える力", scores: { calm: 2 } },
    { id: "d", text: "思い切って進む力", scores: { passion: 1, confidence: 1 } },
  ]},
  { id: "q10", text: "今の自分に近い言葉は？", options: [
    { id: "a", text: "これから変わっていきたい", scores: { change: 2 } },
    { id: "b", text: "大切なものを守りたい", scores: { love: 1, effort: 1 } },
    { id: "c", text: "少し立ち止まりたい", scores: { calm: 1, confusion: 1 } },
    { id: "d", text: "心が強く動いている", scores: { passion: 1, sensitivity: 1 } },
  ]},
];
