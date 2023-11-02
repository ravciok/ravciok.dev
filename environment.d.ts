declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
    readonly REDIS_URL: string
    readonly NEXT_PUBLIC_AUTH0_DOMAIN: string
    readonly NEXT_PUBLIC_AUTH0_CLIENT_ID: string
    readonly NEXT_PUBLIC_BASE_URL: string
  }
}