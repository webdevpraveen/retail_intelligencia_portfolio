import type { FeatureStatus } from '../../types/content';

interface StatusBadgeProps {
  status: FeatureStatus | null;
  label?: string;
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  if (!status) return null;

  return (
    <span className={`status-badge status-badge--${status}`}>
      {label || status}
    </span>
  );
}
