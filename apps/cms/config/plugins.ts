interface StrapiEnv {
  (key: string, defaultValue?: any): any;
  int(key: string, defaultValue?: number): number;
  bool(key: string, defaultValue?: boolean): boolean;
  array(key: string, defaultValue?: any[]): any[];
}

export default ({ env }: { env: StrapiEnv }) => ({
  settings: {
    cors: {
      enabled: true,
      origin: ['http://localhost:5173', 'http://localhost:3000', env('FRONTEND_URL', '*')],
    },
  },
  graphql: {
    enabled: false,
  },
  'users-permissions': {
    enabled: true,
  },
  i18n: {
    enabled: true,
  },
});
