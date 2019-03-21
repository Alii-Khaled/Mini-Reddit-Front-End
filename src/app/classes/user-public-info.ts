export class UserPublicInfo {
    public username: string;
    public karma: number;
    public cake_day: string;
    public about: string;
    public photo_path: string;
    public cover_path: string;
    constructor(username: string, karma: number,cake_day: string,about: string,photo_path: string,cover_path: string) {
        this.username = username;
        this.karma = karma;
        this.cake_day = cake_day;
        this.about = about;
        this.photo_path = photo_path;
        this.cover_path = cover_path;
    }
}
