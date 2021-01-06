import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import { config } from '../config' ;

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
        .then(res => {
            if (res === 0) {
                console.log('Data seeding in progress');
                const rawPassword = config.password;
                const saltRounds = 10;
                const salt = bcrypt.genSaltSync(saltRounds);
                const hashedPassword = bcrypt.hashSync(rawPassword, salt);
                userRepository.createUser({
                    name: 'head-trainer',
                    email: 'headtrainer@successive.tech',
                    role: 'head-trainer',
                    password: hashedPassword
                },"rishabh");
                // userRepository.create({
                //     id: 11,
                //     name: 'trainer',
                //     email: 'trainer@successivetech',
                //     role: 'trainer',
                //     password: 'training@123'
                    
                // });
            }
        })
        .catch(err => console.log(err));
};