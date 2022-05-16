import { kafkaConnection } from "../../config/kafkaConfig";

export const readFromKafkaTopic = async (topic: string) => {
    const consumer = kafkaConnection.consumer({ groupId: "test-group" });

    await consumer.connect();
    await consumer.subscribe({ topic, fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                value: message.value?.toString(),
                key: message.key?.toString(),
                requestId: message.headers?.requestId?.toString(),
                timestamp: message.timestamp?.toString(),
            });
        },
    });
};
