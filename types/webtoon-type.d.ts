export type PlatformType = 'NAVER' | 'KAKAO' | 'LEZHIN' | 'ETC';

export enum PlatformEnum {
  NAVER = '네이버 웹툰',
  KAKAO = '카카오 웹툰',
  LEZHIN = '레진코믹스',
  ETC = '기타',
}

export interface Webtoon {
  webtoondId: number;
  title: string;
  content: string;
  webtoonUrl: string;
  thumbnail: string;
  platform: PlatformType;
  platformDescription: string;
  status: PUBLISH;
  statusDescription: string;
  genres: WebtoonCategory[];
  publishDays: WebtoonPublishDays[];
  writers: WebtoonWriter[];
  recommendationCountId: number;
  joinCount: number;
  leaveCount: number;
}

export type ChartStatus = 'UP' | 'DOWN' | 'STALE';

export interface WebtoonCategory {
  webtoonGenreId: number;
  genreCategory: string;
  genreCategoryDescription: Genre;
}

export interface WebtoonPublishDays {
  webtoonPublishDayId: number;
  day: string;
}

export interface WebtoonWriter {
  webtoonWriterId: number;
  name: string;
}

export interface WebtoonRank {
  webtoons: {
    id: number;
    title: string;
    writers: WebtoonWriter[];
    thumbnail: string;
    rank: number;
    // rankCahnged: number;
    score: number;
    gapPercent: number;
  }[];
}

export type Genre =
  | '일상'
  | '개그'
  | '판타지'
  | '액션'
  | '드라마'
  | '순정'
  | '감성'
  | '스릴러'
  | '무협'
  | '스포츠';

export interface WebtoonGenres {
  genre: Genre;
  thumbnail: string;
}

export interface WebtoonRising {
  webtoons: {
    id: number;
    title: string;
    scoreGapPercent: number;
    thumbnail: string;
  }[];
}

export type Day = '일' | '월' | '화' | '수' | '목' | '금' | '토';

export interface WebtoonWeekly {
  data: {
    day: Day;
    thumbnail: string;
    title: string;
    webtoonId: number;
    writers: string[];
  }[];
}
