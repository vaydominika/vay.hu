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
    <div className={`relative grid inline-block overflow-visible w-full mb-12 ${isRight ? 'self-start' : 'self-end'} ${className}`}>
      <div className="col-start-1 row-start-1 z-0">
        <div className="pointer-events-auto" style={{ minWidth: bookmarkMinWidth }}>
          <Card
            backgroundColor={bookmarkColor}
            borderRadius={bookmarkBorderRadius}
            padding={bookmarkPadding}
            shadow={true}
            className="w-full min-h-[23rem]"
          >
            <div
              className={`w-1/2 ${isRight ? 'ml-auto text-right' : 'text-left'}`}
              style={{
                paddingLeft: isRight ? bookmarkInnerOffset : undefined,
                paddingRight: !isRight ? bookmarkInnerOffset : undefined,
              }}
            >
              <p style={{ color: bookmarkTextColor }} className="text-sm font-medium leading-relaxed whitespace-normal break-words">
                {bookmarkText}
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Foreground content card */}
      <div className={`absolute col-start-1 row-start-1 z-10 ${isRight ? '-top-8 left-0' : '-top-8 right-0'}`}>
        <Card {...cardProps} className="relative">
          {children}
        </Card>
      </div>
    </div>
  );
};

export default CardWithDescription;


