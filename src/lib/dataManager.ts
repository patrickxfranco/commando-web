import { type MovieInfo } from '@/types/movie';

export class DataManager {
  data: MovieInfo[];

  constructor() {
    if (!localStorage.getItem('@Commando/movies')) {
      localStorage.setItem('@Commando/movies', '[]');
    }

    this.data = JSON.parse(localStorage.getItem('@Commando/movies') || '[]');
  }

  getMovies(): MovieInfo[] {
    return this.data;
  }

  getMovie(imdbID: string): MovieInfo | undefined {}

  addMovie(movie: MovieInfo): MovieInfo[] {}

  removeMovie(imdbID: string): MovieInfo[] | undefined {}

  updateMovie(imdbID: MovieInfo): MovieInfo[] | undefined {}
}
