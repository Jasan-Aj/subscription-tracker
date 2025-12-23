import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minLength: 2,
        maxLengh: 100,
        trim: true
    },
    price:{
        type: Number,
        required: [true, "subscription price is required"],
        min: [0,' price must be greater than 0']
    },
    currency:{
        type: String,
        enum: ['USD','EUR','GBP'],
        default: 'USD'
    },
    frequency:{
        type: String,
        enum: ['Daily','Weekly' ,'Monthly', 'Yearly'],
    },
    category:{
        type: String,
        enum: ['Sports','News','Entertainment','Lifestyle','Technology','Finance','Politics','Other'],
        required: [true, "Must select a category"]
    },
    paymentMethod:{
        type: String,
        required: true,
        trim: true 
    },
    status:{
        type: String,
        enum: ['active', 'cancelled', 'expired'],
        default: 'active'
    },
    startDate:{
        type: Date,
        required: true,
        validate: {
            validator: (value)=> value <= new Date(),
            message: "start date must be past"
        }
    },
    renewalDate: {
        type: Date,
        validate: {
            validator: function(value){
                return value > this.startDate;
            },
            message: "Renewal date must be after start date"
        }
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    }
},{timestamps: true});

subscriptionSchema.pre('save',(next)=>{
    if(!this.renewalDate){
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        }

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate().getDate() + renewalPeriods[this.frequency])
    }

    if(this.renewalDate < new Date()){
        this.status = 'expired'
    }

    next();
});

const Subscription = mongoose.model('Subscription',subscriptionSchema);
export default Subscription;