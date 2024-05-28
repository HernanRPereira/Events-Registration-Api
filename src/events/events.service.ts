// src/events/events.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventDocument } from './schemas/event.schema';
import { CreateEventDto, UpdateEventDto } from './dto/index';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name) private eventModel: Model<EventDocument>,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    const createdEvent = new this.eventModel(createEventDto);
    return createdEvent.save();
  }

  async findAll(): Promise<Event[]> {
    return this.eventModel.find().exec();
  }

  async findOne(id: string): Promise<Event> {
    return this.eventModel.findById(id).exec();
  }

  async update(id: string, updateEventDto: UpdateEventDto): Promise<Event> {
    return this.eventModel
      .findByIdAndUpdate(id, updateEventDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Event> {
    return this.eventModel.findByIdAndDelete(id).exec();
  }
}
