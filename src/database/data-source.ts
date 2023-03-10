import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';

export const AppDataSource = new DataSource({
    type: "postgres",
    // url: process.env.DATABASE_URL,
    host: "localhost",
    port:  5432,
    username: "wcn",
    password: "tiwikrama",
    database: "nest",
    synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
    timezone: process.env.DATABASE_TIMEZONE || "local",
    dropSchema: false,
    keepConnectionAlive: true,
    logging: process.env.NODE_ENV !== 'production',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    migrationsRun: true,
    cli: {
        entitiesDir: 'src/entities',
        migrationsDir: 'src/database/migrations',
        subscribersDir: 'subscriber',
    },
    extra: {
        max: parseInt(process.env.DATABASE_MAX_CONNECTIONS, 10) || 100,
        // ssl:
        //     process.env.DATABASE_SSL_ENABLED === 'true'
        //         ? {
        //             rejectUnauthorized:
        //                 process.env.DATABASE_REJECT_UNAUTHORIZED === 'true',
        //             ca: process.env.DATABASE_CA ?? undefined,
        //             key: process.env.DATABASE_KEY ?? undefined,
        //             cert: process.env.DATABASE_CERT ?? undefined,
        //         }
        //         : undefined,
    },
} as DataSourceOptions);

AppDataSource.initialize()
    .then(() => {
        console.log("Database has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Database initialization", err)
    })