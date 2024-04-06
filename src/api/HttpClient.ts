import {
  AxiosInstance,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from 'axios'

import { Methods } from './types'
import axiosInstance from './axiosInstance'

export default class HttpClient {
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  private readonly axiosInstance: AxiosInstance

  async get<TypeData>(config: AxiosRequestConfig<undefined>) {
    return this.makeRequest<TypeData>({
      method: Methods.GET,
      ...config,
    })
  }

  async post<TypeData>(config: AxiosRequestConfig) {
    return this.makeRequest<TypeData>({
      method: Methods.POST,
      ...config,
    })
  }

  async put<TypeData>(config: AxiosRequestConfig) {
    return this.makeRequest<TypeData>({
      method: Methods.PUT,
      ...config,
    })
  }

  async delete<TypeData>(config: AxiosRequestConfig) {
    return this.makeRequest<TypeData>({
      method: Methods.DELETE,
      ...config,
    })
  }

  private async makeRequest<TypeData>(config: AxiosRequestConfig) {
    try {
      const headers: RawAxiosRequestHeaders = { ...config.headers }

      return this.axiosInstance
        .request<TypeData>({
          ...config,
          headers,
        })
        .then(res => res.data)
    } catch (e) {
      console.error(e)
    }
  }
}

export const httpClient = new HttpClient(axiosInstance)
