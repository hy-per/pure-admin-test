import { http } from '@/utils/http'
import { PureHttpRequestConfig, RequestMethods } from '@/utils/http/types'
import { AxiosRequestConfig } from 'axios'

// laviana-admin 后端应答结构
export type Response<T> = {
  code: number
  msg: string
  data?: T
  err?: string
}

// laviana-admin 发起请求
export function request<T>(
  method: RequestMethods,
  url: string,
  param?: AxiosRequestConfig,
  axiosConfig?: PureHttpRequestConfig
): Promise<Response<T>> {
  return http.request<Response<T>>(
    method,
    `/laviana-admin/v1/${url}`,
    param,
    axiosConfig
  )
}
