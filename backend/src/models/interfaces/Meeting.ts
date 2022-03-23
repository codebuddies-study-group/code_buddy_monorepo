import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";

// order of InferAttributes & InferCreationAttributes is important.
class Meeting extends Model<
  InferAttributes<Meeting>,
  InferCreationAttributes<Meeting>
> {
  // 'CreationOptional' is a special type that marks the field as optional
  // when creating an instance of the model (such as using Model.create()).
  declare id: CreationOptional<number>;
  declare name: string;
  declare topic: string;
  declare url: string;
  declare date: Date;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date>;

  static associate(models: any) {
    // define association here
    Meeting.belongsToMany(models.User, {
      through: "userMeeting",
    });
  }
}

export default Meeting;
