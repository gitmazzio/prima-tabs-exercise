import type { Meta, StoryObj } from '@storybook/react';
import { FC } from 'react';
import { BadgeProps } from '../badge/badge';
import { TabList } from './tabList';

interface ContentTabOneProps extends React.HTMLAttributes<HTMLDivElement> {
    tabId: string;
}

/* Content could be ReactNode or string */
const ContentTabOne: FC<ContentTabOneProps> = ({ tabId, ...props }) => {
    return <div {...props}>{`Content tab ${tabId}`}</div>
}

const TABS = [
    { id: 'tab-1', label: 'Tab 1', content: <ContentTabOne tabId={"1"} /> },
    { id: 'tab-2', label: 'Tab 2', content: 'Content tab 2' },
    {
        id: 'tab-3', label: 'Tab 3',
        badge: {
            label: "Warning",
            variant: "negative" as BadgeProps["variant"]
        },
        content: 'Content tab 3'
    },
    { id: 'tab-4', label: 'Tab 4', content: 'Content tab 4' },
    { id: 'tab-5', label: 'Tab 5', content: 'Content tab 5' },
    { id: 'tab-6', label: 'Tab 6', content: <ContentTabOne style={{ backgroundColor: "red" }} tabId={"6"} /> },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/TabList',
    component: TabList,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {
        tabs: TABS
    },
} satisfies Meta<typeof TabList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tabs: TABS
    },
};
