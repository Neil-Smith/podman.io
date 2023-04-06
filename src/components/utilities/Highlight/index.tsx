import React from 'react';
export type HighlightProps = {
  text: string;
  textColor?: string;
  bgColor?: string;
  fontWeight?: string;
};
export const Highlight = ({
  text,
  textColor = 'text-white dark:text-gray-100',
  bgColor = 'bg-purple-500 dark:bg-purple-300',
  fontWeight = 'font-regular',
}: HighlightProps): JSX.Element => {
  return <span className={`${textColor} ${bgColor} ${fontWeight}`}>{text}</span>;
};
