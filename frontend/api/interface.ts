type IAttribute<T> = { id: number; attributes: T };
type IResponse<T> = { data: T[]; meta: Meta };

interface Image {
  name: string;
  url: string;
  formats?: {
    large?: Image;
    medium?: Image;
    small?: Image;
    thumbnail?: Image;
  };
}

interface IAbout {
  content: string;
}

interface IContact {
  phone: string;
  email: string;
  telegram: string;
  address: string;
  google_map_url: string;
  facebook_url: string;
  youtube_url: string;
  instagram_url: string;
  tiktok_url: string;
  twitter_url: string;
}

interface IArtist {
  fullname: string;
  image: { data: IAttribute<Image> };
  // --
  bio: string;
  date_of_birth: string;
  height: number;
  movies: IResponse<IAttribute<IMovie>>;
  facebook: string;
  instagram: string;
  youtube: string;
  tiktok: string;
}

interface IBlogCategory {
  name: string;
  // ----
  blogs: BlogsResponse;
}

interface IBlog {
  title: string;
  description: string;
  slug: string;
  image?: { data?: IAttribute<Image> };
  // ----
  content: string;
  createdAt: string;
}

interface IFunnyVideo {
  title: string;
  url: string;
  image: IAttribute<Image>;
}

interface IGenre {
  name: string;
}

interface IMovie {
  title: string;
  description: string;
  trailerUrl: string;
  poster: { data: IAttribute<Image> };
  // --
  movie_categories?: IResponse<IAttribute<IGenre>>;
  release: string;
  duration: string;
  artists?: ArtistsResponse;
}

interface IBTS {
  title: string;
  url: string;
  image: IAttribute<Image>;
}

interface ISong {
  title: string;
  url: string;
  Image: IAttribute<Image>;
}

interface ISlider {
  name: string;
  image: { data: IAttribute<Image> };
}

export type AboutResponse = { data: IAttribute<IAbout> };
export type ContactResponse = { data: IAttribute<IContact> };

export type ArtistAttribute = IAttribute<IArtist>;
export type ArtistsResponse = IResponse<ArtistAttribute>;
export type ArtistResponse = { data: ArtistAttribute; meta: Meta };

export type BlogAttribute = IAttribute<IBlog>;
export type BlogsResponse = IResponse<BlogAttribute>;
export type BlogResponse = { data: BlogAttribute; meta: Meta };

export type BlogCategoryAttribute = IAttribute<IBlogCategory>;
export type BlogCategoriesResponse = IResponse<BlogCategoryAttribute>;

export type BTSAttribute = IAttribute<IBTS>;
export type BTSResponse = IResponse<BTSAttribute>;

export type FunnyVideoAttribute = IAttribute<IFunnyVideo>;
export type FunnyVideosResponse = IResponse<FunnyVideoAttribute>;

export type GenreAttribute = IAttribute<IGenre>;
export type GenresResponse = IResponse<GenreAttribute>;

export type MovieAttribute = IAttribute<IMovie>;
export type MoviesResponse = IResponse<MovieAttribute>;
export type MovieResponse = { data: MovieAttribute; meta: Meta };

export type SongAttribute = IAttribute<ISong>;
export type SongResponse = IResponse<SongAttribute>;

export type SliderAttribute = IAttribute<ISlider>;
export type SlidersResponse = IResponse<SliderAttribute>;

export interface Meta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface Pagination {
  page: number;
  pageSize: number;
}
