/**
 * Representa as informações principais de um filme ou série retornadas pela API customizada.
 */
export type MovieInfo = {
  /**
   * ID do título no IMDb.
   * Exemplo: 'tt0389860'
   */
  imdbId: string;
  /**
   * Dados básicos do título (filme ou série), seguindo o padrão schema.org.
   */
  short: {
    /**
     * Tipo do título, pode ser 'TVSeries' ou 'Movie'.
     * Exemplo: 'Movie'
     */
    '@type': 'TVSeries' | 'Movie';
    /**
     * Nome do título.
     * Exemplo: 'Click'
     */
    name: string;
    /**
     * URL da imagem de capa/poster.
     * Exemplo: 'https://m.media-amazon.com/images/M/MV5BMTA1MTUxNDY4NzReQTJeQWpwZ15BbWU2MDE3ODAxNw@@._V1_.jpg'
     */
    image: string;
    /**
     * Descrição do título.
     * Exemplo: 'A workaholic architect finds a universal remote...'
     */
    description: string;
    /**
     * Lista de gêneros do título.
     * Exemplo: ['Comedy', 'Drama', 'Fantasy']
     */
    genre: string[];
    /**
     * Data de publicação no formato ISO (YYYY-MM-DD).
     * Exemplo: '2006-06-23'
     */
    datePublished: string;
    /**
     * Objeto com informações do trailer.
     */
    trailer: {
      /**
       * URL embutida do trailer (YouTube, Vimeo, etc).
       * Exemplo: 'https://www.imdb.com/video/vi2763915545/'
       */
      embedUrl: string;
    };
  };
  /**
   * Dados detalhados do título, como recomendações, datas e episódios.
   */
  main: {
    /**
     * Lista de títulos semelhantes ("Mais como este").
     */
    moreLikeThisTitles: {
      /**
       * Array de conexões para títulos semelhantes.
       */
      edges: MovieLikeThisEdge[];
    };
    /**
     * Data de lançamento (opcional).
     * Exemplo: { day: 23, month: 6, year: 2006 }
     */
    releaseDate?: {
      day: number;
      month: number;
      year: number;
    };
    /**
     * Informações de episódios e temporadas (opcional, só para séries).
     */
    episodes?: {
      /**
       * Total de episódios.
       */
      episodes: {
        total: number;
      };
      /**
       * Lista de temporadas.
       */
      seasons: Season[];
    };
  };
};

/**
 * Representa um título semelhante retornado pela API.
 */
type MovieLikeThisEdge = {
  node: {
    /**
     * ID do título semelhante.
     * Exemplo: 'tt1234567'
     */
    id: string;
    /**
     * Texto do título.
     * Exemplo: { text: 'Another Movie' }
     */
    titleText: {
      text: string;
    };
    /**
     * Imagem principal do título (opcional).
     * Exemplo: { url: 'https://...' }
     */
    primaryImage?: {
      url: string;
    };
  };
};

/**
 * Representa uma temporada de série.
 */
type Season = {
  /**
   * Número da temporada.
   * Exemplo: 1
   */
  number: number;
};
