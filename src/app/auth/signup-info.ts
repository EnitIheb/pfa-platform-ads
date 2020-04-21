export class SignUpInfo {
    name: string;
    username: string;
    email: string;
    role: string[]=[];
    password: string;

    constructor(name: string, username: string, email: string, password: string, newRoles: string[] = ['user']) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        if (newRoles[0] === 'user') {
            this.role = newRoles;
        } else {
            this.role = newRoles;
            this.role.push('user');
        }
    }
}
