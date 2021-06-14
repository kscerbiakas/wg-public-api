export interface IPaginationResponse {
  first: string;
  last?: string;
  next?: string;
  prev?: string;
}

export interface IMeta {
  current_page: number;
  from: number;
  path: string;
  to: number;
}

export interface IPaging {
  page: number;
  per_page: number;
}

export interface ISort {
  direction: 'asc' | 'desc';
  field: string;
}
