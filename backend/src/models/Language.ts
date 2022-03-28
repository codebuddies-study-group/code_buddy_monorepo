import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";

// order of InferAttributes & InferCreationAttributes is important.
class Language extends Model<
  InferAttributes<Language>,
  InferCreationAttributes<Language>
> {
  // 'CreationOptional' is a special type that marks the field as optional
  // when creating an instance of the model (such as using Model.create()).
  declare id: CreationOptional<number>;
  declare name: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date>;

  static associate(models: any) {
    // define association here
    Language.belongsToMany(models.User, {
      through: "userLanguage",
    });
  }
}

export default Language;
