import type { Poem } from "@/types/diagnosis";

type ShareButtonProps = {
  displayName: string;
  poem: Poem;
};

export function ShareButton({ displayName, poem }: ShareButtonProps) {
  function share() {
    try {
      const shareText = `${displayName}に合う百人一首は「${poem.kamiNoKu} ${poem.shimoNoKu}」でした。\n#百人一首診断`;
      const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    } catch {
      // The page remains usable if the browser blocks external sharing.
    }
  }

  return (
    <button type="button" onClick={share} className="flex min-h-14 flex-1 items-center justify-center gap-2 rounded-xl border border-sumi/20 bg-sumi px-5 font-medium text-white transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sumi">
      <span className="text-lg" aria-hidden="true">𝕏</span>
      Xで結果を共有
    </button>
  );
}
