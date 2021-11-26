import * as userRepository from '../repositories/userRepository.js';
import bcrypt from 'bcrypt';

const createUser = async ({name, email, password}) => {
    if(await userRepository.checkIfEmailExists(email)){
        return false;
    } 

    const passwordHash = bcrypt.hashSync(password, 10);

    userRepository.createUser({name, email, passwordHash});

    return true;
};

export {createUser};