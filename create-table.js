import { sql } from './db.js'

sql`
    CREATE TABLE trucks (
        id SERIAL PRIMARY KEY,
        license_plate VARCHAR(10) NOT NULL,
        model VARCHAR(255) NOT NULL,
        year INT NOT NULL,
        operation_status VARCHAR(255) DEFAULT 'available',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`.then(() => {
    console.log("tabela criada!")
})