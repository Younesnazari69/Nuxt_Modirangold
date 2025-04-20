import type { AxiosResponse } from "axios";
import axios from "axios";
import JwtService from "./JwtService";
import * as NotifyService from './NotifyService'

/**
 * @description service to call HTTP request via Axios
 */
class ApiService {
  /**
   * @description property to share vue instance
   */
  public static Axios = axios;
  public static svc: NotifyService.INotifyService = new NotifyService.NotifyService()
  

  /**
   * @description initialize vue axios
   */
  public static init() {
    let envMode = import.meta.env.MODE;
    // ApiService.vueInstance = app;
    // ApiService.vueInstance.use(axios);

    ApiService.Axios.defaults.baseURL = "https://new.darbastan.org/api";//import.meta.env.VITE_API_BASE_URL;
    ApiService.Axios.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";
  }

  /**
   * @description set the default HTTP request headers
   */
  public static setHeader(): void {
    if (typeof window !== 'undefined') {
    const  token = JwtService.getToken()
    ApiService.Axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;
    ApiService.Axios.defaults.headers.common["Accept"] =
      "application/json";
   }
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static query(resource: string, params: any): Promise<AxiosResponse> {
    return ApiService.Axios.get(resource, params);
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param slug: string
   * @returns Promise<AxiosResponse>
   */
  public static get(
    resource: string,
    slug = "" as string,

  ): Promise<AxiosResponse> {
    if (typeof window !== 'undefined') {
    ApiService.setHeader()
    }
    if (slug == "") {
      return ApiService.Axios.get(`${resource}`);
    } else {
      return ApiService.Axios.get(`${resource}/${slug}`);
    }
  }
  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param slug: string
   * @returns Promise<AxiosResponse>
   */
  public static getByConfig(
    resource: string,
    config = null as any

  ): Promise<AxiosResponse> {
    if (typeof window !== 'undefined') {
      ApiService.setHeader()
      }
    return ApiService.Axios.get(`${resource}`, config);
  }
  /**
   * @description set the POST HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static post(resource: string, params: any): Promise<AxiosResponse> {
    if (typeof window !== 'undefined') {
      ApiService.setHeader()
      }
    return ApiService.Axios.post(`${resource}`, params);
  }

  public static postwithConfig(resource: string, params: any, config: any = {}): Promise<AxiosResponse> {
    if (typeof window !== 'undefined') {
      ApiService.setHeader();  // تنظیم هدر پیش‌فرض (در صورت نیاز)
    }
    
    // اطمینان از اضافه شدن responseType به پیکربندی درخواست
    const finalConfig = {
      ...config,
      responseType: config.responseType || 'json',  // به صورت پیش‌فرض json باشد
    };
  
    // ارسال درخواست با تنظیمات نهایی
    return ApiService.Axios.post(`${resource}`, params, finalConfig);
  }

  /**
   * @description send the UPDATE HTTP request
   * @param resource: string
   * @param slug: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static update(
    resource: string,
    slug: string,
    params: any
  ): Promise<AxiosResponse> {
    if (typeof window !== 'undefined') {
      ApiService.setHeader()
      }
    return ApiService.Axios.put(`${resource}/${slug}`, params);
  }

  /**
   * @description Send the PUT HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static put(resource: string, params: any): Promise<AxiosResponse> {
    if (typeof window !== 'undefined') {
      ApiService.setHeader()
      }
    return ApiService.Axios.put(`${resource}`, params);
  }

  /**
   * @description Send the DELETE HTTP request
   * @param resource: string
   * @returns Promise<AxiosResponse>
   */
  public static delete(resource: string): Promise<AxiosResponse> {
    if (typeof window !== 'undefined') {
      ApiService.setHeader()
      }
    return ApiService.Axios.delete(resource);
  }
}

export default ApiService;
