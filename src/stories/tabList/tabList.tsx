import React, {
    ReactNode,
    useRef,
    useState
} from 'react';
import { BadgeProps } from '../badge/badge';
import { Tab } from '../tab/tab';
import styles from './tabList.module.scss';

interface TabItemsProps {
    id: string;
    label: string;
    badge?: BadgeProps,
    content: ReactNode | string
}

export interface TabsProps
    extends React.ComponentPropsWithRef<'div'> {
    tabs: TabItemsProps[];
    variant?: "pill" | "underline"
}

export const TabList = ({
    tabs,
    variant = "pill",
}: TabsProps) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [focusIndex, setFocusIndex] = useState(0);
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number): void => {
        let newIndex = index;

        if (event.key === 'ArrowRight') {
            newIndex = (index + 1) % tabs.length;
        } else if (event.key === 'ArrowLeft') {
            newIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (event.key === 'Enter' || event.key === ' ') {
            setActiveTab(tabs[focusIndex].id);
        }

        setFocusIndex(newIndex);
        tabsRef.current[newIndex]?.focus();
    };

    return (
        <div
            role="tablist"
            aria-label="Tab list"
            className={styles.root}
        >
            <div className={styles.tabs} data-variant={variant}>
                {tabs.map((tab, index) => (
                    <Tab
                        variant={variant}
                        key={tab.id}
                        ref={(el) => (tabsRef.current[index] = el)}  // Assegna il riferimento a ciascun bottone
                        isSelected={activeTab === tab.id}
                        label={tab.label}
                        id={tab.id}
                        role="tab"
                        aria-selected={activeTab === tab.id}
                        aria-controls={`panel-${tab.id}`}
                        onClick={() => setActiveTab(tab.id)}
                        onKeyDown={(event) => handleKeyDown(event, index)}
                        onFocus={() => setFocusIndex(index)}
                        badge={tab.badge}
                    />
                ))}
            </div>
            <div className={styles.content}>
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        role="tabpanel"
                        id={`panel-${tab.id}`}
                        aria-labelledby={tab.id}
                        hidden={activeTab !== tab.id}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div >
    );
}

