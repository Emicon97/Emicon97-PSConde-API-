import { prop, getModelForClass, modelOptions, Passthrough } from '@typegoose/typegoose';
import { Type, Types } from '@/enums/userTypes.enum';
import { Purchase } from './purchases.model';
import { Cart } from './../interfaces/cart.interface';

@modelOptions({ schemaOptions: { collection: 'users' } })
class User {
  @prop({ type: String, required: true, unique: true })
  public email: string;

  @prop({ type: String })
  public name: string;

  @prop({ type: String, required: true })
  public password: string;

  @prop({ type: Number, default: 1 })
  public listaP: number;

  @prop({ type: String, enum: Type, default: 'CLIENTE' })
  public type: Types;

  @prop({ type: () => new Passthrough({ title: String, quantity: Number, unit_price: Number }, true) })
  public cart: Cart[];

  @prop({ ref: () => Purchase })
  public history: Purchase[];

  @prop({ type: String })
  public address: string[];

  @prop({ type: String })
  public availability: string[];

  @prop({ type: String })
  public phone: string[];

  @prop({ type: Number })
  public cuit: number;
}

const UserModel = getModelForClass(User);

export default UserModel;
