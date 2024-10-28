import styles from './tab.module.scss';

export interface TabProps {
    variant?: "pill" | "underline"
    label: string;
    isSelected?: boolean
}

/** Primary UI component for user interaction */
export const Tab = ({
    variant = "pill",
    label,
    isSelected = false
}: TabProps) => {
    return (
        <div
            className={styles.tab}
            data-variant={variant}
            data-selected={isSelected}
        >
            {label}
        </div>
    );
};
