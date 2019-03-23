/**
 * this class to store user public info
 */
export class UserPublicInfo {
    /**
     * username of this user
     */
    public username: string;
    /**
     * karma of this user
     */
    public karma: number;
    /**
     * birth day of this user
     */
// tslint:disable-next-line: variable-name
    public cake_day: string;
    /**
     * about for this user
     */
    public about: string;
    /**
     * profile pic URL of this user
     */
// tslint:disable-next-line: variable-name
    public photo_path: string;
    /**
     * banner pic URL of this user
     */
    public cover_path: string;
    /**
     * user display name
     */
    public name:string;
    /**
     * constructor takes every value of the class and assign it to this user
     */
    constructor(username: string, karma: number,cake_day: string,about: string,photo_path: string,cover_path: string, name: string) {
        this.username = username;
        this.karma = karma;
        this.cake_day = cake_day;
        this.about = about;
        this.photo_path = photo_path;
        this.cover_path = cover_path;
        this.name = name;
    }
}
