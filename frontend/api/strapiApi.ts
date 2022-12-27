import { fetchAPI } from './api';
import * as I from './interface';

export function getAbout(): Promise<I.AboutResponse> {
  return fetchAPI('/about', {});
}

export function getContact(): Promise<I.ContactResponse> {
  return fetchAPI('/contact', {});
}

export function getArtists(pagination: I.Pagination): Promise<I.ArtistsResponse> {
  return fetchAPI('/artists', {
    sort: ['id:desc'],
    fields: ['fullname'],
    pagination,
    populate: { image: { fields: ['name', 'url', 'formats'] } },
  });
}

export function getArtist(id: string): Promise<I.ArtistResponse> {
  return fetchAPI(`/artists/${id}`, {
    populate: {
      image: { fields: ['name', 'url', 'formats'] },
      movies: {
        fields: ['title'],
        populate: {
          poster: { fields: ['name', 'url', 'formats'] },
        },
      },
    },
  });
}

export function getBlogCategories(pagination: I.Pagination): Promise<I.BlogCategoriesResponse> {
  return fetchAPI(`/blog-categories`, {
    sort: ['id:desc'],
    fields: ['name'],
    pagination,
    // Do not populate blogs, use getBlogs instead
  });
}

export function getBlogs(
  pagination: I.Pagination,
  filters?: Record<string, any>
): Promise<I.BlogsResponse> {
  return fetchAPI('/blogs', {
    filters,
    sort: ['id:desc'],
    fields: ['title', 'description', 'slug', 'createdAt'],
    populate: { image: { fields: ['name', 'url', 'formats'] } },
    pagination,
  });
}

export function getBlog(id: string): Promise<I.BlogResponse> {
  return fetchAPI(`/blogs/${id}`, { populate: '*' });
}

export function getBTS(pagination: I.Pagination): Promise<I.BTSResponse> {
  return fetchAPI('/behind-the-scenes', {
    sort: ['id:desc'],
    fields: ['title', 'url'],
    pagination,
    populate: { image: { fields: ['name', 'url', 'formats'] } },
  });
}

export function getGenres(): Promise<I.GenresResponse> {
  return fetchAPI('/movie-categories', {
    sort: ['ordering:desc', 'name:asc'],
    fields: ['name'],
    pagination: { page: 1, pageSize: 100 },
  });
}

export function getMovies(
  pagination: I.Pagination,
  filters?: Record<string, any>
): Promise<I.MoviesResponse> {
  return fetchAPI('/movies', {
    filters,
    sort: ['ordering:desc', 'release:desc'],
    fields: ['title', 'description', 'trailerUrl', 'release'],
    pagination,
    populate: { poster: { fields: ['name', 'url', 'formats'] } },
  });
}

export function getMovie(id: string): Promise<I.MovieResponse> {
  return fetchAPI(`/movies/${id}`, {
    populate: {
      poster: { fields: ['name', 'url', 'formats'] },
      movie_categories: {
        fields: ['name'],
      },
      artists: {
        fields: ['fullname'],
        populate: { image: { fields: ['name', 'url', 'formats'] } },
      },
    },
  });
}

export function getSongs(
  pagination: I.Pagination,
  filters?: Record<string, any>
): Promise<I.SongResponse> {
  return fetchAPI('/songs', {
    sort: ['id:desc'],
    fields: ['title', 'url'],
    filters,
    pagination,
    populate: { Image: { fields: ['name', 'url', 'formats'] } },
  });
}

export function getFunnyVideos(pagination: I.Pagination): Promise<I.FunnyVideosResponse> {
  return fetchAPI('/funny-videos', {
    sort: ['id:desc'],
    fields: ['title', 'url'],
    pagination,
    populate: { image: { fields: ['name', 'url', 'formats'] } },
  });
}

export function getSlider(): Promise<I.SlidersResponse> {
  return fetchAPI('/sliders', { sort: ['id:desc'], populate: '*' });
}

export const sendMessage = async (data: any) => {
  await fetch('/api/contact', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
