import {getModelForClass, modelOptions, prop} from "@typegoose/typegoose";

class Level2Type {
    @prop({ required: true })
    public value!: number;
}

export class Level1Type {
    @prop({ required: true, _id: false })
    public level2field!: Level2Type;
}

export class RootFieldType {
    @prop({ _id: false })
    public level1field?: Level1Type;
}

@modelOptions({
    schemaOptions: { collection: 'test' }
})
export class TestDoc {
    @prop({required:true})
    public myId!: number;

    @prop({ _id: false })
    public rootField?: RootFieldType;
}

export const testModel = getModelForClass(TestDoc);
