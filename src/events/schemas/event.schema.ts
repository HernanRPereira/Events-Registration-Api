// src/events/schemas/event.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type EventDocument = Event & Document;

@Schema()
export class Event {
  @Prop({ type: String, default: uuidv4 })
  id: string;

  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  fecha: Date;

  @Prop({ required: true })
  ubicacion: string;

  @Prop({ required: true })
  capacidad: number;
}

export const EventSchema = SchemaFactory.createForClass(Event);
