export default function SkillBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-gray-700">
      {label}
    </span>
  );
}
