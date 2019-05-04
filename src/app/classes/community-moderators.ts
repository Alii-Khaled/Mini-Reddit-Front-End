/**
 * this class to store Communities moderators
 */
export class communityModerators {
    /**
     * name of this moderator
     */
    public moderator_username: string;
    public moderator_photo: string;
    /**
     * constructor takes every value of the class and assign it to this community
     */
    constructor(name: string, pic: string) {
        this.moderator_username = name;
        this.moderator_photo = pic;

    }
}