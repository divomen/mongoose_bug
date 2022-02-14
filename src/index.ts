import {testModel} from "./schema";

async function main() {
    await testModel.findOneAndUpdate(
        {myId: 1},
        {rootField: {level1field: {level2field: {value: 1}}}},
        {upsert: true, runValidators: true}
    )
}

main().then(() => console.log('Success'), (e) => console.error(e.stack))