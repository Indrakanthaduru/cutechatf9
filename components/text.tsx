'use client';

import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { StreamableValue, useStreamableValue } from 'ai/rsc';
import { MemoizedReactMarkdown } from './memoized-react-markdown';

export function Text({ text }: { text: string | StreamableValue<string> }) {
  const [value] = useStreamableValue(text);

  return (
    <MemoizedReactMarkdown
      className="prose-sm prose-neutral prose-a:text-accent-foreground/50"
      remarkPlugins={[remarkGfm, remarkMath]}
      components={{
        p({ children }) {
          return <p className="mb-2 last:mb-0">{children}</p>;
        },
      }}
    >
      {value}
    </MemoizedReactMarkdown>
  );
}
