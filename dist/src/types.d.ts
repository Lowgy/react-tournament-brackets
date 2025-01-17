import React, { ReactElement } from 'react';
export type Participant = {
    id?: string | number;
    roundScore?: number;
    player?: number | null;
    isWinner?: boolean;
    name?: string;
    status?: 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | string | null;
    resultText?: string | null;
    playerData?: {
        uuid: string;
        nickname: string;
        seasonEloRate: number;
        seasonEloRank: number | null;
        seedNumber: number;
        personalBest: number;
    };
    [key: string]: any;
};
export type Match = {
    id: number | string;
    href?: string;
    name?: string;
    nextMatchId: number | string | null;
    maxRoundScore?: number;
    nextLooserMatchId?: number | string;
    tournamentRoundText?: string;
    startTime: number | null;
    state: 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | string | null;
    participants: Participant[] | [];
    [key: string]: any;
};
export type Options = {
    width?: number;
    boxHeight?: number;
    canvasPadding?: number;
    spaceBetweenColumns?: number;
    spaceBetweenRows?: number;
    connectorColor?: string;
    connectorColorHighlight?: string;
    roundHeader?: {
        isShown?: boolean;
        height?: number;
        marginBottom?: number;
        fontSize?: number;
        fontColor?: string;
        backgroundColor?: string;
        fontFamily?: string;
        roundTextGenerator?: (currentRoundNumber: number, roundsTotalNumber: number) => string | undefined;
    };
    roundSeparatorWidth?: number;
    lineInfo?: {
        separation?: number;
        homeVisitorSpread?: number;
    };
    horizontalOffset?: number;
    wonBywalkOverText?: string;
    lostByNoShowText?: string;
};
export type ComputedOptions = Options & {
    rowHeight?: number;
    columnWidth?: number;
};
export type SvgViewerProps = {
    height: number;
    width: number;
    bracketWidth: number;
    bracketHeight: number;
    children: ReactElement;
    startAt: number[];
    scaleFactor: number;
};
export type MatchComponentProps = {
    match: Match;
    onMatchClick: (args: {
        match: Match;
        topWon: boolean;
        bottomWon: boolean;
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>;
    }) => void;
    onPartyClick: (party: Participant, partyWon: boolean) => void;
    onMouseEnter: (partyId: string | number) => void;
    onMouseLeave: () => void;
    topParty: Participant;
    bottomParty: Participant;
    topWon: boolean;
    bottomWon: boolean;
    topHovered: boolean;
    bottomHovered: boolean;
    topText: string;
    bottomText: string;
    connectorColor?: string;
    computedStyles?: ComputedOptions;
    teamNameFallback: string;
    resultFallback: (participant: Participant) => string;
};
export type Theme = {
    fontFamily: string;
    transitionTimingFunction: string;
    disabledColor: string;
    roundHeaders: {
        background: string;
    };
    matchBackground: {
        wonColor: string;
        lostColor: string;
    };
    border: {
        color: string;
        highlightedColor: string;
    };
    textColor: {
        highlighted: string;
        main: string;
        dark: string;
        disabled: string;
    };
    score: {
        text: {
            highlightedWonColor: string;
            highlightedLostColor: string;
        };
        background: {
            wonColor: string;
            lostColor: string;
        };
    };
    canvasBackground: string;
};
export type CommonTreeProps = {
    svgWrapper?: (props: {
        bracketWidth: number;
        bracketHeight: number;
        startAt: number[];
        children: ReactElement;
    }) => React.ReactElement;
    theme?: Theme;
    options?: {
        style: Options;
    };
};
export type BracketLeaderboardProps = CommonTreeProps & {
    matchComponent: (props: MatchComponentProps) => JSX.Element;
    currentRound?: string;
    onMatchClick?: (args: {
        match: Match;
        topWon: boolean;
        bottomWon: boolean;
    }) => void;
    onPartyClick?: (party: Participant, partyWon: boolean) => void;
};
export type SingleElimLeaderboardProps = BracketLeaderboardProps & {
    matches: Match[];
};
export type DoubleElimLeaderboardProps = BracketLeaderboardProps & {
    matches: {
        upper: Match[];
        lower: Match[];
    };
};
