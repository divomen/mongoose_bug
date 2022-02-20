'use strict';

import {testModel} from "./schema_js.js";
// import mongoose from "mongoose";

async function main() {
    // await mongoose.connect('mongodb://localhost:27017/test', {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // });
    try {
        // await testModel.deleteMany({})
        await testModel.findOneAndUpdate(
            {myId: 1},
            {rootField: {level1field: {level2field: {value: 1}}}},
            {upsert: true, runValidators: true}
        )
    } finally {
        // await mongoose.disconnect()
    }
}

main().then(() => console.log('Success'), (e) => console.error(e.stack))