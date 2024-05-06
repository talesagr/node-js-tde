import mongoose, {Schema,Document} from "mongoose";

export interface IUser extends Document {
    name:string;
    email:string;
    age:number;
    gender:string;
    phone:string;
    cpf:string;
    rg:string;
}

const UserSchema: Schema = new Schema({
    name: {type:String, required: true},
    email: {type:String, required: true},
    age: {type:Number, required: true},
    gender: {type:String, required: true},
    phone: {type:String, required: true},
    cpf: {type:String, required: true},
    tg: {type:String, required: true},
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;