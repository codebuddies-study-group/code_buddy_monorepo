import { Model } from "sequelize";

interface UserLanguageAttributes {
  UserId: number;
  LanguageId: number;
}

class UserLanguage
  extends Model<UserLanguageAttributes>
  implements UserLanguageAttributes
{
  UserId!: number;
  LanguageId!: number;

  static associate(models: any) {}
}

export default UserLanguage;
