import { BadgeVariant } from '../../types';
import styles from './Badge.module.css';

export interface BadgeProps {
  variant: BadgeVariant;
  label: string;
}

const Badge = ({ variant, label }: BadgeProps) => {
  if (!label) return null;
  return (
    <div aria-label={label} className={`${styles.badge} ${styles[variant]}`}>
      {label}
    </div>
  );
};

export default Badge;
