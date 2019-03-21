export class UserPublicInfo {
    public username: string;
    public karma: number;
// tslint:disable-next-line: variable-name
    public cake_day: string;
    public about: string;
// tslint:disable-next-line: variable-name
    public profile_pic: string;
    constructor(username: string, karma: number,cake_day: string,about: string,profile_pic: string) {
        this.username = username;
        this.karma = karma;
        this.cake_day=cake_day;
        this.about=about;
        this.profile_pic=profile_pic;
    }
}
