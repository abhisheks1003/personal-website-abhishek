export default function SkillBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:border-secondary hover:text-secondary">
      {label}
    </span>
  );
}
