const { Mongoose } = require("mongoose");

module.exports = (Mongoose) => {
    const schema = Mongoose.Schema(
        {
            firstname: String,
            lastname: String,
            phone: String,
            active: Boolean,
            time: Number
        },
        { timestamps: true}
    )

    //change _id to be id on JSON
    schema.method("toJSON", function() {
        const {__v,_id, ...object} = this.toObject()
        object.id = _id

        return object
    })

    const Users = Mongoose.model("users", schema)
    return Users
}