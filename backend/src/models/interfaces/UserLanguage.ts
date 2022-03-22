import { Model } from "sequelize";

interface UserLanguageAttributes {
    user_id: number;
    language_id: number;
}

class UserMeeting extends Model<UserLanguageAttributes>
    implements UserLanguageAttributes {
    user_id!: number;
    language_id!: number;

    static associate(models: any) {

    }
}

export default UserMeeting