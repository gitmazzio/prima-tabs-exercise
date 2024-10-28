import React from 'react';
import { Badge, BadgeProps } from '../badge/badge';
import styles from './tab.module.scss';

export interface TabProps extends React.ComponentPropsWithRef<'button'> {
    variant?: "pill" | "underline"
    label: string;
    isSelected?: boolean,
    badge?: BadgeProps
}

/** Primary UI component for user interaction */
export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
    ({ variant = "pill", label, isSelected = false, badge, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={styles.tab}
                data-variant={variant}
                data-selected={isSelected}
                {...props}
            >
                <span>{label}</span>
                {badge ? <Badge {...badge} /> : null}
            </button>
        );
    }
);
