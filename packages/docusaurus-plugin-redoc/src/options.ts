import * as Joi from 'joi';

export interface PluginOptions {
  id?: string;
  debug?: boolean;
  spec?: string;
  specUrl?: string;
  routePath: string;
  apiDocComponent: string;
};

export const DEFAULT_OPTIONS: PluginOptions = {
  // specUrl: 'https://redocly.github.io/redoc/openapi.yaml',
  routePath: '/api/', // URL Route.
  apiDocComponent: '@theme/ApiDoc',
  debug: false,
};

export const PluginOptionSchema = Joi.object({
  id: Joi.string(),
  debug: Joi.boolean().default(DEFAULT_OPTIONS.debug),
  spec: Joi.string(),
  specUrl: Joi.string().uri(),
  routePath: Joi.string().default(DEFAULT_OPTIONS.routePath),
  apiDocComponent: Joi.string().default(DEFAULT_OPTIONS.apiDocComponent),
});