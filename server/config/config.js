const config = {
    production:{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default:{
        SECRET: 'SUPERSECRETPASSWORD123',
        DATABASE: 'mongodb://root:abegunde24@127.0.0.1:27017/impdet?authSource=admin'
    }
}

exports.get = function get(env){
    return config[env] || config.default
} 
