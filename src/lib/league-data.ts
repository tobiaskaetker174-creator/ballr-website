export interface PlayerOfMonth {
  month: string;
  name: string;
  elo: number;
  games: number;
  winRate: string;
  img: string;
}

export interface GoalOfMonth {
  month: string;
  scorer: string;
  description: string;
  votes: number;
}

export interface Organizer {
  name: string;
  role: string;
  bio: string;
  img: string;
  since: string;
  gamesOrganized: number;
}

export interface PitchStats {
  bestPlayer: { name: string; elo: number };
  mostGames: { name: string; count: number };
  mostWins: { name: string; count: number };
}

export interface Venue {
  name: string;
  type: string;
  address: string;
  img: string;
  capacity: string;
  surface: string;
  price: string;
  lat: number;
  lng: number;
  pitchStats: PitchStats;
}

export interface UpcomingGame {
  date: string;
  time: string;
  venue: string;
  spotsTotal: number;
  spotsFilled: number;
  price: string;
}

export interface CityLeagueData {
  slug: string;
  name: string;
  country: string;
  flag: string;
  stats: { leagues: number; players: number; gamesThisMonth: number };
  publicLeagues: { name: string; type: "public"; price: string; players: number }[];
  privateLeagues: { name: string; type: "private"; members: number }[];
  leaderboard: { rank: number; name: string; elo: number }[];
  img: string;
  photos: string[];
  blogLinks: { title: string; href: string }[];
  socials: { instagram?: string; tiktok?: string };
  playerOfMonth: PlayerOfMonth;
  playerOfMonthArchive: PlayerOfMonth[];
  goalOfMonth: GoalOfMonth;
  goalOfMonthArchive: GoalOfMonth[];
  organizer: Organizer;
  venues: Venue[];
  upcomingGames: UpcomingGame[];
}

export const cityData: Record<string, CityLeagueData> = {
  bangkok: {
    slug: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    flag: "\u{1F1F9}\u{1F1ED}",
    stats: { leagues: 12, players: 340, gamesThisMonth: 48 },
    publicLeagues: [
      { name: "Official BallR League Bangkok", type: "public", price: "200 THB", players: 340 },
    ],
    privateLeagues: [
      { name: "Asok Night Crew", type: "private", members: 12 },
      { name: "Expat Football BKK", type: "private", members: 30 },
      { name: "Bangkok Tech FC", type: "private", members: 18 },
    ],
    leaderboard: [
      { rank: 1, name: "NickTheBaller", elo: 1420 },
      { rank: 2, name: "TobiasKicks", elo: 1380 },
      { rank: 3, name: "DonLloret", elo: 1350 },
      { rank: 4, name: "BKK_Marco", elo: 1320 },
      { rank: 5, name: "SamuraiSam", elo: 1290 },
      { rank: 6, name: "ThaiTackle", elo: 1270 },
      { rank: 7, name: "AsokAce", elo: 1250 },
      { rank: 8, name: "SilomSniper", elo: 1230 },
      { rank: 9, name: "PitchKing", elo: 1210 },
      { rank: 10, name: "BenjakittiBoss", elo: 1190 },
    ],
    img: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&q=80",
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80",
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80",
    ],
    blogLinks: [
      { title: "Best Pickup Football Venues in Bangkok", href: "/blog/how-to-organize-pickup-football-bangkok" },
      { title: "Expat Football Guide to Southeast Asia", href: "/blog/expat-football-guide-southeast-asia" },
      { title: "Best Times to Play Football in Bangkok Weather", href: "/blog/best-times-play-football-bangkok-weather" },
    ],
    socials: {
      instagram: "https://instagram.com/ballr.bangkok",
      tiktok: "https://tiktok.com/@ballr.bangkok",
    },
    playerOfMonth: {
      month: "March 2026",
      name: "NickTheBaller",
      elo: 1420,
      games: 14,
      winRate: "78%",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    },
    playerOfMonthArchive: [
      { month: "March 2026", name: "NickTheBaller", elo: 1420, games: 14, winRate: "78%", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
      { month: "February 2026", name: "TobiasKicks", elo: 1380, games: 12, winRate: "75%", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" },
      { month: "January 2026", name: "DonLloret", elo: 1350, games: 11, winRate: "72%", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" },
      { month: "December 2025", name: "BKK_Marco", elo: 1320, games: 13, winRate: "69%", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80" },
      { month: "November 2025", name: "SamuraiSam", elo: 1290, games: 10, winRate: "70%", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80" },
    ],
    goalOfMonth: {
      month: "March 2026",
      scorer: "DonLloret",
      description: "30-yard screamer into the top corner, last minute of the game. The Pitch BKK went absolutely mental.",
      votes: 47,
    },
    goalOfMonthArchive: [
      { month: "March 2026", scorer: "DonLloret", description: "30-yard screamer into the top corner", votes: 47 },
      { month: "February 2026", scorer: "NickTheBaller", description: "Bicycle kick off a corner, straight in", votes: 62 },
      { month: "January 2026", scorer: "ThaiTackle", description: "Solo run from halfway, nutmeg on the keeper", votes: 38 },
      { month: "December 2025", scorer: "AsokAce", description: "Free kick curled over the wall into bottom corner", votes: 41 },
      { month: "November 2025", scorer: "BKK_Marco", description: "One-touch volley from outside the box", votes: 35 },
    ],
    organizer: {
      name: "Tobias K.",
      role: "City Organizer \u2014 Bangkok",
      bio: "German expat who moved to Bangkok in 2024. Started organizing pickup games after struggling to find consistent football. Now runs the largest pickup community in the city.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
      since: "2024",
      gamesOrganized: 180,
    },
    venues: [
      {
        name: "The Pitch BKK",
        type: "5v5 / 7v7",
        address: "Sukhumvit Soi 26, Khlong Toei",
        img: "https://images.unsplash.com/photo-1661587535658-50048b8ec242?w=600&q=80",
        capacity: "10-14 players",
        surface: "Artificial turf",
        price: "200 THB / person",
        lat: 13.7235,
        lng: 100.5679,
        pitchStats: {
          bestPlayer: { name: "NickTheBaller", elo: 1420 },
          mostGames: { name: "TobiasKicks", count: 42 },
          mostWins: { name: "NickTheBaller", count: 31 },
        },
      },
      {
        name: "Arena10 Bangkok",
        type: "5v5 / 6v6",
        address: "Thong Lor Soi 10, Watthana",
        img: "https://images.unsplash.com/photo-1632376371614-79d80280822f?w=600&q=80",
        capacity: "10-12 players",
        surface: "Artificial turf",
        price: "250 THB / person",
        lat: 13.7320,
        lng: 100.5780,
        pitchStats: {
          bestPlayer: { name: "DonLloret", elo: 1350 },
          mostGames: { name: "BKK_Marco", count: 28 },
          mostWins: { name: "DonLloret", count: 19 },
        },
      },
      {
        name: "Benjakitti Football Park",
        type: "7v7 / 10v10",
        address: "Benjakitti Park, Khlong Toei",
        img: "https://images.unsplash.com/photo-1712944347407-9c9831e04fe0?w=600&q=80",
        capacity: "14-20 players",
        surface: "Natural grass",
        price: "150 THB / person",
        lat: 13.7215,
        lng: 100.5600,
        pitchStats: {
          bestPlayer: { name: "SamuraiSam", elo: 1290 },
          mostGames: { name: "ThaiTackle", count: 35 },
          mostWins: { name: "SamuraiSam", count: 22 },
        },
      },
    ],
    upcomingGames: [
      { date: "2026-03-29", time: "18:00", venue: "The Pitch BKK", spotsTotal: 14, spotsFilled: 11, price: "200 THB" },
      { date: "2026-03-30", time: "19:30", venue: "Arena10 Bangkok", spotsTotal: 12, spotsFilled: 8, price: "250 THB" },
      { date: "2026-04-01", time: "18:00", venue: "Benjakitti Football Park", spotsTotal: 20, spotsFilled: 14, price: "150 THB" },
    ],
  },
  berlin: {
    slug: "berlin",
    name: "Berlin",
    country: "Germany",
    flag: "\u{1F1E9}\u{1F1EA}",
    stats: { leagues: 8, players: 210, gamesThisMonth: 32 },
    publicLeagues: [
      { name: "Official BallR League Berlin", type: "public", price: "5 EUR", players: 210 },
    ],
    privateLeagues: [
      { name: "Kreuzberg Kickers", type: "private", members: 30 },
      { name: "Expat Ballers Berlin", type: "private", members: 22 },
      { name: "Startup League BLN", type: "private", members: 16 },
    ],
    leaderboard: [
      { rank: 1, name: "BerlinBaller", elo: 1480 },
      { rank: 2, name: "KreuzbergKing", elo: 1440 },
      { rank: 3, name: "MaxPower", elo: 1390 },
      { rank: 4, name: "FussballFreak", elo: 1350 },
      { rank: 5, name: "DerMeister", elo: 1310 },
      { rank: 6, name: "PBergPro", elo: 1290 },
      { rank: 7, name: "GoalGetter", elo: 1270 },
      { rank: 8, name: "TorJ\u00e4ger", elo: 1250 },
      { rank: 9, name: "MitteMarco", elo: 1230 },
      { rank: 10, name: "Neuk\u00f6llnNinja", elo: 1210 },
    ],
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&q=80",
      "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&q=80",
      "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=600&q=80",
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&q=80",
    ],
    blogLinks: [
      { title: "Building a Consistent Football Community", href: "/blog/building-consistent-football-community" },
      { title: "Team Balancing in Casual Soccer", href: "/blog/team-balancing-casual-soccer" },
    ],
    socials: {
      instagram: "https://instagram.com/ballr.berlin",
      tiktok: "https://tiktok.com/@ballr.berlin",
    },
    playerOfMonth: {
      month: "March 2026",
      name: "BerlinBaller",
      elo: 1480,
      games: 12,
      winRate: "83%",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    },
    playerOfMonthArchive: [
      { month: "March 2026", name: "BerlinBaller", elo: 1480, games: 12, winRate: "83%", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" },
      { month: "February 2026", name: "KreuzbergKing", elo: 1440, games: 11, winRate: "72%", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
      { month: "January 2026", name: "MaxPower", elo: 1390, games: 10, winRate: "70%", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" },
    ],
    goalOfMonth: {
      month: "March 2026",
      scorer: "KreuzbergKing",
      description: "Chipped the keeper from 25 yards at G\u00f6rlitzer Park. Absolutely filthy.",
      votes: 38,
    },
    goalOfMonthArchive: [
      { month: "March 2026", scorer: "KreuzbergKing", description: "Chipped the keeper from 25 yards", votes: 38 },
      { month: "February 2026", scorer: "BerlinBaller", description: "Rabona goal in the last minute", votes: 52 },
      { month: "January 2026", scorer: "MaxPower", description: "Header from a corner, bullet to the net", votes: 29 },
    ],
    organizer: {
      name: "Marcus W.",
      role: "City Organizer \u2014 Berlin",
      bio: "Born and raised in Kreuzberg. Played semi-pro for Hertha BSC U19. Started the Berlin BallR community to bring the same intensity to pickup football.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
      since: "2025",
      gamesOrganized: 95,
    },
    venues: [
      {
        name: "G\u00f6rlitzer Park Pitch",
        type: "7v7 / 10v10",
        address: "G\u00f6rlitzer Park, Kreuzberg",
        img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&q=80",
        capacity: "14-20 players",
        surface: "Natural grass",
        price: "5 EUR / person",
        lat: 52.4950,
        lng: 13.4370,
        pitchStats: {
          bestPlayer: { name: "BerlinBaller", elo: 1480 },
          mostGames: { name: "KreuzbergKing", count: 38 },
          mostWins: { name: "BerlinBaller", count: 28 },
        },
      },
      {
        name: "SoccerWorld Berlin",
        type: "5v5 / 6v6",
        address: "Landsberger Allee 77, Friedrichshain",
        img: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=600&q=80",
        capacity: "10-12 players",
        surface: "Artificial turf (indoor)",
        price: "8 EUR / person",
        lat: 52.5278,
        lng: 13.4552,
        pitchStats: {
          bestPlayer: { name: "MaxPower", elo: 1390 },
          mostGames: { name: "FussballFreak", count: 31 },
          mostWins: { name: "MaxPower", count: 22 },
        },
      },
      {
        name: "Tempelhofer Feld Pitch",
        type: "7v7 / 10v10",
        address: "Tempelhofer Damm, Tempelhof",
        img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&q=80",
        capacity: "14-20 players",
        surface: "Natural grass",
        price: "Free (public pitch)",
        lat: 52.4736,
        lng: 13.4016,
        pitchStats: {
          bestPlayer: { name: "DerMeister", elo: 1310 },
          mostGames: { name: "PBergPro", count: 26 },
          mostWins: { name: "DerMeister", count: 18 },
        },
      },
    ],
    upcomingGames: [
      { date: "2026-03-29", time: "16:00", venue: "G\u00f6rlitzer Park Pitch", spotsTotal: 20, spotsFilled: 16, price: "5 EUR" },
      { date: "2026-03-31", time: "19:00", venue: "SoccerWorld Berlin", spotsTotal: 12, spotsFilled: 7, price: "8 EUR" },
      { date: "2026-04-02", time: "17:00", venue: "Tempelhofer Feld Pitch", spotsTotal: 20, spotsFilled: 12, price: "Free" },
    ],
  },
  bali: {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    flag: "\u{1F1EE}\u{1F1E9}",
    stats: { leagues: 3, players: 87, gamesThisMonth: 16 },
    publicLeagues: [
      { name: "Official BallR League Bali", type: "public", price: "50K IDR", players: 87 },
    ],
    privateLeagues: [
      { name: "Canggu Ballers", type: "private", members: 15 },
      { name: "Bali Beach League", type: "private", members: 22 },
      { name: "Nomad Football Club", type: "private", members: 12 },
    ],
    leaderboard: [
      { rank: 1, name: "BaliKicker", elo: 1390 },
      { rank: 2, name: "CangguGoal", elo: 1350 },
      { rank: 3, name: "IslandStrike", elo: 1310 },
      { rank: 4, name: "NomadBaller", elo: 1280 },
      { rank: 5, name: "RiceFieldRonaldo", elo: 1250 },
      { rank: 6, name: "SunsetStriker", elo: 1230 },
      { rank: 7, name: "UbudUnited", elo: 1210 },
      { rank: 8, name: "SeminyakSam", elo: 1190 },
      { rank: 9, name: "KutaKing", elo: 1170 },
      { rank: 10, name: "BeachBaller", elo: 1150 },
    ],
    img: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&q=80",
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80",
    ],
    blogLinks: [
      { title: "Expat Football Guide to Southeast Asia", href: "/blog/expat-football-guide-southeast-asia" },
      { title: "Rules for Fair Pickup Soccer", href: "/blog/rules-for-fair-pickup-soccer" },
    ],
    socials: {
      instagram: "https://instagram.com/ballr.bali",
      tiktok: "https://tiktok.com/@ballr.bali",
    },
    playerOfMonth: {
      month: "March 2026",
      name: "BaliKicker",
      elo: 1390,
      games: 8,
      winRate: "75%",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    },
    playerOfMonthArchive: [
      { month: "March 2026", name: "BaliKicker", elo: 1390, games: 8, winRate: "75%", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" },
      { month: "February 2026", name: "CangguGoal", elo: 1350, games: 7, winRate: "71%", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80" },
    ],
    goalOfMonth: {
      month: "March 2026",
      scorer: "IslandStrike",
      description: "Overhead kick at sunset on the Canggu pitch. Peak football moment.",
      votes: 31,
    },
    goalOfMonthArchive: [
      { month: "March 2026", scorer: "IslandStrike", description: "Overhead kick at sunset on the Canggu pitch", votes: 31 },
      { month: "February 2026", scorer: "NomadBaller", description: "Curled free kick around 4-man wall", votes: 24 },
    ],
    organizer: {
      name: "Joao P.",
      role: "City Organizer \u2014 Bali",
      bio: "Brazilian surfer and football fanatic who settled in Canggu. Combines his love for the beach and the beautiful game. Known for organizing sunset matches that end with cold Bintangs.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
      since: "2025",
      gamesOrganized: 48,
    },
    venues: [
      {
        name: "Canggu Football Ground",
        type: "7v7",
        address: "Jl. Pantai Batu Bolong, Canggu",
        img: "https://images.unsplash.com/photo-1709564024498-7cb1f3e81d75?w=600&q=80",
        capacity: "14 players",
        surface: "Natural grass",
        price: "50K IDR / person",
        lat: -8.6478,
        lng: 115.1385,
        pitchStats: {
          bestPlayer: { name: "BaliKicker", elo: 1390 },
          mostGames: { name: "CangguGoal", count: 22 },
          mostWins: { name: "BaliKicker", count: 15 },
        },
      },
      {
        name: "Seminyak Sports Arena",
        type: "5v5 / 6v6",
        address: "Jl. Raya Seminyak, Seminyak",
        img: "https://images.unsplash.com/photo-1597424977957-33335b3db22c?w=600&q=80",
        capacity: "10-12 players",
        surface: "Artificial turf",
        price: "75K IDR / person",
        lat: -8.6880,
        lng: 115.1620,
        pitchStats: {
          bestPlayer: { name: "IslandStrike", elo: 1310 },
          mostGames: { name: "NomadBaller", count: 18 },
          mostWins: { name: "IslandStrike", count: 12 },
        },
      },
      {
        name: "Sanur Beach Pitch",
        type: "5v5 Beach Football",
        address: "Sanur Beach, South Denpasar",
        img: "https://images.unsplash.com/photo-1551280857-2b9bbe52acf4?w=600&q=80",
        capacity: "10 players",
        surface: "Sand",
        price: "Free",
        lat: -8.6930,
        lng: 115.2620,
        pitchStats: {
          bestPlayer: { name: "RiceFieldRonaldo", elo: 1250 },
          mostGames: { name: "SunsetStriker", count: 14 },
          mostWins: { name: "RiceFieldRonaldo", count: 9 },
        },
      },
    ],
    upcomingGames: [
      { date: "2026-03-29", time: "17:00", venue: "Canggu Football Ground", spotsTotal: 14, spotsFilled: 10, price: "50K IDR" },
      { date: "2026-03-31", time: "18:30", venue: "Seminyak Sports Arena", spotsTotal: 12, spotsFilled: 5, price: "75K IDR" },
      { date: "2026-04-02", time: "16:00", venue: "Sanur Beach Pitch", spotsTotal: 10, spotsFilled: 6, price: "Free" },
    ],
  },
};

export const allCitySlugs = Object.keys(cityData);
