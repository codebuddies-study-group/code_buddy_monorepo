import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';

// order of InferAttributes & InferCreationAttributes is important.
class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    // 'CreationOptional' is a special type that marks the field as optional
    // when creating an instance of the model (such as using Model.create()).
    declare id: CreationOptional<number>;
    declare name: string;
    declare email: string;
    declare password: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare deletedAt: CreationOptional<Date>;

    static associate(models: any) {
        // define association here
        User.belongsToMany(models.Meeting, {
            through: 'userMeeting'
        })
    }
}

export default User;
