import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
    tag_id: string,
    user_sender: string;
    user_reciver: string;
    message: string
}

class CreateComplimentService {

    async execute({ message, tag_id, user_reciver, user_sender }: IComplimentRequest) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepository = getCustomRepository(UsersRepositories);

        if (user_sender === user_reciver) {
            throw new Error("Incorrect user receiver");
        }

        const userReciverExists = await usersRepository.findOne(user_reciver);

        if (!userReciverExists) {
            throw new Error("User receiver does not exists!");
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_sender,
            user_reciver,
            message
        });

        await complimentsRepositories.save(compliment);

        return compliment;
    }
}

export { CreateComplimentService };