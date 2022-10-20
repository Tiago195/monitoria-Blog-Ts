import { Sequelize } from 'sequelize';

import config from '../config/config';

const t = process.env.NODE_ENV === 'test' ? config.test : config.development;

export default new Sequelize(t);
