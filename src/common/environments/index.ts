import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const environments = dotenv.config();
dotenvExpand.expand(environments);

export const JWT_SECRET: string = process.env.JWT_SECRET ?? 'secret';
export const SALT_OR_ROUNDS: string = process.env.SALT_OR_ROUNDS ?? '10';
export const ELASTICSEARCH_NODE: string = process.env.ELASTICSEARCH_NODE ?? 'http://localhost:9200';
