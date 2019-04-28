/**
 * this class to store Communities moderators
 */
export class communityModerators {
    /**
     * name of this moderator
     */
    public moderators_name: string;

    /**
     * constructor takes every value of the class and assign it to this community
     */
    constructor(name: string) {
        this.moderators_name = name;
        

    }
}