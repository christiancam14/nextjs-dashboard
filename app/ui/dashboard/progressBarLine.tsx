interface ProgressBarProps {
  progress: number;
}

export function ProgressBarLine({ progress }: ProgressBarProps) {
  return (
    <div className="w-full bg-gray-300 rounded-full h-2.5">
      <div
        className="bg-gray-800 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
