type ProgressBarProps = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="space-y-2" aria-label={`質問 ${current} / ${total}`}>
      <div className="flex items-end justify-between text-sm text-sumi/60">
        <span className="font-serif tracking-[0.16em]">問 {current}</span>
        <span><strong className="text-base font-medium text-enji">{current}</strong> / {total}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-enji/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-shu to-kin transition-[width] duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
