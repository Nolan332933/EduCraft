// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    MUX_TOKEN_ID: string;
    MUX_TOKEN_SECRET: string;
  }
}
