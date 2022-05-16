import { Kafka } from "kafkajs";
import { config as dotenvConfig } from "dotenv";

dotenvConfig({ path: __dirname + "/../../.env" });

const kafkaBrokersList = process.env.KAFKA_BROKERS_LIST || "[]";

export const kafkaConnection = new Kafka({
    clientId: process.env.KAFKA_CLIENT_ID,
    brokers: JSON.parse(kafkaBrokersList),
});
