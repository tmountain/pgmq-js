import { DbMessage, Message } from "./types.ts";

export const parseDbMessage = <T>(m?: DbMessage): Message<T> | undefined => {
	if (m == null) return m;
	return {
		msgId: parseInt(m.msg_id),
		readCount: parseInt(m.read_ct),
		enqueuedAt: new Date(m.enqueued_at),
		vt: new Date(m.vt),
		message: m.message as T,
	};
};
