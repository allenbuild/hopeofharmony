const notes = [
  ["♪", 4, 14, 0.82, -12], ["♫", 14, 5, 1.2, 8], ["♩", 23, 24, 0.72, -4],
  ["♬", 35, 9, 1.05, 11], ["♪", 47, 18, 0.78, -9], ["♫", 57, 4, 1.22, 5],
  ["♩", 69, 22, 0.72, 14], ["♪", 82, 7, 0.9, -6], ["♫", 94, 17, 1.14, 9],
  ["♬", 8, 42, 1.08, 6], ["♪", 19, 55, 0.72, -15], ["♩", 31, 39, 0.86, 5],
  ["♫", 43, 58, 1.18, -8], ["♪", 54, 43, 0.74, 13], ["♬", 66, 53, 1.02, -4],
  ["♩", 77, 38, 0.82, 10], ["♫", 89, 57, 1.16, -11], ["♪", 97, 44, 0.68, 7],
  ["♩", 3, 78, 0.78, 11], ["♫", 13, 68, 1.14, -7], ["♪", 27, 84, 0.72, 5],
  ["♬", 39, 72, 1.06, -13], ["♩", 51, 90, 0.76, 8], ["♫", 63, 76, 1.2, 4],
  ["♪", 75, 88, 0.74, -10], ["♬", 86, 70, 1.03, 12], ["♩", 96, 86, 0.8, -5],
] as const;

export function MusicMotif({ className = "" }: { className?: string }) {
  return (
    <div className={`music-motif${className ? ` ${className}` : ""}`} aria-hidden="true">
      {notes.map(([note, left, top, scale, rotate], index) => (
        <span
          key={`${note}-${index}`}
          style={{
            left: `${left}%`,
            top: `${top}%`,
            fontSize: `clamp(${Math.round(18 * scale)}px, ${(
              2.1 * scale
            ).toFixed(2)}vw, ${Math.round(36 * scale)}px)`,
            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
          }}
        >
          {note}
        </span>
      ))}
    </div>
  );
}
