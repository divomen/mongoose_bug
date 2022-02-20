'use strict';
import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        myId: Number,
        rootField: {
            required: false,
            _id: false,
            type: {
                level1field: {
                    _id: false,
                    required: false,
                    type: {
                        level2field: {
                            _id: false,
                            required: true,
                            type: {
                                value: {
                                    type: Number,
                                    required: true
                                }
                            }
                        }
                    }
                }
            },
        }
    },
    {
        collection: 'test',
        strict: true,
        timestamps: true
    }
);

class Test {
}

schema.loadClass(Test);

export const testModel = mongoose.model('Test', schema);
