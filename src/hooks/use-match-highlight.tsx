import { useContext } from 'react';
import { matchContext } from 'Core/match-context';

const useMatchHighlightContext = ({ bracketSnippet = null }) => {
  const {
    state: { hoveredPartyId },
  } = useContext(matchContext);
  const previousTopMatch = bracketSnippet?.previousTopMatch;
  const previousBottomMatch = bracketSnippet?.previousBottomMatch;
  const currentMatch = bracketSnippet?.currentMatch;

  const topHighlighted =
    currentMatch?.participants?.some(p => p.player === hoveredPartyId) &&
    previousTopMatch?.participants?.some(p => p.player === hoveredPartyId);

  const bottomHighlighted =
    currentMatch?.participants?.some(p => p.player === hoveredPartyId) &&
    previousBottomMatch?.participants?.some(p => p.player === hoveredPartyId);
  return { topHighlighted, bottomHighlighted };
};

export default useMatchHighlightContext;
