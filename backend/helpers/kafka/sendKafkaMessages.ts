import { kafkaConnection } from "../../config/kafkaConfig";
import { Message } from "kafkajs";

export const sendKafkaMessages = async (topic: string, messages: Message[]) => {
    const producer = kafkaConnection.producer();

    await producer.connect();

    await producer.send({ topic, messages });

    await producer.disconnect();
};
