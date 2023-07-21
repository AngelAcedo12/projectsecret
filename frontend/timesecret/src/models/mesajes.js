
import mongoose from 'mongoose';

const mensajesSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            unique: true,
        },
        username: {
            type: String,
            require: true,
        },
        Text: {
            type: String,
        },
        isPublic: {
            type: String,
            require: ["public", "friends", "anonimo"],
        },
        likes: {
            type: Number,
            default: 0,
        },
        temas: [
            {
                tema: {
                    type: String,

                }
            }

        ],
        respuestas:[

            {
                id: {
                    type: Number,
                  
                },
                username: {
                    type: String,
                    require: true,
                },
                Text: {
                    type: String,
                },
                isPublic: {
                    type: String,
                    require: ["public", "friends", "anonimo"],
                },
                likes: {
                    type: Number,
                    default: 0,
                },
            }
        ]
    },
    {

        versionKey: false,
        Timestamp: true
    }

)
export default mongoose.models.mensaje || mongoose.model('mensaje', mensajesSchema);