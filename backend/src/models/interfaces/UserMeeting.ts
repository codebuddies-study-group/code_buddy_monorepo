import { Model } from "sequelize";

interface ProjectAssignmentAttributes {
    user_id: number;
    meeting_id: number;
}

class UserMeeting extends Model<ProjectAssignmentAttributes>
    implements ProjectAssignmentAttributes {
    user_id!: number;
    meeting_id!: number;

    static associate(models: any) {

    }
}

export default UserMeeting