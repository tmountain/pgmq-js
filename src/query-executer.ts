import { Client, QueryResultRow } from "npm:pg@8.11.3";
import { Pool } from "npm:pg-pool@3.6.1";

export class QueryExecuter {
	constructor(protected readonly pool: Pool<Client>) {}

	protected async executeQuery<T extends QueryResultRow>(
		query: string,
		params?: unknown[],
	) {
		const client = await this.pool.connect();

		try {
			return await client.query<T>(query, params);
		} finally {
			client.release();
		}
	}
}
