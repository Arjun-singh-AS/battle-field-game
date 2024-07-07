import mongoose from "mongoose";

const serverInfoSchema = mongoose.Schema({
    settings: {
        region: { type: String, default: 'EUROPE - DE' },
        punkbuster: { type: String, default: 'on' },
        fairfight: { type: String, default: 'on' },
        password: { type: String, default: 'off' },
        present: { type: String, default: 'normal' }
    },
    advanced: {
        minimap: { type: String, default: 'on' },
        'only squad leader spawn': { type: String, default: 'on' },
        vehicles: { type: String, default: 'on' },
        'team balance': { type: String, default: 'on' },
        'minimap spotting': { type: String, default: 'on' },
        hud: { type: String, default: 'on' },
        '3p vehicle cam': { type: String, default: 'on' },
        'regenerative health': { type: String, default: 'on' },
        'kill cam': { type: String, default: 'on' },
        'friendly fire': { type: String, default: 'on' },
        '3d spotting': { type: String, default: 'on' },
        'enemy name tags': { type: String, default: 'on' }
    },
    rules: {
        tickets: { type: Number, default: 400 },
        'vehicle spawn delay': { type: Number, default: 25 },
        'bullet damage': { type: Number, default: 100 },
        'kick after team kills': { type: Number, default: 5 },
        'player health': { type: Number, default: 100 },
        'player respawn time': { type: Number, default: 100 },
        'kick after idle': { type: Number, default: 300 },
        'ban after kicks': { type: Number, default: 3 }
    }
});

const serverInfo = mongoose.model('serverInfo', serverInfoSchema);

export default serverInfo;