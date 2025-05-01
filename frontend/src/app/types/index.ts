export interface Player {
    username: string;
    total_solved: number;
    easy_solved: number;
    medium_solved: number;
    hard_solved: number;
    streak: number;
    rank?: number;
}

export interface LeaderboardResponse {
    players: Player[];
    last_updated: string;
}

export interface PlayerStats {
    username: string;
    stats: {
        total_solved: number;
        easy_solved: number;
        medium_solved: number;
        hard_solved: number;
        streak: number;
        rank: number;
    };
}