import axios, { AxiosInstance } from 'axios';
import { IListResponse, IPaging, IResponse, ISort } from '../interfaces';
import { IBaseEntity } from '../interfaces/entities/base.entity';
import {
  UnauthorizedError,
  EntityNotFoundError,
  EntityAlreadyExistsError,
  ValidationError,
} from '../errors';

export class HttpService {
  axios: AxiosInstance;

  constructor(private key: string, private uri: string) {
    this.axios = axios.create({
      baseURL: 'https://api.whatagraph.com/',
      headers: {
        Authorization: `Bearer ${this.key}`,
        accept: 'application/json',
      },
    });
  }

  async get<T>(id: string | number): Promise<T> {
    try {
      const response = await this.axios.get<IResponse<T>>(`${this.uri}/${id}`);

      return response.data.data;
    } catch (e) {
      this.handleError(e);
    }
  }

  async index<T>(
    paging?: IPaging,
    sort?: ISort,
    filter?: Record<string, string>,
  ): Promise<IListResponse<T>> {
    try {
      const params = {};

      if (sort && Object.keys(sort).length !== 0) {
        params['sort_field'] = sort.field;
        params['sort_direction'] = sort.direction;
      }

      if (paging && Object.keys(paging).length !== 0) {
        params['page'] = paging.page;
        params['per_page'] = paging.per_page;
      }

      if (filter && Object.keys(filter).length !== 0) {
        params['filter'] = JSON.stringify(filter);
      }
      const response = await this.axios.get<IListResponse<T>>(this.uri, {
        params,
      });

      return response.data;
    } catch (e) {
      this.handleError(e);
    }
  }

  async post<T>(body: unknown): Promise<T> {
    try {
      const response = await this.axios.post<IResponse<T>>(this.uri, body);
      return response.data.data;
    } catch (e) {
      this.handleError(e);
    }
  }

  async put<T>(entity: IBaseEntity, body: unknown): Promise<T> {
    try {
      const response = await this.axios.put<IResponse<T>>(
        `${this.uri}/${entity.id}`,
        body,
      );

      return response.data.data;
    } catch (e) {
      this.handleError(e);
    }
  }

  async delete(id: number | string): Promise<boolean> {
    try {
      const response = await this.axios.delete(`${this.uri}/${id}`);

      return response.status === 204;
    } catch (e) {
      this.handleError(e);
    }
  }

  private handleError(e): void {
    switch (e.response.status) {
      case 401:
        throw new UnauthorizedError('Please check your token');
      case 404:
        throw new EntityNotFoundError('Entity not found.');
      case 409:
        throw new EntityAlreadyExistsError('Entity already exists.');
      case 422:
        throw new ValidationError(JSON.stringify(e.response.data));
      default:
        throw new Error('Server error');
    }
  }
}
