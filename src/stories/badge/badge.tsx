import styles from './badge.module.scss';

export interface BadgeProps {
  variant?: "neutral" | "positive" | "negative";
  label: string;
}

/** Primary UI component for user interaction */
export const Badge = ({
  variant = "neutral",
  label,
}: BadgeProps) => {
  return (
    <div
      className={styles.badge}
      data-variant={variant}
    >
      {label}
    </div>
  );
};
