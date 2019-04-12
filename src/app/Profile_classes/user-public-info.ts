/**
 * This class to store user public info
 */
export class UserPublicInfo {
    /**
     * Username of this user
     */
    public username: string;
    /**
     * Karma of this user
     */
    public karma: number;
    /**
     * Birth day of this user
     */
// tslint:disable-next-line: variable-name
    public cake_day: string;
    /**
     * About for this user
     */
    public about: string;
    /**
     * Profile pic URL of this user
     */
// tslint:disable-next-line: variable-name
    public photo_path: string;
    /**
     * Banner pic URL of this user
     */
    public cover_path: string;
    /**
     * User display name
     */
    public name:string;
    /**
     * Constructor takes every value of the class and assign it to this user
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
