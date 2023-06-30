import { Availability } from '@/interfaces/availability.interface';
import { prop, getModelForClass, modelOptions, Ref, Passthrough } from '@typegoose/typegoose';
import { Articulo } from './articulos.model';

@modelOptions({ schemaOptions: { collection: 'purchases' } })
export class Purchase {
  @prop({ required: true, ref: () => Articulo })
  public products: Ref<Articulo>[];

  @prop({ type: () => new Passthrough({ day: String, de: String, hasta: String }, true), required: true })
  public availability: Availability;

  @prop({ type: Number, required: true })
  public cuit: number;

  @prop({ type: String, required: true })
  public address: string;
}

const PurchaseModel = getModelForClass(Purchase);

export default PurchaseModel;
