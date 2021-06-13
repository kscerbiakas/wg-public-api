import { IMeta, IPaginationResponse } from "./pagination.interface";

export interface IResponse<T>{
	data: T
}

export interface IListResponse<T>{
	data: T;
	links: IPaginationResponse;
	meta: IMeta;
}
