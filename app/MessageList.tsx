"use client";

import useSWR from "swr";
import { Message } from "../typings";
import fetcher from "../utils/fetchMessages";

function MessageList() {
	const {
		data: messages,
		error,
		mutate,
	} = useSWR<Message[]>("/api/getMessages", fetcher);
	return (
		<div>
			{messages?.map((message) => (
				<p key={message.id}>{message.message}</p>
			))}
		</div>
	);
}

export default MessageList;
