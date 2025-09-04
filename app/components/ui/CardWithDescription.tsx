"use client";

import React from 'react';
import Card from './Card';

type BookmarkSide = 'left' | 'right';

type BaseCardProps = React.ComponentProps<typeof Card>;

interface CardWithDescriptionProps extends Omit<BaseCardProps, 'children'> {
  children: React.ReactNode;
  bookmarkText?: React.ReactNode;
  bookmarkSide?: BookmarkSide;
  bookmarkColor?: string;
  bookmarkTextColor?: string;
  bookmarkPadding?: string;
  bookmarkBorderRadius?: string;
  bookmarkOffset?: string;
  bookmarkMinWidth?: string;
  bookmarkInnerOffset?: string;
}

const CardWithDescription: React.FC<CardWithDescriptionProps> = ({
  children,
  bookmarkText,
  bookmarkSide = 'right',
  bookmarkColor = '#ffffff',
  bookmarkTextColor = '#111827',
  bookmarkPadding = '0.5rem 0.75rem',
  bookmarkBorderRadius = '0.75rem',
  bookmarkOffset = '18rem',
  bookmarkMinWidth = '10rem',
  bookmarkInnerOffset = '2rem',
  className = '',
  ...cardProps
}) => {
  const isRight = bookmarkSide === 'right';

  return (
    <div className={`relative inline-block overflow-visible w-fit ${isRight ? 'self-start' : 'self-end'} ${className}`}>
      <Card {...cardProps} className="relative z-10">
        {children}
      </Card>

      <div
        className={`absolute z-0 top-1/2 -translate-y-1/2 ${isRight ? 'right-0 translate-x-[50%] mr-10 text-right' : 'left-0 -translate-x-[50%] ml-10 text-left'} pointer-events-none`}
        style={{ marginRight: isRight ? `calc(-1 * ${bookmarkOffset})` : undefined, marginLeft: !isRight ? `calc(-1 * ${bookmarkOffset})` : undefined }}
      >
        <div className="pointer-events-auto" style={{ minWidth: bookmarkMinWidth }}>
          <Card
            backgroundColor={bookmarkColor}
            borderRadius={bookmarkBorderRadius}
            padding={bookmarkPadding}
            shadow={true}
            className="whitespace-nowrap w-full"
          >
            <div
              style={{
                paddingLeft: isRight ? bookmarkInnerOffset : undefined,
                paddingRight: !isRight ? bookmarkInnerOffset : undefined,
              }}
            >
              <span style={{ color: bookmarkTextColor }} className="text-sm font-medium">
                {bookmarkText}
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardWithDescription;


