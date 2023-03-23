/*
 * @Date: 2022-10-10 17:22:16
 * @LastEditors: coderYang
 * @LastEditTime: 2023-03-23 14:39:32
 * @FilePath: /ftaptool/src/service/request/type.ts
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 针对AxiosRequestConfig配置进行扩展
export interface CYInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: CYInterceptors<T>
}
