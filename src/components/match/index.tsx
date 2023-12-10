import React from 'react';
import { MatchComponentProps } from '../../types';
import {
  Score,
  Side,
  StyledMatch,
  Team,
  TopText,
  BottomText,
  Wrapper,
  Line,
  Anchor,
  Seed,
} from './styles';

function Match({
  bottomHovered,
  bottomParty,
  bottomText,
  bottomWon,
  match,
  onMatchClick,
  onMouseEnter,
  onMouseLeave,
  onPartyClick,
  topHovered,
  topParty,
  topText,
  topWon,
}: MatchComponentProps) {
  return (
    <Wrapper>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TopText>
          {match.startTime !== null
            ? `${new Date(match.startTime * 1000).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}  @ ${new Date(match.startTime * 1000).toLocaleTimeString([], {
                timeZoneName: 'short',
                hour: '2-digit',
                minute: '2-digit',
              })}`
            : ''}
        </TopText>
        {(match.href || typeof onMatchClick === 'function') && (
          <Anchor
            href={match.href}
            onClick={event =>
              onMatchClick?.({ match, topWon, bottomWon, event })
            }
          >
            <TopText>Match Details</TopText>
          </Anchor>
        )}
      </div>
      <StyledMatch>
        <Side
          onMouseEnter={() => onMouseEnter(topParty.player)}
          onMouseLeave={onMouseLeave}
          won={topWon}
          hovered={topHovered}
          onClick={() => onPartyClick?.(topParty, topWon)}
        >
          <Seed>{topParty?.player + 1 || ''}</Seed>
          <Team>{topParty?.playerData?.nickname}</Team>
          <Score won={topWon}>{topParty?.roundScore}</Score>
        </Side>
        <Line highlighted={topHovered || bottomHovered} />
        <Side
          onMouseEnter={() => onMouseEnter(bottomParty.player)}
          onMouseLeave={onMouseLeave}
          won={bottomWon}
          hovered={bottomHovered}
          onClick={() => onPartyClick?.(bottomParty, bottomWon)}
        >
          <Seed>{bottomParty?.player + 1 || ''}</Seed>
          <Team>{bottomParty?.playerData?.nickname}</Team>
          <Score won={bottomWon}>{bottomParty?.roundScore}</Score>
        </Side>
      </StyledMatch>
      <BottomText>{bottomText ?? ' '}</BottomText>
    </Wrapper>
  );
}

export default Match;
