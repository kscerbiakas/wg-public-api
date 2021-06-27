import { HttpService } from "../services/http.service";
import { IListResponse, IPaging, ISort } from "../interfaces";

export abstract class Client<T> {
  constructor(protected httpService: HttpService) {}

  async get(id: number | string): Promise<T> {
    return this.httpService.get<T>(id);
  }

  async post(entity: T): Promise<T> {
    return this.httpService.post<T>(entity);
  }

  async index(
    paging?: IPaging,
    sort?: ISort,
    filter?: Record<string, string>,
  ): Promise<IListResponse<T[]>> {
    return this.httpService.index<T[]>(paging, sort, filter);
  }

  async update(id: number | string, entity: T): Promise<T> {
    return this.httpService.put<T>({ id: id }, entity);
  }

  async delete(id: number): Promise<boolean> {
    return this.httpService.delete(id);
  }
}
